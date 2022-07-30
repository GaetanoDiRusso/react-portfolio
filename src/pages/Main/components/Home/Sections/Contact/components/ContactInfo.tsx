import React from 'react'
import classes from './ContactInfo.module.scss'

import { AiOutlineMobile } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";

type Props = {
    email: string;
    number: string;
}

export default function ContactInfo({email, number}: Props) {
  return (
    <div className={classes.mainContainer}>
        <div className={classes.infoContainer}>
            <HiOutlineMail className={classes.icon}/>
            {email}
        </div>

        <div className={classes.infoContainer}>
            <AiOutlineMobile className={classes.icon}/>
            {number}
        </div>
    </div>
  )
}
