import * as React from "react";
import { Switch, Case, Default, If, Else, Then } from "react-if";
import useWindowDimensions from "../utils/CustomHooks";
import { Player } from "../utils/helpers";
import { DesktopGrid } from "./DesktopGrid";
import { MobileGrid } from "./MobileGrid";
import { PauseMenu } from "./PauseMenu";
import { TabletGrid } from "./TabletGrid";



const GameSpace = (props: any) => {
    const [currentPlayer, setCurrentPlayer] = React.useState<string>("Player2");
    const [endOfTurn, setEndOfTurn] = React.useState<boolean>(false);
    const { width } = useWindowDimensions();
    const [isPaused, setIsPaused] = React.useState<boolean>(false);
    const [lastMove, setLastMove] = React.useState<string>("A");

    React.useEffect(() => {
        if (endOfTurn) {
            setCurrentPlayer(currentPlayer === Player.PLAYER_ONE ? Player.PLAYER_TWO : Player.PLAYER_ONE);
        }
    }, [currentPlayer, endOfTurn])

    const pauseGame = () => {
        setIsPaused(!isPaused);
    }

    const makeMove = (position: string) => {
        console.log("Calling make move");
        setLastMove(position);
    }

    return (
        <>
            <If condition={isPaused}>
                <Then>
                    <PauseMenu pauseGame={pauseGame} />
                </Then>
            </If>
            <Switch>
                <Case condition={width <= 750}>
                    <MobileGrid 
                        currentPlayer={currentPlayer} 
                        makeMove={ makeMove} 
                        lastMove={lastMove} 
                        pauseGame={pauseGame} />
                </Case>
                <Case condition={width >= 1400}>
                    <DesktopGrid 
                        currentPlayer={currentPlayer} 
                        makeMove={makeMove} 
                        lastMove={lastMove} 
                        pauseGame={pauseGame} />
                </Case>
                <Default>
                    <TabletGrid 
                        currentPlayer={currentPlayer} 
                        makeMove={makeMove} 
                        lastMove={lastMove} 
                        pauseGame={pauseGame} />
                </Default>
            </Switch>
        </>
    )
}

export default GameSpace;