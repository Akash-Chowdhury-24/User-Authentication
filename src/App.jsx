
import { Route, Routes } from 'react-router-dom'
import './App.css'
import LoginPage from './components/login'
import RegisterPage from './components/register'
import AuthPage from './components/private'
import ProfilePage from './components/profile'
import Home from './components/home'

function App() {


  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/register" element={<RegisterPage/>} />
        <Route path='/profile' element={
          <AuthPage>
            <ProfilePage/>
          </AuthPage>
        }/>
      </Routes>
    </div>

  )
}

export default App
