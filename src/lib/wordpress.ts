/**
 * PatrolPilot WordPress REST API Client
 * 
 * WordPress acts as a headless CMS — all content is managed in WP admin
 * and fetched at build time (or runtime) via the REST API.
 *
 * Setup in wp-config.php:
 *   define('PATROLPILOT_FRONTEND_URL', 'https://patrolpilot.com');
 *   define('JWT_AUTH_SECRET_KEY', 'your-secret-key');
 *
 * Required WordPress plugins:
 *   - Advanced Custom Fields (ACF) or ACF Pro — for custom page fields
 *   - WPGraphQL (optional) — for GraphQL support
 *   - JWT Authentication for WP REST API — for protected routes
 *   - Yoast SEO — for SEO meta fields via REST API
 *   - WP REST API Cache — for improved performance
 */

const WP_BASE_URL = import.meta.env.WP_API_URL || 'https://cms.patrolpilot.com';
const WP_API      = `${WP_BASE_URL}/wp-json/wp/v2`;
const ACF_API     = `${WP_BASE_URL}/wp-json/acf/v3`;

// ─── Types ────────────────────────────────────────────────────────────────────

export interface WPPost {
  id: number;
  slug: string;
  date: string;
  modified: string;
  title: { rendered: string };
  content: { rendered: string };
  excerpt: { rendered: string };
  featured_media: number;
  categories: number[];
  tags: number[];
  yoast_head_json?: YoastSEO;
  acf?: Record<string, unknown>;
  _embedded?: {
    'wp:featuredmedia'?: Array<{ source_url: string; alt_text: string; media_details?: { sizes?: Record<string, { source_url: string }> } }>;
    'wp:term'?: Array<Array<WPTerm>>;
  };
}

export interface WPPage {
  id: number;
  slug: string;
  title: { rendered: string };
  content: { rendered: string };
  acf?: Record<string, unknown>;
  yoast_head_json?: YoastSEO;
}

export interface WPTerm {
  id: number;
  name: string;
  slug: string;
  count: number;
}

export interface WPMedia {
  id: number;
  source_url: string;
  alt_text: string;
  media_details: {
    width: number;
    height: number;
    sizes: Record<string, { source_url: string; width: number; height: number }>;
  };
}

export interface YoastSEO {
  title: string;
  description: string;
  og_title: string;
  og_description: string;
  og_image?: Array<{ url: string; width: number; height: number }>;
  canonical: string;
  robots: { index: string; follow: string };
}

export interface WPMenuItem {
  ID: number;
  title: string;
  url: string;
  slug: string;
  children?: WPMenuItem[];
}

// ─── Fetch helpers ────────────────────────────────────────────────────────────

async function wpFetch<T>(endpoint: string, params?: Record<string, string | number>): Promise<T> {
  const url = new URL(endpoint.startsWith('http') ? endpoint : `${WP_API}${endpoint}`);
  
  if (params) {
    Object.entries(params).forEach(([k, v]) => url.searchParams.set(k, String(v)));
  }

  // Default params for all requests
  url.searchParams.set('_embed', '1');

  const res = await fetch(url.toString(), {
    headers: {
      'Accept': 'application/json',
      // Add auth header for protected endpoints
      // 'Authorization': `Bearer ${import.meta.env.WP_JWT_TOKEN}`,
    },
    // ISR: revalidate every hour in production
    // @ts-ignore - Astro-specific fetch option
    ...(import.meta.env.PROD ? { next: { revalidate: 3600 } } : {}),
  });

  if (!res.ok) {
    throw new Error(`WP API error ${res.status} for ${url.toString()}`);
  }

  return res.json() as Promise<T>;
}

// ─── Posts ─────────────────────────────────────────────────────────────────────

export async function getAllPosts(options: {
  perPage?: number;
  page?: number;
  category?: number;
  tag?: number;
  search?: string;
  orderby?: 'date' | 'modified' | 'title' | 'menu_order';
} = {}): Promise<{ posts: WPPost[]; total: number; pages: number }> {
  const params: Record<string, string | number> = {
    per_page: options.perPage || 12,
    page: options.page || 1,
    orderby: options.orderby || 'date',
    order: 'desc',
    status: 'publish',
  };
  
  if (options.category) params.categories = options.category;
  if (options.tag) params.tags = options.tag;
  if (options.search) params.search = options.search;

  const res = await fetch(
    `${WP_API}/posts?${new URLSearchParams(params as Record<string, string>).toString()}&_embed=1`,
  );

  if (!res.ok) throw new Error(`Failed to fetch posts: ${res.status}`);

  const posts = await res.json() as WPPost[];
  const total = parseInt(res.headers.get('X-WP-Total') || '0');
  const pages = parseInt(res.headers.get('X-WP-TotalPages') || '1');

  return { posts, total, pages };
}

