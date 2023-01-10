import { Stack } from "@fluentui/react"
import { Link } from "react-router-dom";
import { styles } from "./PauseMenu.css"

export const PauseMenu = (props: any) => {
    const { pauseGame } = props;

    const restartButtonHandler = () => {
        alert('Restart Game');
    }

    return (
        <div className={styles.pauseMenuMainContainer}>
            <div className={styles.pauseMenuModal}>
                <Stack
                    verticalFill={true}
                    gap={15}
                    horizontalAlign={'center'}>
                    <div className={styles.pauseMenuHeader}>PAUSE</div>
                    <button className={styles.menuButtonNormal} onClick={pauseGame}>CONTINUE GAME</button>
                    <button className={styles.menuButtonNormal} onClick={restartButtonHandler}>RESTART</button>
                    <button className={styles.menuButtonQuit}>
                        <Link className={styles.menuLink} to="/">QUIT GAME</Link>
                    </button>
                </Stack>
            </div>

        </div>
    )
}