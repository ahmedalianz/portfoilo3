import {
  SiAngular,
  SiBootstrap,
  SiChakraui,
  SiExpress,
  SiFramer,
  SiGit,
  SiJavascript,
  SiJirasoftware,
  SiLaravel,
  SiMaterialui,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPhp,
  SiReact,
  SiRedux,
  SiSass,
  SiSocketdotio,
  SiStyledcomponents,
  SiTypescript,
  SiVisualstudiocode,
} from 'react-icons/si'

import { BsQuestionSquare } from 'react-icons/bs'
import { IconType } from 'react-icons'

export type SkillCategory =
  | 'core'
  | 'frontend'
  | 'backend'
  | 'database'
  | 'ui frameworks'
  | 'productivity boost'

export type Skill = {
  name: string
  icon: IconType
}

export const Skills: {
  [key in SkillCategory]: Skill[]
} = {
  core: [
    {
      name: 'Javascript (ES6+)',
      icon: SiJavascript,
    },
    {
      name: 'Typescript',
      icon: SiTypescript,
    },
    {
      name: 'PHP (In Progress)',
      icon: SiPhp,
    },
  ],
  backend: [
    {
      name: 'Node Js',
      icon: SiNodedotjs,
    },
    {
      name: 'Express Js',
      icon: SiExpress,
    },
    {
      name: 'Laravel (In Progress)',
      icon: SiLaravel,
    },
  ],
  frontend: [
    {
      name: 'ReactJS',
      icon: SiReact,
    },
    {
      name: 'NextJS',
      icon: SiNextdotjs,
    },
    {
      name: 'Redux',
      icon: SiRedux,
    },
    {
      name: 'Angular',
      icon: SiAngular,
    },
  ],
  database: [
    {
      name: 'MongoDb',
      icon: SiMongodb,
    },
    {
      name: 'MySQL (In Progress)',
      icon: SiMysql,
    },
    {
      name: 'SocketIO',
      icon: SiSocketdotio,
    },
  ],

  'ui frameworks': [
    {
      name: 'Bootstrap',
      icon: SiBootstrap,
    },
    {
      name: 'Scss',
      icon: SiSass,
    },
    {
      name: 'Styled Components',
      icon: SiStyledcomponents,
    },
    {
      name: 'MaterialUI',
      icon: SiMaterialui,
    },
    {
      name: 'Framer Motion',
      icon: SiFramer,
    },
    {
      name: 'ChakraUI',
      icon: SiChakraui,
    },
    {
      name: 'Core UI',
      icon: BsQuestionSquare,
    },
    {
      name: 'Angular Material',
      icon: SiAngular,
    },
  ],
  'productivity boost': [
    {
      name: 'VSCode',
      icon: SiVisualstudiocode,
    },
    {
      name: 'Git',
      icon: SiGit,
    },
    {
      name: 'Jira',
      icon: SiJirasoftware,
    },
  ],
}

export const splitSkills = (srcArray: Skill[]) => {
  const arrLength = srcArray.length
  const isEvenChunk = arrLength % 2 === 0

  let chunk = 4
  if (isEvenChunk) {
    chunk = arrLength / 2
  } else if (arrLength <= 5 && arrLength > 2) {
    chunk = 3
  }

  let i = 0
  let j = 0
  const temporary = []
  for (i = 0, j = srcArray.length; i < j; i += chunk) {
    temporary.push(srcArray.slice(i, i + chunk))
  }
  return temporary
}
