import React, {useEffect} from "react"
import {Button, Card, CardActions, CardContent, Grid, Typography} from "@mui/material";
import {useNote} from "../../contexts/NotesContext";
import {useAuth} from "../../contexts/AuthContext"
import Strings from "../../resources/Strings";


const NoteList = () => {
    const {noteArray, deleteNotes, editNote, setNoteId} = useNote();
    const {currentUser} = useAuth();


    return (
        <>
            {noteArray ?
                <Grid container spacing={1}>
                    {noteArray.map((note) => (
                        <Grid item key={note.id} xs={12} sm={6} md={4}>
                            <Card >
                                <CardContent>
                                    <Typography
                                        gutterBottom variant="h4"
                                        component="div"
                                    >
                                        {note.name}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                    >
                                        {note.description}
                                    </Typography>
                                    <CardActions>
                                        <Button
                                            size="small"
                                            onClick={() => {
                                                editNote(note.id, note.name, note.description)
                                                setNoteId(note.id)
                                            }}
                                        >
                                            {Strings.notes.edit}
                                        </Button>
                                        <Button
                                            size="small"
                                            onClick={() => deleteNotes(note.id, currentUser.email)}
                                        >
                                            {Strings.notes.delete}
                                        </Button>
                                    </CardActions>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}

                </Grid>

                :
                <div>No notes yet</div>
            }
        </>
    )
}
export default NoteList;

