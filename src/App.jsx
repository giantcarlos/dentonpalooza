import './App.css'
import { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Message from './Components/Message';
import Press from './Components/Press';
import Footer from './Components/Footer';
import Lenis from 'lenis'


function App() {

  useEffect( () => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
    requestAnimationFrame(raf)
  }

    requestAnimationFrame(raf)
  }, [])

  return (
    <BrowserRouter>
      <div>
        {/* <header>
          <NavBar />
        </header> */}
        <Message />
        <Press />
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
