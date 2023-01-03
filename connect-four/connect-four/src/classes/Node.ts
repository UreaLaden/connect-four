import { Coordinate, PlayerType } from "./Game";

export class Node {
    private _coordinate:Coordinate;
    private _playerType:PlayerType;
    private _neighbours:Node[];

  constructor(location:Coordinate,playedBy:PlayerType) {
    this._coordinate = location;
    this._playerType = playedBy;
    this._neighbours = [];
  }

  /**
   * @returns ( Row:number , Col:number )
   */
  get getLocation(){
      return this._coordinate;
    }
    
    get getLocationString(){
      return `${String.fromCharCode(this._coordinate[0])}${String.fromCharCode(this._coordinate[1])}`;
  }

  get getPlayerType(){
    return this._playerType;
  }

  public setNeighbours = (neighbours:Node[]):void => {
    this._neighbours = neighbours;
  }

  get getNeighbours(){
    return this._neighbours;
  }

}
