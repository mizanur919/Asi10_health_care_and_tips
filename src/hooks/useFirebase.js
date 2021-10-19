import { getAuth, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword , signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/Firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const auth = getAuth();
    const [isLoading, setIsLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();

    // Google Sign In
    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
            setIsLoading(false);
        })
    }, [])

    // Google LogOut
    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {})
            .finally(() => setIsLoading(false))
    }

    // Using Email and Password Login
    const emailAndPasswordLogin = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    return {
        user,
        signInUsingGoogle,
        logOut,
        isLoading,
        setIsLoading,
        emailAndPasswordLogin
    }
}

export default useFirebase;