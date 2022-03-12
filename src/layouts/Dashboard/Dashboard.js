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


const Dashboard = () => {

    const cards = [1, 2, 3]

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
                            to={paths.alarm.basePath}
                        >
                            {Strings.alarm.new}
                        </Button>
                        <Button
                            rel="noreferrer"
                            component={Link}
                            variant={"outlined"}
                            color={"primary"}
                            to={paths.pictures.basePath}
                        >
                            {Strings.pictures.addPicture}
                        </Button>
                    </Stack>
                </Container>
            </Box>
            <Container>
                <Grid container spacing={4}>
                    {cards.map((card) => (
                        <Grid key={card}>
                            <Card>
                                <CardMedia
                                    component="img"
                                    sx={{
                                        // 16:9
                                        pt: '56.25%',
                                    }}
                                    image="https://source.unsplash.com/random"
                                    alt="random"
                                />

                                <CardContent>
                                    <Typography></Typography>
                                    <Typography></Typography>
                                </CardContent>
                                <CardActions>
                                    <Button></Button>
                                    <Button></Button>
                                </CardActions>

                            </Card>
                        </Grid>
                    ))}


                </Grid>
            </Container>

    </>
    )
}

export default Dashboard;