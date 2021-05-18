import React, { useContext, useEffect, useState } from 'react'
import { auth } from '../firebase'
const AuthContex = React.createContext()
export function useAuth() {
    return useContext(AuthContex)
}
export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState();
    function SignUp(email, password) {
        console.log("sign up");
        return auth.createUserWithEmailAndPassword(email, password)
    }
    useEffect(() => {
        const unsubcrible = auth.onAuthStateChanged(user => {
            console.log('userChange', user);
            setCurrentUser(user)
        })
        return unsubcrible
    }, [])

    const value = {
        currentUser,
        SignUp
    }
    return <AuthContex.Provider value={value}>
        {children}
    </AuthContex.Provider>

}
