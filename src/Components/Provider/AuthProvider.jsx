import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import PropTypes from 'prop-types'
import { createContext, useEffect, useState } from 'react'
import app from "../Firebase/Firebase.config";

export const AuthContext=createContext()
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user , setUser]=useState(null)
    const [loading,setLoading]=useState(true)

    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signIn=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logOut=()=>{
        setLoading(true)
        return signOut(auth)
    }

    useEffect(()=>{
        const unSubscriber=onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser)
            console.log('current   User',currentUser)
            setLoading(false)
        })
        return ()=>{
            return unSubscriber()
        }
    },[])

    const authInfo={
        user,
        loading,
        createUser,
        signIn,
        logOut
    }
  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}

AuthProvider.propTypes = {
    children:PropTypes.object
}

export default AuthProvider