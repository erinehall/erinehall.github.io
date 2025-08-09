export const experience = [
  {
    company: "The MITRE Corporation",
    title: "Intermediate Software Systems Engineer",
    location: "McLean, VA",
    date: "May 2024 – Present",
    roles: [
      {
        heading: "High-Performance Computing",
        icon: "mdi-chip",
        bullets: [
          "Lead frontend developer for a React-based High Performance Computing (HPC) analytics dashboard, making design decisions, planning and implementing new features, and improving usability through user feedback",
          "Coordinating HPC engagement for 900+ users by conducting surveys, organizing monthly informational sessions and advanced trainings, and developing an HPC learning path to strengthen organizational expertise",
          "Delivered reports and briefings to advise a sponsor on HPC cluster setup and operational best practices",
        ],
        skills: ["React", "TypeScript", "Vite", "Docker", "Python", "Django"],
      },
      {
        heading: "ATT&CK",
        bullets: [
          "Advancing tools, websites, and libraries across the ATT&CK ecosystem, collaborating on enhancements to reduce technical debt and support growth and sustainability",
        ],
        skills: ["AngularJS", "HTML", "Zod", "Python"],
      },
      {
        heading: "Intern Coordinator",
        icon: "mdi-account-group",
        bullets: [
          "Department intern coordinator, overseeing hiring, onboarding, mentorship, and performance evaluations",
        ],
        skills: ["Leadership", "Mentorship"],
      },
    ],
  },
  {
    company: "The MITRE Corporation",
    title: "Associate Software Systems Engineer",
    location: "McLean, VA",
    date: "January 2023 – May 2024",
    roles: [
      {
        heading: "High-Performance Computing",
        icon: "mdi-chip",
        bullets: [
          "Delivered full-stack upgrades to a HPC cluster analytics dashboard, improving sustainability, performance, and user experience",
          "Built and maintained full-stack web applications for internal tools and external-facing platforms",
        ],
        skills: ["React", "Javascript", "Typescript", "Python", "Django"],
      },
      {
        heading: "ATT&CK",
        bullets: [
          "Developed and maintained tools, websites, and libraries across the ATT&CK ecosystem to advance threat-informed defense and understanding of adversary tactics and techniques",
        ],
        skills: ["HTML", "Python", "AngularJS"],
      },
    ],
  },
  {
    company: "The MITRE Corporation",
    title: "Software Engineer Intern",
    location: "McLean, VA",
    date: "June 2020 – January 2023",
    roles: [
      {
        heading: "High-Performance Computing",
        icon: "mdi-chip",
        bullets: [
          "Maintained and designed interactive UI features in React and Python for a web-based dashboard to monitor HPC cluster performance and usage statistics",
        ],
        skills: ["React", "Python"],
      },
      {
        heading: "ATT&CK",
        bullets: [
          "Provided updates and maintenance in AngularJS for a company-hosted platform for concept demonstration and prototyping early web applications",
        ],
        skills: ["AngularJS"],
      },
      {
        heading: "EPIC",
        icon: "mdi-account-group",
        bullets: [
          "Prototyped a guided interview for eliciting attorney misconduct in Python using Docassemble",
        ],
        skills: ["YAML", "Docassemble"],
      },
    ],
  },
];

export const education = [
  {
    school: "Virginia Tech",
    degree: "M.S. in Computer Science",
    date: "August 2021 – August 2023",
    thesis: {
      title:
        "A User-Centered Design Approach to Evaluating the Usability of Automated Essay Scoring Systems",
      url: "https://vtechworks.lib.vt.edu/server/api/core/bitstreams/12ad03cd-5041-446e-aee9-097ad1d6c617/content",
    },
  },
  {
    school: "Virginia Tech",
    degree: "B.S. in Computer Science",
    date: "August 2018 – May 2021",
    details: [
      "Magna cum laude (3.61 GPA), Dean’s List every semester, minors in Science, Technology & Law and Math",
    ],
  },
];

export const skills = [
  "React",
  "JavaScript",
  "TypeScript",
  "AngularJS",
  "HTML",
  "CSS",
  "Vue",
  "Python",
  "Django",
  "REST APIs",
  "MySQL",
  "Java",
  "C",
  "Docker",
  "GitLab CI/CD",
  "Git",
  "Vite",
  "Jest",
  "React Testing Library",
  "High-Performance Computing",
  "Survey Analysis",
  "Usability Testing",
  "User Research",
  "AI Usability",
  "Figma",
  "Leadership",
  "Mentorship",
];

export const publications = [
  {
    title:
      "Exploring Explainability and Transparency in Automated Essay Scoring Systems: A User-Centered Evaluation",
    date: "June 2024",
    link: "https://doi.org/10.1007/978-3-031-61691-4_18",
  },
  {
    title: "Identifying Usability Challenges in AI-Based Essay Grading Tools",
    date: "June 2023",
    link: "https://doi.org/10.1007/978-3-031-36336-8_104",
  },
];

export const certifications = [
  {
    name: "Professional ScrumMaster I (PSM I)",
    organization: "Scrum.org",
    date: "August 2025",
  },
  {
    name: "Data Parallelism: How to Train Deep Learning Models on Multiple GPUs",
    organization: "NVIDIA",
    date: "July 2025",
  },
];

export const clearances = ["DoD Secret", "IRS Moderate (MBI)"];

export const memberships = [
  {
    name: "Society of Women Engineers (SWE)",
    date: "Spring 2023 – Present",
  },
];

export const presentations = [
  {
    conference: "International Conference on Human-Computer Interaction (HCII)",
    role: "Paper Presenter",
    location: "Washington, D.C.",
    date: "July 2024",
  },
  {
    conference: "AIED 2023",
    role: "Poster Presenter",
    location: "Virtual",
    date: "June 2023",
  },
];

export default {
  experience,
  education,
  skills,
  publications,
  certifications,
  clearances,
  memberships,
  presentations,
};
