import * as React from "react";
import { Switch, Case, Default, If, Else, Then } from "react-if";
import useWindowDimensions from "../utils/CustomHooks";
import { Player } from "../utils/helpers";
import { DesktopGrid } from "./DesktopGrid";
import { MobileGrid } from "./MobileGrid";
import { PauseMenu } from "./PauseMenu";
import { TabletGrid } from "./TabletGrid";



const GameSpace = (props: any) => {
    const [currentPlayer, setCurrentPlayer] = React.useState<string>("Player1");
    const [endOfTurn, setEndOfTurn] = React.useState<boolean>(false);
    const { width } = useWindowDimensions();
    const [isPaused, setIsPaused] = React.useState<boolean>(true);

    React.useEffect(() => {
        if (endOfTurn) {
            setCurrentPlayer(currentPlayer === Player.PLAYER_ONE ? Player.PLAYER_TWO : Player.PLAYER_ONE);
        }
    }, [currentPlayer, endOfTurn])

    return (
        <>
            <If condition={isPaused}>
                <Then>
                 <PauseMenu />   
                </Then>
            </If>
            <Switch>
                <Case condition={width <= 750}>
                    <MobileGrid currentPlayer={currentPlayer} />
                </Case>
                <Case condition={width >= 1400}>
                    <DesktopGrid currentPlayer={currentPlayer} lastMove={'A'} />
                </Case>
                <Default>
                    <TabletGrid currentPlayer={currentPlayer} />
                </Default>
            </Switch>
        </>
    )
}

export default GameSpace;