import React, {useState} from "react"
import {Container, Stack, TextField, Button, Grid} from "@mui/material";
import {TableBody, TableCell, TableHead, Table, TableRow} from "@material-ui/core";
import {useAlarm} from "../../contexts/AlarmsContext";
import {useAuth} from "../../contexts/AuthContext"
import Strings from "../../resources/Strings";


const AlarmList = () => {
    const {currentUser} = useAuth();
    const {alarmArray, deleteAlarm, stopAlarmSound, alarmSound} = useAlarm();



    return(
        <>
            <Container>
                {alarmArray?
                    <Table>
                        <TableBody>
                            {alarmArray.map((alarmObject) => {
                                return (
                                    <TableRow key={alarmObject.id}>
                                        <TableCell>{alarmObject.name}</TableCell>
                                        <TableCell>
                                            <Button
                                                onClick={(e) => {
                                                    e.preventDefault()
                                                    deleteAlarm(alarmObject.id, currentUser.email)
                                                    stopAlarmSound(alarmSound)

                                                }}
                                            >
                                                {Strings.alarm.delete}
                                            </Button> </TableCell>
                                    </TableRow>
                                )
                            })}
                        </TableBody>
                    </Table>
                :
                <div>No alarms yet to show</div>}


            </Container>
        </>
    )
}

export default AlarmList;