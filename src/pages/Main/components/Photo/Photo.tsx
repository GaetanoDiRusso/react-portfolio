import Image from 'pages/Main/components/Image/Image'
import classes from './Photo.module.scss'

type Props = {
  imageUrl: string;
}

export default function Photo({imageUrl}: Props) {
  return (
    <div className={classes.mainContainer}>
      <Image src={imageUrl}/>
    </div>
  )
}
