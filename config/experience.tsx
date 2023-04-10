export type Company = string

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
  Ejada: {
    name: 'Ejada Systems LTD',
    longName: 'Ejada Systems LTD',
    url: 'https://www.ejada.com/',
    position: 'Software Developer',
    duration: 'Jul 2021 - Present',
    logo: {
      light: '/worked_at_logos/ejada/logo.png',
      dark: '/worked_at_logos/ejada/logo.png',
    },
    roles: [
      <>Built most of the project common components. </>,
      <> Added detailed ReadMe that helped the new joiners a lot. </>,
      <>
        {' '}
        Led a squad of 3 developers as their reviewer/supporter for a month.{' '}
      </>,
      <>
        {' '}
        Meetings with integration and business teams to make field-level
        analyses for some sprints.
      </>,
    ],
  },
}

export const ExperiencesList = [Experiences.Ejada, Experiences.WebSquids]
