import viteLogo from '/vite.svg';

import './assets/CSS/main.css'
import DarkmodeSwitch from './Components/DarkmodeSwitch';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import Logotypes from './Components/Logotypes/Logotypes';
import AppFeatures from './Components/AppFeatures/AppFeatures';
import HowDoesItWork from './Components/HowDoesItWork/HowDoesItWork';
import DesktopOnly1 from './Components/DesktopOnly1/DesktopOnly1';
import DesktopOnly2 from './Components/DesktopOnly2/DesktopOnly2';
import Faqs from './Components/FAQs/Faqs';
import SubscribeInput from './Components/SubscribeInput/SubscribeInput';
import Footer from './Components/Footer/Footer';



function App() {
  return (
    <>
    
      <Header />

      <main>
        <Hero />
        <Logotypes />
        <AppFeatures />
        <HowDoesItWork />
        <DesktopOnly1 />
        <DesktopOnly2 />
        <Faqs />
        <SubscribeInput />
      </main>

      <Footer />
    
    </>
  )
}

export default App
