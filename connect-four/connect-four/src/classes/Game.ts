import { Node } from "./Node";

export type Coordinate = [number, number];

export const coordinates: Map<string, Coordinate> = new Map<
  string,
  Coordinate
>();
export type PlayerType = "player1" | "player2" | "cpu" | "temp";
export type Direction =
  | "horizontal"
  | "vertical"
  | "left-diagonal"
  | "right-diagonal";
export enum Directions {
  HORIZONTAL = "horizontal",
  VERTICAL = "vertical",
  LEFT_DIAGONAL = "left-diagonal",
  RIGHT_DIAGONAL = "right-diagonal",
}

export class Game {
  private _maxCols: number;
  private _maxRows: number;
  private availableCoords: Map<string, Coordinate>;
  private unAvailableCoords: Map<string, Coordinate>;
  private columnsInPlay: string[];
  private columnQueue: Map<string, string[]>;
  public gameWon:boolean;
  public winner:PlayerType | undefined;
  private static _Instance: Game;
  public static Instance() {
    return this._Instance || (this._Instance = new this(7, 6));
  }

  constructor(maxCols: number, maxRows: number) {
    this._maxCols = maxCols;
    this._maxRows = maxRows;
    this.availableCoords = new Map<string, Coordinate>();
    this.unAvailableCoords = new Map<string, Coordinate>();
    this.columnQueue = new Map<string, string[]>();
    this.columnsInPlay = [];
    this.gameWon = false;
    this.winner = undefined;
    this.populateCoordinates();
  }
  private populateCoordinates = (): void => {
    for (let col = 0; col < this._maxCols; col++) {
      this.columnsInPlay.push(String.fromCharCode(65 + col));
      for (let row = 0; row < this._maxRows; row++) {
        const key = `${String.fromCharCode(65 + col)}${String.fromCharCode(
          65 + row
        )}`;
        this.availableCoords.set(key, [row, col]);
      }
    }
  };

  public setNode = (key: string, playerType: PlayerType): void => {
    //Confirm we are able to add new node to the column
    if (!this.columnQueue.has(key)) return;
    //If so confirm column has a queue
    let column: string[] | undefined = this.columnQueue.get(key);
    if (column === undefined) {
      //If not we create a queue
      column = [];
    }
    if (column.length === this._maxRows) return;

    //then unshift the first node
    const newKey = String.fromCharCode(65 + column.length);
    column.unshift(newKey);
    this.columnQueue.set(key, column);
    const columnIndex = key.charCodeAt(0) - 65;
    const rowIndex = column.indexOf(newKey);

    const node: Node = new Node([columnIndex, rowIndex], playerType);
    node.setNeighbours(this.getNeighbours(node));
    //If the node is an option and is available we occupy the location
    if(this.availableCoords.has(node.getLocationString) && !this.unAvailableCoords.has(node.getLocationString)){
        this.unAvailableCoords.set(node.getLocationString,node.getLocation);
        this.gameWon = this.checkWin(node);
    }
  };

  public getNeighbours = (node: Node): Node[] => {
    const neighbours: Node[] = [];
    const base: Coordinate = node.getLocation;
    const baseCol = base[0];
    const baseRow = base[1];
    for (let col = baseCol - 1; col <= 3; col++) {
      if (col < 0 || col > this._maxCols || col === baseCol) continue;
      for (let row = baseRow - 1; row <= 3; row++) {
        if (row < 0 || row > this._maxRows || row === baseRow) continue;
        //Confirm the neighbour is in the unavailable map. If so add to neighbours
        const tempNode = new Node([col, row], "temp");
        const nodeInPlay = this.unAvailableCoords.has(
          tempNode.getLocationString
        );
        if (nodeInPlay) {
          neighbours.push(tempNode);
        }
      }
    }
    return neighbours;
  };

