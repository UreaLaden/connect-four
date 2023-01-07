import { Icon } from "@fluentui/react"
import { styles } from "./Card.css"

export const Card = (props:any) =>{
    const {iconName,description,points} = props;
    return(
        <div className={styles.container}>
            <Icon className={styles.icon} iconName={iconName}/>
            <div className={styles.description}>{description}</div>
            <div className={styles.points}>{points}</div>
        </div>
    )
}