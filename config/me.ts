import { links } from '../config/links'
import {
  Gmail,
  Java,
  Python,
  Javascript,
  Typescript,
  Swift,
  Mysql,
  Realm,
  Mongodb,
  Html5,
  CssThree,
  ReactJs,
  Nodedotjs,
  Nextdotjs,
  Vuedotjs,
  Tailwindcss,
  Spring,
  Springboot,
  Stylus,
  Scikitlearn,
  Tensorflow,
  Docker,
  Git,
  Redis,
  Apachehadoop,
  Postman,
} from '@icons-pack/react-simple-icons'

export const me = {
  site: 'https://www.morethanmin.com',
  name: 'Sangmin Lee',
  image: '/static/images/portrait.jpeg',
  email: 'mailto:morethanmin.dev@gmail.com',
  location: {
    name: 'Seoul, South Korea',
    light: '/static/images/map_light.png',
    dark: '/static/images/map_dark.png',
  },
  bio: '💻 🎨 🎮 ⚡️',
  social: [...links],
  overview: [],
  education: [
    {
      name: 'Myongji University',
      time: '2019-2022',
      degree: 'BS, Computer Science',
      color: 'blue',
      logo: '/static/images/njupt.png',
    },
    {
      name: 'Nudge Healthcare',
      time: '2021-2022',
      degree: 'Frontend Engineer',
      color: 'yellow',
      logo: '/static/images/neu.png',
    },
    {
      name: 'PRND Company',
      time: '2023*',
      degree: 'Frontend Engineer',
      color: 'red',
      logo: '/static/images/nyit.png',
    },
  ],
  publications: [
    {
      title: 'morethan-log',
      authors: [{ name: 'A static blog using notion database' }],
      website: 'https://morethan-log.vercel.app',
      link: 'https://github.com/morethanmin/morethan-log',
      tags: [
        {
          name: '⭐ 600+',
          color: 'yellow',
        },
        {
          name: '🍴 300+',
          color: 'blue',
        },
        {
          name: 'Next.js',
          color: 'red',
        },
        {
          name: 'Blog Template',
          color: 'orange',
        },
        {
          name: 'Notion API',
          color: 'green',
        },
      ],
    },
    {
      title: 'cursorify',
      authors: [{ name: 'Customizable cursor component in your project 🕹️' }],
      website: 'https://cursorify.github.io/',
      link: 'https://github.com/cursorify/cursorify',
      tags: [
        {
          name: 'React',
          color: 'gray',
        },
        {
          name: 'Library',
          color: 'pink',
        },
        {
          name: 'Component',
          color: 'brown',
        },
      ],
    },
  ],
  projects: [
    {
      name: 'Astraios',
      description:
        'A GitHub Star Management App, based on SwiftUI and Combine.',
      tip: 'Coming Soon on App Store',
      images: [
        '/static/images/Astraios/4.png',
        '/static/images/Astraios/3.png',
        '/static/images/Astraios/2.png',
        '/static/images/Astraios/5.png',
        '/static/images/Astraios/7.png',
      ],
      icon: '/static/images/Astraios/astraios.png',
    },
    {
      name: 'Pokémon Recommender',
      description:
        'A iOS Pokédex with an original recommendation algorithm that considers multiple factors',
      tag: ['Web Crawler', 'Database Design', 'Recommendation algorithm'],
      video: '/static/videos/pokemon.mp4',
      icon: '/static/images/pokemon.png',
    },
  ],
  skills: [
    [
      { name: 'Java', color: 'bg-[#007396]', icon: Java },
      { name: 'Python', color: 'bg-[#3776AB]', icon: Python },
      { name: 'Javascript', color: 'bg-[#F7DF1E]', icon: Javascript },
      { name: 'Typescript', color: 'bg-[#3178C6]', icon: Typescript },
      { name: 'Swift', color: 'bg-[#F05138]', icon: Swift },
      { name: 'HTML5', color: 'bg-[#E34F26]', icon: Html5 },
      { name: 'CSS3', color: 'bg-[#1572B6]', icon: CssThree },
    ],
    [
      { name: 'Apache Hadoop', color: 'bg-[#66CCFF]', icon: Apachehadoop },
      { name: 'React', color: 'bg-[#61DAFB]', icon: ReactJs },
      { name: 'Node.js', color: 'bg-[#339933]', icon: Nodedotjs },
      { name: 'Next.js', color: 'bg-[#000000]', icon: Nextdotjs },
      { name: 'Vue.js', color: 'bg-[#4FC08D]', icon: Vuedotjs },
      { name: 'Tailwind CSS', color: 'bg-[#06B6D4]', icon: Tailwindcss },
      { name: 'Spring', color: 'bg-[#6DB33F]', icon: Spring },
      { name: 'Stylus', color: 'bg-[#333333]', icon: Stylus },
      { name: 'scikit-learn', color: 'bg-[#F7931E]', icon: Scikitlearn },
      { name: 'TensorFlow', color: 'bg-[#F7931E]', icon: Tensorflow },
    ],
    [
      { name: 'MySQL', color: 'bg-[#4479A1]', icon: Mysql },
      { name: 'Redis', color: 'bg-[#DC382D]', icon: Redis },
      { name: 'Realm', color: 'bg-[#39477F]', icon: Realm },
      { name: 'MongoDB', color: 'bg-[#47A248]', icon: Mongodb },
      { name: 'Git', color: 'bg-[#F05032]', icon: Git },
      { name: 'Postman', color: 'bg-[#FF6C37]', icon: Postman },
      { name: 'Docker', color: 'bg-[#0AA6D8]', icon: Docker },
    ],
  ],
}
