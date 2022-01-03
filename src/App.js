import React from "react";
import './App.css';
import {ThemeProvider} from "@material-ui/core/styles";
import theme from "./layouts/theme/theme";
import Navigation from "./components/Navigation"
import Dashboard from "./layouts/Dashboard/Dashboard"
import Routes from "./Routes"
import {BrowserRouter} from "react-router-dom";

function App() {

    return (
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <Navigation/>
                <Dashboard/>
            </ThemeProvider>
            <Routes/>
        </BrowserRouter>
    );
}

export default App;
