export const usePlayers = () => {
  const defaultPlayers = [
    { name: "Player1", checked: true },
    { name: "Player2", checked: true },
    { name: "Player3", checked: true },
    { name: "Player4", checked: true }
  ];
  const [players, setPlayers] = useState(defaultPlayers);

  const fetchPlayers = () => {
    const players = localStorage.getItem("spin-to-win-players");
    if (players) {
      players = defaultPlayers
    }
    setPlayers(players);
  }

  const persistPlayers = (players) => {
    localStorage.setItem("spin-to-win-players", players);
    setPlayers(players);
  }

  return {
    players,
    fetchPlayers,
    persistPlayers,
  };
};
