import { Icon } from "@fluentui/react"
import useWindowDimensions from "../utils/CustomHooks";
import { styles } from "./Card.css";
import * as React from 'react';

export const Card = (props: any) => {
    const { iconName, description, points } = props;
    const { width } = useWindowDimensions();

    const isHomePlayer = (iconName: string) => {
        return iconName.split('-')[1] === 'one';
    }

    const isDesktopView = React.useCallback(() =>{
        return width > 1400;
    },[width])

    return (
        <div className={isDesktopView() ? (isHomePlayer(iconName) ? styles.cardContainerHome : styles.cardContainerAway) : styles.cardContainer} >
            <Icon className={isHomePlayer(iconName) ? styles.homeIcon : styles.awayIcon} iconName={iconName} />
            <div className={isHomePlayer(iconName) ? styles.statsContainerHome : styles.statsContainerAway}>
                <div className={styles.description}>{description}</div>
                <div className={styles.points}>{points}</div>
            </div>
        </div>
    )
}