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

const nodeInPlay:Node = new Node([0,0],'player1');

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
    setNodeSpy.mockReturnValueOnce("AA");

    game.setNode('A','player1');
    expect(setNodeSpy).toHaveBeenCalled();
    expect(setNodeSpy).toHaveReturnedWith("AA");
  })
});
