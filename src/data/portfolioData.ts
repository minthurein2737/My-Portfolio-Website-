import { PortfolioProfile, Project, SkillCategory } from '../types/portfolio';

export const INITIAL_PROFILE: PortfolioProfile = {
  name: {
    my: 'မင်းသူရိန်',
    en: 'Min Thurein',
  },
  title: {
    my: 'ဝဘ်နှင့် ဆော့ဖ်ဝဲလ် ရေးသားထုတ်လုပ်သူ',
    en: 'Web & Software Developer',
  },
  tagline: {
    my: 'အသုံးပြုသူများအတွက် အကျိုးရှိပြီး ခေတ်မီဆန်းသစ်သော ဒစ်ဂျစ်တယ် အတွေ့အကြုံများနှင့် ဝဘ်ဆော့ဖ်ဝဲလ်များကို ဖန်တီးတည်ဆောက်ပါသည်။',
    en: 'Crafting responsive, high-performance web applications and modern software solutions with clean architecture.',
  },
  bioP1: {
    my: 'မင်္ဂလာပါ! ကျွန်ုပ်သည် မြန်မာနိုင်ငံ၊ တောင်ကြီးမြို့ အခြေစိုက် ဝဘ်နှင့် ဆော့ဖ်ဝဲလ် ရေးသားထုတ်လုပ်သူ မင်းသူရိန် ဖြစ်ပါသည်။ ခေတ်မီပြီး အသုံးပြုရလွယ်ကူသော ဝဘ်ဆိုက်များ၊ အဆင့်မြင့် frontend interface များနှင့် စွမ်းဆောင်ရည်မြင့်မားသော software စနစ်များကို ရေးသားတည်ဆောက်ခြင်းကို အထူးစိတ်အားထက်သန်ပါသည်။',
    en: "Hello! I am Min Thurein, a dedicated Web and Software Developer based in Taunggyi, Myanmar 🇲🇲. I specialize in building responsive, modern web platforms and robust digital tools that deliver real value through clean code and intuitive design.",
  },
  bioP2: {
    my: 'နည်းပညာလောကတွင် အမြဲမပြတ် ပြောင်းလဲတိုးတက်နေသော ခေတ်ပေါ် frameworks များနှင့် software architecture များကို စဉ်ဆက်မပြတ် လေ့လာဆည်းပူးကာ လက်တွေ့ပြဿနာများကို ထိရောက်စွာ ဖြေရှင်းပေးနိုင်သော software များကို ဖန်တီးလျက်ရှိပါသည်။',
    en: 'I continually refine my technical stack across modern web ecosystems and systems design, ensuring high performance, responsive aesthetics, and cross-device accessibility for every project I craft.',
  },
  location: {
    my: 'တောင်ကြီးမြို့၊ မြန်မာနိုင်ငံ 🇲🇲',
    en: 'Taunggyi, Myanmar 🇲🇲',
  },
  locationCoordinates: '20.783° N, 97.037° E',
  availability: {
    my: 'ပရောဂျက်များ လက်ခံဆောင်ရွက်ရန် အဆင်သင့်ရှိပါသည်',
    en: 'Available for freelance projects and remote engineering',
  },
  isAvailable: true,
  emails: [
    'minthurein2737@gmail.com',
    'minthurein.tgi19@gmail.com',
  ],
  portraits: [
    {
      id: 'portrait-main',
      name: {
        my: 'ကိုယ်ပိုင်ဓာတ်ပုံ',
        en: 'Portrait Photo',
      },
      url: 'https://user47886.na.imgto.link/public/20261025/3d3fce97382746113ea183ad-1000012121.avif',
      alt: {
        my: 'မင်းသူရိန်၏ ကိုယ်ပိုင်ဓာတ်ပုံ',
        en: 'Portrait photo of Min Thurein',
      },
    },
  ],
  socials: [
    {
      platform: 'facebook',
      name: 'Facebook',
      handle: 'Min Thurein',
      url: 'https://www.facebook.com/share/19zormJHuB/',
      displayValue: 'facebook.com/minthurein',
      color: '#1877F2',
    },
    {
      platform: 'tiktok',
      name: 'TikTok',
      handle: '@min.thurein447',
      url: 'https://www.tiktok.com/@min.thurein447',
      displayValue: '@min.thurein447',
      color: '#EE1D52',
    },
    {
      platform: 'telegram',
      name: 'Telegram',
      handle: '@Zxenm2007',
      url: 'https://t.me/Zxenm2007',
      displayValue: '@Zxenm2007',
      color: '#229ED9',
    },
    {
      platform: 'email',
      name: 'Primary Email',
      handle: 'minthurein2737@gmail.com',
      url: 'mailto:minthurein2737@gmail.com',
      displayValue: 'minthurein2737@gmail.com',
      color: '#C8FF00',
    },
  ],
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'web-frontend',
    title: {
      my: 'ဝဘ်နှင့် Frontend ရေးသားတည်ဆောက်ခြင်း',
      en: 'Web & Frontend Engineering',
    },
    description: {
      my: 'ခေတ်မီပြီး အသွင်အပြင်လှပကာ စက်ပစ္စည်းအားလုံးတွင် မြန်ဆန်စွာ အလုပ်လုပ်သော ဝဘ် application များ',
      en: 'Fast, responsive interfaces with modular component architecture and rich user feedback',
    },
    skills: [
      { name: 'HTML5 / Semantic Web', highlight: true },
      { name: 'CSS3 / Modern Tailwind', highlight: true },
      { name: 'JavaScript (ESNext)', highlight: true },
      { name: 'TypeScript', highlight: true },
      { name: 'React / Next.js Patterns', highlight: true },
      { name: 'Responsive Web Design' },
      { name: 'UI / UX Prototyping' },
      { name: 'Performance Optimization' },
    ],
  },
  {
    id: 'software-backend',
    title: {
      my: 'ဆော့ဖ်ဝဲလ်နှင့် Backend စနစ်များ',
      en: 'Software & Backend Logic',
    },
    description: {
      my: 'ဒေတာများကို စနစ်တကျ ကိုင်တွယ်ထိန်းသိမ်းနိုင်သော API များနှင့် လုပ်ငန်းသုံး backend logic များ',
      en: 'Structured data handling, API integrations, and resilient client-server interaction',
    },
    skills: [
      { name: 'Node.js / Express', highlight: true },
      { name: 'RESTful API Integration', highlight: true },
      { name: 'Database Fundamentals (SQL & NoSQL)' },
      { name: 'JSON Data Architecture' },
      { name: 'Authentication & Session Flow' },
      { name: 'Algorithm & Problem Solving', highlight: true },
    ],
  },
  {
    id: 'tools-workflow',
    title: {
      my: 'အင်ဂျင်နီယာသုံး ကိရိယာများနှင့် လုပ်ငန်းစဉ်',
      en: 'Dev Tools & Workflow',
    },
    description: {
      my: 'ခေတ်မီ development workflow များ၊ ကုဒ်ထိန်းသိမ်းမှုနှင့် စနစ်တည်ဆောက်မှုများ',
      en: 'Source version control, rapid bundling tools, and deployment workflows',
    },
    skills: [
      { name: 'Git & GitHub', highlight: true },
      { name: 'Vite & Modern Bundlers', highlight: true },
      { name: 'VS Code & Dev Environment' },
      { name: 'Chrome DevTools Debugging' },
      { name: 'Web Accessibility (a11y)' },
      { name: 'Cloud Hosting & CI/CD' },
    ],
  },
  {
    id: 'core-strengths',
    title: {
      my: 'အဓိက အားသာချက်များနှင့် စွမ်းရည်များ',
      en: 'Core Competencies & Strengths',
    },
    description: {
      my: 'တိကျသေချာသော မျက်စိ၊ သန့်ရှင်းသော ကုဒ်ရေးသားမှုနှင့် အသစ်အဆန်းများကို အမြဲလေ့လာသင်ယူခြင်း',
      en: 'Obsessive attention to detail, bilingual fluency, and problem-solving focus',
    },
    skills: [
      { name: 'Bilingual UI (မြန်မာ / English)', highlight: true },
      { name: 'Clean Code Principles', highlight: true },
      { name: 'User-Centric Architecture' },
      { name: 'Rapid Prototyping' },
      { name: 'Cross-browser Compatibility' },
      { name: 'Independent Troubleshooting' },
    ],
  },
];

