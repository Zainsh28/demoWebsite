import styled from "styled-components";

const SectionHeading = styled.h1`
	color: ${props => props.color};
	font-size: ${props => props.size};
	font-weight: 600;
	font-family: ${props => props.font};
	text-align: ${props => props.align};
	span {
		color: #FFBA60;
		font-family: 'pacifico';
	}
	@media all and (max-width: 700px) {
		font-size: calc(${props => (props.size)} - 0.35em);
	}
  	@media all and (max-width: 400px) {
		font-size: calc(${props => (props.size)} - 0.5em);
	}
`;

export default SectionHeading;
