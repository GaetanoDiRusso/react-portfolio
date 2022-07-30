import TwoLineText from './TwoLineText'
type Props = {
  position: string
}

export default function Position({position}: Props) {
  const firstWord = position.split(' ')[0]
  const secondWord = position.split(' ')[1]

  return (
    <TwoLineText firstText={firstWord} secondText={secondWord} color='primary'/>
  )
}
