import styled from "styled-components";

const CardContent = styled.div`
  width: 230px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid lightgray;
  box-shadow: 2px 2px 8px 4px #d3d3d3d1;
  border-radius: 15px;
  font-family: sans-serif;
  cursor: pointer;
`;

const TextCard = styled.p`
  color: #3f9d8b;
  font-weight: bold;
  font-family: sans-serif;
  font-size: 18px;
  margin: 0;
`;

const TitleCard = styled.span`
  color: black;
  font-weight: bold;
  font-family: sans-serif;
  font-size: 26px;
`;

export const CardStyled = {
  CardContent,
  TextCard,
  TitleCard,
};
