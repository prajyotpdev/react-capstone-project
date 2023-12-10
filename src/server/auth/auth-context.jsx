import { useNavigate } from "react-router-dom";
import { SignOutUser,  userStateListener } from "../services/Firebase";
import { createContext, useState, useEffect } from "react";


export const AuthContext = createContext({
  currentUser: {} ,
  setCurrentUser: (_user) => {},
  signOut: () => {},  
  currentUserId: '' , 
});

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null)
  const navigate = useNavigate();

  
  useEffect(() => {
    

    const unsubscribe = userStateListener((user) => {
      if (user) {
        setCurrentUser(user)
      }
    });
    return unsubscribe
  }, [setCurrentUser]);

  const signOut = () => {
    SignOutUser()
    setCurrentUser(null)
    navigate('/')
  }

  const value = {
    currentUser, 
    setCurrentUser,   
    currentUserId: currentUser ? currentUser.uid : '',
    signOut, 
      }

 return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
