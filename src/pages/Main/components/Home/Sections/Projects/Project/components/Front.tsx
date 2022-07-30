import { Project } from 'core'
import ReactMarkdown from 'react-markdown'

import TecnologyPrev from 'pages/Main/components/UI/TecnologyPrev/TecnologyPrev'



import classes from './Front.module.scss'

type Props = {
  project: Project
}

const language = 'english'

export default function Front({project}: Props) {
  return (
    <div className={classes.mainContainer}>
      <div className={classes.frontImageContainer}>
        <img
          src={project.frontImage}
          alt={project.title + ' image'}
        />
      </div>

      <div className={classes.iconContainer}>
        <img
          src={project.iconImage}
          alt={project.title + ' icon'}
        />
      </div>

      <div className={classes.infoContainer}>
        <div className={classes.textContainer}>
          <div className={classes.titleContainer}>
            <h1>{project.title}</h1>
          </div>

          <div className={classes.quickDescriptionContainer}>
            <h1>{project.quickDescription[language]}</h1>
          </div>
        </div>


        <div className={classes.tecnologiesContainer}>
          {project.usedTecnologies.map((tecnology, i) => (
            <TecnologyPrev tecnology={tecnology} key={i}/>
          ))}
        </div>
      </div>
    </div>
  )
}
