import styled from "styled-components";


const Container = styled.div`
  min-height: 100vh;
  width: 100vw;
  display: flex;
  margin-top: ${props => props.mt};
  flex-direction: ${props => props.direction};
  justify-content: ${props => props.justify};
  align-content: ${props => props.alignContent};
  align-items: ${props => props.alignItem};
  background: url(${props => props.bg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export default Container;