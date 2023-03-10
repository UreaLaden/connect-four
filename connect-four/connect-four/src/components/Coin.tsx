import * as React from 'react';
import { Icon } from "@fluentui/react";
import getWindowDimensions from "../utils/CustomHooks"
import { Player } from "../utils/helpers";
import { styles } from "./Coin.css";
import { Else, If } from 'react-if';

export const Coin = (props: any) => {
    const { currentPlayer, id } = props;
    const { width } = getWindowDimensions();
    const [isWinningCoin, setIsWinningCoin] = React.useState<boolean>(false)
    const column = id.split('')[0];

    const getIconType = () => {
        if (width >= 800) {
            return `counter-${currentPlayer === Player.PLAYER_ONE ? 'red' : 'yellow'}-large-svg`
        }
        return `counter-${currentPlayer === Player.PLAYER_ONE ? 'red' : 'yellow'}-small-svg`
    };

    return (
        <div id={id} className={styles.coinInnerContainer}>
            <Icon className={column} iconName={getIconType()} />
            {
                isWinningCoin &&
                <div className={styles.ring}></div>
            }
        </div>
    )
}

export default Coin;