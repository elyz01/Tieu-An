import React from "react"
import { Route, Routes } from "react-router-dom"
import Homepage from "./pages/Homepage"
import Header from "./components/Header"
import TopBar from './components/TopBar';
import Footer from "./components/Footer";
import Minh from "./pages/Minh";
import An from "./pages/An";
import Tieu from "./pages/Tieu";
import NavigationBar from './components/NavigationBar';

function App() {

  return (
   <div className="relative">
    <TopBar />
    {/* <NavigationBar /> */}
    <Header />
    <Routes>
    <Route path="/" element={<Homepage/>}/>
    <Route path="/Elyz" element={<Minh/>}/>
    <Route path="/Meomeo" element={<Tieu/>}/>
    <Route path="/Shu" element={<An/>}/>
     
    </Routes>
   
   </div>
  )
}

export default App
