import styled from "styled-components";

const Flipper = styled.div`
    width:97%;
    height:97%;
    position: relative;
    transition: transform 0.8s;
    transform-style: preserve-3d;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.6);
    border-radius: 8px;
`;

export default Flipper;