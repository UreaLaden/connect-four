import { Icon } from "@fluentui/react";
import { Link } from "react-router-dom";
import { styles } from "./GameRules.css";

export const GameRules = () => {
    return (
        <div className={styles.rulesContainer}>
            <div className={styles.menuContainer}>
                <div className={styles.modalContainer}>
                    <h1 className={styles.rulesHeader}>RULES</h1>
                    <div className={styles.contentContainer}>
                        <h3 className={styles.subHeader}>OBJECTIVE</h3>
                        <p className={styles.objective}>Be the first player to connect 4 of the same colored discs in a row (either vertically, horizontally, or diagonally).</p>
                        <h3 className={styles.subHeader}>HOW TO PLAY</h3>
                        <ol className={styles.itemList}>
                            <li className={styles.listItem}>Red goes first in the first game.</li>
                            <li className={styles.listItem}>Players must alternate turns, and only one disc can be dropped in each turn.</li>
                            <li className={styles.listItem}>The game ends when there is a 4-in-a-row or a stalemate.</li>
                            <li className={styles.listItem}>The starter of the previous game goes second on the next game.</li>
                        </ol>
                        <div className={styles.rulesIconContainer}>
                                <Link to="/">
                                    <Icon className={styles.rulesIcon} iconName={"icon-check-svg"} />
                                </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GameRules;