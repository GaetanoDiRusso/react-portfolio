import {PersonalInfo, AboutMe, Skills, Project, Job, ContactInfo} from 'core'
import classes from './Home.module.scss'
import {Title, Skills as SkillsSec, Projects, Experience, ContactView, About} from './Sections/index'


type Props = {
  personalInfo: PersonalInfo,
  aboutMe: AboutMe,
  skills: Skills,
  projects: Project[],
  // experience: Job[],
  contactInfo: ContactInfo,
}

export default function Home({personalInfo, aboutMe, skills, projects, contactInfo}: Props) {
  return (
    <div className={classes.mainContainer}>

      <div className={classes.sectionContainer}>
        <Title personalInfo={personalInfo}/>
        <div id='about-me'/>
      </div>

      <div className={classes.sectionDivider}/>

      <div className={classes.sectionContainer}>
        <About aboutMe={aboutMe}/>
        <div id='skills'/>
      </div>

      <div className={classes.sectionDivider}/>

      <div className={classes.sectionContainer}>
        <SkillsSec skills={skills}/>
        <div id='projects'/>
      </div>

      <div className={classes.sectionDivider}/>

      <div className={classes.sectionContainer}>
        <Projects projects={projects}/>
        <div id='contact'/>
      </div>

      {/* <div className={classes.sectionDivider}/>

      <div className={classes.sectionContainer}><Experience experience={experience}/></div> */}

      <div className={classes.sectionDivider}/>

      <div className={classes.sectionContainer}><ContactView contactInfo={contactInfo}/></div>
            
    </div>
  )
}
