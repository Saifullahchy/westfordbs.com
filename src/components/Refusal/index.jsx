import React from 'react'
import rusalImage from '../../assets/images/refusal.jpg'
import './elements.css'

const RefusalComponent = () => {
    return (
        <div className="r-container">
            <div className="r-wrapper">
                <h1 className="r-title">Refusal</h1>
                <img src={rusalImage} alt="" className="r-img" />
                <p className="r-text">
                If your application for study permit/ TRV got refused, we can assist! Contact us to learn more!
                </p>
                <h3 className="r-h3">What is Inadmissibility?</h3>
                <p className="r-text">Canada is one of the most open countries on the planet welcoming millions of tourists, visitors, immigrants, foreign workers, and students each year. At the same time, Canada ensures each foreign national passes its admissibility requirements before they are allowed to enter the country. One of the areas that Canada screens for is your criminal background.</p>
                <h5 className="r-h5">What is Criminal Inadmissibility in Canada?</h5>
                <p className="r-text">Criminal inadmissibility is when an individual is denied entry to Canada on grounds of criminality reasons. If you have committed an act outside Canada that is an offence in both the country in which it took place and in Canada, you could be denied entry.
                    <br /><br />
                    Here are some of the factors that may make you criminally inadmissible without ever having set foot in Canada:
                    <ul>
                        <li>If you were convicted in a foreign country of an act that Canadian law also recognizes as a criminal offence. You could be considered criminally inadmissible if Canada would consider your crime an “indictable offence,” which generally refers to a more serious crime. In the U.S. it is comparable to a felony.</li>
                        <li>If you have two non-indictable offences from separate acts, you may also be inadmissible. As the name suggests, these are less serious than indictable offences, and are generally comparable to misdemeanors in the U.S.</li>
                    </ul>
                    <br />
                    It is important to note that a conviction is not necessary for events that occurred outside of Canada to result in inadmissibility. In certain instances, an arrest or charge may result in questioning from Canadian border authorities.
                    <br /><br />
                    Although the foreign equivalent of a Canadian Criminal Code infraction is the most common cause of inadmissibility, an offence that equates to a violation of any Canadian federal law can also result in inadmissibility. If you have been determined to have committed an act in a foreign country that is both an offence in that country, and an indictable offence in Canada, you may also be criminally inadmissible. The same applies to two or more crimes that are summary offences in Canada. All that is required is credible evidence that you committed the act. This category is meant to catch individuals with unresolved criminal charges.
                 <br /><br />
                 <span>Temporary residents</span> and <span>applicants for permanent residency</span> can be deemed criminally inadmissible if they:
<br /><br />
                    <ul>
                        <li>Were convicted of an offence in Canada;</li>
                        <li>Were convicted of an offence outside of Canada that is a crime according to the laws of both that country and Canada; or</li>
                        <li>Committed a crime according to the laws of another country that would also be punishable in Canada.</li>
                    </ul>
                 <span>Keep in mind: </span>Foreign convictions, acts, and laws are compared to Canadian laws and standards when determining an individual’s criminal inadmissibility.
                
                <br /><br />
                If you have been found to be criminally inadmissible, or think you may be deemed inadmissible upon arrival, it is important to know that <span> you still have options.</span>
                <br /><br />
                The  Temporary Resident Permit (TRP) and Criminal Rehabilitation applications offer short and long-term solutions respectively to those found ineligible to enter due to the grounds of inadmissibility.
                <br /><br />
                If you are subject to inadmissibility, contact us to learn more about your chances!
                 </p>
            </div>
        </div>
    )
}

export default RefusalComponent
