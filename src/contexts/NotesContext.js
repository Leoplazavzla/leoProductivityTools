import React, {useContext, useState, useEffect} from "react";
import {useAuth} from "./AuthContext"
import { doc, addDoc, updateDoc, collection, getDocs, deleteDoc} from "firebase/firestore";
import db from "../firebase/firebaseConfig";
import * as NotificationToast from "../components/notifications/NotificationToast"
import Strings from "../resources/Strings";

const NotesContext = React.createContext(1)

export function useNote() {
    return useContext(NotesContext)
}

export function NotesProvider({children}) {
    const {currentUser} = useAuth();
    const [loading, setLoading] = useState(true);
    const [noteArray, setNoteArray] = useState(null);
    const [noteName, setNoteName] =  useState("");
    const [noteDescription, setNoteDescription] = useState("");
    const [editNoteName, setEditNoteName] = useState("");
    const [editNoteDescription, setEditNoteDescription] = useState("");
    const [isEditing, setIsEditing] = useState(false);
    const [noteId, setNoteId] = useState(false);

    const deleteNotes = async (noteId, userEmail) => {
        const noteToDelete = doc(db, userEmail, noteId)
        await deleteDoc(noteToDelete);
        NotificationToast.errorToast(Strings.notes.deleted)

        const filteredNoteArray = noteArray.filter((note)=>
            note.id !== noteId)
        setNoteArray(filteredNoteArray)
    }

    const editNote = async (noteId, name, description) => {
        setIsEditing(true)
        setEditNoteName(name)
        setEditNoteDescription(description)
        setNoteId(noteId)
    }

    const submitEditedNote = async (noteId, userEmail) => {
        const docToEdit = doc(db, userEmail, noteId)
        const newData = {name: editNoteName, description: editNoteDescription, id: noteId}
        await updateDoc(docToEdit, newData )
        NotificationToast.infoToast(Strings.notes.edited)
        setIsEditing(false)
        setNoteArray([newData])
    }

    const addNote = async (userEmail, name, description) => {
        const newNote = {name: name, description: description}
        const colRef = await collection(db, userEmail)
        const note = await addDoc(colRef, newNote);
        NotificationToast.successToast(Strings.notes.success)
        setNoteArray([
            ...noteArray,
            {...newNote, id: note.id}
        ])
    }

    const readDocs = async (userEmail) => {
        const notesDocRef = await collection(db, userEmail);
        const docSnap = await getDocs(notesDocRef);
        const newNoteArray = docSnap.docs.map((doc) => ({...doc.data(), id: doc.id}))
        return newNoteArray
    }

    useEffect(() => {

        const fetchNotes = async() => {
            const fetchedNotes = await readDocs(currentUser.email)
            await setNoteArray(fetchedNotes)
            setLoading(false)
            return fetchedNotes
        }
        fetchNotes().then(() => {});
    }, [])

    const value = {
        noteArray,
        setNoteArray,
        noteName,
        setNoteName,
        noteDescription,
        setNoteDescription,
        editNoteName, 
        setEditNoteName,
        editNoteDescription, 
        setEditNoteDescription,
        isEditing,
        setIsEditing,
        noteId,
        setNoteId,
        deleteNotes,
        addNote,
        editNote,
        submitEditedNote,
    }

    return(
        <NotesContext.Provider value={value}>
            {!loading && children}
        </NotesContext.Provider>
    )
}


