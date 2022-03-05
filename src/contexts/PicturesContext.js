import React, {useContext, useState, useEffect} from "react";
import {useAuth} from "./AuthContext"
import { doc, getDoc, setDoc } from "firebase/firestore/lite";
import db from "../firebase/firebaseConfig"


const PicturesContext = React.createContext(1)


export function usePicture() {
    return useContext(PicturesContext)
}

export function PicturesProvider({children}) {
    const {currentUser} = useAuth();

    const fakeData = [
        {id: 1, name: "first picture", url:"https://picsum.photos/420"},
        {id: 2, name: "Second picture", url:"https://picsum.photos/420"},
        {id: 3, name: "Third picture", url:"https://picsum.photos/420"}
    ];

    const [loading, setLoading] = useState(true);
    const [pictureArray, setPictureArray] = useState(null);

    const searchOrCreateDoc = async () => {
        const docRef = await doc(db, "users", currentUser.email);
        const consult = await getDoc(docRef);


        if(consult.exists()){
            const docData = consult.data()
            return docData.picture
        }else{
            await setDoc(doc(db, "users", currentUser.email), {picture: [...fakeData]})
            const consult = await getDoc(docRef);
            const docData = consult.data()
            return docData.picture
        }
    }


    useEffect(() => {
        const fetchPictures = async() => {
            const fetchedPictures = await searchOrCreateDoc()
            setPictureArray(fetchedPictures);
            console.log("pictureArray is: ", pictureArray)
            setLoading(false)
        }
        fetchPictures().then(() => {
            console.log("error")
        });

    }, [])



    const value = {
        pictureArray,

    }

    return(
        <PicturesContext.Provider value={value}>
            {!loading && children}
        </PicturesContext.Provider>
    )
}