export async function getPostBySlug(slug: string): Promise<WPPost | null> {
  const posts = await wpFetch<WPPost[]>('/posts', { slug, status: 'publish' });
  return posts[0] || null;
}

export async function getLatestPosts(count = 6): Promise<WPPost[]> {
  const { posts } = await getAllPosts({ perPage: count });
  return posts;
}

export async function getRelatedPosts(postId: number, categoryIds: number[], count = 3): Promise<WPPost[]> {
  if (!categoryIds.length) return [];
  const { posts } = await getAllPosts({ perPage: count, category: categoryIds[0] });
  return posts.filter(p => p.id !== postId).slice(0, count);
}

// ─── Pages ─────────────────────────────────────────────────────────────────────

export async function getPageBySlug(slug: string): Promise<WPPage | null> {
  const pages = await wpFetch<WPPage[]>('/pages', { slug, status: 'publish' });
  return pages[0] || null;
}

// ─── Categories ───────────────────────────────────────────────────────────────

export async function getAllCategories(): Promise<WPTerm[]> {
  return wpFetch<WPTerm[]>('/categories', { per_page: 100, hide_empty: 1 });
}

export async function getCategoryBySlug(slug: string): Promise<WPTerm | null> {
  const cats = await wpFetch<WPTerm[]>('/categories', { slug });
  return cats[0] || null;
}

// ─── Media ────────────────────────────────────────────────────────────────────

export async function getMediaById(id: number): Promise<WPMedia | null> {
  if (!id) return null;
  try {
    return await wpFetch<WPMedia>(`/media/${id}`);
  } catch {
    return null;
  }
}

export function getImageUrl(
  post: WPPost,
  size: 'thumbnail' | 'medium' | 'large' | 'full' = 'large',
): string | null {
  const media = post._embedded?.['wp:featuredmedia']?.[0];
  if (!media) return null;
  return media.media_details?.sizes?.[size]?.source_url || media.source_url;
}

// ─── ACF Custom Fields ────────────────────────────────────────────────────────

export async function getACFOptions(): Promise<Record<string, unknown>> {
  try {
    const res = await fetch(`${ACF_API}/options/options`);
    if (!res.ok) return {};
    const data = await res.json() as { acf: Record<string, unknown> };
    return data.acf || {};
  } catch {
    return {};
  }
}

// ─── Navigation ───────────────────────────────────────────────────────────────

export async function getMenuByLocation(location: string): Promise<WPMenuItem[]> {
  try {
    const res = await fetch(`${WP_BASE_URL}/wp-json/menus/v1/locations/${location}`);
    if (!res.ok) return [];
    const data = await res.json() as { items: WPMenuItem[] };
    return data.items || [];
  } catch {
    return defaultMenu;
  }
}

const defaultMenu: WPMenuItem[] = [
  { ID: 1, title: 'How It Works', url: '/how-it-works', slug: 'how-it-works' },
  { ID: 2, title: 'Features', url: '/features', slug: 'features' },
  { ID: 3, title: 'Pricing', url: '/pricing', slug: 'pricing' },
  { ID: 4, title: 'About', url: '/about', slug: 'about' },
  { ID: 5, title: 'Blog', url: '/blog', slug: 'blog' },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

export function formatDate(dateString: string, locale = 'en-US'): string {
  return new Date(dateString).toLocaleDateString(locale, {
    year: 'numeric', month: 'long', day: 'numeric',
  });
}

export function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, '').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').trim();
}

export function truncate(str: string, len = 150): string {
  return str.length > len ? str.slice(0, len).trimEnd() + '…' : str;
}

export function readingTime(content: string): number {
  const words = stripHtml(content).split(/\s+/).length;
  return Math.ceil(words / 200);
}

export function slugToPath(slug: string): string {
  return `/${slug}`;
}