export const INITIAL_PROJECTS: Project[] = [
  {
    id: 'taunggyi-merchant-hub',
    title: {
      my: 'တောင်ကြီး ကုန်သည်နှင့် စျေးသည် အွန်လိုင်းစနစ်',
      en: 'Taunggyi Merchant & Order Hub',
    },
    category: 'webapp',
    categoryLabel: {
      my: 'ဝဘ်ဆော့ဖ်ဝဲလ်',
      en: 'Web Application',
    },
    shortDesc: {
      my: 'တောင်ကြီးနှင့် ရှမ်းပြည်နယ်ရှိ ကုန်စုံဆိုင်များနှင့် ဒေသထွက်ကုန်ရောင်းချသူများအတွက် ရိုးရှင်းမြန်ဆန်သော စာရင်းနှင့် အမှာစာစီမံခန့်ခွဲသည့်စနစ်။',
      en: 'A responsive inventory and order tracking solution tailored for local merchants and agricultural distributors in Shan State.',
    },
    fullDesc: {
      my: 'တောင်ကြီးဒေသတွင်း စီးပွားရေးလုပ်ငန်းရှင်များနှင့် ကုန်သည်များအတွက် အင်တာနက်လိုင်းနှေးကွေးချိန်တွင်လည်း အဆင်ပြေစေမည့် offline-first ဒေတာသိုလှောင်မှုစနစ်၊ မြန်မာကျပ်ငွေ တွက်ချက်မှုနှင့် ပြေစာထုတ်ယူမှု စနစ်တို့ကို ထည့်သွင်းတည်ဆောက်ထားပါသည်။',
      en: 'Engineered with offline-friendly local state, instant Myanmar Kyat tallying, bilingual receipt generation, and smooth responsive tables that work reliably on both budget smartphones and desktop registers.',
    },
    role: {
      my: 'အဓိက ဝဘ်ဆော့ဖ်ဝဲလ် ရေးသားသူ (Fullstack Developer)',
      en: 'Lead Web Developer & UI Designer',
    },
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'LocalStorage API', 'Responsive UI'],
    features: [
      {
        my: 'မြန်မာ-အင်္ဂလိပ် နှစ်ဘာသာဖြင့် ကုန်ပစ္စည်းစာရင်းနှင့် အမှာစာများကို အလွယ်တကူ ထိန်းချုပ်နိုင်ခြင်း',
        en: 'Bilingual inventory management and rapid order filtering with instant search',
      },
      {
        my: 'ဖုန်းအသေးစားများမှစ၍ ကွန်ပျူတာအထိ စကရင်အရွယ်အစားတိုင်းတွင် ချောမွေ့စွာ အသုံးပြုနိုင်ခြင်း',
        en: 'Mobile-first layout optimized for single-handed shop floor operations',
      },
      {
        my: 'အင်တာနက်လိုင်းမရှိချိန်တွင်လည်း စာရင်းများမပျောက်ပျက်စေရန် အလိုအလျောက် သိမ်းဆည်းပေးခြင်း',
        en: 'Resilient client-side caching preventing data loss during network dropouts',
      },
    ],
    demoUrl: '#demo',
    codeUrl: '#code',
    featured: true,
  },
  {
    id: 'shan-tourism-portal',
    title: {
      my: 'ရှမ်းပြည်နယ် ခရီးသွားနှင့် ယဉ်ကျေးမှု လမ်းညွှန်',
      en: 'Shan State Tourism & Heritage Portal',
    },
    category: 'webapp',
    categoryLabel: {
      my: 'ဝဘ်ဆိုက် / ဝဘ်ဆော့ဖ်ဝဲလ်',
      en: 'Web Portal',
    },
    shortDesc: {
      my: 'တောင်ကြီးမြို့၊ အင်းလေးကန်၊ ပင်းတယနှင့် အနီးတဝိုက် ခရီးသွားနေရာများကို ဓာတ်ပုံ၊ လမ်းညွှန်ချက်များနှင့်တကွ ဖော်ပြပေးသော စနစ်။',
      en: 'An immersive digital guide highlighting iconic destinations, cultural landmarks, and local craft communities across Taunggyi and Inle.',
    },
    fullDesc: {
      my: 'ရှမ်းပြည်နယ်၏ သာယာလှပသော သဘာဝရှုခင်းများနှင့် ရိုးရာယဉ်ကျေးမှုများကို ကမ္ဘာနှင့် မြန်မာတစ်နိုင်ငံလုံးသို့ မိတ်ဆက်ပေးနိုင်ရန်အတွက် ခေတ်မီ geometric အသွင်အပြင်၊ အမြန်ဆန်ဆုံး page loading speed နှင့် အပြန်အလှန် လမ်းညွှန်စနစ်များဖြင့် တည်ဆောက်ထားပါသည်။',
      en: 'Features high-resolution media galleries with zero lag, interactive distance estimates, localized hotel and guide directories, and smooth ambient dark theme aesthetics.',
    },
    role: {
      my: 'Frontend Developer & UX Designer',
      en: 'Frontend Developer & UX Designer',
    },
    techStack: ['React 19', 'TypeScript', 'Tailwind CSS', 'Motion UI'],
    features: [
      {
        my: 'တောင်ကြီး မီးပုံးပျံပွဲတော်နှင့် အင်းလေးရိုးရာ လှေပြိုင်ပွဲစသည့် အထင်ကရ ပွဲတော်များ၏ အချိန်ဇယား',
        en: 'Curated timeline of local festivities including the Taunggyi Hot Air Balloon Festival',
      },
      {
        my: 'ခရီးသွားများအတွက် နေရာဒေသအလိုက် အကွာအဝေးနှင့် ရာသီဥတု လမ်းညွှန်ချက်များ',
        en: 'Dynamic regional filters with travel tips and weather advisories',
      },
    ],
    demoUrl: '#demo',
    codeUrl: '#code',
    featured: true,
  },
  {
    id: 'myanmar-markdown-studio',
    title: {
      my: 'မြန်မာ-အင်္ဂလိပ် စာစီစနစ်နှင့် မှတ်စုဆော့ဖ်ဝဲလ်',
      en: 'Bilingual Markdown & Note Workspace',
    },
    category: 'software',
    categoryLabel: {
      my: 'ဆော့ဖ်ဝဲလ် ကိရိယာ',
      en: 'Software Tool',
    },
    shortDesc: {
      my: 'မြန်မာ ယူနီကုဒ် ဖောင့်များကို အမှားအယွင်းမရှိ စာစီနိုင်ပြီး ကုဒ်များနှင့် စာတိုများကို အမြန်သိမ်းဆည်းပေးသော Developer Note App။',
      en: 'A distraction-free developer markdown workspace with flawless Myanmar Unicode font rendering and live export.',
    },
    fullDesc: {
      my: 'ဆော့ဖ်ဝဲလ်ရေးသားသူများနှင့် စာရေးဆရာများအတွက် မြန်မာစာသားများနှင့် နည်းပညာကုဒ်များကို တစ်ပြိုင်နက်တည်း ရေးသားနိုင်စေရန် တီထွင်ထားသော lightweight web software ဖြစ်ပါသည်။',
      en: 'Engineered to eliminate Myanmar font clipping, text jumping, and broken tone marks. Includes instant syntax highlighting, markdown preview, word counts, and single-click text exports.',
    },
    role: {
      my: 'Software Developer',
      en: 'Software Developer',
    },
    techStack: ['TypeScript', 'Web APIs', 'Tailwind CSS', 'Custom Parser'],
    features: [
      {
        my: 'မြန်မာယူနီကုဒ် ဖောင့်အားလုံးနှင့် အဆင်ပြေချောမွေ့စွာ တွဲဖက်အလုပ်လုပ်နိုင်ခြင်း',
        en: 'Native Unicode normalization preventing common font encoding conflicts',
      },
      {
        my: 'ရေးသားထားသော စာများကို PDF သို့မဟုတ် Markdown ဖိုင်အဖြစ် ဒေါင်းလုဒ်ရယူနိုင်ခြင်း',
        en: 'Instant export to clean markdown or formatted document files',
      },
    ],
    demoUrl: '#demo',
    codeUrl: '#code',
    featured: false,
  },
  {
    id: 'portfolio-engine-v2',
    title: {
      my: 'ခေတ်မီ Geometric ပို့ဖိုလီယိုနှင့် ကိုယ်ရေးစာမျက်နှာ',
      en: 'Digital Developer Portfolio Engine',
    },
    category: 'webapp',
    categoryLabel: {
      my: 'ဝဘ်ဆော့ဖ်ဝဲလ်',
      en: 'Web Application',
    },
    shortDesc: {
      my: 'မင်းသူရိန် အတွက် သီးသန့်ရေးဆွဲထားသော Hexagonal Geometry နှင့် မြန်မာ-အင်္ဂလိပ် နှစ်ဘာသာသုံး Personal Portfolio စနစ်။',
      en: 'A high-contrast editorial portfolio system powered by geometric polygons, live language switching, and interactive profile customization.',
    },
    fullDesc: {
      my: 'အနက်ရောင်/မီးခိုးရင့် နောက်ခံ၊ ထင်ရှားသော lime-green အသားပေးအရောင်များနှင့် angular geometry များဖြင့် တည်ဆောက်ထားသော ultra-responsive portfolio ဖြစ်ပါသည်။',
      en: 'Features interactive portrait swapping between user-uploaded photos, client-side configuration exporter, accessible navigation, and zero-flicker bilingual transitions.',
    },
    role: {
      my: 'Creator & Lead Architect',
      en: 'Creator & Lead Architect',
    },
    techStack: ['React 19', 'TypeScript', 'Tailwind CSS v4', 'SVG Geometry'],
    features: [
      {
        my: 'မြန်မာ နှင့် အင်္ဂလိပ် နှစ်ဘာသာကို အချိန်မရွေး ချောမွေ့စွာ ပြောင်းလဲနိုင်ခြင်း',
        en: 'Instant zero-reload bilingual toggle with persistent local storage memory',
      },
      {
        my: 'ဆန်းသစ်သော Hexagon & Polygon ပုံစံ ဓာတ်ပုံဘောင်နှင့် interactive switchers',
        en: 'Signature polygon framing with dual portrait mode toggling and HUD aesthetic',
      },
    ],
    demoUrl: '#demo',
    codeUrl: '#code',
    featured: true,
  },
];
