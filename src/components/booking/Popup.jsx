import React from 'react'
import './popup.css'
const Popup = (props) => {
    return (props.trigger) ? (
        <div className="popup">
             {/* <i className="fas fa-times" onClick= {()=> props.setTrigger(false)}/> */}
            <div className="popup-inner" onClick= {()=> props.setTrigger(false)}>
            
                <div className='popup-elements'  > {props.children}
                <button className="close" onClick= {()=> props.setTrigger(false)}>
                close</button></div>
            </div>
           
        </div>
    ) : "";
}

export default Popup
