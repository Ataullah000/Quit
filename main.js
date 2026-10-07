/* Digital Universe
   Shared interaction layer
   Md Ataullah Al Mahmud Alif
*/

const CONFIG = {
  siteName: "Ataullah Al Mahmud",
  legalName: "Md Ataullah Al Mahmud Alif",
  nickname: "Alif",
  baseUrl: "https://ataullah000.github.io/ataullah-portfolio",
  customDomain: "[YOUR-DOMAIN]",
  contactEmail: "ataullah99@gmail.com",
  profilePhoto: "profile-placeholder.svg",
  favicon: "favicon.svg",
  socialLinks: {
    github: "[YOUR-GITHUB]",
    linkedin: "https://www.linkedin.com/in/md-ataullah-al-mahmud-alif-36aaa1423",
    youtube: "https://www.youtube.com/@Al_Mahmud_Alif",
    facebook: "https://www.facebook.com/share/1BpE1sTTwp/",
    instagram: "https://www.instagram.com/almahmud1329",
    x: "https://x.com/MdAtaullahmsoy"
  },
  publicationUrl: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=7480999",
  futureProjectLabel: "[TO BE ADDED]"
};

const I18N = {
  en: {
    nav: {
      home:"Home", about:"About", vision:"Vision", projects:"Projects",
      skills:"Skills", journey:"Journey", certificates:"Certificates", contact:"Contact"
    },
    common: {
      siteName:"Ataullah Al Mahmud", legalName:"Md Ataullah Al Mahmud Alif", primaryNav:"Primary navigation", mobileNav:"Mobile navigation", skip:"Skip to content",
      language:"বাংলা", theme:"Toggle theme", menu:"Open menu", close:"Close menu",
      backTop:"Back to top", explore:"Explore", learnMore:"Learn more", status:"Status",
      completed:"COMPLETED", progress:"IN PROGRESS", planned:"PLANNED", aspirational:"ASPIRATIONAL",
      current:"Current page", viewProject:"View project", send:"Open email app", submit:"Open email app",
      unavailable:"This link has not been configured yet.", emailMissing:"Please add your email in the CONFIG object in js/main.js.",
      socialMissing:"This social link has not been configured yet.", github:"GitHub", linkedin:"LinkedIn", youtube:"YouTube", facebook:"Facebook", instagram:"Instagram", x:"X",
      visitPublication:"Visit publication", visitYoutube:"Visit my YouTube Channel"
    },
    home: {
      title:"Ataullah Al Mahmud",
      tagline:"Building Opportunities for a Better Future",
      philosophy:"Exploring Technology, Building Ideas, Creating Impact",
      intro:"I am Md Ataullah Al Mahmud Alif. I completed my studies at Dhaka City College and explore technology, ideas and practical ways to create meaningful opportunities.",
      projects:"View projects", contact:"Start a conversation",
      orbitLabel:"LEARN", orbit2:"THINK", orbit3:"EXPERIMENT", orbit4:"BUILD", orbit5:"FAIL", orbit6:"IMPROVE", orbit7:"SHARE",
      orbitCenter:"DIGITAL UNIVERSE",
      signal:"A living portfolio of learning, experiments and future ideas",
      sectionEyebrow:"A digital universe",
      sectionTitle:"Learning becomes meaningful when it moves.",
      sectionLead:"The portfolio brings together my interests, experiences, current work and future ideas without pretending that plans are already achievements.",
      route1Title:"Explore",
      route1Copy:"Move through the site as different regions of one evolving universe.",
      route2Title:"Build",
      route2Copy:"See what is completed, what is in progress and what is still a plan.",
      route3Title:"Connect",
      route3Copy:"Reach out through the contact gateway when you want to start a conversation."
    },
    about: {
      eyebrow:"About",
      title:"The person behind the work",
      lead:"Md Ataullah Al Mahmud Alif completed his studies at Dhaka City College. He has a broad interest in technology, learning, creative problem solving and practical digital work.",
      statusLabel:"Current profile",
      identityTitle:"Identity",
      identityCopy:"Completed studies at Dhaka City College. Earlier studied at Sherpur Govt Victoria Academy.",
      educationTitle:"Education",
      educationCopy:"Completed secondary education at Sherpur Govt Victoria Academy. Passed from Dhaka City College.",
      interestsTitle:"Interests",
      interestsCopy:"AI, technology, education, web development, cybersecurity, SEO, UX and UI, video editing, entrepreneurship and creative problem solving. Interested in EEE, CSE, AI and cybersecurity as fields of study.",
      workTitle:"Freelance work",
      workCopy:"Freelancer in web development, SEO, digital technology, AI tools and UI and UX.",
      mediaTitle:"YouTube and editing",
      mediaCopy:"Runs a YouTube channel and uses AI assisted image and video editing for it.",
      languagesTitle:"Languages",
      languagesCopy:"",
      langBn:"Bengali", langBnLevel:"Native",
      langEn:"English", langEnLevel:"Full professional",
      langHi:"Hindi", langHiLevel:"Full professional",
      langUr:"Urdu", langUrLevel:"Limited working",
      langJa:"Japanese", langJaLevel:"Basic",
      note:""
    },
    vision: {
      eyebrow:"Vision",
      title:"Ideas with a long horizon",
      lead:"The future is presented as a sequence of intentions rather than a list of claims. The timeline keeps planned work visibly separate from established work.",
      year2026:"AI powered educational platform for students in Bangladesh and beyond, supporting both Bangla and English medium.",
      year2027:"Continue developing the educational platform idea and learning around the needs it is intended to serve.",
      year2030:"An AI focused startup is an aspirational direction. It is not established yet.",
      year2035:"A social impact initiative or NGO aligned with the UN SDGs is an aspirational direction. It is not established yet.",
      platformTitle:"AI education platform",
      platformCopy:"Planned work for an AI powered educational platform supporting students in Bangladesh and beyond in both Bangla and English medium.",
      startupTitle:"AI focused startup",
      startupCopy:"An aspirational direction. No startup has been established yet.",
      impactTitle:"Social impact initiative",
      impactCopy:"An aspirational direction for an initiative or NGO aligned with the UN SDGs. It is not established yet.",
      networkTitle:"Ideas grow through connection",
      networkCopy:"The network visual is a metaphor for connected possibilities. It does not represent an existing organization or product."
    },
    projects: {
      eyebrow:"Projects",
      title:"Built, building and imagined",
      lead:"A truthful record of work. Completed work is separated from current experiments, plans and future freelance space.",
      shopTitle:"Local shop website",
      shopCopy:"Built a website for a local shop and linked it with other sites in an affiliate marketing style. The shop's sales increased afterward. This was the first project of this kind.",
      portfolioTitle:"Digital Universe portfolio",
      portfolioCopy:"This portfolio website is currently in progress as a living digital universe.",
      publicationTitle:"Artificial Intelligence and Human Perception: Exploring Bias, Influence and Decision Manipulation",
      publicationCopy:"My first research paper. Published as a preprint on SSRN. It examines how artificial intelligence interacts with human perception, focusing on bias, influence and decision-making, and explores the ethical implications of AI-driven systems that can shape human judgment.",
      publicationNote:"Preprint on SSRN · First research paper",
      educationTitle:"AI education platform",
      educationCopy:"A planned AI powered educational platform for students in Bangladesh and beyond, supporting both Bangla and English medium.",
      futureTitle:"Future freelance project",
      futureCopy:"A visible space reserved for a future freelance project. No client or result is being invented.",
      futureTitle2:"Future freelance project",
      futureCopy2:"A second visible space reserved for a future freelance project. No client or result is being invented.",
      completedNote:"First project of this kind",
      inProgressNote:"This website",
      plannedNote:"Future idea"
    },
    skills: {
      eyebrow:"Skills",
      title:"A constellation of abilities",
      lead:"Skills are shown as connected capabilities rather than progress bars. Some are practical strengths and some are areas still being learned.",
      center:"SKILLS",
      web:"Web Development", seo:"SEO", uiux:"UI and UX", ai:"AI Tools", video:"Video Editing",
      python:"Python basics", data:"Data Analytics", cyber:"Cybersecurity learning", teaching:"Teaching", leadership:"Leadership",
      dataNote:"IBM SkillsBuild", aiNote:"IBM SkillsBuild"
    },
    journey: {
      eyebrow:"Journey",
      title:"Experience leaves a path",
      lead:"A timeline of service, training, teaching, organizing and student community involvement.",
      redTitle:"Volunteer — Bangladesh Red Crescent Society",
      redCopy:"Served as a member of the Bangladesh Red Crescent Society. Took part in community service, flood relief programmes and health awareness campaigns, including aid distribution. Built stronger communication, teamwork and a sense of social responsibility.",
      bnccTitle:"Cadet — Bangladesh National Cadet Corps (BNCC)",
      bnccCopy:"Completed military-style training with the Bangladesh National Cadet Corps, including drills, camping and team exercises. Developed discipline, leadership, teamwork, problem-solving skills and the ability to stay adaptable in challenging situations.",
      teachingTitle:"Free teaching",
      teachingCopy:"Taught approximately 5 students Mathematics and Science free of charge in Sherpur for about one year.",
      organizingTitle:"School cultural program",
      organizingCopy:"Served as a main organizing committee member of a school cultural program attended by about 500 people.",
      scienceTitle:"Science Club & Arts and Crafts Club",
      scienceCopy:"Member of the Dhaka City College Science Club — joined academic discussions, science activities and small group projects that strengthened critical thinking and teamwork. Also a member of the Arts and Crafts Club, taking part in creative workshops, collaborative projects and event organising.",
      redDate:"April 2020 to March 2021",
      bnccDate:"April 2021 to March 2023",
      teachingDate:"About one year",
      organizingDate:"School experience",
      scienceDate:"August 2024 to August 2026"
    },
    certificates: {
      eyebrow:"Certificates",
      title:"Evidence of learning",
      lead:"Selected learning credentials and simulations. The Deloitte entry is a simulation and not employment.",
      deloitteTitle:"Deloitte Cyber Job Simulation",
      deloitteIssuer:"Deloitte via Forage",
      deloitteDate:"22 July 2026",
      deloitteNote:"Simulation, not employment. Applied cybersecurity principles through realistic simulated scenarios and strengthened skills in security analysis, web security and networking.",
      unicefTitle:"Community Engagement for Behaviour and Social Change in CCCs in Humanitarian Action",
      unicefIssuer:"UNICEF via Agora",
      unicefDate:"21 July 2026",
      unicefNote:"Built knowledge of community engagement and social behaviour change, with insight into humanitarian programming and monitoring practices.",
      ibmTitle:"Data Analytics for Sustainability",
      ibmIssuer:"IBM SkillsBuild",
      ibmDate:"30 August 2026",
      ibmNote:"Completed requirements for Data Analytics for Sustainability.",
      nasaTitle:"Open Science Essentials",
      nasaIssuer:"NASA",
      nasaDate:"18 August 2026",
      nasaNote:"Developed knowledge of open science, open data and reproducible research, with a practical understanding of transparent and collaborative scientific practices.",
      pythonTitle:"Python Essentials 1",
      pythonIssuer:"Cisco Networking Academy + OpenEDG Python Institute",
      pythonDate:"05 August 2026",
      pythonNote:"Built foundational Python programming and problem-solving skills, with practical experience in writing, debugging and executing Python 3 programs.",
      aiTitle:"Artificial Intelligence Fundamentals",
      aiIssuer:"IBM SkillsBuild",
      aiDate:"06 September 2026",
      aiNote:"Completed requirements for Artificial Intelligence Fundamentals."
    },
    contact: {
      eyebrow:"Contact",
      title:"Open the gateway",
      lead:"The contact form opens your email application. Social links are ready to use.",
      name:"Name",
      email:"Email",
      message:"Message",
      namePlaceholder:"Your name",
      emailPlaceholder:"Your email",
      messagePlaceholder:"Your message",
      socialTitle:"Social links",
      socialInvite:"Just one tap and visit my profile.",
      formNote:"Your email app will open with the message prepared.",
      missingEmail:"The contact email is still a placeholder. Add it in js/main.js before publishing.",
      missingSocial:"This social link is still a placeholder. Add it in js/main.js before publishing."
    },
    footer: {
      name:"Md Ataullah Al Mahmud Alif",
      copy:"Building Opportunities for a Better Future",
      quick:"Quick links",
      connect:"Connect",
      rights:"Personal portfolio",
      philosophy:"Exploring Technology, Building Ideas, Creating Impact"
    },
    seo: {
      homeTitle:"Ataullah Al Mahmud | Md Ataullah Al Mahmud Alif",
      homeDesc:"Portfolio of Ataullah Al Mahmud, also known as Alif. Exploring technology, ideas, digital work and future possibilities.",
      aboutTitle:"About | Ataullah Al Mahmud",
      aboutDesc:"About Md Ataullah Al Mahmud Alif, his interests, digital work, education and languages.",
      visionTitle:"Vision | Ataullah Al Mahmud",
      visionDesc:"The future vision of Md Ataullah Al Mahmud Alif, including planned education technology work and aspirational directions.",
      projectsTitle:"Projects | Ataullah Al Mahmud",
      projectsDesc:"Projects by Md Ataullah Al Mahmud Alif, including completed work, an in progress portfolio, a research preprint and planned ideas.",
      skillsTitle:"Skills | Ataullah Al Mahmud",
      skillsDesc:"Skills and learning areas of Md Ataullah Al Mahmud Alif across web development, SEO, AI tools, cybersecurity and more.",
      journeyTitle:"Journey | Ataullah Al Mahmud",
      journeyDesc:"The journey of Md Ataullah Al Mahmud Alif through service, training, teaching, organizing and student clubs.",
      certificatesTitle:"Certificates | Ataullah Al Mahmud",
      certificatesDesc:"Learning credentials and simulations completed by Md Ataullah Al Mahmud Alif.",
      contactTitle:"Contact | Ataullah Al Mahmud",
      contactDesc:"Contact Md Ataullah Al Mahmud Alif through email and social links."
    }
  },
  bn: {
    nav: {
      home:"হোম", about:"পরিচয়", vision:"ভিশন", projects:"প্রকল্প", skills:"দক্ষতা",
      journey:"যাত্রা", certificates:"সনদ", contact:"যোগাযোগ"
    },
    common: {
      siteName:"Ataullah Al Mahmud", legalName:"Md Ataullah Al Mahmud Alif", primaryNav:"প্রধান নেভিগেশন", mobileNav:"মোবাইল নেভিগেশন", skip:"কনটেন্টে যান",
      language:"EN", theme:"থিম বদলান", menu:"মেনু খুলুন", close:"মেনু বন্ধ করুন",
      backTop:"উপরে যান", explore:"ঘুরে দেখুন", learnMore:"আরও জানুন", status:"অবস্থা",
      completed:"সম্পন্ন", progress:"চলমান", planned:"পরিকল্পিত", aspirational:"ভবিষ্যৎ আকাঙ্ক্ষা",
      current:"বর্তমান পৃষ্ঠা", viewProject:"প্রকল্প দেখুন", send:"ইমেইল অ্যাপ খুলুন", submit:"ইমেইল অ্যাপ খুলুন",
      unavailable:"এই লিংকটি এখনো যুক্ত করা হয়নি।", emailMissing:"js/main.js এর CONFIG অংশে ইমেইল ঠিকানা যোগ করুন।",
      socialMissing:"এই সামাজিক যোগাযোগের লিংকটি এখনো যুক্ত করা হয়নি।", github:"GitHub", linkedin:"LinkedIn", youtube:"YouTube", facebook:"Facebook", instagram:"Instagram", x:"X",
      visitPublication:"প্রকাশনা দেখুন", visitYoutube:"আমার YouTube চ্যানেল দেখুন"
    },
    home: {
      title:"Ataullah Al Mahmud",
      tagline:"Building Opportunities for a Better Future",
      philosophy:"Exploring Technology, Building Ideas, Creating Impact",
      intro:"আমি Md Ataullah Al Mahmud Alif। আমি Dhaka City College থেকে পড়াশোনা সম্পন্ন করেছি এবং প্রযুক্তি, নতুন ধারণা ও বাস্তবসম্মত উপায়ে অর্থবহ সুযোগ তৈরির সম্ভাবনা নিয়ে কাজ ও শেখার চেষ্টা করছি।",
      projects:"প্রকল্প দেখুন", contact:"যোগাযোগ শুরু করুন",
      orbitLabel:"শিখুন", orbit2:"ভাবুন", orbit3:"পরীক্ষা করুন", orbit4:"তৈরি করুন", orbit5:"ব্যর্থ হন", orbit6:"উন্নতি করুন", orbit7:"শেয়ার করুন",
      orbitCenter:"ডিজিটাল ইউনিভার্স",
      signal:"শেখা, পরীক্ষা এবং ভবিষ্যৎ ভাবনার একটি চলমান পোর্টফোলিও",
      sectionEyebrow:"একটি ডিজিটাল ইউনিভার্স",
      sectionTitle:"শেখা তখনই অর্থবহ হয় যখন তা এগিয়ে যায়।",
      sectionLead:"এই পোর্টফোলিওতে আমার আগ্রহ, অভিজ্ঞতা, বর্তমান কাজ এবং ভবিষ্যৎ ধারণাগুলো একসাথে আছে। পরিকল্পনাকে কখনো অর্জন হিসেবে দেখানো হয়নি।",
      route1Title:"ঘুরে দেখুন",
      route1Copy:"একটি পরিবর্তনশীল ইউনিভার্সের বিভিন্ন অঞ্চলের মতো করে পুরো সাইটটি দেখুন।",
      route2Title:"তৈরি দেখুন",
      route2Copy:"কোনটি সম্পন্ন, কোনটি চলমান এবং কোনটি এখনো পরিকল্পনা তা আলাদা করে দেখুন।",
      route3Title:"যোগাযোগ করুন",
      route3Copy:"কথা শুরু করতে যোগাযোগের গেটওয়ে ব্যবহার করুন।"
    },
    about: {
      eyebrow:"পরিচয়",
      title:"কাজের পেছনের মানুষটি",
      lead:"Md Ataullah Al Mahmud Alif Dhaka City College থেকে পড়াশোনা সম্পন্ন করেছেন। প্রযুক্তি, শেখা, সৃজনশীল সমস্যা সমাধান এবং বাস্তব ডিজিটাল কাজের প্রতি তার বিস্তৃত আগ্রহ রয়েছে।",
      statusLabel:"বর্তমান পরিচয়",
      identityTitle:"পরিচয়",
      identityCopy:"Dhaka City College থেকে পড়াশোনা সম্পন্ন করেছেন। এর আগে Sherpur Govt Victoria Academy এ পড়াশোনা করেছেন।",
      educationTitle:"শিক্ষা",
      educationCopy:"Sherpur Govt Victoria Academy থেকে মাধ্যমিক শিক্ষা সম্পন্ন করেছেন। Dhaka City College থেকে পাস করেছেন।",
      interestsTitle:"আগ্রহ",
      interestsCopy:"AI, প্রযুক্তি, শিক্ষা, web development, cybersecurity, SEO, UX ও UI, video editing, entrepreneurship এবং creative problem solving। EEE, CSE, AI এবং cybersecurity কে পড়াশোনার ক্ষেত্র হিসেবেও আগ্রহের সঙ্গে দেখে।",
      workTitle:"ফ্রিল্যান্স কাজ",
      workCopy:"Web development, SEO, digital technology, AI tools এবং UI ও UX নিয়ে ফ্রিল্যান্স কাজ করে।",
      mediaTitle:"YouTube ও এডিটিং",
      mediaCopy:"একটি YouTube channel চালায় এবং সেখানে AI assisted image ও video editing ব্যবহার করে।",
      languagesTitle:"ভাষা",
      languagesCopy:"",
      langBn:"বাংলা", langBnLevel:"মাতৃভাষা",
      langEn:"ইংরেজি", langEnLevel:"Full professional",
      langHi:"হিন্দি", langHiLevel:"Full professional",
      langUr:"উর্দু", langUrLevel:"Limited working",
      langJa:"জাপানি", langJaLevel:"Basic",
      note:""
    },
    vision: {
      eyebrow:"ভিশন",
      title:"দীর্ঘ পথের কিছু ধারণা",
      lead:"ভবিষ্যৎকে এখানে দাবির তালিকা হিসেবে নয়, বরং উদ্দেশ্যের ধারাবাহিকতা হিসেবে দেখানো হয়েছে। পরিকল্পনা এবং প্রতিষ্ঠিত কাজকে আলাদা রাখা হয়েছে।",
      year2026:"বাংলাদেশ ও এর বাইরের শিক্ষার্থীদের জন্য Bangla ও English medium উভয়কে সমর্থন করে এমন একটি AI powered educational platform এর পরিকল্পনা।",
      year2027:"শিক্ষামূলক প্ল্যাটফর্মের ধারণাটি এগিয়ে নেওয়া এবং যাদের জন্য এটি তৈরি করার পরিকল্পনা তাদের প্রয়োজনীয়তা নিয়ে শেখা।",
      year2030:"একটি AI focused startup একটি aspirational direction। এখনো কোনো startup প্রতিষ্ঠিত হয়নি।",
      year2035:"UN SDGs এর সঙ্গে সামঞ্জস্যপূর্ণ একটি social impact initiative বা NGO একটি aspirational direction। এখনো প্রতিষ্ঠিত নয়।",
      platformTitle:"AI education platform",
      platformCopy:"বাংলাদেশ ও এর বাইরের শিক্ষার্থীদের জন্য Bangla ও English medium উভয়কে সমর্থন করে এমন একটি AI powered educational platform তৈরির পরিকল্পনা।",
      startupTitle:"AI focused startup",
      startupCopy:"এটি একটি ভবিষ্যৎ আকাঙ্ক্ষা। এখনো কোনো startup প্রতিষ্ঠিত হয়নি।",
      impactTitle:"Social impact initiative",
      impactCopy:"UN SDGs এর সঙ্গে সামঞ্জস্যপূর্ণ একটি initiative বা NGO এর ভবিষ্যৎ আকাঙ্ক্ষা। এটি এখনো প্রতিষ্ঠিত নয়।",
      networkTitle:"ধারণা সংযোগের মাধ্যমে বড় হয়",
      networkCopy:"এই network visual সংযুক্ত সম্ভাবনার একটি রূপক। এটি কোনো প্রতিষ্ঠিত organization বা product এর প্রতিচ্ছবি নয়।"
    },
    projects: {
      eyebrow:"প্রকল্প",
      title:"তৈরি, চলমান ও কল্পিত",
      lead:"কাজের সৎ নথি। সম্পন্ন কাজকে বর্তমান পরীক্ষা, পরিকল্পনা এবং ভবিষ্যৎ ফ্রিল্যান্স জায়গা থেকে আলাদা রাখা হয়েছে।",
      shopTitle:"স্থানীয় দোকানের ওয়েবসাইট",
      shopCopy:"একটি স্থানীয় দোকানের জন্য ওয়েবসাইট তৈরি করেছে এবং অন্যান্য সাইটের সঙ্গে affiliate marketing স্টাইলে লিংক করেছে। এরপর দোকানের বিক্রি বেড়েছে। এ ধরনের প্রথম প্রকল্প।",
      portfolioTitle:"Digital Universe portfolio",
      portfolioCopy:"এই পোর্টফোলিও ওয়েবসাইটটি বর্তমানে একটি চলমান ডিজিটাল ইউনিভার্স হিসেবে তৈরি হচ্ছে।",
      publicationTitle:"Artificial Intelligence and Human Perception: Exploring Bias, Influence and Decision Manipulation",
      publicationCopy:"আমার প্রথম গবেষণা পেপার। SSRN-এ প্রিপ্রিন্ট হিসেবে প্রকাশিত। কৃত্রিম বুদ্ধিমত্তা কীভাবে মানুষের উপলব্ধির সঙ্গে যুক্ত হয়—পক্ষপাত, প্রভাব এবং সিদ্ধান্ত গ্রহণের উপর জোর দিয়ে—এবং AI-চালিত সিস্টেম মানুষের বিচারকে কীভাবে প্রভাবিত করতে পারে তার নৈতিক দিকগুলো আলোচনা করা হয়েছে।",
      publicationNote:"SSRN-এ প্রিপ্রিন্ট · প্রথম গবেষণা পেপার",
      educationTitle:"AI education platform",
      educationCopy:"বাংলাদেশ ও এর বাইরের শিক্ষার্থীদের জন্য Bangla ও English medium উভয়কে সমর্থন করে এমন একটি AI powered educational platform এর পরিকল্পনা।",
      futureTitle:"ভবিষ্যৎ ফ্রিল্যান্স প্রকল্প",
      futureCopy:"ভবিষ্যৎ ফ্রিল্যান্স প্রকল্পের জন্য সংরক্ষিত একটি দৃশ্যমান জায়গা। কোনো ক্লায়েন্ট বা ফলাফল কল্পনা করা হয়নি।",
      futureTitle2:"ভবিষ্যৎ ফ্রিল্যান্স প্রকল্প",
      futureCopy2:"দ্বিতীয় একটি দৃশ্যমান জায়গা ভবিষ্যৎ ফ্রিল্যান্স প্রকল্পের জন্য সংরক্ষিত। কোনো ক্লায়েন্ট বা ফলাফল কল্পনা করা হয়নি।",
      completedNote:"এ ধরনের প্রথম প্রকল্প",
      inProgressNote:"এই ওয়েবসাইট",
      plannedNote:"ভবিষ্যৎ ধারণা"
    },
    skills: {
      eyebrow:"দক্ষতা",
      title:"দক্ষতার একটি নক্ষত্রপুঞ্জ",
      lead:"দক্ষতাগুলোকে প্রগ্রেস বার নয়, বরং সংযুক্ত সক্ষমতা হিসেবে দেখানো হয়েছে। কিছু ব্যবহারিক শক্তি এবং কিছু এখনো শেখার পর্যায়ে।",
      center:"দক্ষতা",
      web:"Web Development", seo:"SEO", uiux:"UI and UX", ai:"AI Tools", video:"Video Editing",
      python:"Python basics", data:"Data Analytics", cyber:"Cybersecurity learning", teaching:"Teaching", leadership:"Leadership",
      dataNote:"IBM SkillsBuild", aiNote:"IBM SkillsBuild"
    },
    journey: {
      eyebrow:"যাত্রা",
      title:"অভিজ্ঞতা একটি পথ রেখে যায়",
      lead:"সেবা, প্রশিক্ষণ, শিক্ষাদান, সংগঠন এবং শিক্ষার্থী কমিউনিটি সম্পৃক্ততার একটি টাইমলাইন।",
      redTitle:"স্বেচ্ছাসেবক — বাংলাদেশ রেড ক্রিসেন্ট সোসাইটি",
      redCopy:"বাংলাদেশ রেড ক্রিসেন্ট সোসাইটির সদস্য হিসেবে কমিউনিটি সার্ভিস, বন্যা ত্রাণ, স্বাস্থ্য সচেতনতা ক্যাম্পেইন এবং ত্রাণ বিতরণে অংশ নিয়েছেন। যোগাযোগ, টিমওয়ার্ক এবং সামাজিক দায়িত্ববোধ আরও মজবুত হয়েছে।",
      bnccTitle:"ক্যাডেট — বাংলাদেশ ন্যাশনাল ক্যাডেট কোর (BNCC)",
      bnccCopy:"BNCC-এর অধীনে সামরিক ধাঁচের প্রশিক্ষণ সম্পন্ন করেছেন — ড্রিল, ক্যাম্পিং এবং দলীয় অনুশীলনসহ। শৃঙ্খলা, নেতৃত্ব, টিমওয়ার্ক, সমস্যা সমাধান এবং চ্যালেঞ্জিং পরিস্থিতিতে মানিয়ে নেওয়ার দক্ষতা গড়ে উঠেছে।",
      teachingTitle:"বিনামূল্যে শিক্ষাদান",
      teachingCopy:"শেরপুরে প্রায় এক বছর ধরে প্রায় ৫ জন শিক্ষার্থীকে গণিত ও বিজ্ঞান বিনামূল্যে পড়িয়েছেন।",
      organizingTitle:"স্কুল সাংস্কৃতিক অনুষ্ঠান",
      organizingCopy:"প্রায় ৫০০ জন মানুষের উপস্থিতিতে অনুষ্ঠিত একটি স্কুল সাংস্কৃতিক অনুষ্ঠানের প্রধান আয়োজক কমিটির সদস্য ছিলেন।",
      scienceTitle:"বিজ্ঞান ক্লাব ও আর্টস অ্যান্ড ক্রাফটস ক্লাব",
      scienceCopy:"ঢাকা সিটি কলেজ সায়েন্স ক্লাবের সদস্য — একাডেমিক আলোচনা, বিজ্ঞান-সংক্রান্ত কার্যক্রম এবং ছোট দলীয় প্রজেক্টে অংশ নিয়েছেন। আর্টস অ্যান্ড ক্রাফটস ক্লাবেরও সদস্য, যেখানে সৃজনশীল কর্মশালা, সহযোগিতামূলক প্রজেক্ট এবং ইভেন্ট আয়োজনে অংশ নিয়েছেন।",
      redDate:"এপ্রিল ২০২০ থেকে মার্চ ২০২১",
      bnccDate:"এপ্রিল ২০২১ থেকে মার্চ ২০২৩",
      teachingDate:"প্রায় এক বছর",
      organizingDate:"স্কুল অভিজ্ঞতা",
      scienceDate:"আগস্ট ২০২৪ থেকে আগস্ট ২০২৬"
    },
    certificates: {
      eyebrow:"সনদ",
      title:"শেখার প্রমাণ",
      lead:"নির্বাচিত লার্নিং ক্রেডেনশিয়াল এবং সিমুলেশন। Deloitte এন্ট্রিটি একটি সিমুলেশন এবং চাকরি নয়।",
      deloitteTitle:"Deloitte Cyber Job Simulation",
      deloitteIssuer:"Deloitte via Forage",
      deloitteDate:"২২ জুলাই ২০২৬",
      deloitteNote:"সিমুলেশন, চাকরি নয়। বাস্তবসম্মত সিমুলেটেড সিনারিওর মাধ্যমে সাইবারসিকিউরিটি নীতি প্রয়োগ এবং সিকিউরিটি অ্যানালাইসিস, ওয়েব সিকিউরিটি ও নেটওয়ার্কিং দক্ষতা শক্তিশালী হয়েছে।",
      unicefTitle:"Community Engagement for Behaviour and Social Change in CCCs in Humanitarian Action",
      unicefIssuer:"UNICEF via Agora",
      unicefDate:"২১ জুলাই ২০২৬",
      unicefNote:"কমিউনিটি এনগেজমেন্ট ও সামাজিক আচরণ পরিবর্তন বিষয়ে জ্ঞান অর্জন, মানবিক প্রোগ্রামিং ও মনিটরিং অনুশীলন সম্পর্কে ধারণা তৈরি।",
      ibmTitle:"Data Analytics for Sustainability",
      ibmIssuer:"IBM SkillsBuild",
      ibmDate:"৩০ আগস্ট ২০২৬",
      ibmNote:"Data Analytics for Sustainability এর প্রয়োজনীয়তা সম্পন্ন।",
      nasaTitle:"Open Science Essentials",
      nasaIssuer:"NASA",
      nasaDate:"১৮ আগস্ট ২০২৬",
      nasaNote:"ওপেন সায়েন্স, ওপেন ডেটা এবং পুনরুৎপাদনযোগ্য গবেষণা বিষয়ে জ্ঞান; স্বচ্ছ ও সহযোগিতামূলক বৈজ্ঞানিক অনুশীলনের ব্যবহারিক ধারণা।",
      pythonTitle:"Python Essentials 1",
      pythonIssuer:"Cisco Networking Academy + OpenEDG Python Institute",
      pythonDate:"০৫ আগস্ট ২০২৬",
      pythonNote:"পাইথন প্রোগ্রামিং ও সমস্যা সমাধানের মৌলিক দক্ষতা; Python 3 প্রোগ্রাম লেখা, ডিবাগ ও চালানোর ব্যবহারিক অভিজ্ঞতা।",
      aiTitle:"Artificial Intelligence Fundamentals",
      aiIssuer:"IBM SkillsBuild",
      aiDate:"০৬ সেপ্টেম্বর ২০২৬",
      aiNote:"Artificial Intelligence Fundamentals এর প্রয়োজনীয়তা সম্পন্ন।"
    },
    contact: {
      eyebrow:"যোগাযোগ",
      title:"গেটওয়ে খুলুন",
      lead:"কন্টাক্ট ফর্ম আপনার ইমেইল অ্যাপ খুলে দেবে। সোশ্যাল লিংকগুলো ব্যবহারের জন্য প্রস্তুত।",
      name:"নাম",
      email:"ইমেইল",
      message:"বার্তা",
      namePlaceholder:"আপনার নাম",
      emailPlaceholder:"আপনার ইমেইল",
      messagePlaceholder:"আপনার বার্তা",
      socialTitle:"সামাজিক যোগাযোগ",
      socialInvite:"এক ট্যাপেই আমার প্রোফাইল দেখুন।",
      formNote:"আপনার ইমেইল অ্যাপে বার্তা প্রস্তুত হয়ে খুলবে।",
      missingEmail:"কন্টাক্ট ইমেইল এখনো placeholder। প্রকাশের আগে js/main.js এ যোগ করুন।",
      missingSocial:"এই সোশ্যাল লিংক এখনো placeholder। প্রকাশের আগে js/main.js এ যোগ করুন।"
    },
    footer: {
      name:"Md Ataullah Al Mahmud Alif",
      copy:"Building Opportunities for a Better Future",
      quick:"দ্রুত লিংক",
      connect:"যোগাযোগ",
      rights:"ব্যক্তিগত পোর্টফোলিও",
      philosophy:"Exploring Technology, Building Ideas, Creating Impact"
    },
    seo: {
      homeTitle:"Ataullah Al Mahmud | Md Ataullah Al Mahmud Alif",
      homeDesc:"Ataullah Al Mahmud, যিনি Alif নামেও পরিচিত, তার portfolio। প্রযুক্তি, ধারণা, digital work এবং ভবিষ্যৎ সম্ভাবনা নিয়ে শেখা ও কাজের portfolio।",
      aboutTitle:"পরিচয় | Ataullah Al Mahmud",
      aboutDesc:"Md Ataullah Al Mahmud Alif এর পরিচয়, আগ্রহ, digital work, শিক্ষা এবং ভাষা।",
      visionTitle:"ভিশন | Ataullah Al Mahmud",
      visionDesc:"Md Ataullah Al Mahmud Alif এর future vision, planned education technology work এবং aspirational direction।",
      projectsTitle:"প্রকল্প | Ataullah Al Mahmud",
      projectsDesc:"Md Ataullah Al Mahmud Alif এর completed work, in progress portfolio, research preprint এবং planned ideas।",
      skillsTitle:"দক্ষতা | Ataullah Al Mahmud",
      skillsDesc:"Md Ataullah Al Mahmud Alif এর web development, SEO, AI tools, cybersecurity এবং অন্যান্য skill।",
      journeyTitle:"যাত্রা | Ataullah Al Mahmud",
      journeyDesc:"Md Ataullah Al Mahmud Alif এর service, training, teaching, organizing এবং student club journey।",
      certificatesTitle:"সনদ | Ataullah Al Mahmud",
      certificatesDesc:"Md Ataullah Al Mahmud Alif এর learning credentials এবং simulations।",
      contactTitle:"যোগাযোগ | Ataullah Al Mahmud",
      contactDesc:"Email এবং social links এর মাধ্যমে Md Ataullah Al Mahmud Alif এর সঙ্গে যোগাযোগ করুন।"
    }
  }
};

