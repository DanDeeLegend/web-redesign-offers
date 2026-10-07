// Single source of truth for Bluebell's details and homepage copy.
// Copy comes from the current bluebell.com.ng homepage unless marked NEW. Photos were cropped from
// screenshots of the live site: swap in the originals (same file names in /public/img) for sharper images.

const LIVE = "https://bluebell.com.ng";

export type Pic = { src: string; alt: string; position?: string };

export const site = {
  name: "Bluebell",
  fullName: "Bluebell Montessori International School",
  founded: 2009,
  phone: { label: "0802 493 6796", href: "tel:+2348024936796" },
  email: "bluebellmontessorischools@gmail.com",
  // NOTE: the footer gives Abuloma; the About text says Trans-Amadi. Confirm which campus address to show.
  address: "10/12 Total Gospel Road, Abuloma, Port Harcourt 500101, Rivers, Nigeria",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Bluebell+Montessori+International+School+Abuloma+Port+Harcourt",
  whatsapp: "https://wa.me/2348024936796", // TODO: confirm the WhatsApp number
  socials: { instagram: "#", facebook: "#" }, // TODO: profile URLs
  links: {
    about: `${LIVE}/about-us`, // TODO: confirm inner-page URLs
    admissions: `${LIVE}/admissions`,
    blog: `${LIVE}/blog`,
    gallery: `${LIVE}/photo-gallery`,
    contact: `${LIVE}/contacts`,
    privacy: `${LIVE}/privacy-policy`,
    eskool: "#", // TODO: EsKool portal URL
  },
};

export const nav = [
  { label: "About", href: "#about" },
  { label: "Programmes", href: "#programmes" },
  { label: "Admissions", href: "#admissions" },
  { label: "Gallery", href: "#life" },
  { label: "News", href: "#news" },
  { label: "Contact", href: "#contact" },
];

export const hero = {
  lead: "A safe, supportive learning environment that helps children grow academically, socially, and confidently.",
  deck: [
    { src: "/img/swings-hero.jpg", alt: "Pupils playing on the swings in the school garden", caption: "Swing time!" },
    { src: "/img/volleyball.jpg", alt: "Students playing volleyball on the school court", caption: "Volleyball after class" },
    { src: "/img/library.jpg", alt: "Pupils reading together in the library", caption: "Our little readers" },
    { src: "/img/classroom.jpg", alt: "Young pupils working at tables with their teacher", caption: "Hands-on learning" },
  ] as (Pic & { caption: string })[],
};

export const about = {
  body: "Bluebell Montessori International School is a co-educational preschool, nursery, primary, and secondary school located in a safe, serene environment in Trans-Amadi, Port Harcourt. Founded in 2009, it is known for its rich curriculum and strong academic outcomes.",
  photos: [
    { src: "/img/table-tennis.jpg", alt: "Students playing table tennis in front of the school building" },
    { src: "/img/corridor.jpg", alt: "A colourful school corridor" },
  ] as Pic[],
};

export const why = [
  { title: "Montessori Learning Approach", body: "Encouraging independence, exploration, and lifelong curiosity.", icon: "book", tint: "sky" },
  { title: "Experienced & Dedicated Teachers", body: "Educators who guide students with patience and expertise.", icon: "teacher", tint: "mint" },
  { title: "Safe and Supportive Environment", body: "A campus where students feel secure and valued.", icon: "shield", tint: "lilac" },
  { title: "Strong Academic Performance", body: "Preparing students for success in examinations and beyond.", icon: "award", tint: "butter" },
  { title: "Character and Leadership Development", body: "Teaching responsibility, integrity, and confidence.", icon: "flag", tint: "blush" },
  { title: "Balanced Learning Experience", body: "Academics combined with creativity, sports, and social growth.", icon: "sparkles", tint: "lime" },
] as const;

export const programmes = [
  { ages: "Ages 0–5", title: "Early Years", body: "Hands-on Montessori discovery for our youngest learners.", pic: { src: "/img/early-years.jpg", alt: "Young children building with colourful blocks" }, tint: "butter" },
  { ages: "Ages 6–12", title: "Primary School", body: "Strong foundations in every subject, with room to explore.", pic: { src: "/img/primary.jpg", alt: "Primary pupils in uniform outside the school" }, tint: "sky" },
  { ages: "Ages 12–18", title: "Secondary School", body: "Rigorous preparation for examinations and life beyond.", pic: { src: "/img/secondary.jpg", alt: "Secondary students in lab coats in a science class", position: "60% 30%" }, tint: "blush" },
] as const;

// Steps 3 and 4 were cut off in the screenshots. Step 4 wording is a placeholder: confirm with the school.
export const admissionSteps = [
  { title: "Book a Tour", body: "Visit the school and learn more about our programs." },
  { title: "Submit Application", body: "Complete the application form for your child." },
  { title: "Student Assessment", body: "Your child meets our teachers for a friendly assessment." }, // TODO: confirm wording
  { title: "Welcome to Bluebell", body: "Receive your offer and prepare for your child's first day." }, // TODO: confirm step 4
];

export const gallery: (Pic & { caption: string })[] = [
  { src: "/img/swings.jpg", alt: "Pupils on the swings", caption: "Playtime in the garden" },
  { src: "/img/classroom.jpg", alt: "Young pupils working with their teacher", caption: "Learning together" },
  { src: "/img/sports-day.jpg", alt: "Students on the sports court", caption: "Game on!" },
  { src: "/img/staff.jpg", alt: "Bluebell staff and students in front of the school", caption: "The Bluebell family" },
  { src: "/img/library.jpg", alt: "Pupils reading in the library", caption: "Story time" },
  { src: "/img/table-tennis.jpg", alt: "Students playing table tennis", caption: "Table tennis tournament" },
];

// TODO: the live carousel has more testimonials; add them here (only one was visible in the screenshots).
export const testimonials = [
  {
    quote: "The school provides a safe and structured environment where children are encouraged to learn and grow.",
    name: "Mrs. Okonkwo",
    role: "Parent of an Early Years student",
    photo: "/img/parent-okonkwo.jpg",
  },
];

// TODO: wire to the school's blog. Excerpts are as shown on the live homepage (the second card repeats the first there).
export const news = [
  { title: "Christmas Carol Celebration", excerpt: "Students and staff came together for a joyful Christmas Carol celebration filled with music, performance…", date: "24 March 2026", pic: { src: "/img/news-carol-stage.jpg", alt: "Pupils performing on stage at the Christmas carol" } },
  { title: "Christmas Carol Celebration", excerpt: "Students and staff came together for a joyful Christmas Carol celebration filled with music, performance…", date: "24 March 2026", pic: { src: "/img/news-carol-guests.jpg", alt: "Parents, staff and pupils at the Christmas carol" } },
  // NEW excerpt: the live site reuses the Christmas text for this post.
  { title: "IWD 2026 Celebration", excerpt: "Celebrating International Women's Day 2026 with our students and staff.", date: "24 March 2026", pic: { src: "/img/news-iwd.jpg", alt: "International Women's Day illustration" } },
];

export const footerBlurb = "A school that provides a calm and secure setting where pupils and students can learn and grow with confidence.";
