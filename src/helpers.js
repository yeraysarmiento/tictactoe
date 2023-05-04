import { WINNER_COMBINATIONS } from "./constants";

const changeTurn = ({ setTurn }) => {
  setTurn((prev) => (prev === "X" ? "O" : "X"));
};

export const handleClick = ({ index, board, turn, setBoard, setTurn }) => {
  setBoard((prev) => {
    const newArray = [...prev];
    newArray[index] = turn;
    return newArray;
  });
  changeTurn({ setTurn });
};

export const handleReset = ({ setBoard, setTurn, setWinner, setCounters }) => {
  setBoard(Array(9).fill(null));
  setTurn("X");
  setWinner(null);
  setCounters({ X: 0, O: 0, total: 0 });
};

export const checkBoard = ({ board, setCounters, setBoard }) => {
  for (const turn of ["X", "O"]) {
    for (const combo of WINNER_COMBINATIONS) {
      if (combo.every((index) => board[index] === turn)) {
        setCounters((prev) => ({
          ...prev,
          [turn]: prev[turn]++,
          total: prev.total++,
        }));
        setBoard(Array(9).fill(null));
      }
    }
  }

  if (board.every((cell) => cell !== null)) {
    setCounters((prev) => ({
      ...prev,
      total: prev.total++,
    }));
    setBoard(Array(9).fill(null));
  }
};

export const checkWinner = ({ counters, setWinner }) => {
  setWinner(
    counters.X > counters.O ? "X" : counters.X < counters.O ? "O" : "odd"
  );
};
