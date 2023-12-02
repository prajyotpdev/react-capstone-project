
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { doc,setDoc } from "firebase/firestore";
import { AuthContext } from "./auth-context";
import { db } from "../services/Firebase";

function RequireAuth({ children }) {
  
  const { currentUser } = useContext(AuthContext)
  let location = useLocation()
  

  if (!currentUser) {
// Redirect the user to the home page.
    // Please! Close the mustache {{}}
    return <Navigate to="/react-capstone-project/" state={ { from: location } } replace />;
  }
  else{                    
  const userRef = doc(db, "users", currentUser?.uid);  
  // setUserRef(userRef); // Set userRef in the context
  setDoc(userRef, { capital: true }, { merge: true });
    console.log("user is present")
  }
  return children;
}

export default RequireAuth
                                   