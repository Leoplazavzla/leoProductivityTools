import React, {useState} from "react";
import './App.css';
import {ThemeProvider} from "@material-ui/core/styles";
import theme from "./layouts/theme/theme";
import Navigation from "./components/Navigation";
import {AuthProvider} from "./contexts/AuthContext";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <AuthProvider>
                <Navigation/>
            </AuthProvider>


        </ThemeProvider>
    );
}

export default App;
