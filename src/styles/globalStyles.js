import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle` 
* {
	box-sizing: border-box;
	font-family: "Poppins", sans-serif;
	font-size: 62.5%;
	list-style: none;
	margin: 0;
	padding: 0;
	color: ${(props) => props.theme.fontColor.primary};
	background-color: #FFF9E9;
}

.mainContainer{
  margin: 0 auto;
  max-width: 1200px;
  width: 100%;
}
`;
