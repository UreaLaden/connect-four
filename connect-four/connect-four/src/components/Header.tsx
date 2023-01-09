import { Icon, Link } from "@fluentui/react"
import { styles } from "./Header.css"

export const Header = () => {
    return(
        <>
        <button className={styles.menuButton} type={'button'}>
            <Link className={styles.menuLink} to="/">MENU</Link>
        </button>
        <Icon
            iconName="logo-svg"
            className={styles.logo}
        />
        <button className={styles.menuButton} type={'button'}>
            <Link className={styles.menuLink} to="/">RESET</Link>
        </button>
    </>
    )
}