const pageMeta = {
  index: ["seo.homeTitle","seo.homeDesc"],
  about: ["seo.aboutTitle","seo.aboutDesc"],
  vision: ["seo.visionTitle","seo.visionDesc"],
  projects: ["seo.projectsTitle","seo.projectsDesc"],
  skills: ["seo.skillsTitle","seo.skillsDesc"],
  journey: ["seo.journeyTitle","seo.journeyDesc"],
  certificates: ["seo.certificatesTitle","seo.certificatesDesc"],
  contact: ["seo.contactTitle","seo.contactDesc"]
};

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const pointerFine = window.matchMedia("(pointer: fine)").matches;
const $ = (selector, scope=document) => scope.querySelector(selector);
const $$ = (selector, scope=document) => [...scope.querySelectorAll(selector)];

function getPathValue(obj, path){
  return path.split(".").reduce((value,key)=>value?.[key],obj);
}

function safeStorageGet(key){
  try{return localStorage.getItem(key)}catch{return null}
}
function safeStorageSet(key,value){
  try{localStorage.setItem(key,value)}catch{}
}

function applyLanguage(lang){
  const activeLang = I18N[lang] ? lang : "en";
  document.documentElement.lang = activeLang === "bn" ? "bn" : "en";
  document.documentElement.dir = "ltr";
  $$("[data-i18n]").forEach(el=>{
    const value = getPathValue(I18N[activeLang],el.dataset.i18n);
    if(value !== undefined) el.textContent = value;
  });
  $$("[data-i18n-placeholder]").forEach(el=>{
    const value = getPathValue(I18N[activeLang],el.dataset.i18nPlaceholder);
    if(value !== undefined) el.setAttribute("placeholder",value);
  });
  $$("[data-i18n-aria]").forEach(el=>{
    const value = getPathValue(I18N[activeLang],el.dataset.i18nAria);
    if(value !== undefined) el.setAttribute("aria-label",value);
  });
  $$("[data-i18n-title]").forEach(el=>{
    const value = getPathValue(I18N[activeLang],el.dataset.i18nTitle);
    if(value !== undefined) el.setAttribute("title",value);
  });
  const page = document.body.dataset.page || "index";
  const meta = pageMeta[page];
  if(meta){
    document.title = getPathValue(I18N[activeLang],meta[0]);
    const description = $('meta[name="description"]');
    if(description) description.content = getPathValue(I18N[activeLang],meta[1]);
    const ogTitle = $('meta[property="og:title"]');
    const ogDesc = $('meta[property="og:description"]');
    if(ogTitle) ogTitle.content = getPathValue(I18N[activeLang],meta[0]);
    if(ogDesc) ogDesc.content = getPathValue(I18N[activeLang],meta[1]);
  }
  const button = $("#language-toggle");
  if(button) button.textContent = getPathValue(I18N[activeLang],"common.language");
  safeStorageSet("du-language",activeLang);
  document.dispatchEvent(new CustomEvent("languagechange",{detail:{lang:activeLang}}));
}

