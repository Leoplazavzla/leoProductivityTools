import React, {useContext, useState, useEffect} from "react";
import {useAuth} from "./AuthContext"
import { doc, getDoc, setDoc, addDoc, updateDoc, collection, getDocs, deleteDoc} from "firebase/firestore";
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
        {name: "Test Note", description:"This is a test note. Please delete it"}
    ]

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
    }

    const editNote = async (noteId, name, description) => {
        setIsEditing(true)
        setEditNoteName(name)
        setEditNoteDescription(description)
        setNoteId(noteId)

    }

    const submitEditedNote = async (noteId, userEmail) => {
        const docToEdit = doc(db, userEmail, noteId)
        const newData = {name: editNoteName, description: editNoteDescription}
        await updateDoc(docToEdit, newData )
        setIsEditing(false)

    }

    const addNote = async (userEmail, name, description) => {
        const newNote = {name: name, description: description}
        const docRef = collection(db, userEmail);
        await addDoc(docRef, newNote)
        setNoteArray([...noteArray, newNote])
    }

    const searchOrCreateDoc = async (userEmail) => {
        const notesDocRef = await collection(db, userEmail);
        const docSnap = await getDocs(notesDocRef);
        const newNoteArray = docSnap.docs.map((doc) => ({...doc.data(), id: doc.id}))
        if(docSnap){
            setNoteArray(newNoteArray)
            return newNoteArray
        }else{
            const newNote = fakeData
            console.log("i'm inside")
            const docRef = collection(db, userEmail);
            await setDoc(docRef, newNote)
            setNoteArray([newNote])
            return newNote
        }
    }

    useEffect(() => {

        const fetchNotes = async() => {
            const fetchedNotes = await searchOrCreateDoc(currentUser.email)
            //await setNoteArray(fetchedNotes)
            setLoading(false)

            return fetchedNotes
        }
        fetchNotes().then(() => {

        });


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

/*const searchOrCreateDoc = async (email) => {
        const docRef = await doc(db, "notes", email);
        const docSnap = await getDoc(docRef);

        if(docSnap.exists()){
            const docData = docSnap.data();
            return docData;
        }else{
            await setDoc(docRef, {name: "alarm1", date: new Date(), id: 5})
            const docSnap = await getDoc(docRef);
            const docData = docSnap.data()
            console.log(docData)
            return docData;
        }
    }*/

/*const editNote = async (noteId, userEmail) => {
       setCurrentId(noteId)
       setIsEditing(true)


       const docRef = doc(db, "notes", userEmail );
       const userDoc = await getDoc(docRef)
           .then((doc) => {
           const collectionItems = doc.data().notes
           collectionItems.map(async (colItem) => {
               console.log(typeof(colItem))
               if(noteId == colItem.id){
                   const currentItem = {id: colItem.id, name: colItem.name, description: colItem.description}
                   setEditNoteName(colItem.name)
                   setEditNoteDescription(colItem.description)
                   const updatedNote = {name: editNoteName, description: editNoteDescription};


               }
           })
       })

   }*/

