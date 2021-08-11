import React,{ Component } from 'react'
// import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps'
import './contactElements.css'

// function Map(){
//     return (
//       <GoogleMap  defaultZoom={20}
//                 defaultCenter={{lat:23.773201, lng:90.413347}}
                
//       />
     
//     )
// }
// const  WrappedMap = withScriptjs(withGoogleMap(Map))

 

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
               {/* <WrappedMap 
               googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyBrQ98WJ9ysUumIQIMczSR0BjbpyCB_6o8&v=3.exp&libraries=geometry,drawing,places`}
               loadingElement={<div style={{ height: `100%` }} />}
               containerElement={<div style={{ height: `500px` }} />}
               mapElement={<div style={{ height: `100%` }} />}
                />
              </div> */}
<div ><iframe width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=westford%20immigration+(Westford)&amp;t=&amp;z=19&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe></div>
          </div>
      </div>
      </div>
    )
}

export default Contact
