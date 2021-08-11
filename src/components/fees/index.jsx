import React from 'react'
import feeImage from '../../assets/images/fees.jpg'
import './elements.css'

const FeePage = () => {
    return (
       <div className="fee-container">
           <div className="fee-wrapper">
               <h1 className="fee-title">Fees</h1>
               <img src={feeImage} alt="" className="fee-img" />
               <h3 className="fee-h3" > <br /> Honesty and transparency are the core foundation of our business. <br /> Unlike others, we don’t have any hidden fees or surcharges. <br /> <br />
                        All $ amounts are in USD
               </h3>

            
               <div className="fee-section">
                   <h5 className="fee-h5">Express Entry (FSW/FSTC/CEC): $4000 - $4500 </h5>
                   <p className="fee-text">
                   You need to send us your CV first, based on which initial assessment will be conducted. If your profile is acceptable-  <br /> <br />
                  <span> 1st Installment $400:</span> Initial Assessment (Initial Consultation & Assessment, Acceptance criteria details, NOC determination and  Skill match according to Canadian job market, Confirmation of acceptability and IELTS score requirements. (We only accept a handful amount of clients who meet the minimum acceptance criteria)
                   
                   </p>
                   <p className="fee-text">
                  <span> 2nd Installment $400:</span> (additional $500 applicable in case of PNP): Eligibility assessment against existing immigration programs and comprehensive report on eligibility against the programs, Preparation of Documents (Checklist for Expression of Interest whereas applicable, Completing immigration documents and skill assessment)

                   </p>
                   <p className="fee-text">
                  <span> 3rd Installment $1,200:</span> Preparation & Submission of Client Profile into the pool, Confirmation of CRS Score and job bank registration)
4th Installment $3,000:  Document preparation and submission after receiving Invitation to Apply
​	​    </p>
<p className="fee-text">
                  <span> 4th Installment $2,000:</span> Document preparation and submission after receiving Invitation to Apply
</p>
               <p className="fee-text">** Govt charges are separate from above which will be charged with 4th installment</p>    
               </div>
               <div className="fee-section">
               <h3 className="fee-h3">Review of Existing EE profile before submission: $650</h3>
               </div>
               <div className="fee-section">
                   <h3 className="fee-h3">
                   Study Permit starts from $960 (EXTRA for previous refusals)
                   </h3>
                   <p className="fee-text">
                        <span> 1st Installment $600:</span> At Engagement
                        <br />
                        <span>2nd Installment:</span> At File Submission for Study Permit
                   </p>
               </div>


               <div className="fee-section">
                   <h3 className="fee-h3">Super Visa starts from  $960 </h3>
                   <p className="fee-text">
                  <span> 1st Installment $600:</span> At Engagement (Initial Consultation, Eligibility review, Advise on required Documents and Information)
                    <br />
                   <span> 2nd Installment:</span> At File Submission
            </p>

               </div>
           
               <div className="fee-section">
                   <h3 className="fee-h3">LMIA starts from $2,800</h3>
                   <p className="fee-text">
                  <span> 1st Installment $2,000:</span> At Engagement 
                    <br />
                   <span> 2nd Installment:</span> At File Submission
            </p>

               </div>

               <div className="fee-section">
                   <h3 className="fee-h3">Work Permit starts from $960</h3>
                   <p className="fee-text">
                  <span> 1st Installment $600:</span> At Engagement 
                    <br />
                   <span> 2nd Installment:</span> At File Submission
            </p>

               </div>

               <div className="fee-section">
                   <h3 className="fee-h3">Parents and Grandparents sponsorship starts from $960
</h3>
                   <p className="fee-text">
                  <span> 1st Installment $600:</span> At Engagement (Initial Consultation, Eligibility review, Advise on required Documents & Information)

                    <br />
                   <span> 2nd Installment:</span> At File Submission
            </p>

               </div>


               <div className="fee-section">
                   <h3 className="fee-h3">
                   Citizenship starts from $800 
                   </h3>
                   <p className="fee-text">
                        <span> 1st Installment $550:</span> At Engagement
                        <br />
                        <span>2nd Installment:</span> At File Submission
                   </p>
               </div>

               <div className="fee-section">
                   <h3 className="fee-h3">
                   PR Card Renewal starts from $600
                   </h3>
                   <p className="fee-text">
                        <span> 1st Installment $400: </span> At Engagement
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
                   Access to Information and Privacy (ATIP) Request and Analysis: $200
                   </h3>
                  
               </div>

               <div className="fee-section">
                   <h3 className="fee-h3">
                   Visit Visa/Permit/Visa Extension/Change of Conditions starts from $960 (EXTRA for previous refusals)
                   </h3>
                   <p className="fee-text">
                        <span>1st Installment $600:  </span> At Engagement
                        <br />
                        <span>2nd Installment: </span> At File Submission
                   </p>
               </div>
           </div>
       </div>
    )
}

export default FeePage
