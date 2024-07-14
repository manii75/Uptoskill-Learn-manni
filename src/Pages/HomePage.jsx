import React from 'react'
import Hero from '../components/Home/Hero'
import CardPallete from '../components/Home/CardPallete'
import CardPallete2 from '../components/Home/CardPallete2'
import Slider from '../components/Home/Slider'
import Plans from '../components/Home/Plans'
import Success from '../components/Home/Success'
import Award from '../components/Home/Award'
import Courses from '../components/Courses'

function HomePage() {
    return (
        <>
            <Hero />
            <Slider/>
            <CardPallete2 />
            <Plans/>
            <Success />
            <Award />
            <Courses />
        </>
    )
}

export default HomePage