import React from 'react'
import Navbar from './sections/Navbar'
import { Hero } from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'

const App = () => {
  return (
    <main className="w-5/6 mx-auto px-[5%] relative">
      <Navbar/>
      <Hero/>
      <About/>
      <Projects/>
    </main>
  )
}

export default App