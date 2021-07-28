import React,{useState} from 'react'
import './elements.css'
import Popup from './Popup'


const Booking = () => {  
const [buttonPopup, setButtonPopup] = useState(false);

    return (

        <div className="body-container">
           <div className='title'>
           <h1 className="b-h1">
               Explore <br />
                Your Options 
                in  Canada
           </h1>
           </div>
           
        <div className="price-wrapper-book">
            <div className="price-column">
            <div className="price-header">
                    <div className="price">
                        <div className="dollar-sign">MIN</div>20
                        <div className="per-month">CAD 60</div>
                    </div>
                   
                </div>
                <div className="divider">
                </div>
                <div className="feature">
                <div className="text">
                   <ul className='booking-col'>
                       <li className="list-booking">Need expert advice on complex immigration issues?</li>
                       <li className="list-booking">Confused if immigration is the right choice for you?</li>
                       <li className="list-booking">Need advice on what is the best way to make your dream of migration to Canada come true?</li>
                       
                   </ul>
                   <p className="text"><br /> Book an Appointment to discuss in details and find the solution for you.</p>
                    </div>
                </div>

                <div className="text-elemt">
                    <div className="feature">
                        <i className="fa fa-circle"></i>
                        <p className="text-fe">Virtual Meeting</p>
                    </div>
                    <div className="feature">
                        <i className="fa fa-circle"></i>
                        <p className="text-fe">20min</p>
                    </div>
                </div>

                <a href="https://calendly.com/westfordbd/experiment1et" className='booking-link'> <button className="read-button">  Book Now</button></a>
            </div>
          
         
            <div className="price-column popular">
                <div className="price-header">
                    <div className="price">
                        <div className="dollar-sign">MIN</div>40
                        <div className="per-month">CAD 100</div>
                    </div>
                    
                </div>
                <div className="divider"></div>
               
                <div className="booking-text popular">
                   <ul className='booking-col '>
                       <li className="list-booking">Need expert advice on complex immigration issues?</li>
                       <li className="list-booking">Confused if immigration is the right choice for you?</li>
                       <li className="list-booking">Need advice on what is the best way to make your dream of migration to Canada come true?</li>

                   </ul>
                   <p className="text"> <br /> Book an Appointment to discuss in details and find the solution for you.</p>
                    </div>
               

                <div className="text-elemt">
                    <div className="feature popular">
                        <i className="fa fa-circle"></i>
                        <p className="text-fe">Virtual Meeting</p>
                    </div>
                    <div className="feature popular">
                        <i className="fa fa-circle"></i>
                        <p className="text-fe">40min</p>
                    </div>
                </div>

                <a href="https://calendly.com/westfordbd/40-minutes-initial-consultation" className='booking-link pp'>  <button className="read-button popular">  Book Now</button></a>
            </div>
                

                <div className="price-column">
                
                <div className="price-header">
                    <div className="price">
                        <div className="dollar-sign">MIN</div>60
                        <div className="per-month">cad 125</div>
                    </div>
                    
                </div>
                <div className="divider"></div>
                <div className="feature">
                <div className="text">
                   <ul className='booking-col'>
                       <li className="list-booking">Need expert advice on complex immigration issues?</li>
                       <li className="list-booking">Confused if immigration is the right choice for you?</li>
                       <li className="list-booking">Need advice on what is the best way to make your dream of migration to Canada come true?</li>
                       
                   </ul>
                   <p className="text"> <br /> Book an Appointment  to discuss in details and find the solution for you.</p>
                    </div>
                </div>

                <div className="text-elemt">
                    <div className="feature">
                        <i className="fa fa-circle"></i>
                        <p className="text-fe">Virtual Meeting</p>
                    </div>
                    <div className="feature">
                        <i className="fa fa-circle"></i>
                        <p className="text-fe">60min</p>
                    </div>
                </div>

                <a href="https://calendly.com/westfordbd/60-minutes-initial-consultation" className='booking-link'>  <button className="read-button">  Book Now</button></a>
                </div>
        </div>
        <p className="b-text">

        </p>
        
        </div>
    )
}

export default Booking
