import viteLogo from '/vite.svg';

import './assets/CSS/main.css'
import DarkmodeSwitch from './Components/DarkmodeSwitch';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';



function App() {
  return (
    <>
    
      <Header />

      <main>
        <Hero />

        {/* Innehåll i main */}
      </main>

      <footer />
    
    </>
  )
}

export default App
