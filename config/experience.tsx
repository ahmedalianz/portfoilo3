import { Link } from '@chakra-ui/react'

export type Company = 'WebSquids'

export type CompanyDetail = {
  name: string
  longName: string
  url: string
  position: string
  duration: string
  logo: {
    light: string
    dark?: string
  }
  roles?: JSX.Element[]
}

export const Experiences: {
  [key in Company]: CompanyDetail
} = {
  WebSquids: {
    name: 'WebSquids LLC',
    longName: 'WebSquids Software Solutions',
    url: 'https://websquids.com/',
    position: 'Frontend Developer',
    duration: 'Dec 2021 - Present',
    logo: {
      light: '/worked_at_logos/websquids/light.png',
      dark: '/worked_at_logos/websquids/dark.png',
    },
    roles: [
      <>Design and build React based web frontends that consume web APIs</>,
      <>
        Created new features and functionalities used in the company&apos;s
        websites.
      </>,
      <>Developing features to enhance the user experience</>,
      <>
        Ensuring web design is optimized for smartphones. -Building reusable
        code for future use
      </>,
      <>Integrating with Services and APIs</>,
      <>
        Maintaining software workflow management with project management tools:
        Jira , git version control
      </>,
    ],
  },
}

export const ExperiencesList = [Experiences.WebSquids]
