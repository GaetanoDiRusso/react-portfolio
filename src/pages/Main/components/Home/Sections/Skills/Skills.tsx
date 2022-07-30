import { Skills as SkillsClass } from 'core'
import ReactMarkdown from 'react-markdown'

import TitleSection from "../TitleSection";
import VerticalLine from "../VerticalLine";

import IconsContainer from "./IconsContainer";

import classes from "./Skills.module.scss";

type Props = {
  skills: SkillsClass
}

const language = 'english'

export default function Skills({skills}: Props) {
  return (
    <div className={classes.mainContainer}>
      <div className={classes.titleContainer}>
        <TitleSection>Skills</TitleSection>
        <VerticalLine />
        <IconsContainer icons={skills.images}/>
      </div>

      <ReactMarkdown className={classes.descriptionContainer}>
        {skills.description[language]}
      </ReactMarkdown>
    </div>
  );
}
