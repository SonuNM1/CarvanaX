
import React from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Category from './components/Category'
import MostSearchedCar from './components/MostSearchedCar'
import InfoSection from './components/InfoSection'
import Footer from './components/Footer'

const Home = () => {
  return (
    <div>

        {/* Header */}
        <Header/>

        {/* Hero */}
        <Hero/>

        {/* Category */}
        <Category/>

        {/* Most searched car */}
        <MostSearchedCar/>

        {/* info section */}
        <InfoSection/>

        {/* footer */}
        <Footer/>

    </div>
  )
}

export default Home
