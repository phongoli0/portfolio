export const site = {
  name: 'Phong Truong',
  role: 'Solutions Architect',
  title: 'Phong Truong — MarTech Solutions Architect',
  description:
    'MarTech solutions architect working at the intersection of enterprise strategy and technical execution: CRM ecosystems, API-first integrations, data platforms and generative AI.',
  url: 'https://phongtruong.com',
  resume: '/Phong-Truong-Resume.pdf',
};

export const nav = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export const hero = {
  firstName: 'Phong',
  lastName: 'Truong',
  roles: ['MarTech Solutions Architect', 'CRM Engineer', 'Full Stack Developer'],
  actions: [
    { label: 'View work', href: '#work', variant: 'primary' as const },
    { label: 'Download Résumé', href: '/Phong-Truong-Resume.pdf', variant: 'secondary' as const, external: true },
  ],
  social: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ptruong6/', icon: 'linkedin' as const },
    { label: 'GitHub', href: 'https://www.github.com/phongoli0/', icon: 'github' as const },
  ],
};

export const about = {
  title: 'About Me',
  lead: 'Phong Truong, Solutions Architect',
  paragraphs: [
    'I design and build the systems that carry a brand’s relationship with its customers — CRM engineering, frontend development and data architecture across Braze, Salesforce Marketing Cloud, Segment and Snowflake. The work I care about is translating a tangle of technical requirements into something with a number attached to it.',
    'I’m at Etsy now as a Retention and Engagement Marketing Developer, architecting multi-touch lifecycle journeys and experimentation frameworks in Braze Canvas, engineering dynamic multi-channel templates in HTML, CSS and Liquid, and keeping the pipelines between Braze, our warehouses and internal services honest.',
    'Before that, two years as a Solutions Architect at AbbVie. The work cut the CRM team’s weekly manual workload by 20%, lifted loyalty redemption above 30% through Braze Connected Content and REST APIs, and pioneered in-app push messaging for a 10% gain in offer redemption while taking pressure off email and SMS. Earlier, at November Charles, I ran email at scale: 25 million sends at 98% deliverability.',
    'I started with a psychology degree and a curiosity about why people do what they do, then moved into engineering. That background still shapes how I work — I’m most useful where business strategy and code meet, whether that’s a data model for an eight-million-profile customer base, leading a Marketo-to-Braze migration, or a Python RAG pipeline with guardrails. I hold both Braze certifications, Digital Strategist and Marketer.',
  ],
  actions: [
    { label: 'Download Résumé', href: '/Phong-Truong-Resume.pdf', variant: 'primary' as const, external: true },
    { label: 'Send message', href: '#contact', variant: 'secondary' as const, external: false },
  ],
};

export const skills = {
  eyebrow: 'Capabilities',
  title: 'Technical Skills',
  subtitle: 'Technologies and platforms I architect and operate in production',
  logos: [
    { name: 'Braze', file: 'braze.png' },
    { name: 'Salesforce', file: 'salesforce.png' },
    { name: 'Segment', file: 'segment.png' },
    { name: 'Snowflake', file: 'snowflake.png' },
    { name: 'HTML 5', file: 'html5.svg' },
    { name: 'CSS 3', file: 'css3.svg' },
    { name: 'JavaScript', file: 'javascript.svg' },
    { name: 'React JS', file: 'react.png' },
    { name: 'Vue.js', file: 'vue.png' },
    { name: 'Node.JS', file: 'nodejs.svg' },
    { name: 'AWS', file: 'aws.png', mono: true },
    { name: 'WordPress', file: 'wordpress.png', mono: true },
  ],
};

export type ServiceIcon = 'strategy' | 'layers' | 'code' | 'search' | 'multiuser' | 'ai';
export type Service = { icon: ServiceIcon; title: string; body: string };

export const services = {
  title: 'Services',
  subtitle: 'What I take on for clients.',
  items: [
    {
      icon: 'strategy',
      title: 'Enterprise MarTech Strategy',
      body: 'Designing end-to-end CRM ecosystem strategies, evaluating platform capabilities, and building technical roadmaps that align scalable technology with your overarching revenue goals.',
    },
    {
      icon: 'layers',
      title: 'Solutions Architecture',
      body: 'Architecting scalable, API-first integrations across complex enterprise stacks (including Braze, Salesforce Marketing Cloud, Segment, and Snowflake) to unify customer data and drive multi-channel engagement.',
    },
    {
      icon: 'code',
      title: 'Technical Implementation',
      body: 'Engineering custom full-stack solutions (Node.js, Vue.js, Python) to extend native CRM capabilities, construct robust REST API/webhook integrations, and resolve complex platform limitations.',
    },
    {
      icon: 'search',
      title: 'Data Integration & Governance',
      body: 'Building resilient data pipelines, managing identity resolution frameworks, and ensuring strict data governance across platforms to guarantee actionable, high-fidelity customer profiles.',
    },
    {
      icon: 'multiuser',
      title: 'Technical Scoping & Translation',
      body: 'Bridging the gap between business stakeholders and engineering teams by translating complex business requirements into seamless, high-performance agile delivery workflows.',
    },
    {
      icon: 'ai',
      title: 'GenAI & Agentic Systems',
      body: 'Developing custom Python-based AI workflows, Retrieval-Augmented Generation (RAG) pipelines, and LLM orchestration with HITL guardrails to automate complex marketing and operational workflows.',
    },
  ] as Service[],
};

