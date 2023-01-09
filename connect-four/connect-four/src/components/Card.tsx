import { Icon } from "@fluentui/react"
import { styles } from "./Card.css"

export const Card = (props: any) => {
    const { iconName, description, points } = props;

    const isHomePlayer = (iconName: string) => {
        return iconName.split('-')[1] === 'one';
    }

    return (
        <div className={styles.cardContainer} >
            <Icon className={isHomePlayer(iconName) ? styles.homeIcon : styles.awayIcon} iconName={iconName} />
            <div className={isHomePlayer(iconName) ? styles.statsContainerHome : styles.statsContainerAway}>
                <div className={styles.description}>{description}</div>
                <div className={styles.points}>{points}</div>
            </div>
        </div>
    )
}