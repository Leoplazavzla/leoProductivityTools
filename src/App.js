import React, {useState} from "react";
import './App.css';
import ListOfGifs from "./components/ListOfGifs";
import Home from "./pages/Home";
import {Link, Route} from "wouter";
import {AppBar, Container, MuiThemeProvider, Toolbar, Typography} from "@material-ui/core";
import Routes from "./Routes";
import theme from "./layouts/theme/theme";
import NavBar from "./layouts/NavBar/NavBar";


function App() {
    const [state, setState] = useState("");

    return (
        <MuiThemeProvider theme={theme} >
            <NavBar/>
            <Container>
                <section className="App-content">
                    <Link to='/'>
                        <img src="logo2.png" alt="giffy logo"/>
                    </Link>
                    <Route
                        component={Home}
                        path="/"/>
                    <Route
                        component={ListOfGifs}
                        path="/search/:keyword"/>
                </section>
                <Routes/>
            </Container>
        </MuiThemeProvider>
    );
}

export default App;
