import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle` 
* {
	box-sizing: border-box;
	color: ${(props) => props.theme.colors.primary};
	font-family: "Poppins", sans-serif;
	font-size: 62.5%;
	list-style: none;
	margin: 0;
	padding: 0;
	scrollbar-color: ${(props) => props.theme.colors.link};
  text-decoration: none;

::-webkit-scrollbar {
	width: 8px;
}

::-webkit-scrollbar-track {
	background-color: ${(props) => props.theme.colors.bg};
}

::-webkit-scrollbar-thumb {
	background-color: ${(props) => props.theme.colors.link};
	border-radius: 4px;
}
}

html, body{
	background-color: ${(props) => props.theme.colors.bg};
  transition: all 0.25s linear;
  height: 100%;
  display: flex;
  flex-direction: column;
}

#__next {
  display: flex;
  flex-direction: column;
  min-height: 100vh; 
}

.mainContainer {
  margin: 0 auto;
  max-width: 1200px;
  width: 100%;
  flex: 1;

  @media (max-width: 767px) {
    max-width: 340px;
  }

  @media (min-width: 768px) and (max-width: 1199px) {
    max-width: 735px;
  }
}

.toggleTheme{
  background-color: transparent;
  border: none;
}

@keyframes animeLeft {
  0%{
    opacity: 0;
    transform: translateX(-20px);
  }
    100%{
        opacity: 1;
        transform: initial;
    }
}
@keyframes animeUp {

0% {
  opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.fadeUp{
  animation: animeUp 1s ease forwards;
  animation-delay: .5s;
  animation-duration: 1s;
  opacity: 0;
}
.fadeLeft{
  animation: animeLeft .4s ease forwards;

}
`;
