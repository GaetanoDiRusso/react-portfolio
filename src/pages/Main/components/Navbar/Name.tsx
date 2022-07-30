import classes from './Name.module.scss';

type Props = {
  name: string
}

export default function Name({name}: Props) {
  return (
    <h4 className={classes.title}>{name}</h4>
  )
}
