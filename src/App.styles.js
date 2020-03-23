import styled from "styled-components";

export const MessageBox = styled.div`
  z-index: 1000;
  position: fixed;
  top: 50%;
  border: 2px solid;
  border-radius: 10px;
  margin: 0 20vw;
  padding: 16px;
  width: 50vw;
  box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.2);
  background-color: #fff;
  /* transition: opacity 200ms linear; */
  font-size: 20px;
  text-align: center;
  transition: opacity 1000ms ease-in-out;
  opacity: 0;
`;

export const StatContainer = styled.div`
  height: fit-content;
  margin: 20px;
  border: 2px solid #000;
  border-radius: 10px;
  padding: 10px;
  text-align: center;
  box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.2);
`;

export const WheelContainer = styled.div`
  position: relative;
  margin: 50px auto;
  width: 20em;
  height: 20em;
  color: #fff;
`;

export const Wheel = styled.ul`
  position: relative;
  border: 2px solid #000;
  border-radius: 50%;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  list-style: none;
  background-color: #000;
  overflow: hidden;
  transition: transform 6s cubic-bezier(0, 0.99, 0.44, 0.99);
  box-shadow: 0 0 5px 10px rgba(0, 0, 0, 0.2);
`;

export const WheelSpoke = styled.li`
  position: absolute;
  top: 0;
  right: 0;
  width: 50%;
  height: 50%;
  overflow: hidden;
  transform-origin: 0 100%;
  opacity: 1;
  ${({ rotate, skew }) => `transform: rotate(${rotate}deg) skewY(-${skew}deg)`}
`;

export const Text = styled.div`
  position: absolute;
  left: -100%;
  width: 200%;
  height: 200%;
  padding-top: 20px;
  text-align: center;
  ${({color}) => `background-color: ${color};`}
  ${({skew, rotate}) => `transform: skewY(${skew}deg) rotate(${rotate}deg)`}
`;

export const SpinButtonContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 50%;
  height: 50%;
`;

export const SpinButton = styled.div`
  position: absolute;
  left: -25px;
  bottom: -25px;
  border-radius: 50%;
  width: 50px;
  background-color: #eee;
  text-align: center;
  line-height: 50px;
  color: black;

  &::before {
    content: "";
    position: absolute;
    top: -9px;
    left: 10px;
    width: 0;
    height: 0;
    border-width: 0 15px 15px 15px;
    border-style: solid;
    border-color: transparent transparent #eee transparent;
  }

  &:hover {
    cursor: pointer;
  }
`;

export const PlayerContainer = styled.div``;

export const PlayerList = styled.ul`
  list-style: none;
  -webkit-margin-before: 0;
  -webkit-margin-after: 0;
  -webkit-padding-start: 0;
`;

export const Player = styled.li`
  float: left;
  margin: 20px;
  border: 2px solid;
  border-radius: 10px;
  padding: 10px;

  span {
    padding-left: 15px;
    &:hover {
      cursor: pointer;
    }
  }
`;

export const PlayerAdd = styled.input`
  margin: 20px;
  border: 2px solid;
  border-radius: 10px;
  padding: 10px;
  line-height: 1.7;
  font-size: inherit;
  font-family: inherit;
`;
