import { Project } from "core";
import ReactMarkdown from 'react-markdown'

import classes from "./Back.module.scss";

import githubIcon from "assets/github-white-icon.png";
import linkIcon from "assets/external-link.svg";
import { ReactComponent as Logo } from "assets/external-link.svg";

type Props = {
  project: Project;
};

const language = "english";

export default function Back({ project }: Props) {
  return (
    <div className={classes.mainContainer}>
      <div className={classes.textContainer}>
        <ReactMarkdown>{project.description[language]}</ReactMarkdown>
      </div>

      <div className={classes.linksContainer}>
        {project.demoUrl && (
          <a className={`${classes.demoButton} ${project.repositoryUrl ? '' : classes.roundedBorder}`} href={project.demoUrl} target="_blank">
            Demo
            <Logo />
          </a>
        )}

        {project.repositoryUrl && (
          <a className={classes.repositoryButton} href={project.repositoryUrl} target="_blank">
            <img src={githubIcon} />
            Github
          </a>
        )}
      </div>
    </div>
  );
}
