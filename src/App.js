// @ts-check
import React, { useState, useEffect } from "react";
import {
  MessageBox,
  StatContainer,
  Wheel,
  Text,
  SpinButtonContainer,
  SpinButton,
  WheelContainer,
  PlayerContainer,
  Player,
  PlayerList,
  WheelSpoke,
  PlayerAdd
} from "./App.styles";
import { Transition } from "react-transition-group";
import { usePlayers } from "./usePlayers";

/** @type { function({players: {name: string, checked: boolean}[], setWinner: any}): JSX.Element } */
const WheelComponont = ({ players, setWinner }) => {
  if(players.length < 4) {
    players = [...players, ...players];
  }
  const [spin, setSpin] = useState(false);
  const [degree, setDegree] = useState(0);
  const colors = [
    "#16a085",
    "#2980b9",
    "#34495e",
    "#f39c12",
    "#d35400",
    "#c0392b"
  ];
  const defaultSpinDegree = 1800;
  const numberOfPlayers = players.length;
  const sectionAngle = 360 / numberOfPlayers;

  const spinWheel = () => {
    const extraSpinDegree = 1 + Math.floor(Math.random() * 360);
    const spinDegree = degree + defaultSpinDegree + extraSpinDegree;
    const winner =
      numberOfPlayers - Math.floor((spinDegree % 360) / sectionAngle) - 1;
    setTimeout(() => {
      setWinner(players[winner].name);
    }, 5000);

    setSpin(true);
    setDegree(spinDegree);
  };
  const duration = 5000;
  const defaultStyle = {
    transition: `transform ${duration}ms cubic-bezier(0,.99,.44,.99)`,
    transform: `rotate(0deg)`
  };

  const transitionStyles = {
    entered: { transform: `rotate(0deg)` },
    entering: { transform: `rotate(0deg)` },
    exiting: { transform: `rotate(${degree}deg)` },
    exited: { transform: `rotate(${degree}deg)` }
  };

  useEffect(() => {
    setSpin(false);
  }, [spin]);

  return (
    <WheelContainer>
      <Transition in={spin} timeout={duration}>
        {state => (
          <Wheel
            style={{
              ...defaultStyle,
              ...transitionStyles[state]
            }}
          >
            {players.map(({ name: player }, i) => {
              const angle = Math.floor(sectionAngle * i);
              const skewAngle = 90 - sectionAngle;

              return (
                <WheelSpoke key={i} skew={skewAngle} rotate={angle}>
                  <Text
                    skew={skewAngle}
                    rotate={sectionAngle / 2}
                    color={colors[i]}
                  >
                    {player}
                  </Text>
                </WheelSpoke>
              );
            })}
          </Wheel>
        )}
      </Transition>
      <SpinButtonContainer>
        <SpinButton onClick={spinWheel}>Spin</SpinButton>
      </SpinButtonContainer>
    </WheelContainer>
  );
};

/** @type { function(): JSX.Element } */
const App = () => {
  const {players, persistPlayers } = usePlayers()
  const [winner, setWinner] = useState("");
  const [newPlayer, setNewPlayer] = useState("");
  const [error, setError] = useState(false);
  const messageTransitionStyle = {
    entering: { opacity: 1 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 }
  };

  const addPlayer = e => {
    if (e.keyCode === 13) {
      if (players.find(player => newPlayer === player.name)) {
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
        {state => (
          <MessageBox
            style={{
              ...messageTransitionStyle[state]
            }}
          >
            Player already exists
          </MessageBox>
        )}
      </Transition>
      <WheelComponont
        players={players.filter(player => player.checked)}
        setWinner={setWinner}
      />
      <PlayerContainer>
        <PlayerList>
          {players.map((player, i) => {
            return (
              <Player key={i}>
                <input
                  type="checkbox"
                  onChange={event => {
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
              </Player>
            );
          })}
        </PlayerList>
        <PlayerAdd
          onKeyUp={addPlayer}
          onChange={e => setNewPlayer(e.target.value)}
          value={newPlayer}
          type="text"
          placeholder="Add player"
        />
      </PlayerContainer>
    </>
  );
};

export default App;
