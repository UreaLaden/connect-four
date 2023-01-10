import { markerPositions } from "../components/GridStyles.css";

export const enum Player {
  PLAYER_ONE = "Player1",
  PLAYER_TWO = "Player2",
}

export const Moves: Map<string, string> = new Map();
Moves.set("A", markerPositions.A);
Moves.set("B", markerPositions.B);
Moves.set("C", markerPositions.C);
Moves.set("D", markerPositions.D);
Moves.set("E", markerPositions.E);
Moves.set("F", markerPositions.F);
Moves.set("G", markerPositions.G);

export const makeId = (row: number, column: number) => {
  const rowKey = `${String.fromCharCode(65 + row-1)}`;
  const columnKey = `${String.fromCharCode(65 + column-1)}`;
  return columnKey + rowKey;
};

export const getRow = (index:number) =>{
    if((index + 1) <= 7){
        return 1
    }
    if((index +1) > 7 && (index + 1) <= 14){
        return 2;
    }
    if((index+1) > 14 && (index + 1) <= 21){
        return 3;
    }
    if((index+1) > 21 && (index+1) <= 28){
        return 4;
    }
    if((index+1) > 28 && (index+1) <= 35){
        return 5;
    }
    if((index+1) > 35 && (index+1) <= 42){
        return 6;
    }
    console.log(index + 1);
    return -1;
}

export const getColumn = (index:number) =>{
    const num1 = Math.floor(index / 7);
    const num2 = num1 * 7;
    const column = index - num2 + 1;
    return column;
}