import classes from './LanguageSelector.module.scss'

export default function LanguageSelector() {
  return (
    <div className={classes.mainContainer}>
      <div className={classes.innerContainer}>
        <button className={classes.left}>ES</button>
        <button className={classes.center}>EN</button>
        <button className={classes.right}>IT</button>
      </div>
    </div>
  )
}
