import { useState } from 'react'

import classes from './MobileMenuButton.module.scss'

type Props = {
    mode: 'open' | 'close';
    onToggleMenu: () => void;
}

export default function MobileMenuButton({mode, onToggleMenu}: Props) {
    const [open, setOpen] = useState(false);

    const openMenuHandler = () => {
        setOpen(prev => !prev);
        onToggleMenu();
    }

  return (
    <div onClick={openMenuHandler} className={classes.mainContainer}>
        <div className={`${classes.topLine} ${open ? classes.open : ''}`}/>
        <div className={`${classes.middleLine} ${open ? classes.open : ''}`}/>
        <div className={`${classes.bottomLine} ${open ? classes.open : ''}`}/>
    </div>
  )
}
