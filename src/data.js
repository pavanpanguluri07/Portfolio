export const basics = {
  name: 'Venkata Pavan Panguluri',
  role: 'Cloud-focused Full Stack Java Developer',
  location: 'United States · Open to Remote',
  phone: '+1 913-636-8949',
  email: 'pavanpanguluri00@gmail.com',
  summary: '5+ years designing and deploying scalable web apps & microservices with Java, Spring Boot, React, AWS, Docker, and CI/CD. Known for cutting latency and speeding delivery with automation.',
  links: {
    email: 'mailto:pavanpanguluri00@gmail.com',
    linkedin: 'www.linkedin.com/in/venkatapavanpanguluri07',
    github: 'https://github.com/',
    resume: '/Resume_Venkata_Pavan_Panguluri.docx'
  }
}

export const skills = [
  'Java', 'Spring Boot', 'Microservices', 'REST APIs', 'React.js', 'Angular', 'Redux',
  'JavaScript', 'HTML5', 'CSS3', 'MySQL', 'MongoDB', 'AWS', 'Docker', 'Jenkins', 'Git',
  'Postman', 'Agile/Scrum', 'CI/CD', 'OOP'
]

export const experience = [
  {
    title: 'Full Stack Java Developer',
    org: 'American Express',
    location: 'Arizona, USA',
    period: 'Jan 2024 — Present',
    bullets: [
      'Engineered and maintained 6+ Spring Boot microservices, cutting transaction latency by ~25%.',
      'Built modular React UIs that increased customer satisfaction by ~18%.',
      'Streamlined CI/CD with Jenkins & Docker, reducing release cycles by ~40%.'
    ]
  },
  {
    title: 'Full Stack Java Developer',
    org: 'NielsenIQ',
    period: 'Jul 2021 — Jul 2023',
    bullets: [
      'Led transition from monolith to microservices to boost scalability & uptime.',
      'Developed REST APIs reducing data load time by ~30%.',
      'Created React + Redux dashboards for global clients; standardized Docker deployments.'
    ]
  },
  {
    title: 'Software Developer Intern',
    org: 'NielsenIQ',
    period: 'Jul 2020 — Jul 2021',
    bullets: [
      'Delivered Spring Boot + React features for internal tools.',
      'Improved reliability via unit tests (+20%) and code reviews.'
    ]
  }
]

export const education = [
  { degree: 'M.S., Computer Science', org: 'University of Central Missouri', year: '2024' },
  { degree: 'B.E., Electronics & Communication Engineering', org: 'SCSVMV University', year: '2021' }
]

export const projects = [
  {
    name: 'User Analytics Microservice',
    desc: 'Java + Spring Boot service deployed on AWS (EC2/RDS) to monitor user behavior. Secured with OAuth2/JWT via API Gateway.',
    stack: ['Java', 'Spring Boot', 'AWS EC2/RDS', 'OAuth2', 'JWT', 'API Gateway'],
    links: { demo: '#', code: '#' }
  },
  {
    name: 'Task Management Platform',
    desc: 'Realtime collaboration with WebSocket notifications and REST APIs. Docker Compose for consistent, scalable runtime.',
    stack: ['Java', 'Spring Boot', 'WebSockets', 'Docker Compose', 'React'],
    links: { demo: '#', code: '#' }
  },
  {
    name: 'Expense Tracker App',
    desc: 'Full‑stack personal finance tracker with Node.js, React, and MongoDB. Auth via JWT and CRUD APIs.',
    stack: ['Node.js', 'React', 'MongoDB', 'JWT'],
    links: { demo: '#', code: '#' }
  }
]

export const achievements = [
  'Reduced transaction latency by ~25% across microservices',
  '18% uplift in user satisfaction via UI modernization',
  '40% faster deployments with Jenkins + Docker automation'
]
