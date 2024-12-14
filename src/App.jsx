import { BrowserRouter } from "react-router";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Link } from 'react-router-dom';
import Navbar2 from './Component/Navbar/Navbar';
import Footer from './Component/Footer/Footer';
import HomePage from './Pages/HomePage/HomePage';

import './App.css'

function App() {
  
  return (
    <>

<Navbar2/>
        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>
        <Footer/>
    
     
    </>
  )
}

export default App
