import styled from "styled-components";

const ImageWrapper = styled.div`
  width: 400px;
  height: 400px;
  overflow: hidden;
  margin: ${props => props.m};

  @media all and (max-width:700px){
    width: 250px;
    height: 250px;
  }
`;
export default ImageWrapper;
