import { useContext } from "react";

import { GameContext } from "../../context/gameContext";
import { handleReset } from "../../helpers";
import styles from "./styles";

const Nav = () => {
  const { setCounters, setBoard, setWinner, setTurn } = useContext(GameContext);

  return (
    <nav style={styles.nav}>
      <button style={styles.button} onClick={() => setBoard(null)}>
        HOME
      </button>
      <span>XO</span>
      <button
        style={styles.button}
        onClick={() =>
          handleReset({ setBoard, setTurn, setWinner, setCounters })
        }
      >
        RESET
      </button>
    </nav>
  );
};

export default Nav;
