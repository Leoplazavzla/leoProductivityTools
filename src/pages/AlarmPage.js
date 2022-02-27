import React from "react"
import {useAuth} from "../contexts/AuthContext"
import {useParams} from "react-router-dom";

const AlarmPage = () => {
    const params = useParams();
    console.log(params)

    return(
        <div>
            This is the alarm page
        </div>
    )
}
export default AlarmPage;