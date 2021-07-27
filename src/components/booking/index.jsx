import React,{useState} from 'react'
import './elements.css'
import Popup from './Popup'


const Booking = () => {  
const [buttonPopup, setButtonPopup] = useState(false);

    return (

        <div className="body-container">
        <div className="price-comparison">
            <div className="price-column">
                <div className="price-header">
                    <div className="price">
                        <div className="dollar-sign">MIN</div>20
                        <div className="per-month">$55</div>
                    </div>
                    <div className="plan-name">Basic</div>
                </div>
                <div className="divider">
                </div>
                <div className="feature">
                    <button className='read-button' onClick={() => setButtonPopup(true)}>Read More</button>
                    <Popup trigger={buttonPopup} setTrigger = {setButtonPopup}>
                        <h1 className="">This this basic plan</h1>
                        <p className="text">Md Ashiqur Rahman is a Regulated Canadian Immigration Consultant (License no. is R708023). His area of expertise include Economic and Business Migration, Provincial Nomination Programs, Study Permit, Work Permit, Family Sponsorship programs. 
This booking is for a consultation over the period of 20 minutes and will be as per the terms & conditions set out in the initial consultation agreement as listed on our website. 
We request you to provide as much details about the issue in discussion as possible. This enables us to be better prepared for the meeting and to provide you with prompt accurate solutions. There are almost 100 Canadian immigration programs. It is practically not possible for the consultant to be familiar and updated with all the requirements, criteria, changes and updates at all time. Similar applies for the regulatory requirements for different occupations for each provinces as this varies frequently and is a vast subject that needs detailed review. If need be, the consultant at his discretion may email you with follow up details as discussed during the conversation whereas necessary.
The consultation may be recorded for our record, reference, training and quality check. In case you do not want the consultation to be recorded, please let the consultant know at the very beginning of the session. By proceeding to book the call, you consent and agree for the call to be recorded.
We will not be able to review/assess profile or documents or NOC during the discussion call as that takes time and relevant resources. Should you desire as such, you may avail our specific services for the same.
</p>
                    </Popup>
                </div>
            </div>

            <div className="price-column popular">
                <div className="price-header">
                    <div className="price">
                        <div className="dollar-sign">MIN</div>40
                        <div className="per-month">$100</div>
                    </div>
                    <div className="plan-name">Professional</div>
                </div>
                <div className="divider"></div>
            </div>

            <div className="price-column">
                <div className="price-header">
                    <div className="price">
                        <div className="dollar-sign">MIN</div>60
                        <div className="per-month">$145</div>
                    </div>
                    <div className="plan-name">Enterprice</div>
                </div>
                <div className="divider"></div>
            </div>
        </div>
        </div>
    )
}

export default Booking
