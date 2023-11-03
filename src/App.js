import React, { useState } from 'react'
import './app.css'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Live from './Components/Live/Live'
import About from './Components/About/About'
import More from './Components/More/More'
import Footer from './Components/Footer/Footer'

function App () {

    return (
        <>
        <Navbar/>
        <Home/>
        <Live/>
        <About/>
        <More/>
        <Footer/> 
        </>
    )
}

export default App;