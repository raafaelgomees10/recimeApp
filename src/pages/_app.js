import { Provider } from "react-redux";
import store from "@/store/configureStore";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "@/styles/globalStyles";
import { darkTheme, lightTheme } from "@/styles/theme";
import { useSelector } from "react-redux";

function MyAppContent({ Component, pageProps }) {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <MyAppContent Component={Component} pageProps={pageProps} />
    </Provider>
  );
}
