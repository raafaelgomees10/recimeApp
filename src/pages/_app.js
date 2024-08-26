import { Provider, useDispatch, useSelector } from "react-redux";
import store from "@/store/configureStore";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "@/styles/globalStyles";
import { darkTheme, lightTheme } from "@/styles/theme";
import { useEffect } from "react";
import { setInitialTheme } from "@/store/themeSlice";

function MyApp({ Component, pageProps }) {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);

  useEffect(() => {
    dispatch(setInitialTheme());
  }, [dispatch]);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default function App(props) {
  return (
    <Provider store={store}>
      <MyApp {...props} />
    </Provider>
  );
}
