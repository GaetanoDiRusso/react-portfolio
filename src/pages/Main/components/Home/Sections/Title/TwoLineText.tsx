import React from 'react'
import classes from './TwoLineText.module.scss'

type Props = {
    color?: 'primary' | 'secondary' | 'black'
    firstText: string;
    secondText: string;
}

export default function TwoLineText({firstText, secondText, color}: Props) {
    color = color || 'black';

  return (
    <div className={classes.mainContainer}>
        <h1 className={classes.first + ' ' + classes[color]}>{firstText}</h1>
        <h1 className={classes.second + ' ' + classes[color]}>{secondText}</h1>
    </div>
  )
}
