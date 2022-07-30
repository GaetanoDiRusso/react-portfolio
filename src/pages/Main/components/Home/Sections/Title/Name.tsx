import TwoLineText from './TwoLineText'

type Props = {
    firstName: string;
    lastName: string;
}

export default function Name({firstName, lastName}: Props) {
  return (
    <div>
      <TwoLineText firstText={firstName} secondText={lastName}/>
    </div>
  )
}
