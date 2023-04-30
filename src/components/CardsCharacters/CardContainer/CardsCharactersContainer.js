import styled from "styled-components";

const CardsCharactersContainer = styled.div`

  background: #191c29;
  width: var(--card-width);
  height: var(--card-height);
  padding: 3px;
  position: relative;
  border-radius: 6px;
  justify-content: center;
  align-items: center;
  text-align: center;
  display: flex;
  flex-direction: column;
  color: white;
  font-size: 1.5em;
  color: rgb(88 199 250 / 0%);
  cursor: pointer;
  font-family: cursive;
  margin: 0 auto;
  color: var(--white);
  animation: none;
  z-index: 1;

  &:hover {
    color: rgb(88 199 250 / 100%);
    transition: color 1s ease;
  }
  &:not(:hover) {
    color: var(--white);
    transition: color 1s ease;
    animation: none;
  }
  &:hover::before, &:hover::after {
    content: '';
    position: absolute;
    opacity: 1;
    z-index: -1;
    background-image: linear-gradient(
      var(--rotate),
      #5ddcff,
      #3c67e3 43%,
      #4e00c2
    );
    animation: spin 2.5s linear infinite;
  }
  &:hover::before {
    width: 104%;
    height: 102%;
    border-radius: 8px;
    top: -1%;
    left: -2%;
    z-index: -1;
  }
  &:hover::after {
    top: calc(var(--card-height) / 6);
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    margin: 0 auto;
    transform: scale(0.8);
    filter: blur(calc(var(--card-height) / 6));
    transition: opacity .5s;
    z-index: -1;
  }
  @keyframes spin {
    0% {
      --rotate: 0deg;
    }
    100% {
      --rotate: 360deg;
    }
  }
`;

export default CardsCharactersContainer;