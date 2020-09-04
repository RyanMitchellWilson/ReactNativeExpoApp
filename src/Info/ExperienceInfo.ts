export interface ExperienceInfoInterface {
  beginningDate: string
  company: string
  details: string[]
  endDate: string
  location: string
  title: string
}

export const ExperienceInfo: ExperienceInfoInterface[] = [
  {
    beginningDate: 'April 2018',
    company: 'Athlinks',
    details: [
      'Designed, created, and maintained the second version of the Athlinks Mobile app',
      'Established the first iteration of map tracking using predictive algorithms to place a marker at the estimated location of a runner',
      'Developed a stand-alone web app version of live map tracking',
      'Collaborated on a Live Results pipeline to deliver sub-second race results during an event in both the app and website using S3 and AWS lambdas'
    ],
    endDate: 'August 2020',
    location: 'Louisville, CO',
    title: 'Software Engineer II'
  },
  {
    beginningDate: 'March 2017',
    company: 'Athlinks',
    details: [
      'Developed the first version of Athlinks Mobile App using React-Native',
      'Collaboratively created the first iteration of the Athlinks Website using React'
    ],
    endDate: 'April 2018',
    location: 'Louisville, CO',
    title: 'Software Engineer I'
  },
  {
    beginningDate: 'June 2015',
    company: 'Athlinks',
    details: [
      'Developed the first iteration of both the Athlinks Events and Results web pages'
    ],
    endDate: 'March 2017',
    location: 'Louisville, CO',
    title: 'Associate Software Engineer'
  }
]