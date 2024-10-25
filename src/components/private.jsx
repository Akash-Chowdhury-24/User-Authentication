import { useContext } from "react";
import ProfilePage from "./profile";
import { AuthContext } from "./context";
import { Navigate } from "react-router-dom";

function AuthPage({children}) { // in the app page the AuthPage is getting Profile page as a children 
  
  const{user,loading} = useContext(AuthContext);
  if(loading) return <h1>Loading plzz wait</h1>
  if(user) return children    // since its recieving Profilepage as children so just return that  
  return <Navigate to={'/login'}/> // if user not there or the user is logged out go to login page
}

export default AuthPage;