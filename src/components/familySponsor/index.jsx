import React from 'react'
import fam from '../../assets/images/family.jpg'
import './elements.css'
import {Link as LinkS} from 'react-scroll'

const FamilySponsor = () => {
    return (
        <div className="fm-container">
            <div className="fm-wrapper">
                <h1 className="fm-title">Family Sponsorship</h1>
                <img src={fam} alt="" className="fm-img" />
                <h2 className="fm-h2">
                Sponsor your Family to Immigrate to Canada  
                </h2>
                <h3 className="fm-h3">Canada welcomes more than 100,000 immigrants through family sponsorship each year. </h3>
                <p className="fm-text">IRCC (formerly CIC) welcomes about 80 per cent of these immigrants under the Spouses, Partners, and Children Program, and the remaining 20 per cent under the Parents and Grandparents Program. This comprehensive CanadaVisa page provides an overview on how to sponsor your family for immigration to Canada.</p>

                <ul className='fm-list'>
                    <h4 className="fm-h4">Topics</h4>
                  <LinkS to='fm-1'>  <li>Overview of Canadian Immigration Family Sponsorship</li></LinkS>
                  <LinkS  to='fm-2'>    <li>Sponsor your Wife, Husband, or Common-law Partner</li></LinkS>
                  <LinkS to='fm-3'>  <li>Sponsor your Dependent Children</li></LinkS>
                  <LinkS to='fm-4'>  <li>Sponsor your Parents or Grandparents</li></LinkS>
                </ul>
                
                {/* overview */}
                
                <div className="fm-section" id='fm-1'>
                    <h3 className="fm-h3" > <a href="" className="link-title">Overview of Canadian Immigration Family Sponsorship</a></h3>
                    <p className="fm-text">
                    Family reunification is one of the pillars of Canada's immigration system. Since the end of the Second World War, Canada has sought to welcome immigrants to strengthen its economy, bring families together, and on humanitarian and compassionate grounds.
                     The family class is the second largest category of newcomers welcomed by Canada under its <a href="https://www.canadavisa.com/canada-immigration-levels-plans.html" className="link">Immigration Levels Plan</a> . Canada is pursuing the highest levels of immigration in its history to support its post-COVID economic recovery. As such, Canada aims to welcome over 400,000 new immigrants per year, of which, over 100,000 immigrants per year fall under the family class.
                        <br /><br />
                        The country's immigration system is managed by the Department of Immigration, Refugees and Citizenship Canada or IRCC for short. The department was previously known as Citizenship and Immigration Canada, or CIC for short. IRCC establishes and administers Canada's family sponsorship program. This entails establishing program criteria, accepting and reviewing family sponsorship applications, and providing permanent and temporary resident visas.

                    </p>
                    <h5 className="fm-h5">
                    What is Canadian family sponsorship?
                    </h5>
                    <p className="fm-text">There are two main aspects to sponsorship:</p>
                    <ul>
                        <li>It allows your family member to immigrate to Canada and get permanent residence (PR).
</li>
                        <li>It requires you, as an individual, to make a commitment to provide for basic needs and to support that person financially.
</li>
                    </ul>
                    <h5 className="fm-h5">
                    How is COVID-19 impacting family sponsorship?
                    </h5>
                    <p className="fm-text">
                    Immigration, Refugees and Citizenship Canada (IRCC) is still accepting family sponsorship applications. 
                    <br /><br />
                    While the processing of sponsorship applications has been affected by the coronavirus pandemic, the Canadian government continues to look for innovative and compassionate ways to reunite families.
                    <br /><br />
                    Here are some of the steps that have been taken:
                    <ul>
                        <li>IRCC has increased the number of staff who will review spousal sponsorship applications by 66% to reduce wait times and process applications more quickly.</li>
                        <li>IRCC is also implementing a pilot project that will use new technology to digitize paper applications for faster processing.</li>
                        <li>IRCC has indicated that it may implement biometric facilitation measures and introduce technology to conduct interviews with applicants remotely.</li>
                        <li>If you received Employment Insurance and Canada Emergency Response Benefit (CERB), you can still sponsor your spouse, parent, grandparent, child or other family member as long as you meet all the requirements to be a sponsor.</li>
                        <li>If the person you have sponsored received Employment Insurance (EI) or CERB during the undertaking period, this will not cause you to have to default on your obligations.</li>
                    </ul>

                    <br /><br />
                    Visit our <a href="https://www.canadavisa.com/coronavirus-covid-19-impact-canada-immigration-visa-border-latest-news.html#gs.mf8evt" className="link">COVID-19 page</a>  to get the latest updates on how the coronavirus pandemic is affecting family class immigration sponsorship.
                    </p>
                    <h5 className="fm-h5">Can I be a sponsor?</h5>
                    <p className="fm-text">
                    To sponsor a family member, you are required to meet several requirements such as being:
                <br /><br />
                    <ul>
                        <li>a Canadian citizen or permanent resident of Canada</li>
                        <li>18 years of age or older</li>
                        <li>able to support the sponsored person for several years</li>
                    </ul>

                    </p>
                    <h5 className="fm-h5">Who can I sponsor?</h5>
                    <p className="fm-text">
                    <ul>
                        <li>Spouses and common-law partners</li>
                        <li>Dependent children</li>
                        <li>Parents and grandparents</li>
                    </ul>
                        
                        There are exceptions to this rule, however, and it may be possible to sponsor a non-immediate family member (for example, a sister, niece, or uncle) if: 
                      <br /><br />
                        <ul>
                        <li>you do not have any other immediate family members you could sponsor, or</li>
                        <li>you have legally adopted them and they meet the definition of a dependent child.</li>
                        
                    </ul>
                    </p>
                    <h5 className="fm-h5">
                    What are the income requirements to sponsor?
                    </h5>
                    <p className="fm-text">
                    As a sponsor, you are required to sign a Sponsorship Agreement with your sponsored family member. This is a commitment by you to provide financial support for the basic needs (food, clothing, shelter, and health needs not covered by public health services) of the person you are sponsoring.
    	            <br /><br />
                    For some types of sponsorships, you will also have to meet or exceed the Low Income Cut-off (LICO), for instance if:
                    <ul>
                        <li>you are sponsoring a spouse or partner who has a dependent child and that dependent child has one or more children of their own, or</li>
                        <li>you are sponsoring a dependent child who has one or more dependent children of their own, or</li>
                        <li>you are sponsoring a parent or grandparent.</li>
                    </ul>
                    </p>
                </div>

                {/* Sponsor wife,husband etc section */}

                <div className="fm-section" id='fm-2'>
                    <h3 className="fm-h3"><a href="" className="link-title">Sponsor your Wife, Husband, or Common-law Partner</a></h3>

                    <p className="fm-text"><a href="" className="link">Spouse or Common Law-Partner Sponsorship</a></p>
        	        <p className="fm-text">
                    If you are a Canadian citizen or permanent resident of Canada you may sponsor:
                    <ul>
                        <li>your spouse (you are legally married)</li>
                        <li>common-law partner (you are not legally married but have been living together for at least 12 months in a conjugal relationship).</li>
                        <li>conjugal partner (you are not legally married or in a common-law relationship and they are living outside Canada)</li>
                    </ul>
                    </p>
                    <p className="fm-text">
                    To be eligible for spousal or common-law partner sponsorship, you must:                    <ul>
                        <li>be 18 year of age, a Canadian permanent resident living in Canada or Canadian citizen,</li>
                        <li>demonstrate that you can provide for the basic needs for yourself and your spouse or partner,</li>
                        <li>Prove your relationship with the sponsored person is genuine by providing supporting documentation.</li>
                    </ul>
                    </p>

                    <p className="fm-text">
                    To be eligible for spousal or common-law partner sponsorship, the sponsored person must:
                    <ul>
                        <li>be at least 18 years of age and not too closely related to you.</li>
                        
                    </ul>

                    <br /><br />
                    <a href="https://www.canadavisa.com/assess/canada-immigration-family-assessment-form.htm#gs.mf7do4" className="link">Find out if you are eligible to sponsor your partner</a>
                    </p>

                    <p className="fm-text">
                    There are two types of spousal or common-law sponsorship applications:
                    
                     <ul>
                        <li><span className='fm-span'>Inland:</span> The application can be made from within Canada because the person you wish to sponsor is currently in Canada. This type of sponsorship allows applicants to continue to live in Canada while their application for permanent residence is being processed.</li>
    
                    </ul>
                    If the application is made from within Canada, the person you are sponsoring may apply for an <a href="https://www.canadavisa.com/inland-spousal-common-law-sponsorship-open-work-permit-pilot-program.html#gs.ln2s3p" className="link">open work permit</a>  that would allow them to work for any employer in Canada while the sponsorship application is being processed.
                    It is possible for spouses or partners to come to Canada by first applying for a Temporary Resident Visa (TRV).
                    <br /><br />
                    It is possible for spouses or partners to come to Canada by first applying for a <a href="https://www.canadavisa.com/canadian-temporary-resident-visa-visitor.html#gs.l5lyat" className="link">Temporary Resident Visa (TRV)</a> .

                    <ul>
                        <li> <span className='fm-span'> Outland:</span>  The application is made from abroad through an Embassy or Consulate.</li>
                    </ul>
                  <br />
                  In this case, the person you are sponsoring and who resides abroad will normally wait for permanent residence outside of the country but may visit you in Canada.
                    </p>
                </div>

                {/* dependent children */}

                <div className="fm-section" id='fm-3'>
                    <h3 className="fm-h3"><a href="https://www.canadavisa.com/dependent-child-sponsorship.html" className="link-title">Sponsor your Dependent Children</a></h3>
                    <a href="https://www.canadavisa.com/dependent-child-sponsorship.html" className="link">Dependent Child Sponsorship</a>

                    <p className="fm-text">
                    You can sponsor your dependent children, whether natural or adopted, to live with you as permanent residents in Canada.
                    </p>
                    <h5 className="fm-h5">Children must meet the following definition of a dependent child to be eligible for sponsorship:</h5>
                     <ul>
                         <li>A child is considered a dependent if he or she is not married or in a common-law relationship and is under 22 years of age.</li>
                         <li>If a child is over 22 years of age, they may be considered a dependent if they have a physical or mental condition that prevents them from being able to support themselves.</li>
                     </ul> 
                     <h5 className="fm-h5">To be eligible under this program, you:</h5>
                     <ul>
                         <li>and your child abroad must be approved by Immigration, Refugees and Citizenship Canada (IRCC) to receive a visa,</li>
                         <li>must prove your relationship with the child you are sponsoring, either by a birth or adoption certificate.</li>
                     </ul> 

                </div>
                <div className="fm-section" id='fm-4'>
                <h3 className="fm-h3"><a href="https://www.canadavisa.com/parent-and-grandparent-sponsorship.html#gs.knne3h" className="link-title">Sponsor your Parents or Grandparents</a></h3>
                    <a href="https://www.canadavisa.com/parent-and-grandparent-sponsorship.html#gs.knne3h" className="link">Parents and Grandparents Sponsorship</a>
                    <p className="fm-text">

                    The Parent and Grandparent Sponsorship Program (PGP) and the <a href="https://www.canadavisa.com/parent-and-grandparent-super-visa.html" className="link">Super Visa Program </a> are two programs that offer Canadian citizens and permanent residents the opportunity to bring their parents and grandparents to Canada.
                    </p>

                    <h5 className="fm-h5">To be eligible under the Parents and Grandparents Program, you must</h5>
                    <ul>
                        <li>be a Canadian citizen or permanent resident living in Canada,</li>
                        <li>be at least 18 years of age,</li>
                        <li>be the child or grandchild of the person(s) you are sponsoring,</li>
                        <li>meet the Minimum Necessary Income (MNI) required for the size of their family unit and provide Canada Revenue Agency issued notices of assessment as proof,</li>
                        <li>sign a sponsorship agreement that acknowledges your promise to provide for the basic needs of family member(s) for a period of 20 years,</li>
                        <li>sign an additional agreement if you live in Quebec.</li>
                    </ul>
                    <p className="fm-text">Your spouse or common-law partner can help you meet the income requirement by co-signing the undertaking.</p>
                    <h5 className="fm-h5">If a co-signer is helping you meet the MNI requirements, the co-signer must meet the same eligibility criteria as you, the sponsor. In addition, your co-signer must:</h5>
                    <ul>
                        <li>not be the person being sponsored,</li>
                        <li>have cohabited with you in a conjugal relationship for at least one year.</li>
                    </ul>
                    <a href="https://www.canadavisa.com/assess/parents-and-grandparents-eligibility-assessment-form.htm#gs.mf9g12" className="link">Find out if you are eligible to sponsor your parents and grandparents</a>
                </div>

                <div className="fm-section">
                    <h3 className="fm-h3"> <a href="https://www.canadavisa.com/parent-and-grandparent-super-visa.html" className="link-title">Super Visa Program</a></h3>

                    <p className="fm-text">
                    The Super Visa program allows parents and grandparents to come to Canada on extended multiple-entry visas that can last up to 10 years in total. This program is always open, and it is possible to apply at the same time as the to PGP.
                    </p>
                    <h5 className="fm-h5">To be eligible under the Super Visa Program, you must:</h5> 
                    <ul>
                        <li>be the parent or grandparent of a Canadian citizen or a permanent resident of Canada,</li>
                        <li>have signed a letter of invitation from your child or grandchild,</li>
                        <li>have medical insurance</li>
                        <li>apply for the super visa from outside Canada.</li>
                    </ul>         
                    <p className="fm-text">
                    In addition, your Canadian child or grandchild will have to prove that their household meets the minimum necessary income.
                        <br /><br />
                        <a href="mailto:SuperVisa@canadavisa.com" className="link">Contact us if you want to apply for a Super Visa!</a>
                    </p>   
                </div>
            </div>
        </div>
    )
}

export default FamilySponsor
