import { Stack } from "@fluentui/react"
import { Icon } from "@fluentui/react/lib/Icon"
import { styles } from "./MainMenu.css"

const MainMenu = () => {
    return (
        <div className={styles.menuContainer}>
            <div className={styles.modalContainer}>
                <Stack
                    verticalFill={true}
                    verticalAlign={'center'}
                    className={styles.menuButtonsContainer}>
                    <Icon
                        iconName="logo-svg"
                        className={styles.logo}
                    />
                    <button type={'button'} className={styles.pvpButton} onClick={() => { }}>
                        <div className={styles.buttonText}>
                            PLAY VS PLAYER
                        </div>
                        {/* <img className={styles.pvpSVG} src={"../utils/images/player-vs-player.svg"} alt={"player-vs-player-svg"}/> */}
                        <Icon iconName={"player-vs-player-svg"} className={styles.pvpSVG} />
                    </button>
                    <button type={'button'} className={styles.gameRulesButton} >
                        <div className={styles.buttonText}>
                            GAME RULES
                        </div>
                    </button>
                </Stack>
            </div>
        </div>
    )
}

export default MainMenu