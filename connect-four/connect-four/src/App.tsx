import { styles } from './App.css';
import MainMenu from './components/MainMenu';
import GameSpace from './components/GameSpace';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GameRules from './components/GameRules';
import Layout from './components/Layout';



function App() {  
  return (
    <div className={styles.AppContainer}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<MainMenu />} />
            {/* <Route path="game" element={<GameSpace />} /> */}
            <Route path="game" element={<GameSpace />} />
            <Route path="rules" element={<GameRules />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
