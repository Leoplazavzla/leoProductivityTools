import React from "react";
import './App.css';
import {ThemeProvider} from "@material-ui/core/styles";
import theme from "./layouts/theme/theme";
import Navigation from "./components/Navigation";
import {AuthProvider} from "./contexts/AuthContext";
import {DateProvider} from "./contexts/DatesContext";
import {PicturesProvider} from "./contexts/PicturesContext";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <DateProvider>
                <AuthProvider>
                    <PicturesProvider>
                        <Navigation/>
                    </PicturesProvider>
                </AuthProvider>
            </DateProvider>


        </ThemeProvider>
    );
}

export default App;
