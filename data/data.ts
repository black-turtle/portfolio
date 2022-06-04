export interface ProjectType {
  header: string;
  previewUrl?: string;
  demoUrl?: string;
  sourceUrl?: string;
  description: string;
  tags: string[];
  features: string[];
}

export const projectsData: ProjectType[] = [
  {
    header: 'Imresizer.com',
    previewUrl: '/images/imresizer.png',
    demoUrl: 'https://imresizer.com',
    description: `Imresizer.com is a simple web based image processing tool. 
    It has 2 main functionalities, resize images in various units & reduce image size to specific KB or MB.`,
    tags: ['React', 'Next Js', 'AWS Ec2', 'Tailwind Css', 'Python', 'Flask'],
    features: [
      'Serves 5 ~ 10 Million users monthly',
      'All Static files are served by cloudflare CDN',
      'AutoScalable backend (powered by AWS Auto Scaling group)',
      'Paypal payment integration',
    ],
  },

  {
    header: 'Portfolio (This website)',
    previewUrl: '/images/portfolio-preview.png',
    // demoUrl: '',
    description: `This is a website to showcase your projects & experiences.`,
    tags: ['React', 'Next Js', 'Chakra UI'],
    features: [
      'Works with all devices',
      'Deployed via github static pages',
      'This works as a template. Content can be easily changed by editing only a single data file.',
    ],
  },
];

export interface SkillType {
  category: string;
  skills: {
    name: string;
    level: string;
  }[];
}

export const skillsData: SkillType[] = [
  {
    category: 'Frontend Development',
    skills: [
      { name: 'JavaScript', level: 'Expert' },
      { name: 'HTML', level: 'Expert' },
      { name: 'CSS', level: 'Intermediate' },
      { name: 'React', level: 'Expert' },
      { name: 'NextJs', level: 'Expert' },
      { name: 'Chakra UI', level: 'Expert' },
      { name: 'Tailwind CSS', level: 'Expert' },
    ],
  },

  {
    category: 'Backend Development',
    skills: [
      { name: 'Java', level: 'Expert' },
      { name: 'NodeJS', level: 'Beginner' },
      { name: 'Python', level: 'Intermediate' },
      { name: 'Spring Boot', level: 'Expert' },
      { name: 'Hibernate', level: 'Intermediate' },
      { name: 'SQL Databases', level: 'Expert' },
      { name: 'MongoDB', level: 'Expert' },
      { name: 'Firebase', level: 'Intermediate' },
    ],
  },

  {
    category: 'DevOps',
    skills: [
      { name: 'Linux Shell', level: 'Expert' },
      { name: 'Docker', level: 'Expert' },
      { name: 'AWS EC2', level: 'Expert' },
      { name: 'AWS Lambda', level: 'Intermediate' },
      { name: 'AWS S3', level: 'Expert' },
      { name: 'AWS ECS', level: 'Expert' },
      { name: 'AWS DynamoDB', level: 'Expert' },
    ],
  },

  {
    category: 'Others',
    skills: [
      { name: 'Git', level: 'Expert' },
      { name: 'REST APIs', level: 'Expert' },
      { name: 'Microservice', level: 'Expert' },
    ],
  },
];
