import React from 'react'
import image from '../../assets/images/about.jpg'
import './aboutElements.css'
import { Link } from 'react-router-dom'
const AboutPage = () => {
    return (
        <div className="ab-container">
            <div className="img-wrapper">
               <img src={image} alt="" className="ab-image" height='auto' width='500px'/></div> 
            <div className="content-wrapper">
                <h1 className="title">Meet a Professional</h1>
               
                <p className="ab-text">
               <span> Westford Immigration Services is led by Md Ashiqur Rahman</span> one of the only four active ICCRC members located in Bangladesh.
                Ashiq is a Regulated Canadian Immigration Consultant <span>(RCIC, R708023),</span> licensed and approved by Canadian Regulatory authority ICCRC to handle all kinds of immigration matters. He is also a member of Canadian Association of Professional Immigration Consultants (CAPIC). As an ex-employee of Fortune 500 companies like Amazon and Maersk Line, Ashiq is a seasoned professional with proven track records.
                </p>
                <h2 className="ab-title">His Area of expertise</h2>
                <ul className='list'>
                    <li className='list-item'> Express Entry</li>
                    <li className='list-item'>Study Permit</li>
                    <li className='list-item'>Work Permit</li>
                </ul>
                <ul className='list'>
                    <li className='list-item'>  Provincial Nomination program (PNP)</li>
                    <li className='list-item'>Business Migration</li>
                    <li className='list-item'>Family Sponsorship</li>
                </ul>
                
                <p className="ab-text">
                    <br />
              <span>  Ashiq </span>earned his prestigious MBA from the top business school of Bangladesh, Institute of Business Administration (IBA), University of Dhaka. He completed his Honors in Immigration Consultant program from the reputed CDI College, Ontario. He is also an alumnus of Notre Dame College and Khulna University, two of the most esteemed educational institutes of Bangladesh. 
                </p>
                <p className="ab-text">
               <span> One of Ashiq’s</span> most defining traits being his superior communication skill effortlessly sets him apart from the rest and helps him connect to clients with ease. With over 10 years of executive experience in multiple Fortune 500 companies, he is your solution for a stress-free immigration experience. Such extensive corporate exposure and subsequent entrepreneurial network gives him an added edge to meet the demands of Business Migration clients.
                </p>
                <p className="ab-text">
                Now he helps making people's dream of migration to Canada come true. 
                </p>
                <p className="ab-text">You can <span> contact </span>him on Facebook, LinkedIn, and also in person to consult any immigration queries.<span> Call +8801633661199</span> or <span>Whatsapp +14373889215</span> or <span>email at westfordbd@gmail.com </span>to book an appointment.</p>
                <div className="social-media-conatiner">
                 <Link><i class="icons fab fa-instagram"/></Link>
                 <Link><i class="icons fab fa-whatsapp"/></Link>
                 <Link><i class="icons fab fa-linkedin"/></Link>
                 <Link><i class="icons fab fa fa-mobile"/></Link>
            </div>
            </div>
          
        </div>
    )
}

export default AboutPage
