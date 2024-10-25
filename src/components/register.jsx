import { useContext } from "react";
import { AuthContext } from "./context";
import CommonForm from "./commonForm";
import { registrationInfo } from "./reginfo";
import { updateProfile } from "firebase/auth";
import { Navigate, useNavigate } from "react-router-dom";
import { auth } from "../firebaseconfig";

function RegisterPage() {
  const {regDetails,setRegDetails,regToFirebase,setLoading} = useContext(AuthContext);
  const navigate = useNavigate();
  function regHandleSubmit(event){  // this is for storing the user details in the database and also updating the user name form indefined to the original user name 
    event.preventDefault();
    regToFirebase().then(result => { // here we cann the function that will generate the user and store it in the DB
      if(result.user){
        updateProfile(result.user,{
          displayName : regDetails.name,  // updating the user name 
        }).then(()=>{
          if(auth.currentUser.displayName) { // if the user name is updated then we can go to the profile page
            setLoading(false);
            navigate("/profile");
        }
      })
      }
    }).catch(error => console.log(error));

  }

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100%",
      width: "100%",
      backgroundColor: "#f5f5f5ba",
      padding: "20px",
      color: "black",
    }}>
      <h3>Welcome To MY Authentication App</h3>
      <h3 style={{
        marginTop:"-5%"
      }}>Register Page</h3>
      <CommonForm formcontrols={registrationInfo} handleSubmit={regHandleSubmit} formDetails={regDetails} setFormDetails={setRegDetails} buttontext="submit"/>
    </div>
  );
}

export default RegisterPage;