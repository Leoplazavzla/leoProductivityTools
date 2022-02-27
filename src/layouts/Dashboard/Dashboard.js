import React from "react";
import {useAuth} from "../../contexts/AuthContext";

const Dashboard = () => {

    const {currentUser} = useAuth();
    console.log(currentUser)

    return(<div>

        This is the Dashboard Page
    </div>)
}

export default Dashboard;