function initLanguage(){
  const saved = safeStorageGet("du-language");
  applyLanguage(saved === "bn" ? "bn" : "en");
  $("#language-toggle")?.addEventListener("click",()=>{
    const next = document.documentElement.lang === "bn" ? "en" : "bn";
    applyLanguage(next);
  });
}

function initTheme(){
  const saved = safeStorageGet("du-theme");
  const systemLight = window.matchMedia("(prefers-color-scheme: light)").matches;
  const theme = saved || (systemLight ? "light" : "dark");
  document.documentElement.dataset.theme = theme;
  $("#theme-toggle")?.addEventListener("click",()=>{
    const next = document.documentElement.dataset.theme === "light" ? "dark" : "light";
    document.documentElement.dataset.theme = next;
    safeStorageSet("du-theme",next);
  });
}

function initNavigation(){
  const page = document.body.dataset.page || "index";
  $$("[data-page-link]").forEach(link=>{
    const target = link.getAttribute("href")?.replace(".html","").replace("./","");
    if((page === "index" && (target === "" || target === "index")) || target === page){
      link.setAttribute("aria-current","page");
    }
    link.addEventListener("click",event=>{
      const href = link.getAttribute("href");
      if(!href || href.startsWith("#")) return;
      if(prefersReducedMotion) return;
      event.preventDefault();
      document.body.classList.add("is-transitioning");
      window.setTimeout(()=>window.location.href = href,430);
    });
  });

  const menu = $("#mobile-menu");
  const menuButton = $("#menu-toggle");
  const closeMenu = ()=>{
    menu?.classList.remove("is-open");
    document.body.classList.remove("menu-open");
    menuButton?.setAttribute("aria-expanded","false");
  };
  menuButton?.addEventListener("click",()=>{
    const open = !menu?.classList.contains("is-open");
    menu?.classList.toggle("is-open",open);
    document.body.classList.toggle("menu-open",open);
    menuButton.setAttribute("aria-expanded",String(open));
  });
  $$(".mobile-links a").forEach(link=>link.addEventListener("click",closeMenu));
  document.addEventListener("keydown",e=>{
    if(e.key === "Escape") closeMenu();
  });
}

