// =============================================================================
// Education Counsellor Website Configuration
// =============================================================================
// All site content is configured here. Components render nothing when their
// primary config fields are empty strings or empty arrays.
// =============================================================================

// -----------------------------------------------------------------------------
// Site Config
// -----------------------------------------------------------------------------
export interface SiteConfig {
  title: string;
  description: string;
  language: string;
  keywords: string;
  ogImage: string;
  canonical: string;
}

export const siteConfig: SiteConfig = {
  title: "Education Counsellor - City University Malaysia",
  description: "Professional education counselling services for students seeking admission to City University Malaysia. Guidance on programs, scholarships, and career planning.",
  language: "en",
  keywords: "education counsellor, City University Malaysia, university admission, student counselling, scholarship, higher education, Kota Kinabalu, Petaling Jaya, Cyberjaya, Johor Bahru",
  ogImage: "/images/hero-campus.jpg",
  canonical: "https://yourdomain.com",
};

// -----------------------------------------------------------------------------
// Navigation Config
// -----------------------------------------------------------------------------
export interface NavDropdownItem {
  name: string;
  href: string;
}

export interface NavLink {
  name: string;
  href: string;
  icon: string;
  dropdown?: NavDropdownItem[];
}

export interface NavigationConfig {
  brandName: string;
  brandSubname: string;
  tagline: string;
  navLinks: NavLink[];
  ctaButtonText: string;
}

export const navigationConfig: NavigationConfig = {
  brandName: "CityU",
  brandSubname: "Counsellor",
  tagline: "Your Path to Success",
  navLinks: [
    { name: "Home", href: "#home", icon: "Home" },
    { name: "About", href: "#about", icon: "BookOpen" },
    { name: "Programs", href: "#programs", icon: "Grape" },
    { name: "Testimonials", href: "#testimonials", icon: "Users" },
    { name: "Contact", href: "#contact", icon: "Mail" },
  ],
  ctaButtonText: "Apply Now",
};

// -----------------------------------------------------------------------------
// Preloader Config
// -----------------------------------------------------------------------------
export interface PreloaderConfig {
  brandName: string;
  brandSubname: string;
  yearText: string;
}

export const preloaderConfig: PreloaderConfig = {
  brandName: "CityU",
  brandSubname: "Counsellor",
  yearText: "Est. 1984",
};

// -----------------------------------------------------------------------------
// Hero Config
// -----------------------------------------------------------------------------
export interface HeroStat {
  value: number;
  suffix: string;
  label: string;
}

export interface HeroConfig {
  scriptText: string;
  mainTitle: string;
  ctaButtonText: string;
  ctaTarget: string;
  stats: HeroStat[];
  decorativeText: string;
  backgroundImage: string;
}

export const heroConfig: HeroConfig = {
  scriptText: "Guiding Students to Excellence",
  mainTitle: "Your Future\nStarts Here",
  ctaButtonText: "Get Free Consultation",
  ctaTarget: "#contact",
  stats: [
    { value: 80, suffix: "+", label: "Programs Offered" },
    { value: 35000, suffix: "+", label: "Students Enrolled" },
    { value: 5, suffix: "-Star", label: "QS Rating" },
  ],
  decorativeText: "CITY UNIVERSITY MALAYSIA",
  backgroundImage: "/images/hero-campus.jpg",
};

// -----------------------------------------------------------------------------
// Wine Showcase Config (Programs Section)
// -----------------------------------------------------------------------------
export interface Wine {
  id: string;
  name: string;
  subtitle: string;
  year: string;
  image: string;
  filter: string;
  glowColor: string;
  description: string;
  tastingNotes: string;
  alcohol: string;
  temperature: string;
  aging: string;
}

export interface WineFeature {
  icon: string;
  title: string;
  description: string;
}

export interface WineQuote {
  text: string;
  attribution: string;
  prefix: string;
}

export interface WineShowcaseConfig {
  scriptText: string;
  subtitle: string;
  mainTitle: string;
  wines: Wine[];
  features: WineFeature[];
  quote: WineQuote;
}

