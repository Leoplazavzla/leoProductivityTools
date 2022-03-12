import React, {useState, useEffect} from "react"
import {useAuth} from "../../contexts/AuthContext"
import {useAlarm} from "../../contexts/AlarmsContext"
import {useParams} from "react-router-dom";
import {Container, TextField, Button, Grid, Typography, Box, Avatar} from "@mui/material";
import PianoAlarm from "../../pianoAlarm.mp3"
import TimePicker from "@mui/lab/TimePicker";
import AlarmIcon from '@mui/icons-material/Alarm';
import Strings from "../../resources/Strings";
import {Howl, Howler} from "howler"

const AddAlarm = () => {

    const {currentUser} = useAuth();
    const {currentTime, addAlarm, playAlarmSound} = useAlarm();
    let currTimeMilSec = undefined;
    const alarmSound = PianoAlarm;
    let alarmMilSec;
    let alarmTimeOut;
    const params = useParams();
    const [value, setValue] = useState(new Date());
    const [alarmName, setAlarmName] = useState("");
    const [newDate, setNewDate] = useState();
    const [userAlarm, setUserAlarm] = useState({hour: null, minute: null})
    const [currTime, setCurrTime] = useState({hour: undefined, minute: undefined})

    const handleChange = (newValue) => {
        const time = new Date()
        setValue(newValue);
        setNewDate(newValue)
        const alarmHour = newValue.getHours()
        const alarmMinute = newValue.getMinutes()
        setCurrTime({hour: time.getHours(), minute: time.getMinutes()})
        setUserAlarm({hour: alarmHour, minute: alarmMinute})
    };

    const alarmToMilliseconds = (alarmHour, alarmMinute, ) => {
        const alarmHourToMilSec = ((alarmHour*60)*60)*1000
        const alarmMinuteToMilSec = (alarmMinute*60)*1000
        return alarmMilSec = alarmHourToMilSec + alarmMinuteToMilSec
    }

    const currTimeToMilSec = (currHour, currMinute) => {
        const currHourToMilSec = ((currHour*60)*60)*1000
        const currMinuteToMilSec = (currMinute*60)*1000
        return currTimeMilSec = currHourToMilSec + currMinuteToMilSec
    }

    const setAlarm = () => {
        const alarmHour = userAlarm.hour
        const alarmMinute = userAlarm.minute
        const currHour = currTime.hour
        const currMinute = currTime.minute
        alarmToMilliseconds(alarmHour, alarmMinute);
        currTimeToMilSec(currHour, currMinute);
        if(alarmMilSec > currTimeMilSec){
            const timeOut = alarmMilSec - currTimeMilSec;
            alarmTimeOut = setTimeout(() => {
                playAlarmSound(alarmSound)
             }, timeOut)
        }
    }

    const getAlarmName = (event) => {
        setAlarmName(event.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setAlarm()
        await addAlarm(alarmName, currentUser.email, value)
        setAlarmName("")
        Howler.volume(1.0)
    }

    return(
            <Container component="main" maxWidth="xs">
                <Typography
                    component="h1"
                    variant="h1"
                    sx={{mt: 2, ml: 1}}
                >
                    {currentTime}
                </Typography>
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}>
                    <Avatar sx={{m: 1, bgcolor: 'secondary.main'}}>
                        <AlarmIcon/>
                    </Avatar>
                    <Typography component="h1" variant="h5" sx={{mt: 2, mb: 1}}>
                        {Strings.alarm.new}
                    </Typography>
                    <Box
                        component="form"
                        noValidate
                        sx={{ mt: 1 }}
                    >
                        <TextField
                            margin="normal"
                            sx={{ mb: 2 }}
                            fullWidth
                            id="name"
                            value={alarmName}
                            onChange={getAlarmName}
                            label={Strings.alarm.alarmName}
                            name="alarmName"
                            autoFocus
                        />

                        <TimePicker
                            label={Strings.alarm.timePickerlabel}
                            value={value}
                            onChange={handleChange}
                            renderInput={(params) => <TextField {...params} fullWidth sx={{ mb: 1 }}/>}
                        />

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mb: 2 }}
                            onClick={handleSubmit}
                        >
                            {Strings.alarm.addAlarm}
                        </Button>
                    </Box>
                </Box>
            </Container>
    )
}

export default AddAlarm;