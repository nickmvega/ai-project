import React from 'react'
import Example from './components/home-page/Example.jsx'
import Hero from './components/home-page/Hero.jsx'
import Navbar from './components/Navbar.jsx'

export default function App() {
    return (
        <div>
            <Navbar />
            <Hero />
            <Example />
        </div>
    )
}