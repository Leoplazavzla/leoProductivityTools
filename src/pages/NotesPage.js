import React from "react"
import AddNote from "../components/Notes/AddNote"
import NoteList from "../components/Notes/NoteList"
import {NotesProvider} from "../contexts/NotesContext"
import BaseLayout from "../BaseLayout";

const Notes = () => {

    return(
            <BaseLayout>
                <NotesProvider>
                    <AddNote/>
                    <NoteList/>
                </NotesProvider>
            </BaseLayout>
    )
}
export default Notes;