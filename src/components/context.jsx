import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import{auth} from "../firebaseconfig";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
export const AuthContext = createContext(null);

const regintial = {
  name:'',
  email:'',
  password:'',
}
const logintial = {
  email:'',
  password:'',
}
function AuthState({children}) {
  const navigate = useNavigate();
  const [regDetails,setRegDetails] = useState(regintial);
  const [loginDetails,setLoginDetails] = useState(logintial);
  const [loading,setLoading] = useState(true);
  const [user,setUser] = useState(null); // this is where we will store the user details to check if the user is already authenticated or not i.e already logged in or registered 

  function regToFirebase(){  // for creating and storing the user in the DB , this will return a promise wiht the reesult 
    const {email,password} = regDetails;
    return createUserWithEmailAndPassword(auth,email,password);
  }

  function loginWithFirebase(){ // login page we will use this to see if the user is there in the data base only then allow them to login
    const {email,password} = loginDetails;
    return signInWithEmailAndPassword(auth,email,password);
  }
  function handleLogOut(){ // when the logout button is clicked on the profile page we logout and go to the login page and then if we try to go to the profile page we cannot since we are not logged in 
    return signOut(auth);
  }


  useEffect(()=>{  // to check on page load if the user is alreay authenticated or not 
    const checkAuth = onAuthStateChanged(auth,currentuser=>{
      setUser(currentuser);
      setLoading(false);
    })
    return ()=>{ // after every time we unmount then we unsubscribe 
      checkAuth();
    }
  },[])

  useEffect(()=>{
    if(user) navigate('/profile'); // on page load both for register and login if user already there then go the profile page  
  },[user])
  console.log(user);

  if (loading) return <h1>Loading plzz wait</h1>
  return (
    <AuthContext.Provider value={{regDetails,setRegDetails,regToFirebase,user,loading,loginDetails,setLoginDetails,loginWithFirebase,handleLogOut,setLoading}}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthState;