import React, {useState, } from "react"
import AddAlarm from "../components/Alarms/AddAlarm"
import AlarmList from "../components/Alarms/AlarmList"
import {makeStyles} from "@mui/styles";
import BaseLayout from "../BaseLayout";
import {AlarmProvider} from "../contexts/AlarmsContext";

const useStyles = makeStyles((theme) => ({
    container: {
        marginTop: "30px",
    }

}));

const AlarmPage = () => {


    return(
            <BaseLayout>
                <AlarmProvider>
                    <AddAlarm/>
                    <AlarmList/>

                </AlarmProvider>
            </BaseLayout>
    )
}
export default AlarmPage;