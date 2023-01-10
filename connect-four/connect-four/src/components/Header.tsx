import { Icon } from "@fluentui/react"
import { styles } from "./Header.css"

export const Header = (props: any) => {
    const { pauseGame } = props;
    return (
        <>
            <button className={styles.menuButton} type={'button'} onClick={ () => pauseGame()}>MENU</button>
            <Icon
                iconName="logo-svg"
                className={styles.logo}
            />
            <button className={styles.menuButton} type={'button'}>RESTART</button>
        </>
    )
}