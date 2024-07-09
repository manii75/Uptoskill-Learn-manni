import React from 'react'
import Hero from '../components/Home/Hero'
import CardPallete from '../components/Home/CardPallete'
import CardPallete2 from '../components/Home/CardPallete2'
import Slider from '../components/Home/Slider'

function HomePage() {
    return (
        <>
            <Hero />
            <Slider/>
            <CardPallete />
            <CardPallete2 />
        </>
    )
}

export default HomePage