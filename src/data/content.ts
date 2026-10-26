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
  lead: 'Phong Truong, MarTech Solutions Architect',
  paragraphs: [
    "Hi! I'm Phong Truong. My career began with a fascination for the human mind, earning a degree in psychology to understand what drives us. Today, I apply that same curiosity to the world of technology, architecting the complex systems that allow brands to connect with millions of people in a more human, personalized way.",
    "Over the past several years, I've specialized in enterprise MarTech and systems architecture. As a Solutions Architect at Allergan Aesthetics, I engineered the technical backbone for global CRM ecosystems, leading API-first integrations that drove real business impact—including a 30% boost in multi-channel loyalty engagement. Since then, I have expanded my technical focus into GenAI and Agentic systems, developing custom Python-based RAG pipelines and automated workflows to solve complex operational challenges.",
    'I thrive as the person who can speak both "business" and "code," translating high-level strategy into flawless technical execution. Whether I\'m designing a resilient data pipeline in Snowflake, architecting automated journeys in Braze, or deploying Large Language Models (LLMs) with strict brand guardrails, my goal is always the same: to leverage cutting-edge technology to build a smarter, more effective customer experience.',
    "If you're looking for a strategic partner who can bridge the gap between enterprise strategy and modern technical execution, I'd love to talk.",
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
export type Project = {
  title: string;
  year: string;
  body: string;
  stack: string[];
  steps: string[];
  links: ProjectLink[];
};

export const projects = {
  eyebrow: 'Selected work',
  title: 'Things I build',
  subtitle: 'An agent I designed and shipped end to end.',
  items: [
    {
      title: 'Social Media Agent',
      year: '2026',
      body: 'A Discord-first agent that watches for image uploads and answers with three caption options — sentimental, witty and short — written for a Vietnamese lifestyle persona. Gemini 2.5 Flash does the writing; the surrounding system handles the parts that make it usable: attachment detection, image preprocessing, graceful degradation when the model is slow, and logging that survives production traffic.',
      stack: ['Python', 'Gemini 2.5 Flash', 'Pillow', 'Discord API'],
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
      period: '2025 — Present',
      title: 'AI Solutions Engineer',
      company: 'Independent',
      body: 'Engineered an event-driven AI application utilizing Python, Google Gemini API, and LangChain. Built a custom Retrieval-Augmented Generation (RAG) pipeline with Human-in-the-Loop (HITL) guardrails to enforce brand safety, reducing content drafting latency by ~95%',
      tags: ['Gen AI', 'RAG', 'LangChain', 'LLM Orchestration'],
    },
    {
      period: '2023 — 2025',
      title: 'Solutions Architect',
      company: 'Allergan Aesthetics',
      body: 'Orchestrated end-to-end solution architecture for global CRM and loyalty initiatives. Designed API-first data integrations across Braze and Snowflake, bridging the gap between business objectives and technical execution to drive a 30% increase in multi-channel engagement.',
      tags: ['System Architecture', 'API Strategy', 'Snowflake', 'Segment'],
    },
    {
      period: '2021 — 2023',
      title: 'Senior MarTech Consultant',
      company: 'November Charles Consulting',
      body: 'Transitioned into a specialized MarTech role, acting as the strategic technical consultant for enterprise clients. Engineered custom API integrations to resolve native CRM platform limitations and managed complex deliverability architectures for high-volume campaigns.',
      tags: ['Braze', 'Marketing Automation', 'Deliverability', 'Technical Scoping'],
    },
    {
      period: '2019 — 2021',
      title: 'Software Engineer',
      company: 'November Charles Consulting',
      body: 'Built foundational industry experience by engineering highly responsive, fluid email templates that significantly reduced technical debt. Designed and developed the user experience architecture for custom NPS surveys utilizing Vue.js and Salesforce Microsites to drive higher completion rates.',
      tags: ['Email Development', 'Vue.js', 'Salesforce', 'CRM'],
    },
    {
      period: '2019',
      title: 'Psychology Graduate → Tech Transition',
      company: 'LearningFuze Web Development Bootcamp',
      body: 'Leveraged a BA in Psychology to understand user behavior, pivoting into technology via an intensive web development bootcamp. Built foundational full-stack software engineering skills to bridge the gap between user experience and technical execution.',
      tags: ['Full-Stack Dev', 'HTML/CSS/JS', 'React.js', 'Web Development'],
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
