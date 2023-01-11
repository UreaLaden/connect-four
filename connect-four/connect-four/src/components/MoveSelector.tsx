import Coin from "./Coin";
import { markerPositions } from "./GridStyles.css";
import * as React from 'react';
import { positions } from "./Positions.css";

export const MoveSelector = (props:any) => {
    const {makeMove,currentPlayer} = props;

    const getPositionClass = React.useCallback((key:string) => {
        let positionClass: any;
        switch (key) {
            case 'A':
                positionClass = positions.A;
                break;
            case 'B':
                positionClass = positions.B;
                break;
            case 'C':
                positionClass = positions.C;
                break;
            case 'D':
                positionClass = positions.D;
                break;
            case 'E':
                positionClass = positions.E;
                break;
            case 'F':
                positionClass = positions.F;
                break;
        }

        return positionClass;
    },[]);

    React.useEffect(() =>{

    },)

    const columns = ['A','B','C','D','E','F','G'];
    const rows = ['A','B','C','D','E','F'].reverse() ;
    return(
        <div className={markerPositions.selectionContainer}>
        {columns.map((columnValue, idx) => {
            const id = `column-${columnValue}`;
            return (<div
                className={markerPositions.selectionColumn}
                id={id}
                key={id}
                onClick={(event) => {
                    const div = (event.target as HTMLDivElement).getAttribute("id");
                    const col = div?.split('-')[1];
                    const children = (event.target as HTMLDivElement).children;
                    let childId;
                    for(let i=1;i<children.length;i++){
                        childId = children.item(i)?.getAttribute("id");
                        if(!childId?.includes('--played')){
                            console.log(`Playing: ${childId}`);
                            children.item(i)?.setAttribute("id",childId + '--played');
                            break;
                        }
                    }
                    makeMove(col);
                }}>
                    <>
                    <div className={markerPositions.origin}></div>
                    {
                    rows.map((rowValue,idx) =>{
                        return <div key={idx} id={`row-${idx}-${columnValue + rowValue}`} className={getPositionClass(rowValue)}>
                        <Coin
                            key={idx}
                            id={columnValue+rowValue}
                            currentPlayer={currentPlayer} />
                    </div>})
                    }
                    </>
                </div>)
        })}
    </div>
    )
}