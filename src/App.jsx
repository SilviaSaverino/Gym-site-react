import React from 'react'
import { Navbar } from './Components/Navbar/Navbar'
import { Hero } from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Showcase from './Components/Showcase/Showcase'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact us/Contact'
import Footer from './Components/Footer/Footer'
import Video from './Components/Video/Video'


const App = () => {

const [showVideo, setShowVideo] = React.useState(false)

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
        <About setShowVideo={setShowVideo}/>
        <Title 
          subTitle="Showcase Gallery"
          title="Fitness in Action"
        />
        <Showcase />
        <Title 
          subTitle="Testimonials"
          title="What our gym members say"
        />
        <Testimonials />
        <Title 
          subTitle="Contact Us"
          title="Get in Touch"
        />
        <Contact />
        <Footer />
      </div>
      <Video showVideo={showVideo} setShowVideo={setShowVideo}/>
    </div>
  )
}

export default App