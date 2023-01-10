import * as React from 'react';
import { Icon } from "@fluentui/react";
import getWindowDimensions from "../utils/CustomHooks"
import { Player } from "../utils/helpers";
import { styles } from "./Coin.css";

export const Coin = (props: any) => {
    const { currentPlayer, id } = props;
    const { width } = getWindowDimensions();
    const [isWinningCoin, setIsWinningCoin] = React.useState<boolean>(false)

    const getIconType = () => {
        if (width >= 800) {
            return `counter-${currentPlayer === Player.PLAYER_ONE ? 'red' : 'yellow'}-large-svg`
        }
        return `counter-${currentPlayer === Player.PLAYER_ONE ? 'red' : 'yellow'}-small-svg`
    }

    return (
        <div id={id} className={styles.coinContainer}>
            <Icon iconName={getIconType()} />
            {
                isWinningCoin &&
                <div className={styles.ring}></div>
            }
        </div>
    )
}

export default Coin;