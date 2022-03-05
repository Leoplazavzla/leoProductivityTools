import React, {useState} from "react"
import {useAuth} from "../contexts/AuthContext"
import {useParams} from "react-router-dom";
import {Container, Typography, Grid, Button, Box, Avatar, TextField} from "@material-ui/core";
import {makeStyles} from "@mui/styles";
import DateTimePicker from "@mui/lab/DateTimePicker"


const useStyles = makeStyles((theme) => ({
    container: {
        marginTop: "30px",
    }

}));

const AlarmPage = () => {

    const classes = useStyles();
    const {currentUser} = useAuth();
    const params = useParams();
    const [value, setValue] = useState(new Date('2022-03-03T21:11:54'));

    const handleChange = (newValue) => {
        setValue(newValue);
    };

    return(
        <>
            <Container className={classes.container}>
                <Box
                    sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}>
                    <Typography variant={"h3"} align={"center"}>
                        Alarm
                    </Typography>
                        <DateTimePicker
                            label="Date & Time picker"
                            value={value}
                            onChange={handleChange}
                            renderInput={(params) => <TextField {...params} />}
                        />

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Add Alarm
                    </Button>


                </Box>


            </Container>
        </>
    )
}
export default AlarmPage;