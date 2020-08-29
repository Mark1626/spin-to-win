import styled from "styled-components";

export const WheelContainer = styled.div`
  position: relative;
  margin: 50px auto;
  width: 20em;
  height: 20em;
  color: #fff;
`;

export const WheelBase = styled.ul`
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
  ${({ color }) => `background-color: ${color};`}
  ${({ skew, rotate }) => `transform: skewY(${skew}deg) rotate(${rotate}deg)`}
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
