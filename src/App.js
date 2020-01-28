import React from "react";
import "./App.css";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import blue from "@material-ui/core/colors/blue";
import purple from "@material-ui/core/colors/purple";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import AppHeader from "./AppHeader";

// const primary = blue[500];

function App() {
  const [state, setState] = React.useState({
    isDarkMode: false,
    drawer: false,
    display: ""
  });
  const toggleDrawer = open => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, drawer: open });
  };
  const toggleMode = () => {
    setState({ ...state, isDarkMode: !state.isDarkMode });
  };
  const toggleDisplay = d => event => {
    setState({ ...state, display: d, drawer: false });
  };
  const theme1 = createMuiTheme({
    palette: {
      primary: blue,
      secondary: {
        main: blue[500]
      },
      type: "light"
    }
  });
  const theme2 = createMuiTheme({
    palette: {
      primary: purple,
      secondary: {
        main: purple[500]
      },
      type: "dark"
    }
  });

  function renderSwitch(param) {
    switch (param) {
      case "button":
        return (
          <Button variant="contained" color="secondary">
            Hello World
          </Button>
        );
      case "checkbox":
        return (
          <FormControlLabel
            control={<Checkbox value="secondary" color="primary" />}
            label="Primary"
          />
        );
      default:
        return <div></div>;
    }
  }

  return (
    <MuiThemeProvider theme={state.isDarkMode ? theme2 : theme1}>
      <div>
        <AppHeader
          mode={state.isDarkMode}
          drawer={state.drawer}
          toggleM={toggleMode}
          toggleD={toggleDrawer}
          display={toggleDisplay}
        />
        <div style={{ height: "calc(100vh - 54px)", marginTop: "54px" }}>
          {renderSwitch(state.display)}
        </div>
      </div>
    </MuiThemeProvider>
  );
}

export default App;
