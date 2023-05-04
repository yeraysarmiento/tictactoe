import { useContext } from "react";

import { GameContext } from "../../context/gameContext";
import { handleClick } from "../../helpers";

const Cell = ({ index, value }) => {
  const { board, setBoard, setWinner, winner, turn, setTurn } =
    useContext(GameContext);

  return (
    <button
      key={index}
      className="cell"
      disabled={board[index] || winner}
      onClick={() =>
        handleClick({ index, board, turn, setBoard, setTurn, setWinner })
      }
    >
      {value}
    </button>
  );
};

export default Cell;
