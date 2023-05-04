import styled from "styled-components";

const CardsCharactersContainer = styled.div`
  position: relative;
  font-family: cursive;
  font-size: 1.5rem;
  border-radius: 8px;
  cursor: pointer;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: start;
  align-items: center;
  margin-top: 5rem;
  width: var(--card-width);
  height: var(--card-height);
  color: var(--white);  
  transition: 1s;
  z-index: 1;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.6);
  ::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
  &:hover {
    transform: rotateY(-180deg);
    & img {
      transition: 1s;
      opacity: 0;
      visibility: hidden;
      backface-visibility: hidden;
    }
    & div {
      transition: 5s;
      opacity: 1;
      backface-visibility: visible;
    }
  }
`;

export default CardsCharactersContainer;