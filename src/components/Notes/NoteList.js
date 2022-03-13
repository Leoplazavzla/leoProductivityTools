import React from "react"
import {Container, Stack, TextField, Button, Grid } from "@mui/material";
import {TableBody, TableCell, TableHead, Table, TableRow} from "@material-ui/core";
import {useNote} from "../../contexts/NotesContext";
import {useAuth} from "../../contexts/AuthContext"
import Strings from "../../resources/Strings";


const NoteList = () => {
    const {noteArray, deleteNotes, editNote} = useNote();
    const {currentUser} = useAuth();

    return (
        <>
            <Container>
                {noteArray ?
                    <Table>
                        <TableBody>
                            {noteArray.map((noteObject) => {
                                return (
                                    <TableRow key={noteObject.id}>
                                        <TableCell>{noteObject.name}</TableCell>
                                        <TableCell>{noteObject.description}</TableCell>
                                        <TableCell>
                                            <Button
                                            onClick={() => editNote(noteObject.id, currentUser.email)}
                                        >
                                                {Strings.notes.edit}
                                            </Button>
                                        </TableCell>

                                        <TableCell>
                                            <Button
                                                onClick={() => deleteNotes(noteObject.id, currentUser.email)}
                                            >
                                                {Strings.notes.delete}
                                            </Button> </TableCell>
                                    </TableRow>
                                )
                            })}
                        </TableBody>

                    </Table>
                    :
                    <div>No notes yet</div>}




            </Container>
        </>
    )
}
export default NoteList;

