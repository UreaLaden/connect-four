import { styles } from './App.css';
import { Game } from './classes/Game';
import MainMenu from './components/MainMenu';
import { registerIcons } from "@fluentui/react"
import { svgIcons } from './utils/SVGIcons';
import GameSpace from './components/GameSpace';

registerIcons(svgIcons);

function App() {
  const game:Game = new Game(4,4);
  console.log(game.gameWon);
  const n1 = game.setNode('A','player1');
  const n2 = game.setNode('B','player2');
  const n3 = game.setNode('B','player1');
  const n4 = game.setNode('C','player2');
  const n5 = game.setNode('C','player2');
  const n6 = game.setNode('C','player1');
  const n7 = game.setNode('D','player1');
  console.log(game.gameWon);
  const n8 = game.setNode('D','player2');
  const n9 = game.setNode('D','player2');
  const n10 = game.setNode('D','player1');
  // const n5 = game.setNode('C','player1');
  console.table(n1?.getLocationString);
  console.table(n2?.getLocationString);
  console.table(n3?.getLocationString);
  console.table(n4?.getLocationString);
  console.table(n5?.getLocationString);
  console.table(n6?.getLocationString);
  console.table(n7?.getLocationString);
  console.table(n8?.getLocationString);
  console.table(n9?.getLocationString);
  console.table(n10?.getLocationString);
  console.log(game.gameWon);
  return (
    <div className={styles.AppContainer}>
        <GameSpace/>
    </div>
  );
}

export default App;
