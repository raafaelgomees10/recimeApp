import { theme } from "@/styles/theme";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "@/styles/globalStyles";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
