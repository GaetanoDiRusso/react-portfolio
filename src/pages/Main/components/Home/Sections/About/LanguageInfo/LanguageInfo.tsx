import { Language } from 'core'
import classes from './LanguageInfo.module.scss'
import { FiDownload } from "react-icons/fi";

type Props = {
    language: Language
}

export default function LanguageInfo({language}: Props) {
  return (
    <li className={classes.mainContainer}>
        <div className={classes.languageNameContainer}>
            <div className={classes.languageNameInner}>
                <h1>
                    {language.language}
                </h1>
            </div>
        </div>

        <div className={classes.languageDescriptionContainer}>
            <div className={classes.languageDescription}>
                {language.description && (
                    <h2>
                        {language.description}
                    </h2>
                )}
                
                {language.certificateUrl && (
                    <a href={language.certificateUrl} target="_blank">
                        <FiDownload className={classes.downloadIcon}/>
                        <h3>
                            download certificate
                        </h3>
                    </a>
                )}
            </div>
        </div>
    </li>
  )
}
