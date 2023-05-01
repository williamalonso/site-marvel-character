import styled from "styled-components";

const CardsCharactersContainer = styled.div`
  font-family: cursive;
  font-size: 1.5rem;
  border-radius: 8px;
  cursor: pointer;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-top: 5rem;
  margin-bottom: 5rem;
  width: var(--card-width);
  height: var(--card-height);
  color: var(--white);  
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.6);
  ::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
`;

export default CardsCharactersContainer;