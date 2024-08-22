import { GlobalStyles } from "@/styles/globalStyles";
import { theme } from "@/styles/theme";
import { ThemeProvider } from "styled-components";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
