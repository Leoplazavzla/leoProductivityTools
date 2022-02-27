import React, {useState} from "react"
import {Route} from "react-router-dom"
import {useAuth} from "../contexts/AuthContext";
import {useNavigate} from "react-router-dom"

const PrivateRoute = ({element: Element, ...rest}) => {
    const {currentUser} = useAuth();
    let navigate = useNavigate();
    return(
        <Route
            {...rest}
        render={props => {
            return currentUser ? <Element {...props} /> : navigate("/login")
        }}>
        </Route>
    )

}

export default PrivateRoute;