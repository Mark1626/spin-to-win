import React, { useState, useEffect } from "react";
import {
  WheelContainer,
  WheelSpoke,
  WheelBase,
  SpinButtonContainer,
  SpinButton,
  Text,
} from "./Wheel.styles";
import { Transition } from "react-transition-group";

/** @type { function({players: {name: string, checked: boolean}[], setWinner: any}): JSX.Element } */
export const Wheel = ({ players, setWinner }) => {
  if (players.length < 4) {
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
    "#c0392b",
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
    transform: `rotate(0deg)`,
  };

  const transitionStyles = {
    entered: { transform: `rotate(0deg)` },
    entering: { transform: `rotate(0deg)` },
    exiting: { transform: `rotate(${degree}deg)` },
    exited: { transform: `rotate(${degree}deg)` },
  };

  useEffect(() => {
    setSpin(false);
  }, [spin]);

  return (
    <WheelContainer>
      <Transition in={spin} timeout={duration}>
        {(state) => (
          <WheelBase
            style={{
              ...defaultStyle,
              ...transitionStyles[state],
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
          </WheelBase>
        )}
      </Transition>
      <SpinButtonContainer>
        <SpinButton onClick={spinWheel}>Spin</SpinButton>
      </SpinButtonContainer>
    </WheelContainer>
  );
};
