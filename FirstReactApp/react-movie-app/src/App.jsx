import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LogIn from './components/auth/login/login'
import SignUp from './components/auth/signUp/SignUp'

function App() {
  return (
    <>
      <SignUp/>
      <LogIn/>
    </>
  )

    
  
}

export default App
