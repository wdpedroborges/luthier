import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Skeleton from '@mui/material/Skeleton'

import Index from './Index'
import About from './About'
import Contact from './Contact'
import Navbar from './Navbar'
import Footer from './Footer'

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // altera o estado do componente para false quando a página termina de carregar
    window.addEventListener("load", () => setIsLoading(false));

    // const timer = setTimeout(() => setIsLoading(false), 10000);
    
    // return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {
        isLoading ? (
          <div>
            <div style={{ marginTop: '1rem', display: "flex", justifyContent: "space-around" }}>
              <Skeleton variant="rectangular" width='45%' height='30vh' />
              <Skeleton variant="rectangular" width='45%' height='30vh' />
            </div>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <Skeleton width="45%" height='20vh'/>
              <Skeleton width="45%" height='20vh'/>
            </div>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <Skeleton variant="rectangular" width='45%' height='30vh' />
              <Skeleton variant="rectangular" width='45%' height='30vh' />
            </div>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <Skeleton width="45%" height='15vh'/>
              <Skeleton width="45%" height='15vh'/>
            </div>
          </div>
        ) : (
        <Router>
          <Navbar/>

            <Routes>
              <Route path="/" element={<Index />}/>
              <Route path="/about" element={<About />}/>
              <Route path="/contact" element={<Contact />}/>
            </Routes>

          <Footer/>
        </Router>
        )
      }
    </>
  )
}

export default App