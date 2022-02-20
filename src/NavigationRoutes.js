import React from "react";
import {Routes, Route} from "react-router";


//Dashboard
import Dashboard from "./layouts/Dashboard/Dashboard"
//Pages
import {paths} from "./resources/paths"
import Messages from "./pages/Messages"
import NewPost from "./pages/NewPost"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Logout from "./pages/Logout"
import Motorcycles from "./pages/motorcycles"
import ErrorPage from "./pages/ErrorPage";

const NavigationRoutes = () => {
    return(
        <Routes>
            <Route exact path={paths.home} element={<Register/>} />
            <Route path={paths.dashboard} element={<Dashboard/>}/>
            <Route path={paths.messages} element={<Messages/>}/>
            <Route path={paths.posts.new} element={<NewPost/>}/>
            <Route path={paths.login} element={<Login/>}/>
            <Route path={paths.register} element={<Register/>}/>
            <Route path={paths.logout} element={<Logout/>}/>
            <Route path={paths.motorcycles} element={<Motorcycles/>}/>
            <Route path={"*"} element={<ErrorPage />}/>

        </Routes>
    )
}

export default NavigationRoutes;