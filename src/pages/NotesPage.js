import React, {useEffect} from "react"
import {Container} from "@material-ui/core"
import AddNote from "../components/Notes/AddNote"
import NoteList from "../components/Notes/NoteList"
import {NotesProvider} from "../contexts/NotesContext"

const Notes = () => {

    return(
            <Container>
                <NotesProvider>
                    <AddNote/>
                    <NoteList/>
                    {/*{pictureArray ? : <div>Could not find any pictures</div>}*/}
                </NotesProvider>
            </Container>
    )
}
export default Notes;