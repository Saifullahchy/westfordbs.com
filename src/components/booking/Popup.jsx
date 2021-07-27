import React from 'react'
import './popup.css'
const Popup = (props) => {
    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
            <button className="close" onClick= {()=> props.setTrigger(false)}>
                    <i className="fas fa-times"></i>
                </button>
                <div className='popup-elements'> {props.children}</div>
                
               
            </div>
           
        </div>
    ) : "";
}

export default Popup
