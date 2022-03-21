import React from "react"
import {Box, Button, Container, Grid, Stack, Typography} from "@mui/material";
import Strings from "../resources/Strings";
import {paths} from "../resources/paths";
import LinkedIn from "@material-ui/icons/LinkedIn";
import GitHubIcon from '@mui/icons-material/GitHub';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import Copyright from "../components/Copyright";

const About = () => {

    const technologies = [
        {name: "ReactJS", version: "Version 17"},
        {name: "MaterialUI", version: "Version 5"},
        {name: "Toastify", version: "Version 8"},
        {name: "Router-dom", version: "Version 6"},
        {name: "Firebase Auth", version: "Version 9"},
        {name: "Firestore", version: "Version 9"},
        {name: "Storage", version: "Version 9"},
        {name: "Howler", version: "Version 2"},
        {name: "Copy-to-clipboard", version: "Version 5"},
    ]

    return (
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
                        color="secondary"
                        gutterBottom
                    >
                        {Strings.about.about}
                    </Typography>

                    <Typography variant="h5" align="center" color="text.secondary" paragraph>
                        {Strings.about.paragraph1}
                    </Typography>


                    <Stack
                        sx={{pt: 4}}
                        direction="row"
                        spacing={2}
                        justifyContent="center"
                    >
                        <Button
                            rel="noreferrer"
                            component={"a"}
                            target={"_blank"}
                            variant={"contained"}
                            sx={{
                                backgroundColor: "black"
                            }}
                            href={paths.personalDetails.github}
                        >
                            <GitHubIcon/>
                            <Typography sx={{marginLeft: 1}}>
                                {Strings.personalDetails.github}
                            </Typography>
                        </Button>
                        <Button
                            rel="noreferrer"
                            component={"a"}
                            target={"_blank"}
                            variant={"outlined"}
                            color={"primary"}
                            href={paths.personalDetails.linkedin}
                        >
                            <LinkedIn/>
                            <Typography sx={{marginLeft: 1}}>
                                {Strings.personalDetails.linkedin}
                            </Typography>

                        </Button>
                    </Stack>



                </Container>

                <Container maxWidth={"md"}>
                    <Typography
                        variant={"h3"}
                        color={"primary"}
                        align={"center"}
                        sx={{
                            marginTop: "24px",
                            marginBottom: "24px"
                        }}
                    >
                        {"Libraries Used"}
                    </Typography>
                    <Grid
                        container
                        //style={{ minHeight: '100vh' }}
                        //sx={{maxWidth: "80%", display: "flex", justifyItems: "center"}}
                        direction="row"
                        alignItems="center"
                    >

                        {technologies.map((item, index) => (

                            <Grid item key={index} xs={8} sm={6} md={4} sx={{marginBottom: "8px"}}>
                                <Typography
                                    variant={"h6"}
                                >
                                    <FiberManualRecordIcon color={"secondary"} sx={{verticalAlign: "-6px"}}/>
                                    {item.name}
                                </Typography>
                                <Typography
                                    component={"span"}
                                    variant={"body2"}
                                    sx={{
                                        marginLeft: 3
                                    }}
                                >{item.version}</Typography>
                            </Grid>
                            )
                        )}
                    </Grid>
                    <Copyright/>
                </Container>

            </Box>


        </>
    )
}
export default About;