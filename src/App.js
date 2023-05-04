import { useContext, useEffect } from "react";

import { GameContext } from "./context/gameContext";
import { checkBoard, checkWinner } from "./helpers";
import Nav from "./components/Nav/Nav";
import { BoardPage, FormPage } from "./pages";

import "./App.css";

function App() {
  const { rounds, counters, setCounters, board, setBoard, setWinner } =
    useContext(GameContext);

  useEffect(() => {
    checkBoard({ board, setCounters, setBoard });
  }, [board, setCounters, setBoard]);

  useEffect(() => {
    if (counters.total === rounds) {
      checkWinner({ counters, setWinner });
    }
  }, [counters, rounds, setWinner]);

  return (
    <main>
      <h1>XO</h1>
      <Nav />
      {board ? <BoardPage /> : <FormPage />}
    </main>
  );
}

export default App;
