import React from "react"
import { Route, Routes } from "react-router-dom"
import Homepage from "./pages/Homepage"
import Header from "./components/Header"

function App() {

  return (
   <div className="relative">
    <Header />
    <Routes>
    <Route path="/" element={<Homepage/>}/>
     
    </Routes>
   </div>
  )
}

export default App
