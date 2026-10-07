// Single source of truth for the school's details and homepage copy.
// Copy comes from the current premiereacademyng.org homepage, lightly edited for grammar, unless marked NEW.
// Every `image: null` is a placeholder: put the file in /public/img and set the path, e.g. image: "/img/hero.jpg".

const LIVE = "https://premiereacademyng.org";

export type Pic = { image: string | null; alt: string; label: string };

export const site = {
  name: "Premiere Academy",
  tagline: "The pride of the nation",
  session: "2026/2027",
  address: "Premiere Street, FHA, Lugbe, Abuja",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Premiere+Academy+Lugbe+Abuja",
  email: "info@premiereacademyng.org",
  phones: [
    { label: "+234 903 387 0155", href: "tel:+2349033870155" },
    { label: "+234 706 979 7855", href: "tel:+2347069797855" },
  ],
  whatsapp: "https://wa.me/2349033870155", // TODO: confirm which number the school uses for WhatsApp
  socials: { facebook: "#", instagram: "#", x: "#", youtube: "#", linkedin: "#" }, // TODO: real profile URLs
  links: {
    enrol: `${LIVE}/index.php`, // TODO: the live "Enrol Now" target
    about: `${LIVE}/index.php`, // TODO
    news: `${LIVE}/index.php`, // TODO: news listing page
    tour: `${LIVE}/index.php`, // TODO: virtual tour video URL
    video60: `${LIVE}/index.php`, // TODO: "Premiere Academy in 60 Seconds" video URL
  },
  logo: null as string | null, // TODO: "/img/logo.png" (transparent PNG or SVG)
  heroVideo: null as string | null, // TODO: "/video/hero.mp4", a short muted loop like the school's event footage
};

/** Utility links in the header (Walker-style: Inquire / Visit / Summer / Web). */
export const utilityLinks = [
  { label: "Enrol", href: site.links.enrol },
  { label: "Virtual Tour", href: site.links.tour },
  { label: "News", href: "#news" },
  { label: "Contact", href: "#contact" },
];

/** Full-screen menu. */
export const menu = [
  { label: "About Premiere", href: "#welcome" },
  { label: "What We Offer", href: "#offer" },
  { label: "Results", href: "#results" },
  { label: "Our Purpose", href: "#purpose" },
  { label: "Why Premiere", href: "#why" },
  { label: "The Facts", href: "#facts" },
  { label: "News", href: "#news" },
  { label: "Admission", href: "#admission" },
];

export const hero = {
  intro:
    "Premiere Academy is an international school with excellent boarding facilities, where personal development, community service, team work and leadership inspire confidence in every student. This is education beyond academic…",
  word: "Excellence",
  media: { image: null, alt: "Premiere Academy students at a school event", label: "Hero video: students at a school event" } as Pic,
};

export const offer = [
  {
    title: "Future Skills",
    body: "Robotics, 3-D printing, AI, graphic design, coding, music and art, alongside conventional studies.",
    pic: { image: null, alt: "Students building a robot", label: "Robotics lab" } as Pic,
  },
  {
    title: "Test Prep",
    body: "Specialised training for IELTS, German, DELF, DALF, SAT and more, opening doors to global opportunities.",
    pic: { image: null, alt: "Students preparing for exams", label: "Exam preparation" } as Pic,
  },
  {
    title: "Leadership",
    body: "Empowering every child to lead with confidence at our renowned co-education boarding school.",
    pic: { image: null, alt: "Student leaders in blazers", label: "Student leaders" } as Pic,
  },
  {
    title: "Boarding",
    body: "Newly refurbished hostels, nurses on duty 24/7 and trained house parents. A safe home away from home.",
    pic: { image: null, alt: "The Premiere Academy boarding house", label: "Boarding house" } as Pic,
  },
];

export const results = {
  eyebrow: "In WAEC 2025, our students achieved a",
  headline: "92% credit pass",
  body: "Over time, our results in external exams show that our students have the skills to defeat the best, the resilience to thrive under pressure and the attitude to capitalise on opportunities that lie before them.",
  more: [
    "Special lessons for WAEC and UTME coaching come with personalised attention, and we celebrate our Learning Support Programmes.",
    "The goal of our secondary curriculum is to go beyond the mere acquisition of knowledge and help students achieve a thorough comprehension. With the help of our certified teachers, we set up efficient learning processes so that students develop into individuals who can think independently.",
  ],
  cutout: { image: null, alt: "A Premiere Academy student in uniform", label: "Cut-out photo: student in blazer" } as Pic,
};

