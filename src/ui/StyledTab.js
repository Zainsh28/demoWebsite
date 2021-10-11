import styled from "styled-components";
import { Tab } from "@mui/material";

const StyledTab = styled(Tab)`
	font-weight: 600;
	text-transform: none;
	font-size: 1rem;
	font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
		Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
	&:hover {
		color: white;
	}
`;

export default StyledTab;
