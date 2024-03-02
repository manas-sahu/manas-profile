import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  ses,
  amadeus,
  payoda,
  theorem,
  carrent,
  jobit,
  tripguide,
  threejs,
  globallogic,
  nextjs,
  graphql,
  angular,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Lead Engineer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Next",
    icon: nextjs,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "GraphQL",
    icon: graphql,
  },
  {
    name: "Angular",
    icon: angular,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },

  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Senior Software Engineer",
    company_name: "SES Satellites",
    icon: ses,
    iconBg: "#1D1836",
    date: "September 2023 - Present",
    points: [
      "Working for a popular German TV application, HD+, which offers over 80 HD channels and a variety of features such as pause live TV, restart, and access to media libraries.",
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Lead Software Engineer",
    company_name: "GlobalLogic",
    icon: globallogic,
    iconBg: "#1D1836",
    date: "March 2020 - December 2022",
    points: [
      "Led a cross-functional team through the end-to-end design process, resulting in 20% faster project delivery.",
      "Organized monthly team-building events, fostering a stronger sense of camaraderie among team members.",
      "Mentored junior developers, resulting in 2 successful internal promotions within the team.",
      "Reduced page load time by 20% through performance optimization techniques, including image compression and lazy loading.",
      "Implemented accessible features (such as ARIA roles) to ensure compliance with WCAG guidelines and improve usability for all users.",
      "Proficient in React.js: Developed reusable components, managed state using hooks, and optimized rendering performance.",
    ],
  },
  {
    title: "Senior Software Engineer",
    company_name: "Amadeus",
    icon: amadeus,
    iconBg: "#1D1836",
    date: "July 2017 - Febuary 2020",
    points: [
      "Improved design quality by implementing a rigorous user testing framework, leading to a 30% reduction in usability issues.",
      "Collaborated with stakeholders to align design vision with business goals, resulting in a 90% satisfaction rate.",
      "Reduced dashboard loading time to under 300 ms by implementing data sharding techniques and optimizing API data retrieval. This leads to enhanced user experience, resulting in improved productivity and satisfaction.",
      "Angular Proficiency: Developed interactive web applications, adhering to best practices such as lazy loading, reactive programming, and Angular Material components.",
      "Wrote comprehensive unit tests using Jasmine & Karma, achieving above 95% test coverage for critical components. Conducted unit and end-to-end testing, resulting in a 98% bug-free launch rate.",
      "Utilized GIT for versioning, streamlining collaboration, and saving 4 hours daily in manual communication.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Payoda",
    icon: payoda,
    iconBg: "#1D1836",
    date: "December 2015 - July 2017",
    points: [
      "Developed a robust network monitoring tool for ARISTA using TypeScript and Angular.",
      "Empowered users to check network status, monitor switch and router devices, and perform diagnostics efficiently.",
      "Added new features and bug fixes to front-end applications.",
      "Collaborated with back-end developers to build RESTful APIs.",
      "Conducted unit testing using Jasmine & Karma.",
      "Ensured code quality and maintained efficient build processes with Grunt.",
      "Reduced average bug resolution time by 20%, achieved 95% code coverage in unit tests and decreased build time by 30% through Grunt automation.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Theorem",
    icon: theorem,
    iconBg: "#1D1836",
    date: "September 2013 - December 2015",
    points: [
      "Developed a testing tool that tests web pages before QA. Reduced standard and repeated guideline bugs by over 99%, ensuring high-quality deliverables.",
      "Working under the SalesForce. Translated mock-ups into responsive web pages using HTML, CSS, jQuery, Media Query.",
      "Created dynamic Landing Pages and Micro Pages using Angular JS.",
      "Efficiently handled daily work distribution, taking ownership of deliverables. Improved workflow efficiency, ensuring timely project completion.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Manas proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Manas does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Manas optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "Armcron Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "AIWave",
    description: "Mordern Rich UI & UX showcase",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Figma Clone",
    description:
      "Web application that enables multi users to work on a sketch together",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
