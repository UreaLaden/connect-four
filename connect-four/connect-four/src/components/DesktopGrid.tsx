import * as React from 'react';
import { Icon, IProcessedStyleSet } from "@fluentui/react";
import { getColumn, getRow, makeId, Player } from "../utils/helpers";
import { Card } from "./Card";
import { markerPositions, styles } from "./GridStyles.css";
import { Header } from "./Header";
import Coin from './Coin';
import CoinSpace from './CoinSpace';

export const DesktopGrid = (props: any) => {
    const { currentPlayer, lastMove, pauseGame } = props;

    const getPositionClass = React.useCallback(() => {
        let positionClass: any;
        switch (lastMove) {
            case 'A':
                positionClass = markerPositions.A;
                break;
            case 'B':
                positionClass = markerPositions.B;
                break;
            case 'C':
                positionClass = markerPositions.C;
                break;
            case 'D':
                positionClass = markerPositions.D;
                break;
            case 'E':
                positionClass = markerPositions.E;
                break;
            case 'F':
                positionClass = markerPositions.F;
                break;
            case 'G':
                positionClass = markerPositions.G;
                break;
        }

        return positionClass;
    }, [lastMove])


    return (
        <div className={styles.mainContainer}>
            <div className={styles.headerContainer}>
                <Header pauseGame={pauseGame} />
            </div>
            <div className={markerPositions.markerContainer}>
                <div className={getPositionClass()}>
                    <Icon
                        className={markerPositions.icon}
                        iconName={'marker-red-svg'}
                    />
                </div>
            </div>
            <div className={styles.playerOneStats}>
                <Card
                    iconName={"player-one-svg"}
                    description={"PLAYER 1"}
                    points={"25"} />
            </div>
            <div className={styles.playerTwoStats}>
                <Card
                    iconName={"player-two-svg"}
                    description={"PLAYER 2"}
                    points={"13"} />
            </div>
            <div className={styles.gameBoard}>
                <Icon className={styles.gameBoardBack} iconName={"board-layer-black-large-svg"} />
                <Icon className={styles.gameBoardFront} iconName={"board-layer-white-large-svg"} />
                <CoinSpace currentPlayer={currentPlayer} />
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