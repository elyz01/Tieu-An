import React from "react"
import { Route, Routes } from "react-router-dom"
import Homepage from "./pages/Homepage"
import Header from "./components/Header"
import TopBar from './components/TopBar';

function App() {

  return (
   <div className="relative">
    <TopBar />
    <Header />
    <Routes>
    <Route path="/" element={<Homepage/>}/>
     
    </Routes>
   </div>
  )
}

export default App
