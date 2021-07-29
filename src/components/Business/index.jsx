import React from 'react'
import bImage from '../../assets/images/b.jpg'
import './elements.css'
const BusinessPage = () => {
    return (
        <div className="b-container">
            <div className="b-wrapper">
                <h1 className="b-title">Business Immigration</h1>
                <img src={bImage} alt="" className="b-img" />
                <h2 className="b-h2">
                Business Immigration to Canada: An Introduction
                </h2>
                <p className="b-text">
                Through Canada's Business Class immigration programs, Canada aims to attract individuals that have a significant ability to contribute to the Canadian economy. These programs are offered with the goal of promoting economic development and bettering the job market by attracting investors, entrepreneurs, and self-employed individuals from outside Canada with available venture capital, significant business acumen, and entrepreneurial skills.
                Business Class immigration also seeks to develop new commercial opportunities in Canada and to improve Canada's access to growing foreign markets by welcoming foreign nationals who are familiar with those markets and their unique requirements and customs.
                If this option sounds well-suited to your experience and goals, there are several immigration pathways from which to choose. Depending on where you plan to reside, you may choose to apply through one of the programs offered by a particular province or by the federal government. 
                <br /><br />
                    <ul>
                        <li>Provincial Nomination </li>
                        <p className="b-text">Depending upon the Province, a number of immigration programs may be available for those looking to operate a business in that province</p>
                        <li>Entrepreneur Start-Up Visas</li>
                        <p className="b-text">With funding and support from a designated Canadian investment organization, individuals with a plan for a unique business may be able to acquire this visa.</p>
                        <li>Self-Employed Immigration</li>
                        <p className="b-text">These programs allow self-employed individuals with significant experience in certain trades and professions to make an application for Canadian immigration.</p>
                    </ul>
                </p>

                {/* section -1*/}
                <div className="b-table">
                    <h3 className="b-h3">Ontario Immigrant Nominee Program (OINP) — Entrepreneur Stream</h3>
                    <table className="b-t-section">
                         <tr>
                             <th className='b-t-head'>Program</th>
                            <th>
                            Ontario Immigrant Nominee Program (OINP) <br />
        — <br /> Entrepreneur Stream
                            </th>
                         </tr>
                         <tr>
                             <td>Minimum Net Worth</td>
                             <td>For businesses in the Greater Toronto Area (GTA): CAD $800,000 OR for businesses outside the GTA: CAD $400,000 OR for businesses in the ICT/Digital Communications sector (regardless of location): CAD $</td>
                         </tr>

                         <tr>
                             <td>Experience</td>
                             <td>
At least 24 months of full-time business experience in the last five years as business owner or senior manager</td>
                         </tr>

                         <tr>
                             <td>EOI System</td>
                             <td>Yes (province publishes info on previous draws)</td>
                         </tr>

                         <tr>
                             <td>Managerial Role</td>
                             <td>Required</td>
                         </tr>

                         <tr>
                             <td>Business Plan</td>
                             <td>Required</td>
                         </tr>

                         <tr>
                             <td>Exploratory Visit</td>
                             <td>Required for business succession only</td>
                         </tr>

                         <tr>
                             <td>Interview</td>
                             <td>Required upon request of OINP</td>
                         </tr>

                         <tr>
                             <td>Refundable Deposit</td>
                             <td>Not required</td>
                         </tr>

                         <tr>
                             <td>PR/Work permit</td>
                             <td>
                                    Temporary work permit; PR contingent on meeting program requirements</td>
                         </tr>
                         <tr>
                             <td>Additional Requirements</td>
                             <td>
                              
Sign a Performance Agreement with Ontario
English/French minimum CLB 4
Create at least 2 permanent, full-time jobs for a Canadian citizen or a permanent resident

</td>
                         </tr>
                    </table>
                </div>

                   {/* section -1*/}
                   <div className="b-table">
                    <h3 className="b-h3">Alberta Self-Employed Farmer Stream</h3>
                    <table className="b-t-section">
                         <tr>
                             <th className='b-t-head'>Program</th>
                            <th>
                            Alberta Self-Employed Farmer Stream
                            </th>
                         </tr>
                         <tr>
                             <td>Minimum Net Worth</td>
                             <td>CAD $500,000</td>
                         </tr>

                         <tr>
                             <td>Minimum Investment</td>
                             <td>
                             CAD $500,000 in a primary production farming business</td>
                         </tr>
                         <tr>
                             <td>Experience</td>
                             <td> Farm management experience in an existing farm business</td>
                         </tr>
                         <tr>
                             <td>EOI System</td>
                             <td>NO</td>
                         </tr>

                         <tr>
                             <td>Managerial Role</td>
                             <td>Required</td>
                         </tr>

                         <tr>
                             <td>Business Plan</td>
                             <td>Required</td>
                         </tr>

                         <tr>
                             <td>Exploratory Visit</td>
                             <td>Recommended</td>
                         </tr>

                         <tr>
                             <td>Interview</td>
                             <td>Required</td>
                         </tr>

                         <tr>
                             <td>Refundable Deposit</td>
                             <td>Not required</td>
                         </tr>

                         <tr>
                             <td>PR/Work permit</td>
                             <td>PR after obtaining provincial nomination certificate</td>
                         </tr>
                         <tr>
                             <td>Additional Requirements</td>
                             <td>
                              
                             Canadian financial institutions must finance the proposed Alberta farming business
</td>
                         </tr>
                    </table>
                </div>


                          {/* section -1*/}
                          <div className="b-table">
                    <h3 className="b-h3">British Columbia Provincial Nominee Program (BC PNP) — Entrepreneur Immigration Stream</h3>
                    <table className="b-t-section">
                         <tr>
                             <th className='b-t-head'>Program</th>
                            <th>
                            BC PNP Entrepreneur Immigration
                            </th>
                         </tr>
                         <tr>
                             <td>Minimum Net Worth</td>
                             <td>CAD $600,000</td>
                         </tr>

                         <tr>
                             <td>Minimum Investment</td>
                             <td>
                             CAD $200,000 OR CAD $400,000 if proposing a Key Staff Member</td>
                         </tr>
                         <tr>
                             <td>Experience</td>
                             <td> 
3 + years of business ownership or management experience OR 4 + years of senior management experience OR 1+ year of business ownership & management experience and 2+ years of senior management experience within the last 10 years.

</td>
                         </tr>
                         <tr>
                             <td>EOI System</td>
                             <td>Yes (province publishes info on previous draws)</td>
                         </tr>

                         <tr>
                             <td>Managerial Role</td>
                             <td>Required</td>
                         </tr>

                         <tr>
                             <td>Business Plan</td>
                             <td>Required</td>
                         </tr>

                         <tr>
                             <td>Exploratory Visit</td>
                             <td>Recommended</td>
                         </tr>

                         <tr>
                             <td>Interview</td>
                             <td>Upon request of BC PNP</td>
                         </tr>

                         <tr>
                             <td>Refundable Deposit</td>
                             <td>Not required</td>
                         </tr>

                         <tr>
                             <td>PR/Work permit</td>
                             <td>
PR/Work permit
2-year work period before Letter of Acceptance to apply for Permanent Residence (PR); PR contingent on implementation of the business proposal

</td>
                         </tr>
                         <tr>
                             <td>Additional Requirements</td>
                             <td>                           
                             Create at least one permanent, full-time job for a Canadian citizen or permanent resident with the prop</td>
                         </tr>
                    </table>
                </div>


                 {/* section -1*/}
                 <div className="b-table">
                    <h3 className="b-h3">Manitoba Provincial Nominee Program — Business Investor Stream (Entrepreneur Pathway)</h3>
                    <table className="b-t-section">
                         <tr>
                             <th className='b-t-head'>Program</th>
                            <th>
                            Manitoba Business Investor Stream — Entrepreneur Pathway
                            </th>
                         </tr>
                         <tr>
                             <td>Minimum Net Worth</td>
                             <td>CAD $500,000</td>
                         </tr>

                         <tr>
                             <td>Minimum Investment</td>
                             <td>
                             CAD $250,000 for businesses in the Manitoba Capital Region. OR CAD $150,000 if a business is outside of the Manitoba Capital Region AND must be made in an eligible business AND must create or maintain at least one job for a Canadian citizen or a Permanent Resident in Manitoba (excluding owners of the business and/or their close relatives).</td>
                         </tr>
                         <tr>
                             <td>Experience</td>
                             <td> 
                             Business ownership and management experience or executive-level experience in 3 of the past 5 years. AND Business owners are given higher points in comparison to senior managers. AND Business owners must have at least 33 1/3% ownership to qualify for points.</td>
                         </tr>
                         <tr>
                             <td>EOI System</td>
                             <td>Yes</td>
                         </tr>

                         <tr>
                             <td>Managerial Role</td>
                             <td>Required</td>
                         </tr>

                         <tr>
                             <td>Business Plan</td>
                             <td>Required</td>
                         </tr>

                         <tr>
                             <td>Exploratory Visit</td>
                             <td>Business research visits must be conducted no more than one year prior to the submission of an EOI.</td>
                         </tr>

                         <tr>
                             <td>Interview</td>
                             <td>Required</td>
                         </tr>

                         <tr>
                             <td>Refundable Deposit</td>
                             <td>Not required</td>
                         </tr>

                         <tr>
                             <td>PR/Work permit</td>
                             <td>Temporary work permit; PR contingent on meeting program requirements

</td>
                         </tr>
                         <tr>
                             <td>Additional Requirements</td>
                             <td>                           
                             Score 60+ points on assessment grid CAD $100,000 refundable deposit is not a requirement anymore.</td>
                         </tr>
                    </table>
                </div>


                    {/* section -1*/}
                    <div className="b-table">
                    <h3 className="b-h3">Manitoba Provincial Nominee Program — Business Investor Stream (Farm Investor Pathway)</h3>
                    <table className="b-t-section">
                         <tr>
                             <th className='b-t-head'>Program</th>
                            <th>
                            Manitoba Business Investor Stream — Farm Investor Pathway
                            </th>
                         </tr>
                         <tr>
                             <td>Minimum Net Worth</td>
                             <td>CAD $500,000</td>
                         </tr>

                         <tr>
                             <td>Minimum Investment</td>
                             <td>
                             
CAD $300,000 tangible assets to establish a farming business in rural Manitoba AND investments in a farm business operated primarily for the purposes of deriving passive investment income or speculative purposes are not eligible.

</td>
                         </tr>
                         <tr>
                             <td>Experience</td>
                             <td> 
                            
Minimum of three years of farm business management or farm ownership and operation experience supported by verifiable documents.

</td>
                         </tr>
                         <tr>
                             <td>EOI System</td>
                             <td>Yes</td>
                         </tr>

                         <tr>
                             <td>Managerial Role</td>
                             <td>Required</td>
                         </tr>

                         <tr>
                             <td>Business Plan</td>
                             <td>Required</td>
                         </tr>

                         <tr>
                             <td>Exploratory Visit</td>
                             <td>Farm Business Research Visit required.</td>
                         </tr>

                         <tr>
                             <td>Interview</td>
                             <td>Required</td>
                         </tr>

                         <tr>
                             <td>Refundable Deposit</td>
                             <td>CAD $75,000</td>
                         </tr>

                         <tr>
                             <td>PR/Work permit</td>
                             <td>Temporary work permit; PR contingent on meeting program requirements

</td>
                         </tr>
                         <tr>
                             <td>Additional Requirements</td>
                             <td>CAD $100,000 refundable deposit is no longer required.</td>
                         </tr>
                    </table>
                </div>



                        {/* section -1*/}
                        <div className="b-table">
                    <h3 className="b-h3">New Brunswick Provincial Nominee Program (NBPNP) — Entrepreneurial Stream</h3>
                    <table className="b-t-section">
                         <tr>
                             <th className='b-t-head'>Program</th>
                            <th>New Brunswick Provincial Nominee Program (NBPNP) — Entrepreneurial Stream
                            </th>
                         </tr>
                         <tr>
                             <td>Minimum Net Worth</td>
                             <td>CAD $600,000</td>
                         </tr>

                         <tr>
                             <td>Minimum Investment</td>
                             <td> CAD $250,000</td>
                         </tr>
                         <tr>
                             <td>Experience</td>
                             <td> 3 out of 5 years or more in owning a business OR 5 out of 5 years or more in a senior business management role
</td>
                         </tr>
                         <tr>
                             <td>EOI System</td>
                             <td>Yes</td>
                         </tr>

                         <tr>
                             <td>Managerial Role</td>
                             <td>Required</td>
                         </tr>

                         <tr>
                             <td>Business Plan</td>
                             <td>Required, must be of economic benefit to the province</td>
                         </tr>

                         <tr>
                             <td>Exploratory Visit</td>
                             <td>Required</td>
                         </tr>

                         <tr>
                             <td>Interview</td>
                             <td>Required</td>
                         </tr>

                         <tr>
                             <td>Refundable Deposit</td>
                             <td>CAD $100,000</td>
                         </tr>

                         <tr>
                             <td>PR/Work permit</td>
                             <td>PR after obtaining provincial nomination certificate</td>
                         </tr>
                         <tr>
                             <td>Additional Requirements</td>
                             <td>22-55 years old CLB 5 in English or French in reading, writing, listening and speaking</td>
                         </tr>
                    </table>
                </div>



                      {/* section -1*/}
                      <div className="b-table">
                    <h3 className="b-h3">New Brunswick Provincial Nominee Program (NBPNP) — Post-Graduate Entrepreneurial Stream</h3>
                    <table className="b-t-section">
                         <tr>
                             <th className='b-t-head'>Program</th>
                            <th>
New Brunswick Provincial Nominee Program (NBPNP) — Post-Graduate Entrepreneurial Stream


                            </th>
                         </tr>
                         <tr>
                             <td>Minimum Net Worth</td>
                             <td>N/A</td>
                         </tr>

                         <tr>
                             <td>Minimum Investment</td>
                             <td> The applicant must have 100% ownership of the equity of the eligible business</td>
                         </tr>
                         <tr>
                             <td>Experience</td>
                             <td>
6 or more years in the last 10 years in NOC O, A or B OR 1-5 years in the last 10 years in the NOC O, A or B</td>
                         </tr>
                         <tr>
                             <td>EOI System</td>
                             <td>Yes</td>
                         </tr>

                         <tr>
                             <td>Managerial Role</td>
                             <td>Required</td>
                         </tr>

                         <tr>
                             <td>Business Plan</td>
                             <td>May be requested (business must be of economic benefit to the province)</td>
                         </tr>

                         <tr>
                             <td>Exploratory Visit</td>
                             <td>Not specified</td>
                         </tr>

                         <tr>
                             <td>Interview</td>
                             <td>Required</td>
                         </tr>

                         <tr>
                             <td>Refundable Deposit</td>
                             <td>Not specified</td>
                         </tr>

                         <tr>
                             <td>PR/Work permit</td>
                             <td>PR after obtaining provincial nomination certificate</td>
                         </tr>
                         <tr>
                             <td>Additional Requirements</td>
                             <td>22-40 years old
CLB 7 in English or French in reading, writing, listening and speaking
Have a valid Post-Graduation Work Permit</td>
                         </tr>
                    </table>
                </div>


                     {/* section -1*/}
                     <div className="b-table">
                    <h3 className="b-h3">Nova Scotia Nominee Program (NSNP) — Entrepreneur Stream</h3>
                    <table className="b-t-section">
                         <tr>
                             <th className='b-t-head'>Program</th>
                            <th>
                            Nova Scotia Nominee Program (NSNP) — Entrepreneur Stream
                            </th>
                         </tr>
                         <tr>
                             <td>Minimum Net Worth</td>
                             <td>CAD $600,000</td>
                         </tr>

                         <tr>
                             <td>Minimum Investment</td>
                             <td> CAD $150,000</td>
                         </tr>
                         <tr>
                             <td>Experience</td>
                             <td>At least 3 years of business ownership experience including 33.3% ownership in the last 10 years OR
+5 years as senior manager in the last 10 years</td>
                         </tr>
                         <tr>
                             <td>EOI System</td>
                             <td>Yes (province publishes info on previous draws)</td>
                         </tr>

                         <tr>
                             <td>Managerial Role</td>
                             <td>Required</td>
                         </tr>

                         <tr>
                             <td>Business Plan</td>
                             <td>Required</td>
                         </tr>

                         <tr>
                             <td>Exploratory Visit</td>
                             <td>Required for business succession only</td>
                         </tr>

                         <tr>
                             <td>Interview</td>
                             <td>Required</td>
                         </tr>

                         <tr>
                             <td>Refundable Deposit</td>
                             <td>Not specified</td>
                         </tr>

                         <tr>
                             <td>PR/Work permit</td>
                             <td>Must operate business for at least 1 year on work permit following nomination; PR contingent on meeting program requirements</td>
                         </tr>
                         <tr>
                             <td>Additional Requirements</td>
                             <td>Submit an Expression of Interest (EOI) The business must meet additional criteria English/French minimum CLB 5</td>
                         </tr>
                    </table>
                </div>


                     {/* section -1*/}
                     <div className="b-table">
                    <h3 className="b-h3">Nova Scotia Nominee Program (NSNP) — International Graduate Entrepreneur Stream</h3>
                    <table className="b-t-section">
                         <tr>
                             <th className='b-t-head'>Program</th>
                            <th>
                            Nova Scotia Nominee Program (NSNP) — Entrepreneur Stream
                            </th>
                         </tr>
                         <tr>
                             <td>Minimum Net Worth</td>
                             <td>CAD $600,000</td>
                         </tr>

                         <tr>
                             <td>Minimum Investment</td>
                             <td> CAD $150,000</td>
                         </tr>
                         <tr>
                             <td>Experience</td>
                             <td>At least 3 years of business ownership experience including 33.3% ownership in the last 10 years OR
+5 years as senior manager in the last 10 years</td>
                         </tr>
                         <tr>
                             <td>EOI System</td>
                             <td>Yes (province publishes info on previous draws)</td>
                         </tr>

                         <tr>
                             <td>Managerial Role</td>
                             <td>Required</td>
                         </tr>

                         <tr>
                             <td>Business Plan</td>
                             <td>Required</td>
                         </tr>

                         <tr>
                             <td>Exploratory Visit</td>
                             <td>Required for business succession only</td>
                         </tr>

                         <tr>
                             <td>Interview</td>
                             <td>Required</td>
                         </tr>

                         <tr>
                             <td>Refundable Deposit</td>
                             <td>Not specified</td>
                         </tr>

                         <tr>
                             <td>PR/Work permit</td>
                             <td>Must operate business for at least 1 year on work permit following nomination; PR contingent on meeting program requirements</td>
                         </tr>
                         <tr>
                             <td>Additional Requirements</td>
                             <td>Submit an Expression of Interest (EOI) The business must meet additional criteria English/French minimum CLB 5</td>
                         </tr>
                    </table>
                </div>


                 {/* section -1*/}
                 <div className="b-table">
                    <h3 className="b-h3">Nova Scotia Nominee Program (NSNP) — International Graduate Entrepreneur Stream</h3>
                    <table className="b-t-section">
                         <tr>
                             <th className='b-t-head'>Program</th>
                            <th>
                           
Nova Scotia Nominee Program (NSNP) — International Graduate Entrepreneur Stream


                            </th>
                         </tr>
                         <tr>
                             <td>Minimum Net Worth</td>
                             <td>N/A</td>
                         </tr>

                         <tr>
                             <td>Minimum Investment</td>
                             <td>At least 1 continuous year of business ownership experience in Nova Scotia prior to EOI submission Completed a degree of at least 2 years' duration at a university/college in Nova Scotia</td>
                         </tr>
                         <tr>
                             <td>Experience</td>
                             <td>At least 3 years of business ownership experience including 33.3% ownership in the last 10 years OR
+5 years as senior manager in the last 10 years</td>
                         </tr>
                         <tr>
                             <td>EOI System</td>
                             <td>Yes (province may publish info on draws after future draws are made; EOI must be submitted while on valid work permit)</td>
                         </tr>

                         <tr>
                             <td>Managerial Role</td>
                             <td>Required</td>
                         </tr>

                         <tr>
                             <td>Business Plan</td>
                             <td>None</td>
                         </tr>

                         <tr>
                             <td>Exploratory Visit</td>
                             <td>Required</td>
                         </tr>

                         <tr>
                             <td>Interview</td>
                             <td>Required</td>
                         </tr>

                         <tr>
                             <td>Refundable Deposit</td>
                             <td>Not required</td>
                         </tr>

                         <tr>
                             <td>PR/Work permit</td>
                             <td>PR after obtaining provincial nomination certificate</td>
                         </tr>
                         <tr>
                             <td>Additional Requirements</td>
                             <td>The business must meet additional criteria English/French minimum CLB 7</td>
                         </tr>
                    </table>
                </div>

                  {/* section -1*/}
                  <div className="b-table">
                    <h3 className="b-h3">Northwest Territories Nominee Program — Entrepreneur Business Stream</h3>
                    <table className="b-t-section">
                         <tr>
                             <th className='b-t-head'>Program</th>
                            <th>Northwest Territories Nominee Program (NTNP) — Entrepreneur Business Stream </th>
                         </tr>
                         <tr>
                             <td>Minimum Net Worth</td>
                             <td>For businesses in Yellowknife: CAD $500,000 OR for businesses outside Yellowknife: CAD $250,000</td>
                         </tr>

                         <tr>
                             <td>Minimum Investment</td>
                             <td>In Yellowknife: CAD $300,000 & at least 33.3% ownership OR outside Yellowknife: CAD $150,000 & at least 33.3% ownership OR CAD $1,000,000 investment</td>
                         </tr>
                         <tr>
                             <td>Experience</td>
                             <td>Relevant business experience required</td>
                         </tr>
                         <tr>
                             <td>EOI System</td>
                             <td>No</td>
                         </tr>

                         <tr>
                             <td>Managerial Role</td>
                             <td>Required</td>
                         </tr>

                         <tr>
                             <td>Business Plan</td>
                             <td>Required</td>
                         </tr>

                         <tr>
                             <td>Exploratory Visit</td>
                             <td>Required</td>
                         </tr>

                         <tr>
                             <td>Interview</td>
                             <td>Required</td>
                         </tr>

                         <tr>
                             <td>Refundable Deposit</td>
                             <td>CAD $75,000</td>
                         </tr>

                         <tr>
                             <td>PR/Work permit</td>
                             <td>2-year work permit; PR contingent on meeting program requirements</td>
                         </tr>
                         <tr>
                             <td>Additional Requirements</td>
                             <td>CLB 4 in English or French <br />
                             Business must generate significant benefits for the Northwest Territories, including jobs for local residents.

                             </td>
                         </tr>
                    </table>
                </div>


                  {/* section -1*/}
                  <div className="b-table">
                    <h3 className="b-h3">Ontario Immigrant Nominee Program (OINP) — Corporate Stream</h3>
                    <table className="b-t-section">
                         <tr>
                             <th className='b-t-head'>Program</th>
                            <th>Ontario Immigrant Nominee Program (OINP) <br />
— <br /> 
 Corporate Stream (terminated) </th>
                         </tr>
                         <tr>
                             <td>Minimum Net Worth</td>
                             <td>None</td>
                         </tr>

                         <tr>
                             <td>Minimum Investment</td>
                             <td>
CAD $5,000,000 OR CAD $10,000,000 if the proposed business is a land development or a leasehold company

</td>
                         </tr>
                         <tr>
                             <td>Experience</td>
                             <td>
The international corporation must have been established for at least 36 months at the time of application

</td>
                         </tr>
                         <tr>
                             <td>EOI System</td>
                             <td>No</td>
                         </tr>

                         <tr>
                             <td>Managerial Role</td>
                             <td>Required</td>
                         </tr>

                         <tr>
                             <td>Business Plan</td>
                             <td>Required</td>
                         </tr>

                         <tr>
                             <td>Exploratory Visit</td>
                             <td>Encouraged</td>
                         </tr>

                         <tr>
                             <td>Interview</td>
                             <td>Required</td>
                         </tr>

                         <tr>
                             <td>Refundable Deposit</td>
                             <td>Not required</td>
                         </tr>

                         <tr>
                             <td>PR/Work permit</td>
                             <td>Applicant & key staff first obtain work permits; PR contingent on meeting program requirements</td>
                         </tr>
                         <tr>
                             <td>Additional Requirements</td>
                             <td>Create 5 new jobs for a Canadian citizen or permanent resident per key staff member seeking nomination
                             </td>
                         </tr>
                    </table>
                </div>


                             {/* section -1*/}
                             <div className="b-table">
                    <h3 className="b-h3">Prince Edward Island Provincial Nominee Program (PEI-PNP) - Work Permit Stream</h3>
                    <table className="b-t-section">
                         <tr>
                             <th className='b-t-head'>Program</th>
                            <th>
Prince Edward Island Provincial Nominee Program (PEI-PNP) - Work Permit Stream
</th>
                         </tr>
                         <tr>
                             <td>Minimum Net Worth</td>
                             <td>CAD $600,000</td>
                         </tr>

                         <tr>
                             <td>Minimum Investment</td>
                             <td>
                             Management experience required
</td>
                         </tr>
                         <tr>
                             <td>Experience</td>
                             <td>
                             Yes</td>
                         </tr>
                         <tr>
                             <td>EOI System</td>
                             <td>Required</td>
                         </tr>

                         <tr>
                             <td>Managerial Role</td>
                             <td>Required</td>
                         </tr>

                         <tr>
                             <td>Business Plan</td>
                             <td>Required</td>
                         </tr>

                         <tr>
                             <td>Exploratory Visit</td>
                             <td>Recommended</td>
                         </tr>

                         <tr>
                             <td>Interview</td>
                             <td>Required</td>
                         </tr>

                         <tr>
                             <td>Refundable Deposit</td>
                             <td>
CAD $7,500 of $10,000 application fee is refunded if the application is declined or withdrawn.

</td>
                         </tr>

                         <tr>
                             <td>PR/Work permit</td>
                             <td>
Letter of support from the province to apply for a work permit; Obtain nomination once all of the terms and conditions of Performance Agreement are met.

</td>
                         </tr>
                         <tr>
                             <td>Additional Requirements</td>
                             <td>CLB 4 in English or French; minimum education of secondary school equivalent <br />
                <br />  21-59 years old
                             </td>
                         </tr>
                    </table>
                </div>


                            {/* section -1*/}
                            <div className="b-table">
                    <h3 className="b-h3">Prince Edward Island Provincial Nominee Program (PEI-PNP) - Partial Ownership</h3>
                    <table className="b-t-section">
                         <tr>
                             <th className='b-t-head'>Program</th>
                            <th>
                            Prince Edward Island Provincial Nominee Program (PEI-PNP) - Partial Ownership (terminated)</th>
                         </tr>
                         <tr>
                             <td>Minimum Net Worth</td>
                             <td>CAD $600,000</td>
                         </tr>

                         <tr>
                             <td>Minimum Investment</td>
                             <td>
                             CAD $150,000 and own a percentage of equity in an existing business of at least 1/3 ownership OR $1,000,000 investment
</td>
                         </tr>
                         <tr>
                             <td>Experience</td>
                             <td>Management experience required</td>
                         </tr>
                         <tr>
                             <td>EOI System</td>
                             <td>Yes</td>
                         </tr>

                         <tr>
                             <td>Managerial Role</td>
                             <td>Required</td>
                         </tr>

                         <tr>
                             <td>Business Plan</td>
                             <td>Required, must fall within an eligible sector of business set out by the provincial govt</td>
                         </tr>

                         <tr>
                             <td>Exploratory Visit</td>
                             <td>Required</td>
                         </tr>

                         <tr>
                             <td>Interview</td>
                             <td>Required</td>
                         </tr>

                         <tr>
                             <td>Refundable Deposit</td>
                             <td>CAD $200,000</td>
                         </tr>

                         <tr>
                             <td>PR/Work permit</td>
                             <td>PR after obtaining nomination certificate</td>
                         </tr>
                         <tr>
                             <td>Additional Requirements</td>
                             <td>Submit an investment agreement
Minimum IELTS band score of 4.0 within the last 2 years
Score 50+ points on assessment grid
                             </td>
                         </tr>
                    </table>
                </div>


                        {/* section -1*/}
                        <div className="b-table">
                    <h3 className="b-h3">Prince Edward Island Provincial Nominee Program (PEI-PNP) — 100% Ownership</h3>
                    <table className="b-t-section">
                         <tr>
                             <th className='b-t-head'>Program</th>
                            <th>Prince Edward Island Provincial Nominee Program (PEI-PNP) — 100% Ownership)</th>
                         </tr>
                         <tr>
                             <td>Minimum Net Worth</td>
                             <td>CAD $600,000</td>
                         </tr>

                         <tr>
                             <td>Minimum Investment</td>
                             <td>CAD $150,000</td>
                         </tr>
                         <tr>
                             <td>Experience</td>
                             <td>Management experience required</td>
                         </tr>
                         <tr>
                             <td>EOI System</td>
                             <td>Yes</td>
                         </tr>

                         <tr>
                             <td>Managerial Role</td>
                             <td>Required</td>
                         </tr>

                         <tr>
                             <td>Business Plan</td>
                             <td>Required, must fall within an eligible sector of business set out by the provincial govt</td>
                         </tr>

                         <tr>
                             <td>Exploratory Visit</td>
                             <td>Not specified</td>
                         </tr>

                         <tr>
                             <td>Interview</td>
                             <td>Required</td>
                         </tr>

                         <tr>
                             <td>Refundable Deposit</td>
                             <td>CAD $200,000</td>
                         </tr>

                         <tr>
                             <td>PR/Work permit</td>
                             <td>PR after obtaining nomination certificate</td>
                         </tr>
                         <tr>
                             <td>Additional Requirements</td>
                             <td>CLB 4 in English or French <br /><br />21-59 years old
                             </td>
                         </tr>
                    </table>
                </div>

                
                        {/* section -1*/}
                        <div className="b-table">
                    <h3 className="b-h3">Saskatchewan Immigrant Nominee Program (SINP) - Entrepreneur Category</h3>
                    <table className="b-t-section">
                         <tr>
                             <th className='b-t-head'>Program</th>
                            <th>Saskatchewan Immigrant Nominee Program (SINP) - Entrepreneur Category</th>
                         </tr>
                         <tr>
                             <td>Minimum Net Worth</td>
                             <td>CAD $500,000</td>
                         </tr>

                         <tr>
                             <td>Minimum Investment</td>
                             <td>
CAD $300,000 in Regina or Saskatoon and at least 33.3% ownership OR $200,000 in any other Saskatchewan community and at least 33.3% ownership OR CAD $1,000,000 investment or more
</td>
                         </tr>
                         <tr>
                             <td>Experience</td>
                             <td>Management experience required</td>
                         </tr>
                         <tr>
                             <td>EOI System</td>
                             <td>Yes</td>
                         </tr>

                         <tr>
                             <td>Managerial Role</td>
                             <td>Required</td>
                         </tr>

                         <tr>
                             <td>Business Plan</td>
                             <td>Required, must fall within an eligible sector of business set out by the provincial govt</td>
                         </tr>

                         <tr>
                             <td>Exploratory Visit</td>
                             <td>Required for business succession, joint ventures, and regional business opportunities</td>
                         </tr>

                         <tr>
                             <td>Interview</td>
                             <td>Upon request by SIN</td>
                         </tr>

                         <tr>
                             <td>Refundable Deposit</td>
                             <td>Not required</td>
                         </tr>

                         <tr>
                             <td>PR/Work permit</td>
                             <td>2-year work permit; PR contingent upon meeting program requirements</td>
                         </tr>
                         <tr>
                             <td>Additional Requirements</td>
                             <td>Sign a Performance Agreement <br />
Create 2+ employment opportunities if establishing a business in Regina or Saskatoon
                             </td>
                         </tr>
                    </table>
                </div>

                {/* section -1*/}
                <div className="b-table">
                    <h3 className="b-h3">Saskatchewan Immigrant Nominee Program (SINP) - Farm Owner/Operator Category</h3>
                    <table className="b-t-section">
                         <tr>
                             <th className='b-t-head'>Program</th>
                            <th>Saskatchewan Immigrant Nominee Program (SINP) - Farm Owner/Operator Category</th>
                         </tr>
                         <tr>
                             <td>Minimum Net Worth</td>
                             <td>CAD $500,000</td>
                         </tr>

                         <tr>
                             <td>Minimum Investment</td>
                             <td>
                             N/A</td>
                         </tr>
                         <tr>
                             <td>Experience</td>
                             <td>Farming operation ownership experience using agricultural practices similar to those used in Saskatchewan-based farming</td>
                         </tr>
                         <tr>
                             <td>EOI System</td>
                             <td>No</td>
                         </tr>

                         <tr>
                             <td>Managerial Role</td>
                             <td>Required</td>
                         </tr>

                         <tr>
                             <td>Business Plan</td>
                             <td>Farm Establishment Plan (FEP) required</td>
                         </tr>

                         <tr>
                             <td>Exploratory Visit</td>
                             <td>Required</td>
                         </tr>

                         <tr>
                             <td>Interview</td>
                             <td>Upon request</td>
                         </tr>

                         <tr>
                             <td>Refundable Deposit</td>
                             <td>CAD $75,000</td>
                         </tr>

                         <tr>
                             <td>PR/Work permit</td>
                             <td>PR after obtaining nomination certificate</td>
                         </tr>
                         <tr>
                             <td>Additional Requirements</td>
                             <td>Submit a Farm Establishment Plan <br />
Sign a Performance Agreement
                             </td>
                         </tr>
                    </table>
                </div>
                     {/* section -1*/}
                     <div className="b-table">
                    <h3 className="b-h3">Yukon Business Nominee Program (YBNP)</h3>
                    <table className="b-t-section">
                         <tr>
                             <th className='b-t-head'>Program</th>
                            <th>Yukon Business Nominee Program (YBNP)</th>
                         </tr>
                         <tr>
                             <td>Minimum Net Worth</td>
                             <td>CAD $500,000 (including CAD $300,000 in liquid assets)</td>
                         </tr>

                         <tr>
                             <td>Minimum Investment</td>
                             <td>
                             
CAD $300,000 and at least 1/3 ownership with a Canadian citizen or permanent resident partner
</td>
                         </tr>
                         <tr>
                             <td>Experience</td>
                             <td>
Minimum of 3 years entrepreneurial/business management experience & minimum of 5 years relevant work experience

</td>
                         </tr>
                         <tr>
                             <td>EOI System</td>
                             <td>Yes </td>
                         </tr>

                         <tr>
                             <td>Managerial Role</td>
                             <td>Required</td>
                         </tr>

                         <tr>
                             <td>Business Plan</td>
                             <td>Required</td>
                         </tr>

                         <tr>
                             <td>Exploratory Visit</td>
                             <td>Recommended, applicants are awarded points for past visits</td>
                         </tr>

                         <tr>
                             <td>Interview</td>
                             <td>Required</td>
                         </tr>

                         <tr>
                             <td>Refundable Deposit</td>
                             <td>Not required</td>
                         </tr>

                         <tr>
                             <td>PR/Work permit</td>
                             <td>2-year work permit; PR contingent on meeting program requirements</td>
                         </tr>
                         <tr>
                             <td>Additional Requirements</td>
                             <td>Business must be in a strategic sector, as identified by the territory
Must score 65+ points on the assessment grid</td>
                         </tr>
                    </table>
                </div>
                    <br /><br />
                <h3 className="b-h3">
                Contact us today with any questions concerning business immigration to Canada. We will get back to you quickly to discuss your immigration, business and investment options.
                </h3>
            </div>
        </div>
    )
}

export default BusinessPage
