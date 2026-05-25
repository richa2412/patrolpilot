// PatrolPilot site-wide configuration

export const SITE = {
  name: 'PatrolPilot',
  tagline: 'Security Guard Management Software',
  description: 'Purpose-built security guard management software for security companies in the USA, Canada, UK, UAE and Singapore. GPS tracking, NFC checkpoints, scheduling and compliance in one platform.',
  url: 'https://patrolpilot.com',
  logo: '/logo.png',
  regions: ['USA', 'Canada', 'UK', 'UAE', 'Singapore'],
  country_flags: [
    { code: 'us', label: 'United States', flag: '🇺🇸' },
    { code: 'ca', label: 'Canada', flag: '🇨🇦' },
    { code: 'gb', label: 'United Kingdom', flag: '🇬🇧' },
    { code: 'ae', label: 'UAE', flag: '🇦🇪' },
    { code: 'sg', label: 'Singapore', flag: '🇸🇬' },
  ],
  app_url: 'https://app.patrolpilot.com',
  support_email: 'hello@patrolpilot.com',
  legal_email: 'legal@patrolpilot.com',
  phone: {
    us: '+1 888 000 0000',
    uk: '+44 20 0000 0000',
  },
  social: {
    linkedin: 'https://linkedin.com/company/patrolpilot',
    facebook: 'https://facebook.com/patrolpilot',
    twitter: 'https://twitter.com/patrolpilot',
  },
} as const;

export const PRICING = {
  currency: 'USD',
  symbol: '$',
  starting_price: 3500,
  period: 'per annum',
  description: 'Licence tiers start at $3,500 per annum, and are based on the number of guards you schedule each month.',
  tiers: [
    { label: 'Starter', guards: 25, price: 3500, monthly: 292, popular: false },
    { label: 'Growth', guards: 75, price: 7500, monthly: 625, popular: true },
    { label: 'Scale', guards: 200, price: 16500, monthly: 1375, popular: false },
    { label: 'Enterprise', guards: null, price: null, monthly: null, popular: false },
  ],
} as const;

export const NAV_LINKS = [
  { href: '/how-it-works', label: 'How It Works' },
  { href: '/features', label: 'Features' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
] as const;

export const FEATURES = [
  { id: 'gps', icon: 'map-pin', title: 'Live GPS Guard Tracking', desc: 'Real-time location of every guard on every shift. Alerts for missed check-ins and SOS events.' },
  { id: 'nfc', icon: 'shield-check', title: 'NFC Checkpoint Tours', desc: 'Tamper-proof patrol verification with timestamped checkpoint scans.' },
  { id: 'scheduling', icon: 'calendar', title: 'Smart Scheduling', desc: 'Drag-and-drop roster builder with licence compliance checks built in.' },
  { id: 'incidents', icon: 'file-text', title: 'Incident Reports', desc: 'Photo-enabled digital reports submitted instantly from guards\' phones.' },
  { id: 'sos', icon: 'phone-call', title: 'SOS & Lone Worker', desc: 'One-tap SOS alerts supervisors with the guard\'s exact GPS location.' },
  { id: 'compliance', icon: 'check-circle', title: 'Licence Compliance', desc: 'Automated expiry tracking blocks non-compliant guards from scheduling.' },
  { id: 'payroll', icon: 'dollar-sign', title: 'Payroll Integration', desc: 'Auto-timesheets exported to ADP, QuickBooks, Xero, Sage and more.' },
  { id: 'analytics', icon: 'bar-chart', title: 'Analytics & Reporting', desc: 'Real-time KPI dashboards and client-ready patrol reports.' },
  { id: 'app', icon: 'smartphone', title: 'Guard Mobile App', desc: 'iOS and Android app with full offline mode for guards in the field.' },
] as const;

export const STATS = [
  { value: '500', suffix: '+', label: 'Security Companies' },
  { value: '12', suffix: 'K+', label: 'Guards Managed Daily' },
  { value: '2.4', suffix: 'M+', label: 'Patrols Completed' },
  { value: '99', suffix: '%', label: 'Uptime SLA' },
] as const;

export const COMPLIANCE_BADGES = [
  'SOC 2 Type II',
  'ISO 27001',
  'GDPR',
  'CCPA',
  'PDPA',
  'UAE PDPL',
] as const;

export const SECURITY_TICKER_ITEMS = [
  { label: 'Guard Tracking', icon: 'shield' },
  { label: '24/7 Monitoring', icon: 'clock' },
  { label: 'NFC Checkpoints', icon: 'map-pin' },
  { label: 'Guard Scheduling', icon: 'calendar' },
  { label: 'SOS Alert System', icon: 'phone-call' },
  { label: 'Incident Reports', icon: 'file-text' },
  { label: 'Mobile Patrol App', icon: 'smartphone' },
  { label: 'Licence Compliance', icon: 'check-circle' },
  { label: 'Live GPS Dispatch', icon: 'navigation' },
  { label: 'Workforce Analytics', icon: 'bar-chart-2' },
  { label: 'Guard Mobile App', icon: 'smartphone' },
  { label: 'Payroll Integration', icon: 'dollar-sign' },
] as const;
