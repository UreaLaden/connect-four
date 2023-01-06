import { styles } from "./GameSpace.css";

const GameSpace = (props: any) => {
    //Probably best to use css grid for the position
    return (
        <div className={styles.mainContainer}>

        <div className={styles.gameSpaceContainer}>
            <div className={styles.menuButtonOne}>MenuButton</div>
            <div className={styles.logo}>Logo</div>
            <div className={styles.menuButtonTwo}>ResetButton</div>
            <div className={styles.homePlayer}>HomePlayer</div>
            <div className={styles.gameBoard}>Play Area</div>
            <div className={styles.awayPlayer}>AwayPlayer</div>
            <div className={styles.backgroundImage}>Background Image</div>
        </div>
            <div className={styles.playerTurnMarker}>Turn Marker</div>
        </div>
    )
}

export default GameSpace;