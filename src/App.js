import React from "react";
import './App.css';
import {ThemeProvider} from "@material-ui/core/styles";
import theme from "./layouts/theme/theme";
import Navigation from "./components/Navigation"

function App() {

    return (

        <ThemeProvider theme={theme}>
            <Navigation/>
        </ThemeProvider>
    );
}

export default App;
