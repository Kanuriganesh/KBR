import React from 'react'    
import {BrowserRouter as Router,Routes,Route}  from 'react-router-dom'   
import Navbar from "./components/Navbar"  
import ContactForm from './components/ContactForm'  
import Home from './pages/Home'  
import ServiceCard from './components/ServiceCard'  
import About from './components/About'     
import ServiceDetail from './components/ServiceDetail'    

function App() {
  return (
    <Router>
        <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/services" element={<ServiceDetail/>} /> 
          <Route path ="/contact" element={<ContactForm/>}/>            
          <Route path="/about" element={<About/>}/>    
        </Routes>
      </div>
    </Router>
  )
}
export default App