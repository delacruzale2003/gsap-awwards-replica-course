import { useState } from 'react'

import Navbar from './components/Navbar'
import HeroSection from './sections/HeroSection'
import { ScrollTrigger } from 'gsap/all'
import gsap from 'gsap';
import MessageSection from './sections/MessageSection';


gsap.registerPlugin(ScrollTrigger);

function App() {
  

  return (
    
    <main>
      <Navbar/>
      <HeroSection />
      <MessageSection />
      <div className="h-dvh border border-red-500">
        
      </div>
    </main>
  )
}

export default App
