import { Stack } from "@fluentui/react"
import { styles } from "./PauseMenu.css"

export const PauseMenu = () =>{

    const continueButtonHandler = () =>{
        alert('Clicked Continue Button');
    }

    const restartButtonHandler = () => {
        alert('Restart Game');
    }

    const quitButtonHandler = () => {
        alert("Quit Game");
    }

    return(
        <div className={styles.pauseMenuMainContainer}>
            <div className={styles.pauseMenuModal}>
            <Stack
                verticalFill={true}
                gap={15}
                horizontalAlign={'center'}>
                <div className={styles.pauseMenuHeader}>PAUSE</div>
                <button className={styles.menuButtonNormal} onClick={continueButtonHandler}>CONTINUE GAME</button>
                <button className={styles.menuButtonNormal} onClick={restartButtonHandler}>RESTART</button>
                <button className={styles.menuButtonQuit} onClick={quitButtonHandler}>QUIT</button>
                
            </Stack>
            </div>

        </div>
    )
}