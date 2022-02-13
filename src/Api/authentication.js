import {signOut, signInWithEmailAndPassword} from "firebase/auth/dist/index.mjs";
import {auth} from "../firebase/firebaseConfig";


export const logOut = async () => {
    await signOut(auth)
    console.log(auth)
}

export const login = async (auth, email, password) => {
    try{
        const user = await signInWithEmailAndPassword(auth, email, password);
        console.log(user)
    }catch (error) {
        console.log(error);
    }
}