export const wineShowcaseConfig: WineShowcaseConfig = {
  scriptText: "Explore Our Offerings",
  subtitle: "ACADEMIC EXCELLENCE",
  mainTitle: "Programs & Courses",
  wines: [
    {
      id: "foundation",
      name: "Foundation",
      subtitle: "Pre-University Program",
      year: "1 Year",
      image: "/images/campus-library.jpg",
      filter: "",
      glowColor: "bg-blue-900/20",
      description: "Build a strong academic foundation with our comprehensive pre-university programs designed to prepare you for undergraduate studies.",
      tastingNotes: "Perfect starting point for students completing SPM or O-Levels. Small class sizes ensure personalized attention.",
      alcohol: "12",
      temperature: "Jan/May/Sep",
      aging: "12 Months",
    },
    {
      id: "diploma",
      name: "Diploma",
      subtitle: "Professional Diploma",
      year: "2-3 Years",
      image: "/images/classroom.jpg",
      filter: "brightness(1.1) sepia(0.2) hue-rotate(180deg) saturate(0.8)",
      glowColor: "bg-emerald-900/20",
      description: "Gain practical skills and industry-relevant knowledge with our diploma programs in various fields including business, IT, and engineering.",
      tastingNotes: "Hands-on learning approach with industry placements. Graduate job-ready with recognized qualifications.",
      alcohol: "24-36",
      temperature: "Multiple",
      aging: "2-3 Years",
    },
    {
      id: "degree",
      name: "Bachelor's",
      subtitle: "Undergraduate Degree",
      year: "3-4 Years",
      image: "/images/graduation.jpg",
      filter: "brightness(1.05) sepia(0.1) hue-rotate(240deg) saturate(1.1)",
      glowColor: "bg-amber-900/20",
      description: "Pursue your passion with our diverse range of bachelor's degree programs. Develop expertise and critical thinking skills for your chosen career.",
      tastingNotes: "Comprehensive curriculum taught by experienced faculty. Industry projects and internships included.",
      alcohol: "36-48",
      temperature: "Jan/May/Sep",
      aging: "3-4 Years",
    },
    {
      id: "postgraduate",
      name: "Master's & PhD",
      subtitle: "Postgraduate Studies",
      year: "1-3 Years",
      image: "/images/profile-counsellor.jpg",
      filter: "brightness(0.95) sepia(0.15) hue-rotate(300deg) saturate(0.9)",
      glowColor: "bg-purple-900/20",
      description: "Advance your career with our postgraduate programs. Engage in research and specialized study under expert supervision.",
      tastingNotes: "Flexible study options including part-time and research modes. Scholarships available for qualified candidates.",
      alcohol: "12-36",
      temperature: "Flexible",
      aging: "1-3 Years",
    },
  ],
  features: [
    {
      icon: "Wine",
      title: "80+ Programs",
      description: "Wide range of courses from foundation to PhD level across multiple disciplines including Business, IT, Engineering, and Health Sciences.",
    },
    {
      icon: "Thermometer",
      title: "QS 5-Star Rating",
      description: "Recognized for excellence in teaching, facilities, and graduate employability by the prestigious QS World University Rankings.",
    },
    {
      icon: "Clock",
      title: "Expert Faculty",
      description: "Learn from experienced professors and industry professionals who bring real-world knowledge to the classroom.",
    },
  ],
  quote: {
    text: "Education is the most powerful weapon which you can use to change the world.",
    attribution: "Nelson Mandela",
    prefix: "Inspiring",
  },
};

// -----------------------------------------------------------------------------
// Winery Carousel Config (Campus Section)
// -----------------------------------------------------------------------------
export interface CarouselSlide {
  image: string;
  title: string;
  subtitle: string;
  area: string;
  unit: string;
  description: string;
}

export interface WineryCarouselConfig {
  scriptText: string;
  subtitle: string;
  mainTitle: string;
  locationTag: string;
  slides: CarouselSlide[];
}

