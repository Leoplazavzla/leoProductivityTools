import React from "react";
import {Switch, Route} from "react-router";
import {paths} from "./resources/paths"

//Dashboard
import Dashboard from "./layouts/Dashboard/Dashboard"
import PostList from "./pages/PostList"

const Routes = () => {
    return(
        <Switch>
            <Route exact path={paths.home} component={PostList} />
            <Route path={paths.dashboard} component={Dashboard}/>
        </Switch>
    )
}

export default Routes;