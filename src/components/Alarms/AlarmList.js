import React, {useState} from "react"
import {Container, Stack, TextField, Button, Grid, IconButton} from "@mui/material";
import {TableBody, TableCell, TableHead, Table, TableRow} from "@material-ui/core";
import {useAlarm} from "../../contexts/AlarmsContext";
import {useAuth} from "../../contexts/AuthContext"
import StopIcon from '@mui/icons-material/Stop';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';


const AlarmList = () => {
    const {currentUser} = useAuth();
    const {
        alarmArray,
        deleteAlarm,
        stopAlarmSound,
        alarmSound,
        setAlarmSound,
        alarmTime,
    } = useAlarm();

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
                                        <TableCell>{alarmTime}</TableCell>
                                        <TableCell>

                                            <IconButton
                                                color={"info"}
                                                onClick={(e) => {
                                                    e.preventDefault()
                                                    if(alarmSound){
                                                        stopAlarmSound(alarmSound)
                                                        setAlarmSound(null)
                                                    }
                                                }}
                                            >
                                                <StopIcon/>
                                            </IconButton>
                                            <IconButton
                                                color={"error"}
                                                onClick={(e) => {
                                                    e.preventDefault()
                                                    deleteAlarm(alarmObject.id, currentUser.email)
                                                    if(alarmSound){
                                                        stopAlarmSound(alarmSound)
                                                        setAlarmSound(null)
                                                    }
                                                }}
                                            >
                                                <DeleteIcon/>
                                            </IconButton>
                                        </TableCell>
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