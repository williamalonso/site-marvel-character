import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  height: 5rem;
  font-size: 60px;
  margin-top: 3rem;
  @media (max-width: 600px) {
    margin-bottom: 2rem;
    font-size: 46px;
  }
`;
const StaticTxt = styled.div`
  color: var(--white);
  font-weight: 400;
`;
const DynamicTxt = styled.div`
  margin-left: 1rem;
  height: auto;
  overflow: hidden;
  @media (max-width: 600px) {
    height: 54px;
  }
  & li {
    list-style: none ;
    font-weight: 500;
    color: var(--headline);
    position: relative;
    top: 0;
    & span {
      position: relative;
      padding-top: 1px;
    }
    & span::after {
      content: '';
      position: absolute;
      height: 107%;
      width: 100%;
      left: 0;
      background-color: var(--secondaryColor);
      border-left: 2px solid var(--headline);
      animation: typing 1.5s steps(8) infinite;
      @keyframes typing {
        100% {
          left: 100%;
          margin: 0 -35px 0 35px;
        }
      }
    }
  }
`;

const HeadlineComponent = (props) => {
  return(
    <Wrapper>
      <StaticTxt>{props.static}</StaticTxt>
      <DynamicTxt>
        <li><span>{props.txt}</span></li>
      </DynamicTxt>
    </Wrapper>
  );
}

export default HeadlineComponent;
