import React from 'react'
import classes from './VerticalLine.module.scss'

export default function VerticalLine() {
  return (
    <div className={classes.mainContainer}>
        <div className={classes.verticalLine}/>
        <div style={{transform: 'translateY(10%)'}} className={classes.verticalLine}/>
    </div>
  )
}
