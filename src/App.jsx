import React from "react"
import { Route, Routes } from "react-router-dom"
import Homepage from "./pages/Homepage"
import Header from "./components/Header"
import TopBar from './components/TopBar';
import Footer from "./components/Footer";

function App() {

  return (
   <div className="relative">
    <TopBar />
    <Header />
    <Routes>
    <Route path="/" element={<Homepage/>}/>
     
    </Routes>
    <Footer />
   </div>
  )
}

export default App
