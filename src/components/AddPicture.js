import React, {useState} from "react";
import {useAuth} from "../contexts/AuthContext"
import {usePicture} from "../contexts/PicturesContext";
import {Container, TextField, Button, Grid, Typography, Box, Avatar} from "@mui/material";
import Strings from "../resources/Strings"
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';


const AddPicture = () => {

    const {currentUser} = useAuth();
    const {addPicture, uploadPicture} = usePicture();
    const [name, setName] = useState("");
    const [file, setFile] = useState(null);

    const getPictureName = (event) => {
        setName(event.target.value)
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        await addPicture(name, currentUser.email)
        setName("")
    }

    const handleUploadFile = async (e) => {
        const uploadFile = e.target.files[0]
        await setFile(uploadFile)
        await uploadPicture(uploadFile)
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
                        noValidate
                        sx={{ mt: 1 }}
                    >
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="name"
                            value={name}
                            onChange={getPictureName}
                            label="Picture Name"
                            name="pictureName"
                            autoComplete="pictureName"
                            autoFocus
                        />
                        <input
                            accept="image/*"
                            style={{ display: 'none' }}
                            id="raised-button-file"
                            multiple
                            type="file"
                        />
                        <label htmlFor="raised-button-file">
                            <Button
                                fullWidth
                                type={"file"}
                                variant="contained"
                                color={"secondary"}
                                sx={{ mt: 1 }}
                                onChange={handleUploadFile}
                                component={"span"}
                            >
                                {Strings.pictures.selectFile}
                            </Button>
                        </label>

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 1, mb: 2 }}
                            onClick={handleSubmit}
                        >
                            {Strings.pictures.uploadPicture}
                        </Button>

                    </Box>
                </Box>
            </Container>
            <br/>
            <br/>
            <hr/>
        </>
    )
}
export default AddPicture;
