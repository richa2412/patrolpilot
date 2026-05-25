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
  { id: 'TRACKING', icon: 'map-pin', title: 'GPS Guard Tracking', desc: 'Real-time location of every guard on an interactive map. Instant alerts for missed check-ins, SOS events, and geofence breaches. Full shift history and route replay.' },
  { id: 'CHECKPOINTS', icon: 'shield-check', title: 'NFC Checkpoint Tours', desc: 'Guards tap NFC tags at defined checkpoints to verify presence. Generates timestamped patrol reports automatically. Tamper-proof proof-of-attendance for clients.' },
  { id: 'SCHEDULING', icon: 'calendar', title: 'Smart Scheduling', desc: 'Drag-and-drop roster builder with intelligent conflict detection. Automatic licence compliance checks — never schedule an expired guard.' },
  { id: 'INCIDENTS', icon: 'file-text', title: 'Digital Incident Reports', desc: 'Structured, photo-enabled incident reports submitted from guards phones. Automatic client notifications and escalation workflows.' },
  { id: 'COMPLIANCE', icon: 'phone-call', title: 'SOS & Lone Worker Alerts', desc: 'One-tap SOS button alerts supervisors instantly with the guards exact location. Periodic welfare checks for lone workers working in high-risk environments.' },
  { id: 'REPORTING', icon: 'check-circle', title: 'Licence & Cert Tracking', desc: 'Track security licence expiry, first aid certificates and working rights. Automatic reminders before expiry. Non-compliant guards blocked from scheduling.' },
  { id: 'PAYROLL', icon: 'dollar-sign', title: 'Timesheet & Payroll', desc: 'Automatic timesheets from clock-in/clock-out data. Exports to ADP, QuickBooks, Xero, Sage and local payroll systems. Eliminates manual time entry and payroll errors.' },
  { id: 'REPORTING', icon: 'bar-chart', title: 'Analytics & Reporting', desc: 'Real-time KPI dashboards, client patrol reports, guard performance metrics and compliance summaries. White-label client portal included.' },
  { id: 'MOBILE', icon: 'smartphone', title: 'Guard Mobile App', desc: 'iOS and Android app for guards. Shift notifications, clock-in, patrol routes, incident forms and SOS — all in one purpose-built guard app.' },
] as const;

export const STATS = [
  { value: '500', suffix: '+', label: 'Security Companies' },
  { value: '12', suffix: 'K+', label: 'Guards Managed Daily' },
  { value: '2.4', suffix: 'M+', label: 'Patrols Completed' },
  { value: '99', suffix: '%', label: 'Platform Uptime SLA' },
] as const;

export const STATS_items = [
  { value: '500', suffix: '+', label: 'Companies' },
  { value: '12', suffix: 'K+', label: 'Guards Managed' },
  // { value: '2.4', suffix: 'M+', label: 'Patrols Completed' },
  { value: '99', suffix: '%', label: 'Uptime SLA' },
] as const;

export const COMPLIANCE_BADGES = [
  'AES-256 Encrypted',
  'Regionally Hosted',
  'ISO 27001',
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
