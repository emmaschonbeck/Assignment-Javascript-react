import viteLogo from '/vite.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './assets/CSS/main.css'
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Components/Pages/Home';
import Contact from './Components/Pages/Contact';




function App() {
  return (
    <BrowserRouter>
        <Header />

        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='Contact' element={<Contact />} />
          </Routes>
        </main>

        <Footer />
    </BrowserRouter>
  )
}

export default App
