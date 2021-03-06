import React from "react"
import {Box, Button, Container, Stack, Typography} from "@mui/material";
import Strings from "../resources/Strings";
import {Link} from "react-router-dom";
import {paths} from "../resources/paths";

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © Leopmtools '}
            {new Date().getFullYear()}
            {'.'}

        </Typography>
    );
}

const ErrorPage = () => {
    return(
        <>
            <Box
                sx={{
                    bgcolor: 'background.paper',
                    pt: 8,
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
                        {Strings.errorPage.error}
                    </Typography>

                    <Typography variant="h5" align="center" color="text.secondary" paragraph>
                        {Strings.errorPage.message}
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
                            to={paths.home}
                        >
                            {Strings.errorPage.home}
                        </Button>
                    </Stack>
                </Container>
                <br/>
                <br/>
                <br/>
                <Copyright/>
            </Box>
        </>
    )
}

export default ErrorPage;