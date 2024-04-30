import { useMemo, useState, createContext } from "react";
import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth";
import { CssBaseline } from "@mui/material";
import Layout from "@/components/Layout";
import darkTheme from "@/theme/darkTheme";
import lightTheme from "@/theme/lightTheme";
import { createTheme, ThemeProvider } from "@mui/material/styles";

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

interface AppProps {
  Component: React.ComponentType<any>;
  pageProps: {
    session: Session | null;
    [key: string]: any;
  };
}

const App = ({ Component, pageProps: { session, ...pageProps } }: AppProps) => {
  const [mode, setMode] = useState<"light" | "dark">("dark");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const darkThemeChosen = useMemo(
    () =>
      createTheme({
        ...darkTheme,
      }),
    []
  );

  const lightThemeChosen = useMemo(
    () =>
      createTheme({
        ...lightTheme,
      }),
    []
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider
        theme={mode === "dark" ? darkThemeChosen : lightThemeChosen}
      >
        <SessionProvider session={session}>
          <CssBaseline />
          <Layout ColorModeContext={ColorModeContext}>
            <Component {...pageProps} />
          </Layout>
        </SessionProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
