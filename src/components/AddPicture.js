import React from "react";
import {useAuth} from "../contexts/AuthContext"
import {usePicture} from "../contexts/PicturesContext";
import {Container, TextField, Button, Grid, Typography, Box, Avatar} from "@mui/material";
import Strings from "../resources/Strings"
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';


const AddPicture = () => {

    const {currentUser} = useAuth();


    const handleSubmit = () => {

    }

    return(
        <>
            <Container component="main" maxWidth="xs">
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <AddAPhotoIcon/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        {Strings.pictures.addPicture}
                    </Typography>
                    <Box
                        component="form"
                        onSubmit={handleSubmit}
                        noValidate
                        sx={{ mt: 1 }}
                    >
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Picture Name"
                            name="pictureName"
                            autoComplete="pictureName"
                            autoFocus
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3 }}
                        >
                            {Strings.pictures.selectFile}
                        </Button>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            {Strings.pictures.uploadPicture}
                        </Button>

                    </Box>
                </Box>
            </Container>
            <br/>
        </>
    )
}
export default AddPicture;