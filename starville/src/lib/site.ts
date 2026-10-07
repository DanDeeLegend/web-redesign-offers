// Single source of truth for the school's details and homepage copy.
// Copy is taken from the current starvilleschool.com unless noted in README.md.

const LIVE = "https://www.starvilleschool.com";

export const site = {
  name: "Starville School",
  motto: "Children, God's Heritage",
  founded: 2007,
  address: ["Plot 2305, beside Gilmor Construction Company", "Jahi II, Abuja, Nigeria"],
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Starville+School+Jahi+Abuja",
  hours: "Mon – Fri, 8:00am – 5:00pm",
  phones: [
    { label: "+234 916 696 2900", href: "tel:+2349166962900" },
    { label: "+234 904 644 4441", href: "tel:+2349046444441" },
  ],
  emails: [
    { label: "Admissions", value: "admissions@starvilleschool.net" },
    { label: "Employment", value: "employment@starvilleschool.net" },
    { label: "General", value: "enquiries@starvilleschool.net" },
  ],
  socials: {
    facebook: "https://www.facebook.com/starvilleschool/",
    x: "https://x.com/starvilleschool",
    instagram: "#", // TODO: confirm handle with the school
  },
  links: {
    enrol: `${LIVE}/admissionenquiry`,
    about: `${LIVE}/about-us`,
    secondary: `${LIVE}/secondary`,
    tour: LIVE, // TODO: replace with the tour video URL
  },
};

export const nav = [
  { label: "About", href: site.links.about },
  { label: "Admissions", href: "#admissions" },
  { label: "Gallery", href: "#life" },
  { label: "Contact", href: "#contact" },
];

export const stages = [
  {
    id: "early-years",
    number: "01",
    title: "Early Years",
    tag: "Crèche · Pre-school · Nursery",
    blurb: "Early Years lays the groundwork for a successful future.",
    body: "Play-rich classrooms where our youngest learners build confidence, curiosity and the social, cognitive, emotional and physical foundations for everything that follows.",
    image: "/img/early-years.jpg",
    alt: "A young pupil concentrating on a hands-on craft activity",
    position: "30% 55%",
    href: "#stages",
  },
  {
    id: "primary",
    number: "02",
    title: "Primary",
    tag: "Primary School",
    blurb: "An enabling environment to develop every talent.",
    body: "An enabling environment for children to develop their social, cognitive, emotional and physical talents to their full potential.",
    image: "/img/primary.jpg",
    alt: "Primary pupils playing hopscotch in a bright school corridor",
    position: "50% 10%",
    href: "#stages",
  },
  {
    id: "secondary",
    number: "03",
    title: "Secondary",
    tag: "Secondary School",
    blurb: "Ready to thrive tomorrow.",
    body: "Getting ready for the future? Gain the knowledge, skills and experience needed to thrive tomorrow, as a Cambridge International School.",
    image: "/img/secondary.jpg",
    alt: "A secondary student in a lab coat carrying out a science experiment",
    position: "60% 40%",
    href: site.links.secondary,
  },
] as const;

export const gallery = [
  { src: "/img/hero-classroom.jpg", alt: "Secondary students working quietly in a bright classroom", caption: "Focused classrooms", className: "md:col-span-2 md:row-span-2" },
  { src: "/img/welcome-corridor.jpg", alt: "Colourful mural reading 'Welcome to the happy place'", caption: "Welcome to the happy place", className: "" },
  { src: "/img/cookery.jpg", alt: "Students in chef's hats cooking together", caption: "Learning by doing", className: "" },
  { src: "/img/students.jpg", alt: "Smiling secondary students gathered in the school hall", caption: "Future leaders", className: "md:col-span-2" },
  { src: "/img/primary.jpg", alt: "Primary pupils playing hopscotch", caption: "Joy in every corridor", className: "md:row-span-2" },
  { src: "/img/early-years.jpg", alt: "An Early Years pupil exploring a craft activity", caption: "Little hands, big ideas", className: "md:row-span-2" },
  { src: "/img/secondary.jpg", alt: "A student conducting a science experiment", caption: "Curious minds", className: "md:col-span-2" },
] as const;

export const partners = [
  { src: "/img/partner-cambridge.png", alt: "Cambridge Assessment International Education", w: 325, h: 105 },
  { src: "/img/partner-educare.png", alt: "Educare", w: 368, h: 110 },
  { src: "/img/partner-moodle.png", alt: "Moodle", w: 265, h: 80 },
  { src: "/img/partner-google-classroom.png", alt: "Google Classroom", w: 170, h: 172 },
];

// Answers only state facts published by the school. See README.md for items to confirm.
export const faqs = [
  {
    q: "Which age groups do you admit?",
    a: "We welcome children from Crèche and Pre-school through Nursery and Primary, all the way to Secondary School.",
  },
  {
    q: "How do I apply?",
    a: "Complete our online admission enquiry form and our admissions team will be in touch. You can also email admissions@starvilleschool.net or call +234 916 696 2900.",
  },
  {
    q: "Can we visit the school before applying?",
    a: "Yes. Call or email the admissions office during office hours (Monday to Friday, 8:00am to 5:00pm) to arrange a visit to our campus in Jahi.",
  },
  {
    q: "What curriculum do you follow?",
    a: "Starville is a Cambridge International School, partnered with Cambridge Assessment International Education, and our teaching is grounded in Christian values.",
  },
  {
    q: "Where is the school?",
    a: "Plot 2305, beside Gilmor Construction Company, Jahi II, Abuja, Nigeria.",
  },
];
