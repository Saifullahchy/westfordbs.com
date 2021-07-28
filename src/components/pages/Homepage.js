import React from 'react'
import Booking from '../booking'
import Services from '../HomePageComponents/Service'
import HeroSlider from '../HomePageComponents/Slider/Slider'

const Homepage = () => {
    return (
        <>
            <HeroSlider/>
            <Services/>
            
            <Booking/>
        </>
    )
}

export default Homepage
