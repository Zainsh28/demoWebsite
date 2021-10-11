import styled from "styled-components";

const styledButton = styled.button`
	border-radius: 20px;
	border: ${props => props.border};
	padding: ${(props) => props.padding ? props.padding : "5px 10px 5px 3px"};
	background-color: ${props => props.bg};
	color: ${props => props.color};;
	font-weight: bold;
	font-family: ${props => props.font};
  cursor: pointer;
  margin: ${props => props.m};
	font-size:${props => props.size}
`;

export default styledButton;