  public checkWin = (node: Node): boolean => {
    const hWin = this._checkWinHelper(node, Directions.HORIZONTAL);
    const vWin = this._checkWinHelper(node, Directions.VERTICAL);
    const ldWin = this._checkWinHelper(node, Directions.LEFT_DIAGONAL);
    const rdWin = this._checkWinHelper(node, Directions.RIGHT_DIAGONAL);

    return hWin || vWin || ldWin || rdWin;
  };

  private _checkWinHelper = (node: Node, direction: Direction): boolean => {
    const currentSet: Node[] = [node];

    let tempNodePos: Node;
    let tempNodeNeg: Node;
    let tempNodeUpperRight: Node;
    let tempNodeLowerLeft: Node;
    let tempNodeUpperLeft: Node;
    let tempNodeLowerRight: Node;

    const startX = node.getLocation[0];
    const startY = node.getLocation[1];

    let counter = 0;

    let pos: number;
    let neg: number;
    let xPos: number;
    let yPos: number;
    let xNeg: number;
    let yNeg: number;
    for (let i = 0; i <= 4; i++) {
      if (currentSet.length === 4) return true;
      counter++;
      switch (direction) {
        case Directions.HORIZONTAL:
          pos = startX + counter;
          neg = startX - counter;
          if (pos >= 0 && pos < this._maxCols) {
            tempNodePos = new Node([pos, node.getLocation[1]], "temp");
            if (this.unAvailableCoords.has(tempNodePos.getLocationString)) {
              currentSet.push(tempNodePos);
            }
          }
          if (neg >= 0) {
            tempNodeNeg = new Node([neg, node.getLocation[1]], "temp");
            if (this.unAvailableCoords.has(tempNodeNeg.getLocationString)) {
              currentSet.push(tempNodeNeg);
            }
          }
          break;
        case Directions.VERTICAL:
          pos = startX + counter;
          neg = startX - counter;
          if (pos >= 0 && pos < this._maxCols) {
            tempNodePos = new Node([node.getLocation[0], pos], "temp");
            if (this.unAvailableCoords.has(tempNodePos.getLocationString)) {
              currentSet.push(tempNodePos);
            }
          }
          if (neg >= 0) {
            tempNodeNeg = new Node([node.getLocation[0], neg], "temp");
            if (this.unAvailableCoords.has(tempNodeNeg.getLocationString)) {
              currentSet.push(tempNodeNeg);
            }
          }
          break;
        case Directions.LEFT_DIAGONAL:
          xPos = startX + counter;
          yPos = startY + counter;
          xNeg = startX - counter;
          yNeg = startY - counter;
          if(xPos < this._maxCols && yPos < this._maxRows){
              tempNodeUpperLeft = new Node([xNeg, yPos], "temp"); // Upper Left Diagonal
              if(this.unAvailableCoords.has(tempNodeUpperLeft.getLocationString)){
                currentSet.push(tempNodeUpperLeft);
              }
            }
            if(xNeg > -1 && yPos < this._maxRows){
                tempNodeLowerRight = new Node([xPos, yNeg], "temp"); // Lower Right Diagonal
                if(this.unAvailableCoords.has(tempNodeLowerRight.getLocationString)){
                    currentSet.push(tempNodeLowerRight)
                }
            }
          break;
        case Directions.RIGHT_DIAGONAL:
            xPos = startX + counter;
            yPos = startY + counter;
            xNeg = startX - counter;
            yNeg = startY - counter;
            if(xPos < this._maxCols && yPos < this._maxRows){
                tempNodeUpperRight = new Node([xPos, yPos], "temp"); //Upper Right Diagonal
                if(this.unAvailableCoords.has(tempNodeUpperRight.getLocationString)){
                  currentSet.push(tempNodeUpperRight);
                }
              }
            if(xNeg > -1 && yNeg > -1)  {
                tempNodeLowerLeft = new Node([xNeg, yNeg], "temp"); // Lower Left Diagonal
                if(this.unAvailableCoords.has(tempNodeLowerLeft.getLocationString)){
                    currentSet.push(tempNodeLowerLeft);
                  }
            }
          break;
      }
    }
    return false;
  };
}
