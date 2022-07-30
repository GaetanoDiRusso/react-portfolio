import { PersonalInfo } from 'core'
import classes from './Navbar.module.scss'

import Menu from './Menu'
import LanguageSelector from './LanguageSelector'
import Name from './Name'

type Props = {
  personalInfo: PersonalInfo
}

export default function Navbar({personalInfo}: Props) {
  return (
    <header className={classes.mainContainer}>
      <div className={classes.innerContainer}>
        <Name name={personalInfo.title}/>
        {/* <LanguageSelector/> */}
        <Menu CVUrl={personalInfo.CVUrl}/>
      </div>
    </header>
  )
}
