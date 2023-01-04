import { Coordinate, Game } from "../classes/Game";
import { Node } from "../classes/Node";

const allCoordinatesMock: Map<string, Coordinate> = new Map<
  string,
  Coordinate
>();

allCoordinatesMock.set("AD", [0, 3]);
allCoordinatesMock.set("AC", [0, 2]);
allCoordinatesMock.set("AB", [0, 1]);
allCoordinatesMock.set("AA", [0, 0]);
allCoordinatesMock.set("BD", [0, 3]);
allCoordinatesMock.set("BC", [0, 2]);
allCoordinatesMock.set("BB", [0, 1]);
allCoordinatesMock.set("BA", [0, 0]);
allCoordinatesMock.set("CD", [0, 3]);
allCoordinatesMock.set("CC", [0, 2]);
allCoordinatesMock.set("CB", [0, 1]);
allCoordinatesMock.set("CA", [0, 0]);
allCoordinatesMock.set("DD", [0, 3]);
allCoordinatesMock.set("DC", [0, 2]);
allCoordinatesMock.set("DB", [0, 1]);
allCoordinatesMock.set("DA", [0, 0]);

const nodeMock:Node = new Node([3,2],'player1');

afterEach(() => {
  jest.clearAllMocks();
});

describe("When playing connect four", () => {
  it("Populates a map of coordinates", () => {
    const game: Game = new Game(4, 4);
    expect(game.getAvailableCoords.size).toEqual(allCoordinatesMock.size);
    expect(game.getOccupiedCoords.size).toEqual(0);
  });
  it("Occupies a given location when setting a node",() =>{
    const game:Game = new Game(4,4);
    
    expect(game.getAvailableCoords.size).toEqual(allCoordinatesMock.size);
    expect(game.getOccupiedCoords.size).toBe(0);
    
    const setNodeSpy = jest.spyOn(game,"setNode");
    // setNodeSpy.mockReturnValueOnce("AA");

    game.setNode('A','player1');
    expect(setNodeSpy).toHaveBeenCalled();
    expect(setNodeSpy).toHaveReturnedWith("AA");

  });
  it("Provides a list of neighbouring nodes when calling GetNeighbours",()=>{
    const game:Game = new Game(4,4);
    expect(game.getAvailableCoords.size).toEqual(allCoordinatesMock.size);
    expect(game.getOccupiedCoords.size).toEqual(0);

    const neighbourSpy = jest.spyOn(game,'getNeighbours');

    game.setNode("D", 'player1');//3,3
    game.setNode("D", 'player1');//start (3,2)
    game.setNode("D", 'player1');// 3,1
    game.setNode("D", 'player1');// 3,0
    game.setNode("C", 'player1');// 2,3
    game.setNode("C", 'player1');// 2,2
    game.setNode("C", 'player1');// 2,1
    game.setNode("C", 'player1');// 2,0
    game.setNode("B", 'player1');// 1,3
    game.setNode("B", 'player1');//1,2
    game.setNode("B", 'player1'); //1,1
    game.setNode("B", 'player1'); //1,0
    game.setNode("A", 'player1'); //0,3
    game.setNode("A", 'player1'); // 0,2
    game.setNode("A", 'player1');// 0,1
    game.setNode("A", 'player1');//0,0

    neighbourSpy.mockReturnValueOnce([
      new Node([2,2],'player1'),
      new Node([4,2],'player1'),
      new Node([2,1],'player1'),
      new Node([2,2],'player1'),
      new Node([4,1],'player1')
    ]);
    const result = game.getNeighbours(nodeMock);

    expect(neighbourSpy).toHaveBeenCalled();
    expect(neighbourSpy).toHaveReturnedWith(result);
    expect(result).toHaveLength(5);
  })
});
