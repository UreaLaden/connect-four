import * as React from "react";
import { Switch, Case, Default } from "react-if";
import useWindowDimensions from "../utils/CustomHooks";
import { Player } from "../utils/helpers";
import { DesktopGrid } from "./DesktopGrid";
import { MobileGrid } from "./MobileGrid";
import { TabletGrid } from "./TabletGrid";



const GameSpace = (props: any) => {
    const [currentPlayer, setCurrentPlayer] = React.useState<string>("Player1");
    const [endOfTurn, setEndOfTurn] = React.useState<boolean>(false);
    const { width } = useWindowDimensions();

    React.useEffect(() => {
        if (endOfTurn) {
            setCurrentPlayer(currentPlayer === Player.PLAYER_ONE ? Player.PLAYER_TWO : Player.PLAYER_ONE);
        }
    }, [currentPlayer, endOfTurn])

    return (
        <>
            <Switch>
                <Case condition={width <= 750}>
                    <MobileGrid currentPlayer={currentPlayer} />
                </Case>                
                <Case condition={width >= 1400}>
                    <DesktopGrid currentPlayer={currentPlayer} />
                </Case>
                <Default>
                    <TabletGrid currentPlayer={currentPlayer} />
                </Default>
            </Switch>
        </>
    )
}

export default GameSpace;