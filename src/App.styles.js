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
