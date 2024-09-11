import React from 'react'
import { Navbar } from './Components/Navbar/Navbar'
import { Hero } from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Showcase from './Components/Showcase/Showcase'


const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title 
          subTitle="Our Program"
          title="What We Offer"
        />
        <Programs />
        <About />
        <Title 
          subTitle="Showcase"
          title="Fitness in Action"
        />
        <Showcase />
      </div>
  
    </div>
  )
}

export default App