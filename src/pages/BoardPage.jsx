import { useContext } from "react";

import Board from "../components/Board/Board";
import Counters from "../components/Counters/Counters";
import { GameContext } from "../context/gameContext";

const BoardPage = () => {
  const { winner } = useContext(GameContext);

  return (
    <>
      <Board />
      <Counters />
      {winner && <p>winner is {winner}</p>}
    </>
  );
};

export default BoardPage;
