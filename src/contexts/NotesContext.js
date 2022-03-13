import React, {useContext, useState, useEffect} from "react";
import {useAuth} from "./AuthContext"
import { doc, getDoc, setDoc, updateDoc, getDocs} from "firebase/firestore";
import {getDownloadURL, ref, uploadBytes} from "firebase/storage";
import {bucket} from "../firebase/firebaseConfig";
import db from "../firebase/firebaseConfig";

const NotesContext = React.createContext(1)

export function useNote() {
    return useContext(NotesContext)
}

export function NotesProvider({children}) {
    const {currentUser} = useAuth();


    const fakeData = [
        {id: 1, name: "first note", description:"This is the first note"},
        {id: 2, name: "Second note", description:"This is the second note"},
        {id: 3, name: "Third note", description:"This is the third note"}
    ];

    const [loading, setLoading] = useState(true);
    const [noteArray, setNoteArray] = useState(null);
    const [noteName, setNoteName] =  useState("");
    const [noteDescription, setNoteDescription] = useState("");
    const [currentId, setCurrentId] = useState("");
    const [isUpdating, setIsUpdating] = useState('');
    const [fileURL, setFileURL] = useState("");

    const deleteNotes = async (noteId, userEmail) => {
        const newNoteArray = noteArray.filter(
            (object) => object.id !== noteId
        );
        const docRef = doc(db, "notes", userEmail);
        await updateDoc(docRef, {notes: [...newNoteArray]});
        setNoteArray(newNoteArray)

    }

    const addNote = async (name, userEmail, description) => {
        const newNoteArray = [...noteArray, {id: + new Date() , name: name , description: description}]

        const docRef = doc(db, "notes", userEmail);
        await updateDoc(docRef, {notes: [...newNoteArray]})
        setNoteArray(newNoteArray)

    }

    const editNote = async (noteId, userEmail) => {
        setCurrentId(noteId)
        const docRef = doc(db, "notes", userEmail);
        await getDoc(docRef)
            .then((doc) => {
                const collectionItems = doc.data().notes
                collectionItems.map((col) => {
                    console.log(col.id)
                })
        })

    }

    const searchOrCreateDoc = async (email) => {
        const docRef = await doc(db, "notes", email);
        const docSnap = await getDoc(docRef);

        if(docSnap.exists()){
            const docData = docSnap.data();
            return docData.notes;
        }else{
            await setDoc(docRef, {notes: [...fakeData]})
            const docSnap = await getDoc(docRef);
            const docData = docSnap.data()
            return docData.notes;
        }
    }


    useEffect(() => {
        const fetchNotes = async() => {
            const fetchedNotes = await searchOrCreateDoc(currentUser.email)
            await setNoteArray(fetchedNotes)
            setLoading(false)
            return fetchedNotes

        }
        fetchNotes();


    }, [])



    const value = {
        noteArray,
        currentId,
        fileURL,
        noteName,
        setNoteName,
        noteDescription,
        setNoteDescription,
        deleteNotes,
        addNote,
        editNote,



    }

    return(
        <NotesContext.Provider value={value}>
            {!loading && children}
        </NotesContext.Provider>
    )
}

