import styled from "styled-components";

const Section = styled.div`
  display: flex;
  flex-wrap: ${props => props.wrap};
  flex-direction: ${props => props.direction};
  justify-content: ${props => props.justify};
  align-content: ${props => props.alignContent};
  align-items: ${props => props.alignItem};
  width:${props => props.width};
  height: ${props => props.height};
  margin: ${props => props.m};
  border: ${props => props.border};
  z-index: ${props => props.zIndex};
  border-radius:  ${props => props.br};
  background: url(${props => props.bg});
  background-color: ${props => props.bgc};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  box-shadow: ${props => props.shadow};
`;
export default Section;
