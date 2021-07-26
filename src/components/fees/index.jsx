import React from 'react'
import feeImage from '../../assets/images/fees.jpg'
import './elements.css'

const FeePage = () => {
    return (
       <div className="fee-container">
           <div className="fee-wrapper">
               <h1 className="fee-title">Fees</h1>
               <img src={feeImage} alt="" className="fee-img" />
               <h3 className="fee-h3">Honesty and transparency are the core foundation of our business. Unlike others, we don’t have any hidden fees or surcharges.</h3>

               <div className="fee-section">
                   <h5 className="fee-h5">Initial consultation: </h5>
                   <ul className='fee-list'>
                       <li>30 minutes- CAD 100</li>
                       <li>60 minutes- CAD 200</li>
                   </ul>
               </div>
               <div className="fee-section">
                   <h5 className="fee-h5">Express Entry (FSW/FSTC/CEC):  CAD 5,000 – 5,500 </h5>
                   <p className="fee-text">
                  <span> 1st Installment $500 :</span> Initial Assessment (Initial Consultation & Assessment, Acceptance criteria details, NOC determination and  Skill match according to Canadian job market, Confirmation of acceptability and IELTS score requirements. (We only accept a handful amount of clients who meet the minimum acceptance criteria)
                   
                   </p>
                   <p className="fee-text">
                  <span> 2nd Installment $500 :</span> (additional $500 applicable in case of PNP): Eligibility assessment against existing immigration programs and comprehensive report on eligibility against the programs, Preparation of Documents (Checklist for Expression of Interest whereas applicable, Completing immigration documents and skill assessment)

                   </p>
                   <p className="fee-text">
                  <span> 3rd Installment $1,000 :</span> Preparation & Submission of Client Profile into the pool, Confirmation of CRS Score and job bank registration)
4th Installment $3,000:  Document preparation and submission after receiving Invitation to Apply
​	​

                   </p>
                   
               </div>
               <div className="fee-section">
                      <h5 className="fee-h5"> Review of Existing EE profile before submission: CAD 800.00</h5>
               </div>
               <div className="fee-section">
                   <h3 className="fee-h3">Super Visa starts from CAD 1,200 </h3>
                   <p className="fee-text">
                  <span> 1st Installment $700:</span> At Engagement (Initial Consultation, Eligibility review, Advise on required Documents and Information
                    <br />
                   <span> Final Installment:</span> At File Submission
            </p>

               </div>

               <div className="fee-section">
                   <h3 className="fee-h3">
                   Citizenship starts from $999 
                   </h3>
                   <p className="fee-text">
                        <span> 1st Installment $700:</span> At Engagement
                        <br />
                        <span>2nd Installment:</span> At File Submission
                   </p>
               </div>

               <div className="fee-section">
                   <h3 className="fee-h3">
                   PR Card Renewal starts from $749
                   </h3>
                   <p className="fee-text">
                        <span> 1st Installment $500: </span> At Engagement
                        <br />
                        <span>2nd Installment: </span> At File Submission
                   </p>
               </div>

               <div className="fee-section">
                   <h3 className="fee-h3">
                   Replacement of Immigration Document $399
                   </h3>
                  
               </div>
               <div className="fee-section">
                   <h3 className="fee-h3">
                   Access to Information and Privacy (ATIP) Request and Analysis: $399
                   </h3>
                   <h5 className="fee-h5">Study Permit starts from $1,199 (LOA must be Available; EXTRA for previous refusals)
</h5>
                   <p className="fee-text">
                        <span> 1st Installment $700:  </span> At Engagement
                        <br />
                        <span>2nd Installment: </span> At File Submission for Study Permit
                   </p>
               </div>

               <div className="fee-section">
                   <h3 className="fee-h3">
                   Visit Visa/Permit/Visa Extension/Change of Conditions starts from $1,199 (EXTRA for previous refusals)
                   </h3>
                   <p className="fee-text">
                        <span>1st Installment $700: </span> At Engagement
                        <br />
                        <span>2nd Installment: </span> At File Submission
                   </p>
               </div>
           </div>
       </div>
    )
}

export default FeePage
