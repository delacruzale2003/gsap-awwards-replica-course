

import Navbar from './components/Navbar'
import HeroSection from './sections/HeroSection'
import { ScrollSmoother, ScrollTrigger } from 'gsap/all'
import gsap from 'gsap';
import MessageSection from './sections/MessageSection';
import FlavorSection from './sections/FlavorSection';
import { useGSAP } from '@gsap/react';
import _ScrollSmoother from 'gsap/ScrollSmoother';
import NutritionSection from './sections/NutritionSection';


gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

function App() {
  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 2,
      effects: true,
    })
  })

  return (

    <main>
      <Navbar />
      <div id="smooth-wrapper">
        <div id="smooth-content">

          <HeroSection />
          <MessageSection />
          <FlavorSection />
          <NutritionSection />
          
          
        </div>

      </div>
    </main>
  )
}

export default App
