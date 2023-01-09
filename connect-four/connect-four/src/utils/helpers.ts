import { markerPositions } from "../components/GridStyles.css";

export const enum Player {
    PLAYER_ONE="Player1",
    PLAYER_TWO="Player2",
}

export const Moves:Map<string,string> = new Map();
Moves.set("A",markerPositions.A);
Moves.set("B",markerPositions.B);
Moves.set("C",markerPositions.C);
Moves.set("D",markerPositions.D);
Moves.set("E",markerPositions.E);
Moves.set("F",markerPositions.F);
Moves.set("G",markerPositions.G);