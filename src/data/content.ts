export const site = {
  name: 'Phong Truong',
  title: 'Phong Truong — MarTech Solutions Architect',
  description:
    'MarTech solutions architect working at the intersection of enterprise strategy and technical execution: CRM ecosystems, API-first integrations, data platforms and generative AI.',
  url: 'https://phongtruong.com',
  resume: '/Phong-Truong-Resume.pdf',
};

export const nav = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Services', href: '#services' },
  { label: 'Experience', href: '#experience' },
  { label: 'Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
];

export const hero = {
  firstName: 'Phong',
  lastName: 'Truong',
  roles: ['MarTech Solutions Architect', 'CRM Engineer', 'Full Stack Developer'],
  social: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ptruong6/', icon: 'linkedin' as const },
    { label: 'GitHub', href: 'https://www.github.com/phongoli0/', icon: 'github' as const },
  ],
};

export const about = {
  eyebrow: 'About',
  title: 'About Me',
  lead: 'Phong Truong, Solutions Architect',
  paragraphs: [
    'I design and build the systems that carry a brand’s relationship with its customers — CRM engineering, frontend development and data architecture, on Braze, Salesforce Marketing Cloud, Segment and Snowflake. The work I care about is translating a tangle of technical requirements into something with a number attached to it.',
    'Right now I’m at Etsy as a Retention and Engagement Marketing Developer. I architect multi-touch lifecycle journeys and experiment designs in Braze Canvas, engineer dynamic multi-channel templates in HTML, CSS and Liquid, and keep the pipelines between Braze, our warehouses and internal services honest.',
    'Before that I spent two years as a Solutions Architect at AbbVie, where the delivered work cut the CRM team’s weekly manual workload by 20%, lifted loyalty redemption above 30% through Braze Connected Content and REST APIs, and pioneered in-app push messaging for a 10% gain in offer redemption — a new channel that took pressure off email and SMS. Earlier I ran email at scale: 25 million sends at 98% deliverability.',
    'I started with a psychology degree and a curiosity about why people do what they do, then moved into engineering. That background still shapes how I work — I’m most useful in the conversation where business and code meet, whether that’s a data strategy for an eight-million-persona database, leading a Marketo-to-Braze migration, or a Python RAG pipeline with guardrails. I hold both Braze certifications, Digital Strategist and Marketer.',
  ],
  actions: [
    { label: 'Download Résumé', href: '/Phong-Truong-Resume.pdf', variant: 'primary' as const, external: true },
    { label: 'Send Message', href: '#contact', variant: 'secondary' as const, external: false },
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
  eyebrow: 'Services',
  title: 'Services & Offerings',
  subtitle: 'Comprehensive MarTech solutions to drive business growth',
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
  subtitle: 'Client engagements and side projects I designed and shipped end to end.',
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
      title: 'Social Media Agent',
      year: '2026',
      body: 'A Discord-first agent that watches for image uploads and answers with three caption options — sentimental, witty and short — written for a Vietnamese lifestyle persona. Gemini 2.5 Flash does the writing; the surrounding system handles the parts that make it usable: attachment detection, image preprocessing, graceful degradation when the model is slow, and logging that survives production traffic.',
      stack: ['Python', 'Gemini 2.5 Flash', 'Pillow', 'Discord API'],
      stats: [
        { value: '3', label: 'caption styles per image' },
        { value: '0', label: 'manual steps for the user' },
      ],
      flowTitle: 'How it runs',
      steps: [
        'Image uploaded to any channel',
        'Bot detects the attachment',
        'Download and preprocess with Pillow',
        'Gemini 2.5 Flash writes three styles',
        'Formatted reply in-channel',
      ],
      links: [{ label: 'GitHub', href: 'https://github.com/phongoli0/social-media-agent' }],
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
      body: 'Lifecycle engineering and multi-channel campaign automation across email, push and SMS within the REM Operations & Insights team. Architecting multi-touch customer journeys and experiment designs in Braze Canvas, engineering modular responsive templates with advanced Liquid scripting, and connecting the pipelines between Braze, our data warehouses and internal services so customer events land reliably and attribute correctly.',
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
  eyebrow: 'Contact',
  title: 'Contact Me',
  subtitle: 'Get in touch with me',
  formTitle: 'Get in Touch',
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
