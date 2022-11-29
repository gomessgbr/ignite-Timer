import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/theme/default";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <div></div>
    </ThemeProvider>
  );
}
