import { useContext } from "react";
import { GameContext } from "../../context/gameContext";

const Counters = () => {
  const { counters, turn } = useContext(GameContext);

  return (
    <ul style={{ display: "flex", gap: "15px", listStyle: "none" }}>
      {Object.entries(counters).map(([player, count]) => (
        <li
          key={player}
          style={{
            display: "flex",
            flexDirection: "column",
            fontWeight: turn === player ? 500 : 200,
          }}
        >
          <span>{player === "total" ? "-" : player}</span>
          <span>{count}</span>
        </li>
      ))}
    </ul>
  );
};

export default Counters;
