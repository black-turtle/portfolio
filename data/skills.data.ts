import { SkillType } from './types';

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
      { name: 'NodeJS', level: 'Intermediate' },
      { name: 'Python', level: 'Expert' },
      { name: 'Spring Boot', level: 'Expert' },
      { name: 'Hibernate', level: 'Intermediate' },
      { name: 'SQL Databases', level: 'Expert' },
      { name: 'MongoDB', level: 'Intermediate' },
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