function initCursor(){
  if(!pointerFine || prefersReducedMotion) return;
  const dot = $("#cursor-dot"), ring = $("#cursor-ring");
  if(!dot || !ring) return;
  document.body.classList.add("cursor-active");
  let x=window.innerWidth/2,y=window.innerHeight/2,rx=x,ry=y;
  window.addEventListener("pointermove",e=>{
    x=e.clientX;y=e.clientY;
    dot.style.left=`${x}px`;dot.style.top=`${y}px`;
  },{passive:true});
  const render=()=>{
    rx+=(x-rx)*.18;ry+=(y-ry)*.18;
    ring.style.left=`${rx}px`;ring.style.top=`${ry}px`;
    requestAnimationFrame(render);
  };
  render();
  $$("a,button,.card,input,textarea").forEach(el=>{
    el.addEventListener("mouseenter",()=>document.body.classList.add("cursor-hover"));
    el.addEventListener("mouseleave",()=>document.body.classList.remove("cursor-hover"));
  });
}

function initReveals(){
  const items = $$(".reveal,[data-split]");
  if(prefersReducedMotion){items.forEach(el=>el.classList.add("is-visible"));return;}
  const observer = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },{threshold:.12});
  items.forEach(el=>{
    if(el.dataset.split !== undefined && !el.dataset.splitReady){
      const text=el.textContent.trim();
      el.textContent="";
      [...text].forEach((char,index)=>{
        const span=document.createElement("span");
        span.className="char";
        span.textContent=char===" " ? "\u00a0" : char;
        span.style.transitionDelay=`${Math.min(index*0.018,.45)}s`;
        el.appendChild(span);
      });
      el.dataset.splitReady="true";
    }
    observer.observe(el);
  });
}

