import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styled/global-styles";

import Index from "./pages/Index";

import { darkTheme, lightTheme } from "./styled/theme";
import { useGlobalContext } from "./contextAPI/context";

function App() {
  const { baseTheme } = useGlobalContext();

  return (
    <ThemeProvider theme={baseTheme ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Index />
    </ThemeProvider>
  );
}

export default App;
