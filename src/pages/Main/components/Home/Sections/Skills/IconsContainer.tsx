import classes from './IconsContainer.module.scss'

type Props = {
    icons: Array<string>;
}

export default function IconsContainer({icons}: Props) {
  return (
    <div className={classes.mainContainer}>
        <div className={classes.innerContainer}>
        {icons.map((iconSrc, i) => {
            const gridColumn = i + 1;
            const sup = i % 3 == 1;

            return (
            <img
                key={i}
                style={{ gridColumn: gridColumn }}
                src={iconSrc}
                alt="icon"
                className={sup ? classes.iconSup : classes.iconInf}
            />
            );
        })}
        </div>
    </div>
  )
}
