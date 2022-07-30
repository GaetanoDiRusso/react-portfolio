import { AboutMe } from 'core'
import ReactMarkdown from 'react-markdown'

import TitleSection from '../TitleSection'
import VerticalLine from '../VerticalLine'
import classes from './About.module.scss'
import LanguageInfo from './LanguageInfo/LanguageInfo'

type Props = {
  aboutMe: AboutMe
}

const language = 'english'

export default function About({aboutMe}: Props) {
  return (
    <div className={classes.mainContainer}>
      <div className={classes.titleContainer}>
        <TitleSection>About me</TitleSection>
        <VerticalLine/>
      </div>

      <ReactMarkdown className={classes.descriptionContainer}>
        {aboutMe.description[language]}
      </ReactMarkdown>

      <div className={classes.languagesContainer}>
        <ul>
          {aboutMe.languages.map((language, i) => (
            <LanguageInfo key={i} language={language}/>
          ))}
        </ul>
      </div>
    </div>
  )
}
