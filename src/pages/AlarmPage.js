import React from "react"
import {useAuth} from "../contexts/AuthContext"
import {useParams} from "react-router-dom";
import {Container, Typography, Grid, Button} from "@material-ui/core";
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    container: {
        marginTop: "30px",
    }

}));

const AlarmPage = () => {
    const classes = useStyles();
    const {currentUser} = useAuth();
    const params = useParams();

    return(
        <>
            <Container className={classes.container}>
                <Typography variant={"h1"} align={"center"}>
                    Alarm
                </Typography>

            </Container>
        </>
    )
}
export default AlarmPage;