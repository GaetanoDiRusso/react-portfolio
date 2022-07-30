import { Tecnology } from 'core'

import classes from './TecnologyPrev.module.scss'

type Props = {
  tecnology: Tecnology
}

export default function TecnologyPrev({tecnology}: Props) {
  return (
    <div className={classes.mainContainer}>
        {tecnology.logoUrl && <img
          src={tecnology.logoUrl}
        />}
        <p style={{color: tecnology.textColor}}>{tecnology.name}</p>
    </div>
  )
}
