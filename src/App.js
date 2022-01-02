import React from "react";
import './App.css';
import {ThemeProvider} from "@material-ui/core/styles";
import theme from "./layouts/theme/theme";
import Navigation from "./components/Navigation"
import Dashboard from "./layouts/Dashboard/Dashboard"


function App() {

    return (
        <ThemeProvider theme={theme}>
            <Navigation/>
            <Dashboard/>


        </ThemeProvider>
    );
}

export default App;
