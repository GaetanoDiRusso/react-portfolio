import { useState } from 'react'
import { ContactInfo } from 'core'
import {TitleSection, VerticalLine} from '../index'
import {ContactInfo as ContactInfoView, ContactForm as ContactFormView} from './index'

import {default as useViewModel, ViewInterface} from './ContactViewModel'


import classes from './Contact.module.scss'

type Props = {
  contactInfo: ContactInfo
}

export default function ContactView({contactInfo}: Props) {
  const { sendContactEmailHandler, resetFormStatus, isLoading, isSuccess, error }: ViewInterface = useViewModel();

  return (
    <div className={classes.mainContainer}>
      <div className={classes.titleContainer}>
        <TitleSection>Contact</TitleSection>
        <VerticalLine />
        <ContactInfoView email={contactInfo.mail} number={contactInfo.phoneNumber}/>
      </div>

      <div className={classes.contactFormContainer}>
        <ContactFormView onLoading={isLoading} onReset={resetFormStatus} error={error} onSuccess={isSuccess} onSubmit={sendContactEmailHandler}/>
      </div>
    </div>
  )
}