export const wineryCarouselConfig: WineryCarouselConfig = {
  scriptText: "Our Locations",
  subtitle: "WORLD-CLASS CAMPUSES",
  mainTitle: "Study in Malaysia",
  locationTag: "Multiple Campuses Across Malaysia",
  slides: [
    {
      image: "/images/hero-campus.jpg",
      title: "Kota Kinabalu",
      subtitle: "Main Campus",
      area: "35,000+",
      unit: "Students",
      description: "Our flagship campus in Sabah offers state-of-the-art facilities, modern laboratories, and a vibrant student community in a beautiful tropical setting.",
    },
    {
      image: "/images/campus-library.jpg",
      title: "Petaling Jaya",
      subtitle: "City Campus",
      area: "15,000+",
      unit: "Students",
      description: "Located in the heart of the Klang Valley, our PJ campus provides easy access to industry connections and urban amenities.",
    },
    {
      image: "/images/classroom.jpg",
      title: "Cyberjaya",
      subtitle: "Tech Hub",
      area: "10,000+",
      unit: "Students",
      description: "Situated in Malaysia's Silicon Valley, our Cyberjaya campus specializes in technology, engineering, and innovation programs.",
    },
    {
      image: "/images/graduation.jpg",
      title: "Johor Bahru",
      subtitle: "Southern Campus",
      area: "8,000+",
      unit: "Students",
      description: "Our newest campus serves students in southern Malaysia with modern facilities and strong industry partnerships.",
    },
  ],
};

// -----------------------------------------------------------------------------
// Museum Config (About Section)
// -----------------------------------------------------------------------------
export interface TimelineEvent {
  year: string;
  event: string;
}

export interface MuseumTabContent {
  title: string;
  description: string;
  highlight: string;
}

export interface MuseumTab {
  id: string;
  name: string;
  icon: string;
  image: string;
  content: MuseumTabContent;
}

export interface MuseumQuote {
  prefix: string;
  text: string;
  attribution: string;
}

export interface MuseumConfig {
  scriptText: string;
  subtitle: string;
  mainTitle: string;
  introText: string;
  timeline: TimelineEvent[];
  tabs: MuseumTab[];
  openingHours: string;
  openingHoursLabel: string;
  ctaButtonText: string;
  yearBadge: string;
  yearBadgeLabel: string;
  quote: MuseumQuote;
  founderPhotoAlt: string;
  founderPhoto: string;
}

export const museumConfig: MuseumConfig = {
  scriptText: "Get to Know Us",
  subtitle: "ABOUT CITY UNIVERSITY",
  mainTitle: "Your Education Partner",
  introText: "City University Malaysia is a leading private university committed to providing quality education and producing industry-ready graduates. With over 35,000 students and 80+ programs, we are your gateway to academic and professional success.",
  timeline: [
    { year: "1984", event: "Established as Petaling Jaya Community College" },
    { year: "1998", event: "Upgraded to University College status" },
    { year: "2016", event: "Achieved full university status" },
    { year: "2022", event: "Awarded QS 5-Star Rating" },
    { year: "2024", event: "Expanded to 4 campuses nationwide" },
  ],
  tabs: [
    {
      id: "history",
      name: "Our History",
      icon: "History",
      image: "/images/campus-library.jpg",
      content: {
        title: "Four Decades of Excellence",
        description: "From a community college to a QS 5-star rated university, our journey has been marked by continuous growth and commitment to educational excellence.",
        highlight: "40+ Years of Experience",
      },
    },
    {
      id: "programs",
      name: "Programs",
      icon: "BookOpen",
      image: "/images/classroom.jpg",
      content: {
        title: "Diverse Academic Offerings",
        description: "Choose from over 80 programs across foundation, diploma, bachelor's, master's, and doctoral levels in various disciplines.",
        highlight: "80+ Programs Available",
      },
    },
    {
      id: "achievements",
      name: "Achievements",
      icon: "Award",
      image: "/images/graduation.jpg",
      content: {
        title: "Recognized Excellence",
        description: "Our commitment to quality education has earned us prestigious recognitions including the QS 5-Star Rating and SETARA Competitive ranking.",
        highlight: "QS 5-Star University",
      },
    },
  ],
  openingHours: "Mon-Fri: 9:00 AM - 6:00 PM",
  openingHoursLabel: "Office Hours",
  ctaButtonText: "Learn More",
  yearBadge: "1984",
  yearBadgeLabel: "Founded",
  quote: {
    prefix: "Our Mission",
    text: "To provide quality education that nurtures innovative thinkers and industry-ready graduates who contribute to national development.",
    attribution: "City University Malaysia",
  },
  founderPhotoAlt: "Education Counsellor",
  founderPhoto: "/images/profile-counsellor.jpg",
};

