import { BrowserRouter } from "react-router-dom";

import {Contact, Profile, Achievement, Experience, Education, Hero, Navbar, Tech, Project, StarsCanvas, Content, Footer } from "./components";

const App = () => {
  return (
    <div>
    <BrowserRouter>
      <div className='relative z-0 dark-bright'>
        <div className='bg-center'>
          <Navbar />
          <Hero />
        </div>
        <Content />
        <Education />
        <Project />
        <Experience />
        <Achievement />
        <Profile/>
        <Tech />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
        <Footer/>
      </div>
    </BrowserRouter>
    </div>
  )
}

export default App
