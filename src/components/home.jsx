import { Box, Button, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate()
  return (
    <Stack spacing={2}>
      <Button variant="contained" onClick={()=>navigate('/register')} size="large"> Register </Button>
      <Button variant="contained" onClick={()=>navigate('/login')} size="large"> Login </Button>
    </Stack>
  );
}

export default Home;