import React from "react";
import {Switch, Route} from "react-router";


//Dashboard
import Dashboard from "./layouts/Dashboard/Dashboard"
import PostList from "./pages/PostList"

//Pages
import {paths} from "./resources/paths"
import Messages from "./pages/Messages"
import NewPost from "./pages/NewPost"
import Login from "./pages/Login"
import Logout from "./pages/Logout"
import Motorcycles from "./pages/motorcycles"


const Routes = () => {
    return(
        <Switch>
            <Route exact path={paths.home} component={PostList} />
            <Route path={paths.dashboard} component={Dashboard}/>
            <Route path={paths.messages} component={Messages}/>
            <Route path={paths.posts.new} component={NewPost}/>
            <Route path={paths.login} component={Login}/>
            <Route path={paths.logout} component={Logout}/>
            <Route path={paths.motorcycles} component={Motorcycles}/>

        </Switch>
    )
}

export default Routes;