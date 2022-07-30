import { useState } from 'react'
import classes from './Menu.module.scss'
import DownloadCVButton from './DownloadCVButton'
import MobileMenuButton from './MobileMenuButton'

type Props = {
  CVUrl: string
}

export default function Menu({CVUrl}: Props) {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className={classes.mainContainer}>
      <div className={classes.mobileMenuButtonContainer}>
        <MobileMenuButton onToggleMenu={() => setOpenMenu(prev => !prev)} mode={openMenu ? 'open' : 'close'}/>
      </div>

      <ul className={`${classes.buttonsContainer} ${openMenu ? classes.open : ''}`}>
        <li onClick={() => setOpenMenu(false)}><a href='#home' className={classes.menuButton}>home</a></li>
        <li onClick={() => setOpenMenu(false)}><a href='#about-me' className={classes.menuButton}>about me</a></li>
        <li onClick={() => setOpenMenu(false)}><a href='#skills' className={classes.menuButton}>skills</a></li>
        <li onClick={() => setOpenMenu(false)}><a href='#projects' className={classes.menuButton}>projects</a></li>
        <li onClick={() => setOpenMenu(false)}><a href='#contact' className={classes.menuButton}>contact</a></li>
        <DownloadCVButton url={CVUrl}/>
      </ul>
    </div>
  )
}
