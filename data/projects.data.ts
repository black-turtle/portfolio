import { ProjectType } from './types';

const ASSETS_BASE_PATH = process.env.ASSETS_BASE_PATH || '/assets';

export const projectsData: ProjectType[] = [
  {
    header: 'Imresizer.com',
    previewUrl: `${ASSETS_BASE_PATH}/imresizer.png`,
    demoUrl: 'https://imresizer.com',
    description: `Imresizer.com is a simple web based image processing tool. 
      It has 2 main functionalities, resize images in various units & reduce image size to specific KB or MB.`,
    tags: [
      'React',
      'Next Js',
      'Tailwind Css',
      'Python',
      'Flask',
      'AWS Ec2',
      'AWS ASG',
    ],
    features: [
      'Serves 5 ~ 10 Million users monthly',
      'All Static files are served by cloudflare CDN',
      'AutoScalable backend (powered by AWS Auto Scaling group)',
      'Paypal payment integration',
    ],
  },

  {
    header: 'Portfolio (This website)',
    previewUrl: `${ASSETS_BASE_PATH}/portfolio-preview.png`,
    demoUrl: 'https://black-turtle.github.io/portfolio',
    sourceUrl: 'https://github.com/black-turtle/portfolio',
    description: `This is a website to showcase projects & experiences.`,
    tags: ['React', 'Next Js', 'Chakra UI'],
    features: [
      'This works as a template. Content can be easily changed by editing few data files. Check github repository for details.',
      'Responsive design (works perfectly with mobile, tablet & desktop devices)',
      'Deployed via github static pages',
    ],
  },
];
