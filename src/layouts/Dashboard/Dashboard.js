import React from "react";
import {
    Container,
    Stack,
    Typography,
    Grid,
    Button,
    Box,
    Card,
    CardMedia,
    CardContent,
} from "@mui/material";
import {Link} from "react-router-dom"
import Strings from "../../resources/Strings";
import {paths} from "../../resources/paths"
import alarm from "../../images/digital-alarm.png"
import picture from "../../images/photo-camera.png"
import notes from "../../images/notes.png"
import LinkedIn from "@material-ui/icons/LinkedIn"
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    dashboardButton: {
        display: "block",
        padding: "8px",
        width: "100%",
        textDecoration: "none",
        backgroundColor: "purple",
        color: "white",
        textAlign: "center"

    },
    cards: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: "center",
        justifyItems: "center"
    },
    cardActions: {
        maxWidth: "100%",
        width: "100%"
    }

}));

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © Leopmtools '}
            {new Date().getFullYear()}
            {'.'}

        </Typography>
    );
}


const Dashboard = () => {
    const classes = useStyles();

    return(
        <>
            <Box
                sx={{
                    bgcolor: 'background.paper',
                    pt: 4,
                    pb: 6,
                }}
            >
                <Container maxWidth="md">
                    <Typography
                        component="h1"
                        variant="h2"
                        align="center"
                        color="text.primary"
                        gutterBottom
                    >
                        {Strings.dashboard.title}
                    </Typography>

                    <Typography variant="h5" align="center" color="text.secondary" paragraph>
                        {Strings.dashboard.paragraph1}
                    </Typography>
                    <Stack
                        sx={{ pt: 4 }}
                        direction="row"
                        spacing={2}
                        justifyContent="center"
                    >
                        <Button
                            rel="noreferrer"
                            component={Link}
                            variant={"contained"}
                            color={"primary"}
                            to={paths.about}
                        >
                            {Strings.about.about}
                        </Button>
                        <Button
                            rel="noreferrer"
                            component={"a"}
                            target={"_blank"}
                            variant={"outlined"}
                            color={"primary"}
                            href={paths.personalDetails.linkedin}
                        >
                            <LinkedIn />
                            <Typography sx={{marginLeft: 1}}>
                                { Strings.personalDetails.linkedin}
                            </Typography>

                        </Button>
                    </Stack>
                </Container>
            </Box>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card className={classes.cards}>

                            <CardMedia
                                sx={{
                                    marginTop: 2,
                                    width: 151
                                }}
                                component="img"
                                image={alarm}
                                alt="random"
                        />

                        <CardContent sx={{ flexGrow: 1 }}>
                            <Typography gutterBottom variant="h5" component="h2">
                                {Strings.alarm.name}
                            </Typography>
                            <Typography>
                                {Strings.alarm.description}
                            </Typography>
                        </CardContent>
                            <div className={classes.cardActions}>
                                <Link
                                    className={classes.dashboardButton}
                                    rel="noreferrer"
                                    color={"primary"}
                                    to={paths.alarm.basePath}
                                >
                                    {Strings.alarm.addAlarm}
                                </Link>
                            </div>


                        </Card>

                        </Grid>

                    <Grid item xs={12} sm={6} md={4}>
                        <Card className={classes.cards}>
                            <CardMedia
                                component="img"
                                sx={{
                                    marginTop: 2,
                                    width: 151
                                }}
                                image={picture}
                                alt="random"
                            />

                            <CardContent sx={{ flexGrow: 1 }}>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {Strings.pictures.name}
                                </Typography>
                                <Typography>
                                    {Strings.pictures.description}
                                </Typography>
                            </CardContent>
                            <div className={classes.cardActions}>
                                <Link
                                    className={classes.dashboardButton}
                                    rel="noreferrer"
                                    color={"primary"}
                                    to={paths.pictures.basePath}
                                >
                                    {Strings.pictures.addPicture}
                                </Link>
                            </div>

                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4}>
                        <Card className={classes.cards}>
                            <CardMedia
                                component="img"
                                sx={{
                                    marginTop: 2,
                                    width: 151
                                }}
                                image={notes}
                                alt="random"
                            />

                            <CardContent sx={{ flexGrow: 1 }}>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {Strings.notes.name}
                                </Typography>
                                <Typography>
                                    {Strings.notes.description}
                                </Typography>
                            </CardContent>
                            <div className={classes.cardActions}>
                                <Link
                                    className={classes.dashboardButton}
                                    rel="noreferrer"
                                    color={"primary"}
                                    to={paths.notes.basePath}
                                >
                                    {Strings.notes.addNote}
                                </Link>
                            </div>
                        </Card>
                    </Grid>
                </Grid>
                <Box sx={{ mt:6, p: 6 }} component="footer" justifyContent={"center"}>
                    <Copyright />
                </Box>
            </Container>

    </>
    )
}

export default Dashboard;