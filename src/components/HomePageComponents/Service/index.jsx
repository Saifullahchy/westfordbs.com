import React from 'react'
import Icon1 from '../../../assets/services/1.svg'
import Icon2 from '../../../assets/services/2.svg'
import Icon3 from '../../../assets/services/3.svg'
import Icon4 from '../../../assets/services/4.svg'
import Icon5 from '../../../assets/services/5.svg'
import Icon6 from '../../../assets/services/6.svg'
import { ServicesContainer,
         ServicesH1,
        ServicesH2,
        ServicesP,
        ServicesCard,
        ServicesIcon,
        ServicesWrapper } from './ServiceElements'

const Services = () => {
    return (
        <ServicesContainer id="services"> 
            <ServicesH1> OUR SERVICES</ServicesH1>
                <ServicesWrapper>
                    <ServicesCard>
                        <ServicesIcon src= {Icon1}/>
                        <ServicesH2>Immigrate to Canada</ServicesH2>
                        <ServicesP>Details on how to make your dream of moving to Canada come true. More than 100 programs to choose from.
                        </ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src= {Icon2}/>
                        <ServicesH2>Study Permit</ServicesH2>
                        <ServicesP>Study in Canada to increase your chances of immigratingas a skilled worker.

                        </ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src= {Icon3}/>
                        <ServicesH2>Business Migration</ServicesH2>
                        <ServicesP>Explore investment and business opportunities in one of the world's most freeand stable economies.
                        </ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src= {Icon4}/>
                        <ServicesH2>Family Sponsorship</ServicesH2>
                        <ServicesP>Explore investment and business opportunities in one of the world's most freeand stable economies.
                        </ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src= {Icon5}/>
                        <ServicesH2>Canadian Work Permits</ServicesH2>
                        <ServicesP>Find out if you need a Canadian temporarywork permit to work in Canada and how toobtain one.
                        </ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src= {Icon6}/>
                        <ServicesH2>Refusal, Appeals and Inadmissibility</ServicesH2>
                        <ServicesP>Get the right advise on how to address Refusal & Inadmissibility

                        </ServicesP>
                    </ServicesCard>
                </ServicesWrapper>
           
        </ServicesContainer>
    )
}

export default Services
