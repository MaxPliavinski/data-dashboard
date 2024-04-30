import { Context, useContext, createContext } from "react";
import { useTheme } from "@mui/material";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import useMediaQuery from "@mui/material/useMediaQuery";

export type ThemeToggleButtonProps = {
  ColorModeContext: Context<{ toggleColorMode: () => void }>;
};

const ThemeToggleButton = (props: ThemeToggleButtonProps) => {
  const isMobile = useMediaQuery("(min-width: 500px)");
  const { ColorModeContext = createContext({ toggleColorMode: () => {} }) } =
    props;
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  return (
    <>
      <IconButton
        sx={{ mr: 2 }}
        title={theme.palette.mode + " mode"}
        aria-label={theme.palette.mode + " mode button"}
        onClick={colorMode.toggleColorMode}
        color="inherit"
      >
        {theme.palette.mode === "dark" ? (
          <Brightness7Icon />
        ) : (
          <Brightness4Icon />
        )}
      </IconButton>
    </>
  );
};

export default ThemeToggleButton;
