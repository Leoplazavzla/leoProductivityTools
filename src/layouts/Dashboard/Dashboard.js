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
    CardActions
} from "@mui/material";
import {Link} from "react-router-dom"
import Strings from "../../resources/Strings";
import {paths} from "../../resources/paths"
import alarm from "../../images/alarm.jpg"
import picture from "../../images/picture.jpg"
import pomodoro from "../../images/pomodoro.jpg"
import LinkedIn from "@material-ui/icons/LinkedIn"

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © Leospmtools '}
            {new Date().getFullYear()}
            {'.'}

        </Typography>
    );
}


const Dashboard = () => {

    return(
        <>
            <Box
                sx={{
                    bgcolor: 'background.paper',
                    pt: 8,
                    pb: 6,
                }}
            >
                <Container maxWidth="sm">
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
                            <Typography ml={"1"}>
                                { Strings.personalDetails.linkedin}
                            </Typography>

                        </Button>
                    </Stack>
                </Container>
            </Box>
            <Container>
                <Grid container spacing={2}>
                        <Grid item xs={12} sm={6} md={4}>
                        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                        <CardMedia
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
                        <CardActions>
                        <Button
                            rel="noreferrer"
                            component={Link}
                            variant={"outlined"}
                            color={"primary"}
                            to={paths.alarm.basePath}
                        >
                            {Strings.alarm.new}
                        </Button>
                        </CardActions>

                        </Card>
                        </Grid>

                    <Grid item xs={12} sm={6} md={4}>
                        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                            <CardMedia
                                component="img"
                                sx={{
                                    // 16:9
                                    //pt: '56.25%',
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
                            <CardActions>
                                <Button
                                    rel="noreferrer"
                                    component={Link}
                                    variant={"outlined"}
                                    color={"primary"}
                                    to={paths.pictures.basePath}
                                >
                                    {Strings.pictures.addPicture}
                                </Button>
                            </CardActions>

                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4}>
                        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                            <CardMedia
                                component="img"
                                sx={{
                                    // 16:9
                                    //pt: '56.25%',
                                }}
                                image={pomodoro}
                                alt="random"
                            />

                            <CardContent sx={{ flexGrow: 1 }}>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {Strings.pomodoro.name}
                                </Typography>
                                <Typography>
                                    {Strings.pomodoro.description}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button
                                    rel="noreferrer"
                                    component={Link}
                                    variant={"outlined"}
                                    color={"primary"}
                                    to={paths.pomodoro.basePath}
                                >
                                    {Strings.pomodoro.name}
                                </Button>
                            </CardActions>

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