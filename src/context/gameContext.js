import { createContext, useState } from "react";

export const GameContext = createContext();

export function GameProvider({ children }) {
  const [turn, setTurn] = useState("X");
  const [board, setBoard] = useState(Array(9).fill(null));
  const [winner, setWinner] = useState(null);
  const [counters, setCounters] = useState({ X: 0, O: 0, total: 0 });
  const [rounds, setRounds] = useState(2);

  return (
    <GameContext.Provider
      value={{
        turn,
        board,
        winner,
        setTurn,
        setBoard,
        setWinner,
        counters,
        setCounters,
        rounds,
        setRounds,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}
