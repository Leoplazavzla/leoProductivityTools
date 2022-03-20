import React from "react"
import AddAlarm from "../components/Alarms/AddAlarm"
import AlarmList from "../components/Alarms/AlarmList"
import BaseLayout from "../BaseLayout";
import {AlarmProvider} from "../contexts/AlarmsContext";

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