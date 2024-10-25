import { useContext } from "react";
import { loginInfo } from "./logininfo";
import { AuthContext } from "./context";
import CommonForm from "./commonForm";
import { Navigate, useNavigate } from "react-router-dom";

function LoginPage() {

  const {loginDetails,setLoginDetails,loginWithFirebase,setLoading} = useContext(AuthContext);
  const navigate =useNavigate();
  function loginHandleSubmit(event){

    event.preventDefault();
    loginWithFirebase().then(result=>{
      if(result) {
        setLoading(false);
        navigate('/profile');
      }
    });
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
      <h3>Welcome Back</h3>
      <h3 style={{
        marginTop:"-5%"
      }}>Login Page</h3>
      <CommonForm formcontrols={loginInfo} handleSubmit={loginHandleSubmit} formDetails={loginDetails} setFormDetails={setLoginDetails} buttontext="login"/>
    </div>
  );
}

export default LoginPage;