function initCards(){
  if(!pointerFine || prefersReducedMotion) return;
  $$(".card").forEach(card=>{
    card.addEventListener("pointermove",e=>{
      const r=card.getBoundingClientRect();
      const x=(e.clientX-r.left)/r.width;
      const y=(e.clientY-r.top)/r.height;
      card.style.setProperty("--mx",`${x*100}%`);
      card.style.setProperty("--my",`${y*100}%`);
      card.style.transform=`perspective(900px) rotateX(${(0.5-y)*4}deg) rotateY(${(x-0.5)*4}deg) translateY(-5px)`;
    });
    card.addEventListener("pointerleave",()=>{
      card.style.transform="";
    });
  });
}

function initMagnetic(){
  if(!pointerFine || prefersReducedMotion) return;
  $$(".magnetic").forEach(el=>{
    el.addEventListener("pointermove",e=>{
      const r=el.getBoundingClientRect();
      const x=e.clientX-(r.left+r.width/2);
      const y=e.clientY-(r.top+r.height/2);
      el.style.transform=`translate(${x*.12}px,${y*.12}px)`;
    });
    el.addEventListener("pointerleave",()=>el.style.transform="");
  });
}

function initBackTop(){
  const btn=$("#back-top");
  if(!btn) return;
  const update=()=>btn.classList.toggle("is-visible",window.scrollY>700);
  window.addEventListener("scroll",update,{passive:true});
  btn.addEventListener("click",()=>window.scrollTo({top:0,behavior:prefersReducedMotion?"auto":"smooth"}));
  update();
}