export const purpose = {
  eyebrow: "Our purpose:",
  headline: "Compete with the best",
  body: "Our purpose is to ensure that Premiere Academy students have the skills and qualifications to compete with the best, the resilience to thrive under pressure and the attitude to capitalise on the opportunity that lies before them. Our vision is that every student is guided and shaped by the standards of critical thinking, high achievements, ethical principles and discipline.",
  columns: [
    [
      { image: null, alt: "Students in a science laboratory", label: "Science lab" },
      { image: null, alt: "Students in the library", label: "Library" },
      { image: null, alt: "A student smiling in class", label: "Classroom" },
    ],
    [
      { image: null, alt: "The student orchestra", label: "Orchestra" },
      { image: null, alt: "Students at the sports complex", label: "Sports complex" },
      { image: null, alt: "Students in blazers", label: "Students" },
    ],
    [
      { image: null, alt: "Students at the robotics fair", label: "Robotics fair" },
      { image: null, alt: "Students at chaplaincy", label: "Chaplaincy" },
      { image: null, alt: "Students on community service", label: "Community service" },
    ],
  ] as Pic[][],
};

export const why = [
  {
    title: "Academic Excellence",
    body: "Special lessons for WAEC and UTME coaching, with personalised attention. We celebrate our Learning Support Programmes.",
    cutout: { image: null, alt: "A student holding books", label: "Cut-out: student with books" } as Pic,
  },
  {
    title: "Character & Faith",
    body: "The Premiere Young Leaders Chaplaincy trains students in values, leadership and service.",
    cutout: { image: null, alt: "A student in the chaplaincy", label: "Cut-out: student leader" } as Pic,
  },
  {
    title: "Safe Environment",
    body: "Full boarding, CCTV, nurses on duty 24/7 and trained house parents.",
    cutout: { image: null, alt: "A boarding student", label: "Cut-out: boarder" } as Pic,
  },
  {
    title: "Facilities",
    body: "Newly refurbished hostels, science laboratories, a library and a sports complex.",
    cutout: { image: null, alt: "A student athlete", label: "Cut-out: athlete" } as Pic,
  },
];

// The live site shows "1564" above the 92% label. The client chose to show 92%. Confirm with the school.
export const facts = [
  { value: 92, suffix: "%", label: "Credit pass, WAEC 2025", pic: { image: null, alt: "Students celebrating results", label: "Results day" } as Pic },
  { value: 1700, suffix: "+", label: "University admissions", pic: { image: null, alt: "Graduates", label: "Graduates" } as Pic },
  { value: 120, suffix: "", label: "Global achievements", pic: { image: null, alt: "Students at a United Nations event", label: "UN, science & tech" } as Pic },
  { value: 24, suffix: "/7", label: "Security & stable power", pic: { image: null, alt: "The campus at night", label: "Campus" } as Pic },
];

// TODO: wire to the school's news feed. These are the latest posts shown on the live homepage.
export const news = [
  {
    date: "9 January 2026",
    title: "Premiere Academy in Review: Our Defining High Points of 2025",
    excerpt: "As a new academic year and term begin, many parents are asking an important question: what kind of…",
    pic: { image: null, alt: "Students at the year-in-review event", label: "Year in review" } as Pic,
    href: site.links.news,
  },
  {
    date: "24 December 2025",
    title: "Merry Christmas: A Celebration of Love, Peace and Unity",
    excerpt: "Premiere Academy came alive with the warmth and wonder of the Christmas season during its annual…",
    pic: { image: null, alt: "The student orchestra at the Christmas concert", label: "Christmas concert" } as Pic,
    href: site.links.news,
  },
  {
    date: null,
    title: "Giving Back to Society: A Visit to LEA Primary Schools",
    excerpt: "Premiere Academy visited the L.E.A. primary school, where school uniforms were donated to thirty…",
    pic: { image: null, alt: "Students at the LEA primary school visit", label: "Community service" } as Pic,
    href: site.links.news,
  },
];

export const admission = {
  headline: "Join the pride of the nation",
  body: "We admit students from different parts of the world irrespective of their race and creed, and we partner with their parents in the journey of developing them to become future leaders through our rigorous educational programme.",
};
