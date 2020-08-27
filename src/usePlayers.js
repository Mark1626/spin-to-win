import { useState, useEffect } from "react";

export const usePlayers = () => {
  const defaultPlayers = [
    { name: "Player1", checked: true },
    { name: "Player2", checked: true },
    { name: "Player3", checked: true },
    { name: "Player4", checked: true }
  ];
  const [players, setPlayers] = useState(defaultPlayers);

  useEffect(() => {
    let playersPresent = JSON.parse(localStorage.getItem("spin-to-win-players"));
    // if (!playersPresent) {
      playersPresent = defaultPlayers
    // }
    setPlayers(playersPresent);
  }, []);

  const persistPlayers = (players) => {
    localStorage.setItem("spin-to-win-players", JSON.stringify(players));
    setPlayers(players);
  }

  return {
    players,
    persistPlayers,
  };
};
