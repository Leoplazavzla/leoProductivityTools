import React from "react";
import './App.css';
import {ThemeProvider} from "@material-ui/core/styles";
import theme from "./layouts/theme/theme";
import Navigation from "./components/Navigation";
import {AuthProvider} from "./contexts/AuthContext";
import {DateProvider} from "./contexts/DatesContext";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <DateProvider>
                <AuthProvider>
                    <Navigation/>
                </AuthProvider>
            </DateProvider>


        </ThemeProvider>
    );
}

export default App;
