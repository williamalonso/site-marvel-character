import styled from "styled-components";

const Back = styled.div`
    position: absolute;
    transform: rotateY(180deg);
    backface-visibility: hidden;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: start;
    border-radius: 8px;
`;

export default Back;