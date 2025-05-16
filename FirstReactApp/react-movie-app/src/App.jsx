// import { useState } from 'react'

// import './App.css'
// import LogIn from './components/auth/login/login'
// import SignUp from './components/auth/signUp/SignUp'

import router from "./router/routes.jsx"
import {RouterProvider} from "react-router"

function App() {
  return (
    <>
    <RouterProvider router={router}></RouterProvider>
    {/* <RouterProvider router={router}/> this is the same as the above line */}
      {/* <SignUp/>
      <LogIn/> */}
    </>
  )

    
  
}

export default App
