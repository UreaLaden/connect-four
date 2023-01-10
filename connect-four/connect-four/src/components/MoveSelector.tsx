import { getColumn } from "../utils/helpers";
import { markerPositions } from "./GridStyles.css";

export const MoveSelector = (props:any) => {
    const {makeMove} = props;
    return(
        <div className={markerPositions.selectionContainer}>
        {Array.from({ length: 7 }, () => 0).map((val, idx) => {
            const id = `marker-position-${String.fromCharCode(getColumn(idx) + 64)}`;
            return <div
                className={markerPositions.selectionOption}
                id={id}
                key={id}
                onClick={(event) => {
                    const div = (event.target as HTMLDivElement).getAttribute("id");
                    const col = div?.split('-')[2];
                    makeMove(col);
                }}></div>
        })}
    </div>
    )
}