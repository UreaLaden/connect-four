import { Stack } from "@fluentui/react"
import { Icon } from "@fluentui/react/lib/Icon"
import { styles } from "./MainMenu.css"


const MainMenu = () => {
    return (
        <div className={styles.menuContainer}>
            <div className={styles.modalContainer}>
                <Stack>
                    <Icon />
                    <div></div>
                    <div></div>
                </Stack>
            </div>
        </div>
    )
}

export default MainMenu