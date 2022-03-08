import React, {useState} from "react"
import {useAuth} from "../../contexts/AuthContext"
import {useParams} from "react-router-dom";
import {Container, TextField, Button, Grid, Typography, Box, Avatar} from "@mui/material";
import DateTimePicker from "@mui/lab/DateTimePicker"
import AlarmIcon from '@mui/icons-material/Alarm';
import Strings from "../../resources/Strings";

const AddAlarm = () => {

    const {currentUser} = useAuth();
    const params = useParams();
    const [value, setValue] = useState(new Date());
    const [newDate, setNewDate] = useState();

    const handleChange = (newValue) => {
        setValue(newValue);
        setNewDate(newValue)
        console.log(newValue)
    };

    const handleSubmit = () => {
        console.log(newDate)

    }

    return(
            <Container >
                <Box
                    sx={{
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
                        <DateTimePicker
                            label="Date & Time picker"
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
                            Add Alarm
                        </Button>
                    </Box>
                </Box>
            </Container>
    )
}

export default AddAlarm;