export type ProjectLink = { label: string; href: string };
export type ProjectStat = { value: string; label: string };
export type Project = {
  title: string;
  year: string;
  body: string;
  stack: string[];
  stats: ProjectStat[];
  flowTitle: string;
  steps: string[];
  links: ProjectLink[];
};

export const projects = {
  eyebrow: 'Selected work',
  title: 'Things I build',
  subtitle: 'Client engagements, side projects, and the first thing I ever finished.',
  items: [
    {
      title: 'Marketo to Braze Migration',
      year: '2025 — 2026',
      body: 'A mid-size enterprise moving its lifecycle marketing off Marketo and onto Braze. I led the engagement as the freelance solutions architect — owning the technical plan, the data model, the migration itself, and the cutover. Over two million profiles, 25+ playbooks and 300+ emails crossed platforms. The hard part was never the API calls; it was deciding what the old platform’s accumulated behaviour was actually supposed to do, and rebuilding only that.',
      stack: ['Braze', 'Marketo', 'API Integration', 'Data Migration'],
      stats: [
        { value: '2M+', label: 'profiles migrated' },
        { value: '25+', label: 'playbooks rebuilt' },
        { value: '300+', label: 'emails migrated' },
      ],
      flowTitle: 'Engagement phases',
      steps: [
        'Current-state audit and asset inventory',
        'Data model and audience mapping',
        'Migrate 2M+ profiles, 25+ playbooks and 300+ emails',
        'Integration, QA and parallel run',
        'Cutover and stabilisation',
      ],
      links: [],
    },
    {
      title: 'MarTech Sourcing Pipeline',
      year: '2026',
      body: 'A job search treated as a data orchestration problem. Instead of scrolling job boards, a Python pipeline queries multiple APIs for roles posted in the last 72 hours — remote and Southern California — then scores each one 0–100 for relevance and drops the noise, like backend and DevOps-heavy postings that do not fit a customer-facing MarTech brief. For whatever survives, it maps my past architecture work against each company’s integration endpoints, so I walk into the conversation already knowing where I fit. Qualified roles land in a structured Notion database for daily review — around fifteen a week, which is the whole point: a short list I actually read instead of a feed I scroll past.',
      stack: ['Python', 'LLM scoring', 'REST APIs', 'Notion API'],
      stats: [
        { value: '~15', label: 'roles surfaced per week' },
        { value: '72h', label: 'freshness window' },
        { value: '0–100', label: 'relevance score' },
      ],
      flowTitle: 'How it runs',
      steps: [
        'Query job APIs for the last 72 hours',
        'Score each role 0–100 for relevance',
        'Filter out backend and DevOps-heavy postings',
        'Map past architecture work to each company’s endpoints',
        'Push qualified roles into Notion',
      ],
      links: [],
    },
    {
      title: 'Social Media Agent',
      year: '2026',
      body: 'A Discord-first agent that watches for image uploads and answers with three caption options — sentimental, witty and short — written for a Vietnamese lifestyle persona. I picked Gemini for its vision quality at the time, since reading the image well is the whole problem. Around the model sits the part that makes it usable: attachment detection, image preprocessing, graceful degradation when the model is slow, and logging that survives production traffic.',
      stack: ['Python', 'Gemini', 'Pillow', 'Discord API'],
      stats: [
        { value: '3', label: 'caption styles per image' },
        { value: '0', label: 'manual steps for the user' },
      ],
      flowTitle: 'How it runs',
      steps: [
        'Image uploaded to any channel',
        'Bot detects the attachment',
        'Download and preprocess with Pillow',
        'Gemini writes three caption styles',
        'Formatted reply in-channel',
      ],
      links: [{ label: 'GitHub', href: 'https://github.com/phongoli0/social-media-agent' }],
    },
    {
      title: 'Animus Match',
      year: '2019',
      body: 'The first application I actually finished. A memory-match game — eighteen cards, nine Assassin’s Creed portraits — and the project where “working” turned into “finished”: a fresh Fisher–Yates shuffle every round, 3D card flips done in CSS transforms, attempt and accuracy tracking, sound that stays off until you ask for it, and a prompt to rotate your phone rather than squash the grid. It runs on plain HTML, CSS and jQuery with no build step at all. I keep it here as the baseline — playable, and a fair measure of the distance between it and the migrations above.',
      stack: ['HTML', 'CSS', 'jQuery'],
      stats: [
        { value: '18', label: 'cards, nine pairs' },
        { value: '0', label: 'build steps to ship it' },
      ],
      flowTitle: 'How it plays',
      steps: [
        'Eighteen cards shuffled with Fisher–Yates',
        'Flip two and match the portraits',
        'A miss flips back after one second',
        'Accuracy updates on every attempt',
        'Nine pairs opens the win screen',
      ],
      links: [
        { label: 'Play it', href: '/animus-match/' },
        { label: 'GitHub', href: 'https://github.com/phongoli0/animus-match' },
      ],
    },
  ] as Project[],
};

