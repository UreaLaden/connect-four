import { Icon } from "@fluentui/react"
import { Player } from "../utils/helpers"
import { Card } from "./Card"
import { Header } from "./Header"
import { styles } from "./GridStyles.css"

export const MobileGrid = (props: any) => {
    const { currentPlayer } = props;
    
    return (
        <div className={styles.mainContainer}>
            <div className={styles.headerContainer}>
                <Header />
            </div>
            <div className={styles.playerStats}>
                <Card
                    iconName={"player-one-svg"}
                    description={"PLAYER 1"}
                    points={"25"} />
                <Card
                    iconName={"player-two-svg"}
                    description={"PLAYER 2"}
                    points={"13"} />
            </div>
            <div className={styles.gameBoard}>
                <Icon className={styles.gameBoardBack} iconName={"board-layer-black-small-svg"} />
                <Icon className={styles.gameBoardFront} iconName={"board-layer-white-small-svg"} />
                <div className={styles.playerTurnMarker}>
                    <Icon
                        className={styles.turnIcon}
                        iconName=
                        {`turn-background-${currentPlayer === Player.PLAYER_TWO ? "yellow" : 'red'}-svg`} />
                </div>
            </div>
            <div className={styles.backgroundImage}>
            </div>
        </div>
    )
}