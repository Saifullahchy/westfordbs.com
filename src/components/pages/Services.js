import React from 'react'

import InfoSection from '../ServicePage/servicesInfo'
import { homeObjFive, homeObjFour, homeObjOne, homeObjSix, homeObjThree, homeObjTwo } from '../ServicePage/servicesInfo/data'

const Services = () => {
    return (
        <>
        <InfoSection  {...homeObjOne}/>
        <InfoSection  {...homeObjTwo}/>
        <InfoSection  {...homeObjThree}/>
        <InfoSection  {...homeObjFour}/>
        <InfoSection  {...homeObjFive}/>
        <InfoSection  {...homeObjSix}/>
    </>
    )
}

export default Services