export type Role = { period: string; title: string; company: string; body: string; tags: string[] };

export const experience = {
  eyebrow: 'Track record',
  title: 'Professional Experience',
  subtitle: 'Key milestones in my MarTech career journey',
  roles: [
    {
      period: '2026 — Present',
      title: 'Retention and Engagement Marketing Developer',
      company: 'Etsy · Brooklyn, NY (Remote)',
      body: 'Lifecycle engineering and multi-channel campaign automation across email, push and SMS within the REM Operations & Insights team. Architecting multi-touch customer journeys and experimentation frameworks in Braze Canvas, engineering modular responsive templates with advanced Liquid scripting, and connecting the pipelines between Braze, our data warehouses and internal services so customer events land reliably and attribute correctly.',
      tags: ['Braze Canvas', 'Liquid', 'HTML/CSS', 'Postman', 'Litmus'],
    },
    {
      period: '2025 — 2026',
      title: 'Solutions Architect, MarTech',
      company: 'Independent · Orange County, CA (Remote)',
      body: 'End-to-end MarTech architecture and technical consulting for mid-to-enterprise clients: CRM orchestration, cross-platform migrations, and lifecycle automation. Led a Marketo-to-Braze migration for a mid-size enterprise as the engagement’s solutions architect. Architected data pipelines connecting customer data platforms and warehouses to downstream messaging channels, cutting synchronization latency and removing manual operational overhead.',
      tags: ['MarTech Architecture', 'CRM Orchestration', 'Marketo → Braze', 'Data Pipelines'],
    },
    {
      period: '2023 — 2025',
      title: 'Solutions Architect',
      company: 'AbbVie (Allergan Aesthetics) · Irvine, CA',
      body: 'Led end-to-end solutions architecture for CRM, data and loyalty platforms. Automated dynamic multi-channel campaigns that cut the CRM team’s weekly manual workload by 20%, and architected customer data strategy for a database of over 8 million personas using SQL, Segment and Snowflake. Reworked loyalty redemption with Braze Connected Content and REST APIs for a 30%+ lift, and pioneered in-app push messaging for a 10% gain in offer redemption.',
      tags: ['Braze', 'Segment', 'Snowflake', 'Connected Content', 'Loyalty'],
    },
    {
      period: '2019 — 2023',
      title: 'Software Engineer',
      company: 'November Charles Consulting · Costa Mesa, CA',
      body: 'Built custom web and marketing automation solutions for a client roster that included a major mobile phone manufacturer. Extended a custom NPS survey in Vue.js and Salesforce Microsites, standardized responsive email templates for SFMC and Braze using Litmus and Figma, and ran large-scale sends: over 25 million emails at a 98% deliverability rate, plus the SMS rollouts that followed.',
      tags: ['Vue.js', 'SFMC', 'Braze', 'Litmus', 'WordPress'],
    },
    {
      period: '2019',
      title: 'Web Developer',
      company: 'Parapxl Corp · Irvine, CA',
      body: 'Full-stack development on a business-grade application: React.js on the frontend, Node.js on the backend, letting users search for residential locations near Whole Foods stores. Worked alongside the other developers on planning, UI/UX recommendations and troubleshooting.',
      tags: ['React.js', 'Node.js', 'JavaScript'],
    },
  ] as Role[],
};

export const contact = {
  title: 'Contact Me',
  subtitle: 'Get in touch with me',
  details: [
    { label: 'Location', value: 'Orange County, CA', href: null },
    { label: 'Email', value: 'ptruong6@outlook.com', href: 'mailto:ptruong6@outlook.com' },
  ],
  form: {
    name: 'contact-form',
    fields: [
      { name: 'name', id: 'name', label: 'Your Name', type: 'text', autocomplete: 'name', half: true },
      { name: 'email', id: 'email', label: 'Your Email', type: 'email', autocomplete: 'email', half: true },
      { name: 'subject', id: 'subject', label: 'Subject', type: 'text', autocomplete: 'off', half: false },
      { name: 'message', id: 'message', label: 'Message', type: 'textarea', autocomplete: 'off', half: false },
    ],
  },
};
