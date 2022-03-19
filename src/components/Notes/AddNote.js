import React, {useEffect} from "react";
import {useAuth} from "../../contexts/AuthContext"
import {useNote} from "../../contexts/NotesContext";
import {Avatar, Box, Button, Container, TextField, Typography} from "@mui/material";
import Strings from "../../resources/Strings"
import {NoteAlt} from "@mui/icons-material";


const AddNote = () => {

    const {currentUser} = useAuth();
    const {
        addNote,
        setNoteName,
        noteName,
        setNoteDescription,
        noteDescription,
        editNoteName,
        setEditNoteName,
        editNoteDescription,
        setEditNoteDescription,
        isEditing,
        setIsEditing,
        submitEditedNote,
        noteId
    } = useNote();

    const getName = (event) => {
        if(isEditing){
            setEditNoteName(event.target.value)
        }else {
            setNoteName(event.target.value)
        }
    }

    const getNoteDescription = (event) => {
        if(isEditing){
            setEditNoteDescription(event.target.value)
        }else {
            setNoteDescription(event.target.value)
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await addNote(currentUser.email, noteName, noteDescription)
        setNoteName("")
        setNoteDescription("")
        if(isEditing){
            setIsEditing(false)
        }
    }

    const handleUpdate = async (e) => {
        e.preventDefault();
        await submitEditedNote(noteId, currentUser.email)
        setIsEditing(false)
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
                            value={isEditing ? editNoteName : noteName}
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
                            value={isEditing ? editNoteDescription : noteDescription}
                            onChange={getNoteDescription}
                            label="Note Description"
                            name="noteDescription"
                            autoComplete="noteDescription"
                            autoFocus
                        />

                        {isEditing ?
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 1, mb: 2 }}
                                onClick={handleUpdate}
                            >
                                {Strings.notes.update}
                            </Button>
                        :
                            <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 1, mb: 2 }}
                            onClick={handleSubmit}
                            >
                        {Strings.notes.new}
                            </Button>}



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
