import React,{ Component } from 'react'
import './contactElements.css'



const Contact = () => {
    return (
      <div className="cont-container">
          <div className="cont-wrapper">
              <div className="infowrapper">
                    <h1 className="cont-h1">
                        Contact Us
                    </h1>
                    <div className="cont-el">
                        <i className="fa fa-mobile">
                        </i>
                        <p className="con-text">+8801633661199</p>
                    </div>
                    <div className="cont-el">
                        <i className="fa fa-whatsapp">
                        </i>
                        <p className="con-text">+14373889215</p>
                    </div>
                    <div className="cont-el">
                        <i className="fa fa-envelope-open-o">
                        </i>
                        <p className="con-text">westfordbd@gmail.com</p>
                    </div>
                    <div className="cont-el">
                        <i className="fa fa fa-map-pin">
                        </i>
                        <p className="con-text">House #28, Road # 07, Block C, Niketan,<br /> Gulshan – 1, Dhaka- 1212.</p>

                        <p className="con-text">Without appointment, NO in person visits are allowed. <br /> This is to comply with the Covid health safety rules.</p>
                    </div>
              </div>
              <div className="cont-map" >
               
<div ><iframe width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=westford%20immigration+(Westford)&amp;t=&amp;z=19&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe></div>
          </div>
      </div>
      </div>
    )
}

export default Contact
