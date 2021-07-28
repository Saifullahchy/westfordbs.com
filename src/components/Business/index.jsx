import React from 'react'
import bImage from '../../assets/images/b.jpg'
import './elements.css'
const BusinessPage = () => {
    return (
        <div className="b-container">
            <div className="b-wrapper">
                <h1 className="b-title">Business immigration</h1>
                <img src={bImage} alt="" className="b-img" />
            </div>
        </div>
    )
}

export default BusinessPage
