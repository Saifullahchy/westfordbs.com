import React from 'react'
import './elements.css'
import imageCareer from '../../assets/images/state1.jpg'

const CareerSection = () => {
    return (
        <div className="car-container">
            <div className="car-wrapper">
                <div className="car-content">
                    <h1 className="car-h1">We </h1>
                    <h1 className="car-h1">Need Your </h1>
                    <h1 className="car-h1"> Expertise!!</h1>
                    <button className="btn btn-danger">
                        Explore
                    </button>
                    <p className="car-text">

                Westford Immigration Services is an equal opportunity employer. We offer a dynamic learning environment for young aspiring professionals who loves challenges and enjoy client facing roles. If you feel you are the right fit for our team, send us your resume at westfordbd@gmail.com and our HR team will connect with you if shortlisted. 
                </p>
                </div>
                <div className="car-img">
                    <img src={imageCareer} alt="" className="car-img-s" />
                </div>
               
            </div>
            <div className="emp-section">
                <h2 className="car-text-black">Current vacancies</h2>
                <p className="car-text-b">
             <a href="" className="link">Customer Service Executive</a>   
                </p>
            </div>

             
        </div>
    )
}

export default CareerSection