// -----------------------------------------------------------------------------
// News Config (Testimonials Section)
// -----------------------------------------------------------------------------
export interface NewsArticle {
  id: number;
  image: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
}

export interface Testimonial {
  name: string;
  role: string;
  text: string;
  rating: number;
}

export interface StoryQuote {
  prefix: string;
  text: string;
  attribution: string;
}

export interface StoryTimelineItem {
  value: string;
  label: string;
}

export interface NewsConfig {
  scriptText: string;
  subtitle: string;
  mainTitle: string;
  viewAllText: string;
  readMoreText: string;
  articles: NewsArticle[];
  testimonialsScriptText: string;
  testimonialsSubtitle: string;
  testimonialsMainTitle: string;
  testimonials: Testimonial[];
  storyScriptText: string;
  storySubtitle: string;
  storyTitle: string;
  storyParagraphs: string[];
  storyTimeline: StoryTimelineItem[];
  storyQuote: StoryQuote;
  storyImage: string;
  storyImageCaption: string;
}

export const newsConfig: NewsConfig = {
  scriptText: "Success Stories",
  subtitle: "STUDENT ACHIEVEMENTS",
  mainTitle: "Inspiring Journeys",
  viewAllText: "View All Stories",
  readMoreText: "Read More",
  articles: [
    {
      id: 1,
      image: "/images/graduation.jpg",
      title: "From Student to Industry Leader",
      excerpt: "How CityU graduates are transforming industries and making an impact in their chosen fields across Malaysia and beyond.",
      date: "January 2025",
      category: "Success Story",
    },
    {
      id: 2,
      image: "/images/classroom.jpg",
      title: "International Recognition",
      excerpt: "CityU students win prestigious international competitions and awards, bringing glory to the university.",
      date: "December 2024",
      category: "Achievement",
    },
    {
      id: 3,
      image: "/images/campus-library.jpg",
      title: "Research Excellence",
      excerpt: "Groundbreaking research projects by CityU postgraduate students gaining global attention and recognition.",
      date: "November 2024",
      category: "Research",
    },
    {
      id: 4,
      image: "/images/hero-campus.jpg",
      title: "Entrepreneurship Success",
      excerpt: "CityU alumni launching successful startups and contributing to Malaysia's economic growth and innovation.",
      date: "October 2024",
      category: "Entrepreneurship",
    },
  ],
  testimonialsScriptText: "What They Say",
  testimonialsSubtitle: "TESTIMONIALS",
  testimonialsMainTitle: "Student & Parent Reviews",
  testimonials: [
    {
      name: "Sarah Lim",
      role: "Business Graduate",
      text: "The counsellor guided me through every step of my application. I'm now pursuing my dream degree at CityU! The personalized attention made all the difference.",
      rating: 5,
    },
    {
      name: "Ahmad Razak",
      role: "Engineering Student",
      text: "Professional and helpful service. They made the admission process so much easier for me and my family. Highly recommended for all students!",
      rating: 5,
    },
    {
      name: "Mariam Abdullah",
      role: "Parent",
      text: "As a parent, I appreciate the transparent guidance provided. My daughter is now thriving at City University. Thank you for your dedication!",
      rating: 5,
    },
  ],
  storyScriptText: "Our Journey",
  storySubtitle: "ABOUT ME",
  storyTitle: "Your Dedicated Counsellor",
  storyParagraphs: [
    "I am a professional education counsellor representing City University Malaysia, dedicated to helping students from Sabah and Sarawak achieve their academic dreams. With personalized guidance, I assist with program selection, admissions, and scholarship applications.",
    "With years of experience in education counselling, I provide comprehensive support throughout your educational journey. My goal is to make your transition to higher education smooth, successful, and stress-free.",
  ],
  storyTimeline: [
    { value: "1000+", label: "Students Helped" },
    { value: "95%", label: "Success Rate" },
    { value: "10+", label: "Years Experience" },
  ],
  storyQuote: {
    prefix: "My Promise",
    text: "I am committed to guiding every student to find their perfect educational path and achieve their full potential at City University Malaysia.",
    attribution: "Your Education Counsellor",
  },
  storyImage: "/images/profile-counsellor.jpg",
  storyImageCaption: "Professional Education Counsellor",
};

