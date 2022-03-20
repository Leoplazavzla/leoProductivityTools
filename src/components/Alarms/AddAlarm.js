import React, {useState} from "react"
import {useAuth} from "../../contexts/AuthContext"
import {useAlarm} from "../../contexts/AlarmsContext"
import {Avatar, Box, Button, Container, TextField, Typography} from "@mui/material";
import PianoAlarm from "../../pianoAlarm.mp3"
import TimePicker from "@mui/lab/TimePicker";
import AlarmIcon from '@mui/icons-material/Alarm';
import Strings from "../../resources/Strings";

import {Howler} from "howler"

const AddAlarm = () => {

    const {currentUser} = useAuth();
    const {
        currentTime,
        addAlarm,
        alarmName,
        setAlarmName,
        playAlarmSound,
        setAlarmTime
    } = useAlarm();
    let currTimeMilSec = undefined;
    const alarmSound = PianoAlarm;
    let alarmMilSec;
    let alarmTimeOut;
    const [value, setValue] = useState(new Date());
    const [newDate, setNewDate] = useState();
    const [userAlarm, setUserAlarm] = useState({hour: null, minute: null})
    const [currTime, setCurrTime] = useState({hour: undefined, minute: undefined})

    const handleChange = (newValue) => {
        const time = new Date()
        setValue(newValue);
        setNewDate(newValue)
        const alarmHour = newValue.getHours()
        const alarmMinute = newValue.getMinutes()
        setCurrTime({hour: time.getHours(), minute: time.getMinutes(), seconds: time.getSeconds()})
        setUserAlarm({hour: alarmHour, minute: alarmMinute})
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        setAlarm()
        await addAlarm(currentUser.email,alarmName, value)
        setAlarmName("")
        Howler.volume(1.0)
    }

    const alarmToMilliseconds = (alarmHour, alarmMinute,) => {
        const alarmHourToMilSec = ((alarmHour * 60) * 60) * 1000
        const alarmMinuteToMilSec = (alarmMinute * 60) * 1000
        return alarmMilSec = alarmHourToMilSec + alarmMinuteToMilSec
    }

    const currTimeToMilSec = (currHour, currMinute, currSeconds) => {
        const currHourToMilSec = ((currHour * 60) * 60) * 1000
        const currMinuteToMilSec = (currMinute * 60) * 1000
        const currSecondsToMilSec = (currSeconds)* 1000
        return currTimeMilSec = currHourToMilSec + currMinuteToMilSec + currSecondsToMilSec
    }

    const setAlarm = () => {
        const alarmHour = userAlarm.hour
        const alarmMinute = userAlarm.minute
        const currHour = currTime.hour
        const currMinute = currTime.minute
        const currSeconds = currTime.seconds
        alarmToMilliseconds(alarmHour, alarmMinute);
        currTimeToMilSec(currHour, currMinute, currSeconds);
        setAlarmTime(`${alarmHour}: ${alarmMinute}`)
        if (alarmMilSec > currTimeMilSec) {
            const timeOut = alarmMilSec - currTimeMilSec;
            alarmTimeOut = setTimeout(() => {
                playAlarmSound(alarmSound)
            }, timeOut)
        }
    }

    const getAlarmName = (event) => {
        setAlarmName(event.target.value)
    }

    return (
        <>
            <Container component="main" maxWidth="xs">
                <Box
                    sx={{
                        marginTop: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}>
                        <Typography
                            component="h1"
                            variant="h1"
                            sx={{mt: 1, ml: 1}}
                        >
                            {currentTime}
                        </Typography>
                        <Avatar sx={{m: 1, bgcolor: 'secondary.main'}}>
                            <AlarmIcon/>
                        </Avatar>
                        <Typography component="h1" variant="h5" sx={{mt: 1}}>
                            {Strings.alarm.new}
                        </Typography>
                        <Box
                            component="form"
                            noValidate
                            sx={{mt: 1}}
                        >
                            <TextField
                                margin="normal"
                                required={true}
                                sx={{mb: 2}}
                                fullWidth
                                id="name"
                                value={alarmName}
                                onChange={getAlarmName}
                                label={Strings.alarm.alarmName}
                                name="alarmName"
                                autoFocus
                            />


                            <TimePicker
                                label={Strings.alarm.timePickerLabel}
                                onChange={handleChange}
                                renderInput={(params) => <TextField {...params} fullWidth sx={{mb: 1}}/>}
                            />

                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{mb: 4}}
                                onClick={handleSubmit}
                            >
                                {Strings.alarm.addAlarm}
                            </Button>
                    </Box>
                </Box>
            </Container>
            <hr/>
        </>
    )
}

export default AddAlarm;