// Single source of truth for the school's details and homepage copy.
// Copy comes from the current premiereacademyng.org homepage, lightly edited for grammar, unless marked NEW.
// Every `image: null` is a placeholder: put the file in /public/img and set the path, e.g. image: "/img/lead.jpg".

const LIVE = "https://premiereacademyng.org";

export type Pic = { image: string | null; alt: string; caption: string };

export const site = {
  name: "Premiere Academy",
  tagline: "The pride of the nation",
  session: "2026/2027",
  address: "Premiere Street, FHA, Lugbe, Abuja",
  city: "Lugbe, Abuja",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Premiere+Academy+Lugbe+Abuja",
  email: "info@premiereacademyng.org",
  phones: [
    { label: "+234 903 387 0155", href: "tel:+2349033870155" },
    { label: "+234 706 979 7855", href: "tel:+2347069797855" },
  ],
  whatsapp: "https://wa.me/2349033870155", // TODO: confirm which number the school uses for WhatsApp
  socials: {
    facebook: "#", // TODO: real profile URLs
    instagram: "#",
    x: "#",
    youtube: "#",
    linkedin: "#",
  },
  links: {
    enrol: `${LIVE}/index.php`, // TODO: the live "Enrol Now" target
    about: `${LIVE}/index.php`, // TODO
    news: `${LIVE}/index.php`, // TODO: news listing page
    tour: `${LIVE}/index.php`, // TODO: virtual tour video URL
    video60: `${LIVE}/index.php`, // TODO: "Premiere Academy in 60 Seconds" video URL
  },
  logo: null as string | null, // TODO: "/img/logo.png" (transparent PNG or SVG)
};

/** Chapters double as the site navigation ("In this edition"). */
export const chapters = [
  { num: "I", label: "Welcome", href: "#welcome" },
  { num: "II", label: "The Curriculum", href: "#curriculum" },
  { num: "III", label: "Why Premiere", href: "#why" },
  { num: "IV", label: "News", href: "#news" },
  { num: "V", label: "In 60 Seconds", href: "#film" },
  { num: "VI", label: "Admission", href: "#admission" },
];

export const frontPage = {
  headline: "Education beyond academic excellence.",
  vision:
    "Our vision is that Premiere Academy students are guided and shaped by the standards of critical thinking, high achievements, ethical principles and discipline.",
  lead: { image: null, alt: "Premiere Academy students at a school event", caption: "Premiere Academy students at a school event, Lugbe, Abuja." } as Pic,
};

// The live site shows "1564" above the 92% label. The client chose to show 92%. Confirm with the school.
export const ledger = [
  { value: 92, suffix: "%", label: "Credit pass", note: "WAEC 2025" },
  { value: 1700, suffix: "", label: "Students admitted", note: "to universities" },
  { value: 120, suffix: "", label: "Global achievements", note: "United Nations, Science & Technology" },
  { value: 24, suffix: "/7", label: "Security", note: "CCTV and stable power" },
];

export const welcome = {
  body: [
    "Premiere Academy is an international school with excellent boarding facilities, where personal development, community service, team work and leadership are all key aspects of growing and inspiring confidence in our students.",
    "Over time, our results in external exams show that our students have the skills to defeat the best, the resilience to thrive under pressure and the attitude to capitalise on opportunities that lie before them.",
  ],
  pullQuote: "The skills to defeat the best, the resilience to thrive under pressure.",
  portrait: { image: null, alt: "Two smiling Premiere Academy students in their blazers", caption: "Students in the Premiere blazer." } as Pic,
  features: [
    {
      title: "Awards & Achievements",
      body: "Our secondary curriculum goes beyond the mere acquisition of knowledge, helping students achieve a thorough comprehension.",
    },
    {
      title: "Who We Are",
      body: "Within our design of the Premiere Academy Virtual School Environment we have retained the core elements that make us outstanding.",
    },
    {
      title: "Ongoing Admission",
      body: "We admit students from different parts of the world irrespective of their race, and partner with their parents in the journey of developing them.",
    },
    {
      title: "Certified Teachers",
      body: "Our teachers set up efficient learning processes so that students develop into individuals who can think independently.",
    },
  ],
};

