import React from 'react'
import classes from './DownloadCVButton.module.scss'
import { FiDownload } from "react-icons/fi";

type Props = {
  url: string;
}

export default function DownloadCVButton({url}: Props) {
  return (
    <a href={url} target="_blank" className={classes.mainContainer}>
      <FiDownload className={classes.downloadButton}/>
    </a>
  )
}