import { Project as ProjectClass } from "core";
import Front from './components/Front'
import Back from './components/Back'

import classes from './Project.module.scss';

type Props = {
    project: ProjectClass
}

export default function Project({project}: Props) {
  return (
    <div className={classes.mainContainer}>
      <div className={classes.frontContainer}>
        <Front project={project}/>
      </div>
      <div className={classes.backContainer}>
        <Back project={project}/>
      </div>
    </div>
  )
}
