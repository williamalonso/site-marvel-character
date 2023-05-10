import styled from "styled-components";
import Flipper from "../Flipper/Flipper";

const CardsCharactersContainer = styled.div`
  font-family: cursive;
  font-size: 1.5rem;
  border-radius: 8px;
  cursor: pointer;
  overflow: hidden;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
  width: var(--card-width);
  height: var(--card-height);
  color: var(--white);
  perspective: 700px;
  &:hover ${Flipper} {
    transform: rotateY(180deg);
  }
  ::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
`;

export default CardsCharactersContainer;