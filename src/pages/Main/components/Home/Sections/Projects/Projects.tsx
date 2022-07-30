import Project from "./Project/Project";

import { Project as ProjectClass } from "core";
import TitleSection from "pages/Main/components/Home/Sections/TitleSection";
import VerticalLine from "pages/Main/components/Home/Sections/VerticalLine";

import classes from "./Projects.module.scss";

type Props = {
  projects: ProjectClass[];
};

export default function Projects({ projects }: Props) {
  return (
    <div className={classes.mainContainer}>
      <div className={classes.titleContainer}>
        <TitleSection>Projects</TitleSection>
        <VerticalLine />
      </div>

      {/* <div className={classes.descriptionContainer}></div> */}

      <div className={classes.projectsContainer}>
        {projects.map((project, i) => (
          <Project key={i} project={project}/>
        ))}
      </div>
    </div>
  );
}
