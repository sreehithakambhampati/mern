
import './App.css'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router";
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Service } from './pages/Service';
import { Navbar } from './components/Navbar';
import { Error } from './pages/Error';
import { LogOut } from './pages/Logout';

function App() {
  

  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/service" element={<Service/>}/>
        <Route path="/logout" element={<LogOut/>}/>
        <Route path="*" element={<Error/>}/>
       </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
