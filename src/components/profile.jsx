import { useContext } from "react";
import { AuthContext } from "./context";
import { Button } from "@mui/material";

function ProfilePage() {
  const {user,handleLogOut} = useContext(AuthContext);
  return (
    <div>
      <h3 style={{
        marginTop:"10px",
        color : "white"
      }}>{user?.displayName}</h3>
      <h3 style={{
        marginTop:"10px",
        color : "white"
      }}>{user?.email}</h3>
      <Button variant="contained" size="large" onClick={handleLogOut}>Log Out</Button>
    </div>
  );
}

export default ProfilePage;