import { BsDiscord } from 'react-icons/bs';
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5';

export const techs = [
  {
    header: 'Main Stack',
    techs: [
      {
        imgPath: '/js.png',
        alt: 'Javascript',
        name: 'Javascript',
        kind: 'Linguagem',
        accentColor: '#EFD81E',
        content:
          'Linguagem moderna, poderosa e versátil, capaz de operar em todos os âmbitos de execuções, incluindo processamento direto do navegador.',
      },
      {
        imgPath: '/ts.png',
        alt: 'Typescript',
        name: 'Typescript',
        kind: 'Linguagem',
        accentColor: '#2F74BF',
        content:
          'Uma evolução do Javascript que oferece tipagens fortes, garantindo mais maturidade, integridade e escalabilidade de código.',
      },
      {
        imgPath: '/nodejs.webp',
        accentColor: '#7CB73F',
        name: 'Node.js',
        alt: 'Node.js',
        kind: 'Backend',
        content:
          'Linguagem moderna, poderosa e versátil, capaz de operar em todos os âmbitos de execuções, incluindo processamento direto do navegador.',
      },
      {
        imgPath: '/react.png',
        accentColor: '#5ED3F3',
        name: 'React Js',
        alt: 'React Js',
        kind: 'Frontend',
        content: 'Biblioteca Js para construção de interfaces reativas modernas.',
      },
      {
        imgPath: '/react-native.svg',
        alt: 'React Native',
        name: 'React Native',
        kind: 'Mobile',
        accentColor: '#00A4D2',
        content: 'Tecnologia capaz de construir aplicações mobiles natives com JS.',
      },
    ],
  },
  {
    header: 'Frameworks',
    techs: [
      {
        imgPath: '/nest.svg',
        alt: 'Nestjs',
        name: 'Nestjs',
        kind: 'Framework',
        accentColor: 'red',
      },
      {
        imgPath: '/nextjs.png',
        alt: 'Next.Js',
        name: 'Next.Js',
        kind: 'Framework',
        accentColor: 'red',
      },
      {
        imgPath: '/express.png',
        alt: 'Express',
        name: 'Express',
        kind: 'Framework',
        accentColor: 'red',
      },
      {
        imgPath: '/fastify.svg',
        alt: 'Fastify',
        name: 'Fastify',
        kind: 'Framework',
        accentColor: 'red',
      },
    ],
  },
  {
    header: 'Container',
    techs: [
      {
        imgPath: '/docker.png',
        accentColor: 'teal',
        name: 'Docker',
        alt: 'Docker',
        kind: 'Container',
      },
      {
        imgPath: '/k8s.png',
        accentColor: 'teal',
        name: 'Kubernetes',
        alt: 'Kubernetes',
        kind: 'Container',
      },
    ],
  },
  {
    header: 'Cloud',
    techs: [
      {
        imgPath: '/aws.png',
        accentColor: 'pink',
        name: 'AWS',
        alt: 'AWS',
        kind: 'Cloud',
      },
      {
        imgPath: '/gcp.png',
        accentColor: 'pink',
        name: 'Google Cloud ',
        alt: 'GKS',
        kind: 'Cloud',
      },
    ],
  },
];

export const contact = [
  {
    title: 'LinkedIn',
    link: 'https://www.linkedin.com/in/brunocesantos',
    icon: IoLogoLinkedin,
    colorWhite: '#0370AD',
    colorDark: '#0370AD',
  },
  {
    title: 'Github',
    link: 'https://github.com/Brxlx?tab=repositories',
    icon: IoLogoGithub,
    colorWhite: '#1A1E22',
    colorDark: 'white',
  },
  {
    title: 'Discord',
    link: 'https://discord.gg/xq9pbQHG',
    icon: BsDiscord,
    colorWhite: '#4D62EE',
    colorDark: '#4D62EE',
  },
];
