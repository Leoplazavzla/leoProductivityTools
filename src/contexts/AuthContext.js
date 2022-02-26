import React, {useContext, useState, useEffect} from "react";
import {auth} from "../firebase/firebaseConfig";
import {createUserWithEmailAndPassword, onAuthStateChanged} from "firebase/auth/dist/index.mjs";

const AuthContext = React.createContext(1)

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({children}) {
    const [currentUser, setCurrentUser] = useState();

    const register = (auth, email, password) => {
        return createUserWithEmailAndPassword(auth,email, password)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setCurrentUser(currentUser)
        })
        return unsubscribe
    }, [])

    const value = {
        currentUser,
        register
    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}