// -----------------------------------------------------------------------------
// Contact Form Config
// -----------------------------------------------------------------------------
export interface ContactInfoItem {
  icon: string;
  label: string;
  value: string;
  subtext: string;
}

export interface ContactFormFields {
  nameLabel: string;
  namePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  phoneLabel: string;
  phonePlaceholder: string;
  visitDateLabel: string;
  visitorsLabel: string;
  visitorsOptions: string[];
  messageLabel: string;
  messagePlaceholder: string;
  submitText: string;
  submittingText: string;
  successMessage: string;
  errorMessage: string;
}

export interface ContactFormConfig {
  scriptText: string;
  subtitle: string;
  mainTitle: string;
  introText: string;
  contactInfoTitle: string;
  contactInfo: ContactInfoItem[];
  form: ContactFormFields;
  privacyNotice: string;
  formEndpoint: string;
}

export const contactFormConfig: ContactFormConfig = {
  scriptText: "Get In Touch",
  subtitle: "CONTACT US",
  mainTitle: "Start Your Journey Today",
  introText: "Ready to take the first step towards your academic future? Fill out the form below and I'll get back to you within 24 hours.",
  contactInfoTitle: "Contact Information",
  contactInfo: [
    {
      icon: "MapPin",
      label: "Address",
      value: "Unit Hebatan IPT, Jalan UMS, Alamesra, 88450 Kota Kinabalu, Sabah",
      subtext: "Main Office Location",
    },
    {
      icon: "Phone",
      label: "Phone",
      value: "011-6747 0503",
      subtext: "WhatsApp Available",
    },
    {
      icon: "Mail",
      label: "Email",
      value: "counsellor@cityu.edu.my",
      subtext: "Send us an email anytime",
    },
    {
      icon: "Clock",
      label: "Office Hours",
      value: "Monday - Friday: 9AM - 6PM",
      subtext: "Weekends by appointment",
    },
  ],
  form: {
    nameLabel: "Full Name",
    namePlaceholder: "Enter your full name",
    emailLabel: "Email Address",
    emailPlaceholder: "your@email.com",
    phoneLabel: "Phone Number",
    phonePlaceholder: "+60 XX-XXXX XXXX",
    visitDateLabel: "Preferred Consultation Date",
    visitorsLabel: "Program Interest",
    visitorsOptions: ["Foundation", "Diploma", "Bachelor's Degree", "Master's/PhD", "Not Sure Yet"],
    messageLabel: "Message",
    messagePlaceholder: "Tell us about your educational goals and questions...",
    submitText: "Send Inquiry",
    submittingText: "Sending...",
    successMessage: "Thank you! Your inquiry has been sent successfully. I'll contact you soon!",
    errorMessage: "Something went wrong. Please try again or contact us directly via WhatsApp.",
  },
  privacyNotice: "By submitting this form, you agree to our privacy policy. Your information will be kept confidential.",
  formEndpoint: "https://formspree.io/f/YOUR_FORM_ID",
};

// -----------------------------------------------------------------------------
// Footer Config
// -----------------------------------------------------------------------------
export interface SocialLink {
  icon: string;
  label: string;
  href: string;
}

export interface FooterLink {
  name: string;
  href: string;
}

export interface FooterLinkGroup {
  title: string;
  links: FooterLink[];
}

export interface FooterContactItem {
  icon: string;
  text: string;
}

export interface FooterConfig {
  brandName: string;
  tagline: string;
  description: string;
  socialLinks: SocialLink[];
  linkGroups: FooterLinkGroup[];
  contactItems: FooterContactItem[];
  newsletterLabel: string;
  newsletterPlaceholder: string;
  newsletterButtonText: string;
  newsletterSuccessText: string;
  newsletterErrorText: string;
  newsletterEndpoint: string;
  copyrightText: string;
  legalLinks: string[];
  icpText: string;
  backToTopText: string;
  ageVerificationText: string;
}

