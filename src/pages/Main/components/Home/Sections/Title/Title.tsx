import { PersonalInfo } from "core";
import classes from "./Title.module.scss";
import VerticalLine from "../VerticalLine";
import Name from "./Name";
import Position from "./Position";

type Props = {
  personalInfo: PersonalInfo
}

export default function Title({personalInfo}: Props) {
  const splittedName = personalInfo.title.split(' ')
  return (
    <div className={classes.mainContainer}>
      <div className={classes.nameContainer}>
        <Name firstName={splittedName[0]} lastName={`${splittedName[1]} ${splittedName[2]}`} />
      </div>

      <div className={classes.verticalLineContainer}>
        <VerticalLine />
      </div>

      <div className={classes.positionContainer}>
        <Position position={personalInfo.subtitle} />
      </div>
    </div>
  );
}
