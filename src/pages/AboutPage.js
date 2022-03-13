import React from "react"
import {Box, Button, Container, Stack, Typography} from "@mui/material";
import Strings from "../resources/Strings";
import {Link} from "react-router-dom";
import {paths} from "../resources/paths";
import LinkedIn from "@material-ui/icons/LinkedIn";

const About = () => {

    function Copyright(props) {
        return (
            <Typography variant="body2" color="text.secondary" align="center" {...props} mt={8}>
                {'Copyright © leospmtools '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
        );
    }

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
                        {Strings.about.about}
                    </Typography>

                    <Typography variant="h5" align="center" color="text.secondary" paragraph>
                        {Strings.about.paragraph1}
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
                <Copyright/>
            </Box>


        </>
    )
}
export default About;