import viteLogo from '/vite.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './assets/CSS/main.css'
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Components/Pages/Home';
import Contact from './Components/Pages/Contact';
import InformationsBox from './Components/FillForm/InformationsBox';
import FillForm from './Components/FillForm/FillForm';




function App() {
  return (
    <BrowserRouter>
        <Header />

        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Contact' element={<Contact />} />
            <Route path='/info' element={<InformationsBox />} />
          </Routes>
        </main>

        <Footer />
    </BrowserRouter>
  )
}

export default App
