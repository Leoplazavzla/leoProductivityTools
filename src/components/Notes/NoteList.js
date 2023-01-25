import React from "react"
import {Card, CardContent, Typography, IconButton, CardHeader} from "@mui/material";
import {useNote} from "../../contexts/NotesContext";
import {useAuth} from "../../contexts/AuthContext"
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import {CopyToClipboard} from "react-copy-to-clipboard";
import Masonry from 'react-masonry-css'


const NoteList = () => {
    const {noteArray, deleteNotes, editNote, setNoteId, copyNoteContent} = useNote();
    const {currentUser} = useAuth();
    const breakpoints = {
        default: 3,
        1100: 2,
        700: 1
    }
    return (
        <>
            {noteArray ?
                <Masonry
                    breakpointCols={breakpoints}
                    className="my-masonry-grid"
                    columnClassName="my-masonry-grid_column"
                >
                    {noteArray.map((note, index) => {
                        const title = <Typography color={"secondary"} variant={"h5"}>{note.name}</Typography>
                        return(
                            <div key={index}>
                                <Card >
                                    <CardHeader
                                        color={"primary"}
                                        title={title}
                                        action={
                                            <>
                                                <IconButton
                                                    color={"primary"}
                                                    size="small"
                                                    onClick={() => {
                                                        editNote(note.id, note.name, note.description)
                                                        setNoteId(note.id)
                                                    }}
                                                >
                                                    <EditIcon/>
                                                </IconButton>

                                                <CopyToClipboard text= {note.description}>
                                                    <IconButton
                                                        color={"secondary"}
                                                        size="small"
                                                        onClick={() => {
                                                            copyNoteContent(true)
                                                        }}
                                                    >
                                                        <ContentCopyIcon/>
                                                    </IconButton>
                                                </CopyToClipboard>

                                                <IconButton
                                                    color={"error"}
                                                    size="small"
                                                    onClick={() => deleteNotes(note.id, currentUser.email)}
                                                >
                                                    <DeleteIcon/>
                                                </IconButton>
                                            </>
                                        }
                                    >
                                    </CardHeader>

                                    <CardContent>
                                        <Typography
                                            variant="body2"
                                            color="text.secondary"
                                        >
                                            {note.description}
                                        </Typography>
                                    </CardContent>

                                </Card>
                            </div>

                        )

                    })}

                </Masonry>
            :
                <div>No notes yet. Please add your first note</div>
            }


            {/*{noteArray ?
                <Grid container spacing={1}>
                    {noteArray.map((note) => {
                        const title = <Typography color={"secondary"} variant={"h5"}>{note.name}</Typography>
                        return (
                        <Grid item key={note.id} xs={12} sm={6} md={4}>
                            <Card >
                                <CardHeader
                                    color={"primary"}
                                    title={title}
                                    action={
                                    <>
                                        <IconButton
                                            color={"primary"}
                                            size="small"
                                            onClick={() => {
                                                editNote(note.id, note.name, note.description)
                                                setNoteId(note.id)
                                            }}
                                        >
                                            <EditIcon/>
                                        </IconButton>

                                        <CopyToClipboard text= {note.description}>
                                        <IconButton
                                            color={"secondary"}
                                            size="small"
                                            onClick={() => {
                                                copyNoteContent(true)
                                            }}
                                        >
                                            <ContentCopyIcon/>
                                        </IconButton>
                                        </CopyToClipboard>

                                        <IconButton
                                        color={"error"}
                                        size="small"
                                        onClick={() => deleteNotes(note.id, currentUser.email)}
                                        >
                                        <DeleteIcon/>
                                        </IconButton>
                                    </>
                                    }
                                    >

                                </CardHeader>
                                <CardContent>


                                        <Typography
                                            variant="body2"
                                            color="text.secondary"
                                        >
                                            {note.description}
                                        </Typography>


                                </CardContent>
                            </Card>
                        </Grid>
                        )})}

                </Grid>
                :
                <div>No notes yet. Please add your first note</div>
            }*/}
        </>
    )
}
export default NoteList;

