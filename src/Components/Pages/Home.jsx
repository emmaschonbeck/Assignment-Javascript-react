import React from 'react'

import Hero from '../../Components/Hero/Hero'
import Logotypes from '../../Components/Logotypes/Logotypes'
import AppFeatures from '../../Components/AppFeatures/AppFeatures'
import HowDoesItWork from '../../Components/HowDoesItWork/HowDoesItWork'
import DesktopOnly1 from '../../Components/DesktopOnly1/DesktopOnly1'
import DesktopOnly2 from '../../Components/DesktopOnly2/DesktopOnly2'
import Faqs from '../../Components/FAQs/Faqs'
import SubscribeInput from '../../Components/SubscribeInput/SubscribeInput'

const Home = () => {
  return (
    <>
        <Hero />
        <Logotypes />
        <AppFeatures />
        <HowDoesItWork />
        <DesktopOnly1 />
        <DesktopOnly2 />
        <Faqs />
        <SubscribeInput />
    </>
  )
}

export default Home