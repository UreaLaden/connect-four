import { Icon } from "@fluentui/react";
import { Link } from "react-router-dom";
import { Card } from "./Card";
import { styles } from "./GameSpace.css";

const GameSpace = (props: any) => {
    //Probably best to use css grid for the position
    return (
        <div className={styles.mainContainer}>

            <Icon className={styles.playerMoveMarker} iconName={"marker-red-svg"} />
            <div className={styles.gameSpaceContainer}>
                <div className={styles.menuButtonOne}>
                </div>
                <div className={styles.logoContainer}>
                    <button className={styles.menuButtonA} type={'button'}>
                        <Link className={styles.menuLink} to="/">MENU</Link>
                    </button>
                    <Icon
                        iconName="logo-svg"
                        className={styles.logo}
                    />
                    <button className={styles.menuButtonB} type={'button'}>
                        <Link className={styles.menuLink} to="/">RESET</Link>
                    </button>
                </div>
                <div className={styles.menuButtonTwo}>
                </div>
                <div className={styles.homePlayer}>
                    <Card
                        iconName={"player-one-svg"}
                        description={"PLAYER 1"}
                        points={"25"}
                    />
                </div>
                <div className={styles.gameBoardBack}>
                    <Icon className={styles.boardBack} iconName={"board-layer-black-large-svg"} />
                </div>
                <div className={styles.gameBoardFront}>
                    <Icon className={styles.boardFront} iconName={"board-layer-white-large-svg"} />
                </div>
                <div className={styles.playerTurnMarker}>
                    {/* <Icon className={styles.turnIcon} iconName={'turn-background-red-svg'}/>                     */}
                    <Icon className={styles.turnIcon} iconName={'turn-background-yellow-svg'} />
                </div>
                <div className={styles.awayPlayer}>
                    <Card
                        iconName={"player-two-svg"}
                        description={"PLAYER 2"}
                        points={"32"} />
                </div>
                <div className={styles.backgroundImage}>Background Image</div>
            </div>
        </div>
        // <div className={styles.playerMoveMarker}>Play Move Maker</div>
    )
}

export default GameSpace;