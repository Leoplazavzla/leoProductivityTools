import React, {useContext, useState, useEffect} from "react";
import {useAuth} from "./AuthContext"
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import {getDownloadURL, ref, uploadBytes} from "firebase/storage";
import {bucket} from "../firebase/firebaseConfig";
import db from "../firebase/firebaseConfig";

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
    const [fileURL, setFileURL] = useState("");

    const deletePictures = async (pictureId, userEmail) => {
        const newPictureArray = pictureArray.filter(
            (object) => object.id !== pictureId
        );
        const docRef = doc(db, "users", userEmail);
        await updateDoc(docRef, {picture: [...newPictureArray]});
        setPictureArray(newPictureArray)

    }

    const addPicture = async (name, userEmail) => {
        const newPictureArray = [...pictureArray, {id: + new Date() , name: name , url: "https://picsum.photos/420"}]

        const docRef = doc(db, "users", userEmail);
        await updateDoc(docRef, {picture: [...newPictureArray]})
        setPictureArray(newPictureArray)

    }

    const uploadPicture = async (file) => {
        const localFile = file;
        const fileRef = ref(bucket, `documents/S(localFile.name)`);

        await uploadBytes(fileRef, localFile);
        const DownloadUrl = await getDownloadURL(fileRef)
        setFileURL(DownloadUrl)


    }

    const searchOrCreateDoc = async (email) => {
        const docRef = await doc(db, "users", email);
        const docSnap = await getDoc(docRef);

        if(docSnap.exists()){
            const docData = docSnap.data();
            return docData.picture;
        }else{
            await setDoc(docRef, {picture: [...fakeData]})
            const docSnap = await getDoc(docRef);
            const docData = docSnap.data()
            return docData.picture;
        }
    }


    useEffect(() => {
        const fetchPictures = async() => {
            const fetchedPictures = await searchOrCreateDoc(currentUser.email)
            await setPictureArray(fetchedPictures)
            setLoading(false)
            return fetchedPictures
        }
        fetchPictures();

    }, [])


    const value = {
        pictureArray,
        deletePictures,
        addPicture,
        fileURL,
        uploadPicture
    }

    return(
        <PicturesContext.Provider value={value}>
            {!loading && children}
        </PicturesContext.Provider>
    )
}

