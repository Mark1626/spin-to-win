// @ts-check
import React, { useState, useEffect } from "react";
import {
  MessageBox,
  StatContainer,
  PlayerContainer,
  Player,
  PlayerList,
  PlayerAdd,
} from "./App.styles";
import { Transition } from "react-transition-group";
import { usePlayers } from "./usePlayers";
import { Wheel } from "./components/Wheel";

/** @type { function(): JSX.Element } */
const App = () => {
  const { players, persistPlayers } = usePlayers();
  const [winner, setWinner] = useState("");
  const [newPlayer, setNewPlayer] = useState("");
  const [error, setError] = useState(false);
  const messageTransitionStyle = {
    entering: { opacity: 1 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
  };

  const addPlayer = (e) => {
    if (e.keyCode === 13) {
      if (players.find((player) => newPlayer === player.name)) {
        setError(true);
      } else {
        persistPlayers([...players, { name: newPlayer, checked: true }]);
        setNewPlayer("");
      }
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setError(false);
    }, 1000);
  }, [error]);

  return (
    <>
      <StatContainer>
        <span>The Winner is {winner}</span>
      </StatContainer>
      <Transition in={error} timeout={1000}>
        {(state) => (
          <MessageBox
            style={{
              ...messageTransitionStyle[state],
            }}
          >
            Player already exists
          </MessageBox>
        )}
      </Transition>
      <Wheel
        players={players.filter((player) => player.checked)}
        setWinner={setWinner}
      />
      <PlayerContainer>
        <PlayerList>
          {players.map((player, i) => {
            return (
              <Player key={i}>
                <input
                  type="checkbox"
                  onChange={(event) => {
                    if (player.checked !== event.target.checked) {
                      const newPlayers = [...players];
                      newPlayers[i].checked = event.target.checked;
                      persistPlayers(newPlayers);
                    }
                  }}
                  checked={player.checked}
                  value={player.name}
                />
                {player.name}
                <span onClick={() => {
                  const newPlayers = [...players];
                  newPlayers.splice(i, 1);
                  persistPlayers(newPlayers)
                }}>✖</span>
              </Player>
            );
          })}
        </PlayerList>
        <PlayerAdd
          onKeyUp={addPlayer}
          onChange={(e) => setNewPlayer(e.target.value)}
          value={newPlayer}
          type="text"
          placeholder="Add player"
        />
      </PlayerContainer>
    </>
  );
};

export default App;
