import { styles } from './App.css';
import * as React from 'react';
import { Game } from './classes/Game';
import MainMenu from './components/MainMenu';

import GameSpace from './components/GameSpace';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GameRules from './components/GameRules';
import Layout from './components/Layout';



function App() {
  const game: Game = new Game(4, 4);
  console.log(game.gameWon);
  const n1 = game.setNode('A', 'player1');
  const n2 = game.setNode('B', 'player2');
  const n3 = game.setNode('B', 'player1');
  const n4 = game.setNode('C', 'player2');
  const n5 = game.setNode('C', 'player2');
  const n6 = game.setNode('C', 'player1');
  const n7 = game.setNode('D', 'player1');
  console.log(game.gameWon);
  const n8 = game.setNode('D', 'player2');
  const n9 = game.setNode('D', 'player2');
  const n10 = game.setNode('D', 'player1');
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
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<MainMenu />} />
            <Route path="game" element={<GameSpace />} />
            <Route path="rules" element={<GameRules />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
