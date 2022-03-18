import React, {useEffect} from "react"
import {Container, Stack, TextField, Button, Grid } from "@mui/material";
import {TableBody, TableCell, TableHead, Table, TableRow} from "@material-ui/core";
import {useNote} from "../../contexts/NotesContext";
import {useAuth} from "../../contexts/AuthContext"
import Strings from "../../resources/Strings";


const NoteList = () => {
    const {noteArray, deleteNotes, editNote, setNoteId} = useNote();
    const {currentUser} = useAuth();

    useEffect(() => {
        //const newArray = Object.keys(noteArray)
        console.log(noteArray)
    }, [])



    return (
        <>
            <Container>
                {noteArray ?
                    <Table>
                        <TableBody>
                            {noteArray.map( (note) => (

                                <TableRow key={note.id}>
                                    <TableCell>{note.name}</TableCell>
                                    <TableCell>{note.description}</TableCell>
                                    <TableCell>
                                        <Button
                                            onClick={() => {
                                                editNote(note.id, note.name, note.description)
                                                setNoteId(note.id)
                                            }}
                                        >
                                            {Strings.notes.edit}
                                        </Button>
                                    </TableCell>

                                    <TableCell>
                                        <Button
                                            onClick={() => deleteNotes(note.id, currentUser.email)}
                                        >
                                            {Strings.notes.delete}
                                        </Button> </TableCell>
                                </TableRow>

                            )
                            )}
                    </TableBody>
                    </Table>
                    :
                    <div>No notes yet</div>
                }




            </Container>
        </>
    )
}
export default NoteList;

