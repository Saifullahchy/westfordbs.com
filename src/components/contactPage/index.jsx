import React,{ Component } from 'react'
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps'
import './contactElements.css'

function Map(){
    return (
      <GoogleMap  defaultZoom={10}
                defaultCenter={{lat:23.8103, lng:90.4125}}
                
      />
     
    )
}
const  WrappedMap = withScriptjs(withGoogleMap(Map))

 

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
                        <p className="con-text">House #28, Road # 07, Niketan,<br /> Gulshan – 1, Dhaka- 1212.</p>
                    </div>
              </div>
              <div className="cont-map" >
               <WrappedMap 
               googleMapURL={'https://maps.googleapis.com/maps/api/js?key=AIzaSyA8INND3dqYvxIvSHbqyH6fiQyQNr-5aWo&callback=initMap'}
               loadingElement={<div style={{ height: `100%` }} />}
               containerElement={<div style={{ height: `500px` }} />}
               mapElement={<div style={{ height: `100%` }} />}
                />
              </div>
          </div>
      </div>
    )
}

export default Contact