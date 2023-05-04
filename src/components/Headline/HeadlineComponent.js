import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5rem;
  font-size: 60px;
  margin-top: 3rem;
`;
const StaticTxt = styled.div`
  color: var(--white);
  font-weight: 400;
`;
const DynamicTxt = styled.div`
  margin-left: 1rem;
  height: 68px;
  overflow: hidden;
  & li {
    list-style: none ;
    font-weight: 500;
    color: var(--headline);
    position: relative;
    top: 0;
    animation: slide 3s steps(2) infinite;
    @keyframes slide {
      100% {
        top: -140px;
      }
    }
    & span {
      position: relative;
      padding-top: 1px;
    }
    & span::after {
      content: '';
      position: absolute;
      height: 100%;
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
        <li><span>{props.txt}</span></li>
      </DynamicTxt>
    </Wrapper>
  );
}

export default HeadlineComponent;