// The six subjects come from the school's "What we offer" flyer. One-line descriptions are NEW.
export const curriculum = {
  intro: "A valuable, innovative education that explores cutting-edge subjects alongside conventional studies.",
  subjects: [
    { title: "Robotics", line: "Design, build and program machines that move.", pic: { image: null, alt: "Students building a robot", caption: "Robotics" } as Pic },
    { title: "3-D Printing", line: "Turn ideas into objects you can hold.", pic: { image: null, alt: "A 3-D printer at work", caption: "3-D printing" } as Pic },
    { title: "Artificial Intelligence", line: "Understand the technology shaping the century.", pic: { image: null, alt: "Students at computers learning about AI", caption: "Artificial intelligence" } as Pic },
    { title: "Graphic Design", line: "Communicate with colour, type and image.", pic: { image: null, alt: "A student working on a graphic design", caption: "Graphic design" } as Pic },
    { title: "Coding", line: "Write software from the very first line.", pic: { image: null, alt: "Students writing code", caption: "Coding" } as Pic },
    { title: "Music & Art", line: "Strings, studios and the confidence to perform.", pic: { image: null, alt: "The student orchestra performing", caption: "Music & art" } as Pic },
  ],
  testPrep: ["IELTS", "German", "DELF", "DALF", "SAT"],
};

export const why = {
  intro:
    "Our purpose is to ensure that Premiere Academy students have the skills and qualifications to compete with the best, the resilience to thrive under pressure and the attitude to capitalise on the opportunities that lie before them.",
  reasons: [
    {
      title: "Academic Excellence",
      body: "Special lessons for WAEC and UTME coaching, with personalised attention. We celebrate our Learning Support Programmes.",
      pic: { image: null, alt: "Students studying with a teacher", caption: "Academic excellence" } as Pic,
    },
    {
      title: "Character & Faith",
      body: "The Premiere Young Leaders Chaplaincy trains students in values, leadership and service.",
      pic: { image: null, alt: "Students at the chaplaincy", caption: "Character & faith" } as Pic,
    },
    {
      title: "Safe Environment",
      body: "Full boarding, CCTV, nurses on duty 24/7 and trained house parents.",
      pic: { image: null, alt: "The boarding house", caption: "Safe environment" } as Pic,
    },
    {
      title: "Facilities",
      body: "Newly refurbished hostels, science laboratories, a library and a sports complex.",
      pic: { image: null, alt: "The Premiere Academy campus", caption: "Facilities" } as Pic,
    },
  ],
};

// TODO: wire to the school's news feed. These are the latest posts shown on the live homepage.
export const news = [
  {
    date: "9 January 2026",
    kicker: "Year in review",
    title: "Premiere Academy in Review: Our Defining High Points of 2025",
    excerpt: "As a new academic year and term begin, many parents are asking an important question: what kind of…",
    pic: { image: null, alt: "Students at the year-in-review event", caption: "The year in review." } as Pic,
    href: site.links.news,
  },
  {
    date: "24 December 2025",
    kicker: "Celebration",
    title: "Merry Christmas: A Celebration of Love, Peace and Unity",
    excerpt: "Premiere Academy came alive with the warmth and wonder of the Christmas season during its annual…",
    pic: { image: null, alt: "The student orchestra at the Christmas concert", caption: "The Christmas concert." } as Pic,
    href: site.links.news,
  },
  {
    date: null,
    kicker: "Community",
    title: "Giving Back to Society: A Visit to LEA Primary Schools",
    excerpt: "Premiere Academy visited the L.E.A. primary school, where school uniforms were donated to thirty…",
    pic: { image: null, alt: "Students at the LEA primary school visit", caption: "Community service." } as Pic,
    href: site.links.news,
  },
];

export const film = {
  quote:
    "We admit students from different parts of the world irrespective of their race and creed, and we partner with their parents in the journey of developing them to become future leaders through our rigorous educational programme.",
  still: { image: null, alt: "A still from the Premiere Academy film", caption: "Premiere Academy in 60 seconds." } as Pic,
};
