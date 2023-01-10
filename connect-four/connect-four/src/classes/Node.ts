import { Coordinate, PlayerType } from "./Game";

/**
 * Node class for each played position
 * - _coordinate {Coordinate}
 * - _playerType {PlayerType}
 * - _neighbours {Node[]}
 */
export class Node {
    private _coordinate:Coordinate;
    private _playerType:PlayerType;
    private _neighbours:Node[];

  constructor(location:Coordinate,playedBy?:PlayerType) {
    this._coordinate = location;
    this._playerType = playedBy || 'temp';
    this._neighbours = [];
  }

  /**
   * @returns ( Row:number , Col:number )
   */
  get getLocation(){
      return this._coordinate;
    }
    
    get getLocationString(){
      return `${String.fromCharCode(this._coordinate[0] + 65)}${String.fromCharCode(this._coordinate[1] + 65)}`;
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