function initTimeline(){
  const timeline=$(".timeline");
  if(!timeline) return;
  const progress=timeline.querySelector(".timeline-progress");
  const items=$$(".timeline-item",timeline);
  const update=()=>{
    const r=timeline.getBoundingClientRect();
    const viewport=window.innerHeight;
    const ratio=Math.max(0,Math.min(1,(viewport*.72-r.top)/(r.height-viewport*.18)));
    if(progress) progress.style.setProperty("--progress",`${ratio*100}%`);
    items.forEach(item=>{
      const ir=item.getBoundingClientRect();
      item.classList.toggle("is-active",ir.top<viewport*.72 && ir.bottom>viewport*.18);
    });
  };
  window.addEventListener("scroll",update,{passive:true});
  update();
}

function createCanvasController(canvas,draw){
  if(!canvas) return null;
  const ctx=canvas.getContext("2d");
  if(!ctx) return null;
  let width=0,height=0,dpr=1,visible=true,frame=0,last=0;
  const resize=()=>{
    const rect=canvas.getBoundingClientRect();
    dpr=Math.min(window.devicePixelRatio||1,2);
    width=Math.max(1,Math.floor(rect.width));
    height=Math.max(1,Math.floor(rect.height));
    canvas.width=Math.floor(width*dpr);canvas.height=Math.floor(height*dpr);
    ctx.setTransform(dpr,0,0,dpr,0,0);
  };
  const observer=new IntersectionObserver(entries=>{
    visible=entries[0]?.isIntersecting ?? true;
    if(visible && !prefersReducedMotion) start();
  },{threshold:0.01});
  observer.observe(canvas);
  const start=()=>{if(frame||prefersReducedMotion||!visible)return;frame=requestAnimationFrame(loop)};
  const loop=time=>{
    frame=0;
    if(!visible)return;
    const dt=Math.min((time-last)/1000||.016,.04);last=time;
    ctx.clearRect(0,0,width,height);
    draw(ctx,width,height,dt,time/1000);
    frame=requestAnimationFrame(loop);
  };
  window.addEventListener("resize",resize,{passive:true});
  resize();
  if(prefersReducedMotion){draw(ctx,width,height,0,0)}
  else start();
  return {resize};
}

