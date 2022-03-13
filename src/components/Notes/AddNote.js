import React, {useState, useEffect} from "react";
import {useAuth} from "../../contexts/AuthContext"
import {useNote} from "../../contexts/NotesContext";
import {Container, TextField, Button, Typography, Box, Avatar} from "@mui/material";
import Strings from "../../resources/Strings"
import {NoteAlt} from "@mui/icons-material";


const AddNote = () => {

    const {currentUser} = useAuth();
    const {addNote,
        currentId,
        setNoteName,
        noteName,
        setNoteDescription,
        noteDescription} = useNote();


    useEffect(() => {
        if(currentId){

        }
    }, [currentId])

    const getName = (event) => {
        setNoteName(event.target.value)
    }

    const getNoteDescription = (event) => {
        setNoteDescription(event.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await addNote(noteName, currentUser.email, noteDescription)
        setNoteName("")
        setNoteDescription("")
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
                        <NoteAlt/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        {Strings.notes.addNote}
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
                            value={noteName}
                            onChange={getName}
                            label="Note Name"
                            name="noteName"
                            autoComplete="noteName"
                            autoFocus
                        />

                        <TextField
                            margin="normal"
                            multiline
                            maxRows={6}
                            fullWidth
                            id="description"
                            value={noteDescription}
                            onChange={getNoteDescription}
                            label="Note Description"
                            name="noteDescription"
                            autoComplete="noteDescription"
                            autoFocus
                        />

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 1, mb: 2 }}
                            onClick={handleSubmit}
                        >
                            {Strings.notes.new}
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
export default AddNote;
