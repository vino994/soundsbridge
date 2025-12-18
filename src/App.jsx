import { useState } from 'react'

import './App.css'
import HomePage from "./components/HomePage.jsx";
import AboutSection from './components/AboutSection.jsx';
import ShopByCategory from './components/ShopByCategory.jsx';
import FreeTrial from './components/FreeTrial.jsx';
import OurServices from './components/OurServices.jsx';
import Footer from './components/Footer.jsx';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <HomePage />
     <AboutSection />
     <ShopByCategory />
     <FreeTrial />
     <OurServices />
     <Footer />
    </>
  )
}

export default App