function initHomeParticles(){
  const canvas=$("#home-canvas");
  if(!canvas || prefersReducedMotion) return;
  const particles=[];
  let mouse={x:-9999,y:-9999};
  const controller=createCanvasController(canvas,(ctx,w,h,dt,t)=>{
    const count=Math.max(18,Math.floor(Math.min(90,w*h/12000)));
    while(particles.length<count){
      particles.push({x:Math.random()*w,y:Math.random()*h,vx:(Math.random()-.5)*.25,vy:(Math.random()-.5)*.25,r:Math.random()*1.5+.5});
    }
    particles.length=count;
    particles.forEach(p=>{
      const dx=mouse.x-p.x,dy=mouse.y-p.y,dist=Math.hypot(dx,dy);
      if(dist<150 && dist>1){p.vx-=dx/dist*.018;p.vy-=dy/dist*.018}
      p.x+=p.vx;p.y+=p.vy;p.vx*=.998;p.vy*=.998;
      if(p.x<0)p.x=w;if(p.x>w)p.x=0;if(p.y<0)p.y=h;if(p.y>h)p.y=0;
      ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);ctx.fillStyle="rgba(244,241,232,.55)";ctx.fill();
    });
    for(let i=0;i<particles.length;i++){
      for(let j=i+1;j<particles.length;j++){
        const a=particles[i],b=particles[j],d=Math.hypot(a.x-b.x,a.y-b.y);
        if(d<115){
          ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.lineTo(b.x,b.y);
          ctx.strokeStyle=`rgba(255,77,46,${(1-d/115)*.18})`;ctx.lineWidth=.7;ctx.stroke();
        }
      }
    }
  });
  canvas.addEventListener("pointermove",e=>{
    const r=canvas.getBoundingClientRect();mouse.x=e.clientX-r.left;mouse.y=e.clientY-r.top;
  },{passive:true});
  canvas.addEventListener("pointerleave",()=>mouse={x:-9999,y:-9999});
  return controller;
}

