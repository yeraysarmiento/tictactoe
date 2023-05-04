import { useContext } from "react";

import { GameContext } from "../../context/gameContext";
import Cell from "../Cell/Cell";

const Board = () => {
  const { board } = useContext(GameContext);

  return (
    <section className="board">
      {board.map((value, index) => (
        <Cell key={index} index={index} value={value} />
      ))}
    </section>
  );
};

export default Board;