export const footerConfig: FooterConfig = {
  brandName: "CityU Counsellor",
  tagline: "Your Path to Success",
  description: "Professional education counselling services for City University Malaysia. Guiding students from Sabah and Sarawak to achieve their academic dreams.",
  socialLinks: [
    { icon: "Facebook", label: "Facebook", href: "https://facebook.com" },
    { icon: "Instagram", label: "Instagram", href: "https://instagram.com" },
    { icon: "Youtube", label: "YouTube", href: "https://youtube.com" },
  ],
  linkGroups: [
    {
      title: "Quick Links",
      links: [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Programs", href: "#programs" },
        { name: "Contact", href: "#contact" },
      ],
    },
    {
      title: "Programs",
      links: [
        { name: "Foundation", href: "#programs" },
        { name: "Diploma", href: "#programs" },
        { name: "Bachelor's Degree", href: "#programs" },
        { name: "Postgraduate", href: "#programs" },
      ],
    },
  ],
  contactItems: [
    { icon: "MapPin", text: "Kota Kinabalu, Sabah, Malaysia" },
    { icon: "Phone", text: "011-6747 0503" },
    { icon: "Mail", text: "counsellor@cityu.edu.my" },
  ],
  newsletterLabel: "Subscribe to Our Newsletter",
  newsletterPlaceholder: "Enter your email",
  newsletterButtonText: "Subscribe",
  newsletterSuccessText: "Thank you for subscribing!",
  newsletterErrorText: "Subscription failed. Please try again.",
  newsletterEndpoint: "https://formspree.io/f/YOUR_NEWSLETTER_ID",
  copyrightText: "© 2025 City University Malaysia. All rights reserved.",
  legalLinks: ["Privacy Policy", "Terms of Use"],
  icpText: "Recognized by Malaysian Qualifications Agency (MQA)",
  backToTopText: "Back to Top",
  ageVerificationText: "",
};

// -----------------------------------------------------------------------------
// Scroll To Top Config
// -----------------------------------------------------------------------------
export interface ScrollToTopConfig {
  ariaLabel: string;
}

export const scrollToTopConfig: ScrollToTopConfig = {
  ariaLabel: "Back to top",
};

// -----------------------------------------------------------------------------
// FAQ Config (Additional Section)
// -----------------------------------------------------------------------------
export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQConfig {
  scriptText: string;
  subtitle: string;
  mainTitle: string;
  faqs: FAQItem[];
}

export const faqConfig: FAQConfig = {
  scriptText: "Common Questions",
  subtitle: "FAQ",
  mainTitle: "Frequently Asked Questions",
  faqs: [
    {
      question: "What programs are offered at City University?",
      answer: "City University offers over 80 programs ranging from Foundation, Diploma, Bachelor's Degree, Master's, and PhD across various disciplines including Business, Engineering, IT, Education, and Health Sciences.",
    },
    {
      question: "How do I apply for admission?",
      answer: "You can apply by filling out the inquiry form on this website, or contact me directly via WhatsApp or email. I'll guide you through the entire application process step-by-step.",
    },
    {
      question: "Are scholarships available?",
      answer: "Yes! City University offers various scholarships and financial aid options based on academic merit, financial need, and special talents. Contact me to learn about the scholarships you may qualify for.",
    },
    {
      question: "Can I visit the campus before applying?",
      answer: "Absolutely! I can arrange a guided campus tour for you and your family. Just reach out to me via phone or email to schedule your visit.",
    },
    {
      question: "What are the entry requirements?",
      answer: "Entry requirements vary by program. Generally, Foundation requires SPM/O-Level, Diploma requires SPM with credits, and Degree requires STPM/A-Level or equivalent. Contact me for specific requirements.",
    },
    {
      question: "Is accommodation available for students?",
      answer: "Yes, City University provides on-campus accommodation options at all our campuses. We also assist students in finding suitable off-campus housing if preferred.",
    },
  ],
};