function initNetworkCanvas(){
  const canvas=$("#network-canvas");
  if(!canvas || prefersReducedMotion) return;
  const nodes=[];
  createCanvasController(canvas,(ctx,w,h,dt,t)=>{
    const target=Math.max(14,Math.floor(Math.min(55,w*h/18000)));
    while(nodes.length<target) nodes.push({x:Math.random()*w,y:Math.random()*h,tx:Math.random()*w,ty:Math.random()*h,p:.5+Math.random()});
    nodes.length=target;
    nodes.forEach(n=>{
      n.tx=w*(.12+.76*(.5+.5*Math.sin(t*.12+n.p*8))*.8);
      n.ty=h*(.12+.76*(.5+.5*Math.cos(t*.14+n.p*5))*.8);
      n.x+=(n.tx-n.x)*.0025;n.y+=(n.ty-n.y)*.0025;
    });
    for(let i=0;i<nodes.length;i++){
      for(let j=i+1;j<nodes.length;j++){
        const a=nodes[i],b=nodes[j],d=Math.hypot(a.x-b.x,a.y-b.y);
        if(d<145){
          ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.lineTo(b.x,b.y);
          ctx.strokeStyle=`rgba(255,77,46,${(1-d/145)*.16})`;ctx.stroke();
        }
      }
    }
    nodes.forEach((n,i)=>{
      ctx.beginPath();ctx.arc(n.x,n.y,1.7+(i%3)*.7,0,Math.PI*2);
      ctx.fillStyle=i%5===0?"rgba(217,182,111,.9)":"rgba(255,77,46,.78)";ctx.fill();
    });
  });
}

function initSkillsCanvas(){
  const canvas=$("#skills-canvas");
  if(!canvas || prefersReducedMotion) return;
  const nodes=[];
  createCanvasController(canvas,(ctx,w,h,dt,t)=>{
    const count=Math.max(10,Math.floor(Math.min(24,w*h/28000)));
    while(nodes.length<count)nodes.push({x:Math.random()*w,y:Math.random()*h,vx:(Math.random()-.5)*.45,vy:(Math.random()-.5)*.45,r:3+Math.random()*3});
    nodes.length=count;
    nodes.forEach(n=>{
      n.x+=n.vx;n.y+=n.vy;
      if(n.x<n.r||n.x>w-n.r)n.vx*=-1;
      if(n.y<n.r||n.y>h-n.r)n.vy*=-1;
    });
    for(let i=0;i<nodes.length;i++){
      for(let j=i+1;j<nodes.length;j++){
        const a=nodes[i],b=nodes[j],d=Math.hypot(a.x-b.x,a.y-b.y);
        if(d<180){
          ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.lineTo(b.x,b.y);
          ctx.strokeStyle=`rgba(244,241,232,${(1-d/180)*.11})`;ctx.stroke();
        }
      }
    }
    nodes.forEach((n,i)=>{
      ctx.beginPath();ctx.arc(n.x,n.y,n.r,0,Math.PI*2);
      ctx.fillStyle=i%4===0?"rgba(217,182,111,.9)":"rgba(255,77,46,.82)";ctx.fill();
    });
  });
}

function initForm(){
  const form=$("#contact-form");
  if(!form) return;
  form.addEventListener("submit",event=>{
    event.preventDefault();
    const email=CONFIG.contactEmail.trim();
    if(!email || email.includes("[YOUR-EMAIL]")){
      const note=$("#form-note");
      if(note) note.textContent=I18N[document.documentElement.lang==="bn"?"bn":"en"].contact.missingEmail;
      return;
    }
    const data=new FormData(form);
    const subject=`Portfolio message from ${String(data.get("name")||"Visitor")}`;
    const body=[
      `Name: ${data.get("name")||""}`,
      `Email: ${data.get("email")||""}`,
      "",
      String(data.get("message")||"")
    ].join("\n");
    window.location.href=`mailto:${encodeURIComponent(email)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
}

function initPlaceholders(){
  $$("[data-placeholder=\"future-project\"]").forEach(el=>el.textContent=CONFIG.futureProjectLabel);
}

function initSocials(){
  const map=CONFIG.socialLinks;
  $$("[data-social]").forEach(link=>{
    const key=link.dataset.social;
    const value=map[key];
    if(!value || value.includes("[YOUR-")){
      link.setAttribute("href","#");
      link.setAttribute("aria-disabled","true");
      link.addEventListener("click",e=>{
        e.preventDefault();
        const note=$("#social-note");
        if(note) note.textContent=I18N[document.documentElement.lang==="bn"?"bn":"en"].contact.missingSocial;
      });
    }else{
      link.href=value;
      link.target="_blank";
      link.rel="noopener noreferrer";
    }
  });
}

function initPublicationLink(){
  const btn = $("#publication-link");
  if(btn && CONFIG.publicationUrl){
    btn.href = CONFIG.publicationUrl;
    btn.target = "_blank";
    btn.rel = "noopener noreferrer";
  }
}

function initOrbit(){
  const orbit=$("#orbit-spin");
  if(!orbit || prefersReducedMotion) return;
  let paused=false;
  orbit.addEventListener("pointerenter",()=>paused=true);
  orbit.addEventListener("pointerleave",()=>paused=false);
  const loop=()=>{orbit.style.animationPlayState=paused?"paused":"running";requestAnimationFrame(loop)};
  loop();
}

document.addEventListener("DOMContentLoaded",()=>{
  initLanguage();
  initTheme();
  initNavigation();
  initCursor();
  initReveals();
  initCards();
  initMagnetic();
  initBackTop();
  initTimeline();
  initHomeParticles();
  initNetworkCanvas();
  initSkillsCanvas();
  initForm();
  initSocials();
  initPlaceholders();
  initPublicationLink();
  initOrbit();
  const year = $("#year");
  if(year) year.textContent = String(new Date().getFullYear());
});
