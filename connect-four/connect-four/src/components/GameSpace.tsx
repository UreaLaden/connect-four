import { Icon } from "@fluentui/react";
import * as React from "react";
import { Link } from "react-router-dom";
import { Card } from "./Card";
import { styles } from "./GameSpace.css";

const enum Player {
    PLAYER_ONE="Player1",
    PLAYER_TWO="Player2",
}

const GameSpace = (props: any) => {
    const [currentPlayer, setCurrentPlayer] = React.useState<string>("Player1");
    const [endOfTurn,setEndOfTurn] = React.useState<boolean>(false);

    React.useEffect(()=>{
        if(endOfTurn){
            setCurrentPlayer(currentPlayer === Player.PLAYER_ONE ? Player.PLAYER_TWO : Player.PLAYER_ONE);
        }
    },[currentPlayer,endOfTurn])

    return (
        <div className={styles.mainContainer}>

            <Icon className={styles.playerMoveMarker} iconName={`marker-${currentPlayer === Player.PLAYER_TWO ? "yellow" : 'red'}-svg`} />
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
                    <Icon className={styles.turnIcon} iconName={`turn-background-${currentPlayer === Player.PLAYER_TWO ? "yellow" : 'red'}-svg`} />
                </div>
                <div className={styles.awayPlayer}>
                    <Card
                        iconName={"player-two-svg"}
                        description={"PLAYER 2"}
                        points={"32"} />
                </div>
            </div>
            <div className={styles.backgroundImage}></div>
        </div>
    )
}

export default GameSpace;