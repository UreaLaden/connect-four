import { makeId, getRow, getColumn } from "../utils/helpers"
import Coin from "./Coin"
import { markerPositions } from "./GridStyles.css"

export const CoinSpace = (props: any) => {
    const { currentPlayer } = props;

    return (
        <div className={markerPositions.coinContainer}>
            <div className={markerPositions.coinSpace}>
                {
                    Array.from({ length: 42 }, () => 1).map((val, idx) => {
                        return <Coin
                            key={idx}
                            id={makeId(getRow(idx), getColumn(idx))}
                            currentPlayer={currentPlayer} />
                    })
                }
            </div>
        </div>
    )
}

export default CoinSpace;