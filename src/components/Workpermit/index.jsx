import React from 'react'
import workimg from '../../assets/images/work.jpg'
import './elements.css'
const Work = () => {
    return (
        <div className="w-container">
            <div className="w-wrapper">
                <h1 className="w-title">
                Work permit
                </h1>
                <img src={workimg} alt="" className="w-img" />
                <h2 className="w-h2">How to Obtain a Work Permit ?</h2>
                <h3 className="w-h3">Canada offers more than 100 different work permit options to global talent and employers. This page provides you with an overview of how work permits can be obtained in Canada. </h3>
                <p className="w-text">Foreign workers tend to need Canadian work permits, but there are exceptions. </p>

                <h5 className="w-h5">Canadian Work Permit Types</h5>
                <p className="w-text">There are two types of work permit programs in Canada:
                    <ul>
                        <li>Temporary Foreign Worker Program: A Labour Market Impact Assessment (LMIA) is required for a foreign national to obtain a work permit</li>
                        <li>International Mobility Program: An LMIA is not required for a foreign national to obtain a work permit</li>

                    </ul>
                    <br /><br />
                    The purpose of the LMIA is for employers to demonstrate to the Canadian government that the hiring of a foreign worker will not have a negative impact on Canada's existing workforce. The federal department of Employment and Social Development Canada (ESDC) wants to ensure that the hiring of foreign workers will not displace existing workers in Canada nor place downward pressures on their wages. Workers that need an LMIA fall under the <a href="https://www.canadavisa.com/temporary-foreign-worker-program.html" className="link"> Temporary Foreign Worker Program (TFWP)</a>.
                    <br /><br />
                    Although the LMIA process is the rule, there are many different LMIA-exempt work permits, resulting from free trade agreements, such as the former North American Free Trade Agreement, now known as the Canada-United States-Mexico Agreement, or <a href="https://canadavisa.com/nafta-work-permits.html" className="link">CUSMA</a> . These free trade agreements enable foreign workers to apply for a work permit without their employer having to obtain an LMIA. In addition to these employer sponsored work permits, there are a number of work permit options available to foreign workers who do not yet have a job offer, including working holidays, post-graduate work permits, and open spousal work permits. Workers who do not need an LMIA fall under the <a href="https://www.canadavisa.com/labour-market-impact-assessment-exemptions-lmia.htmls" className="link">International Mobility Program (IMP)</a> .
                    <br /><br />
                    These are among the common scenarios under which one can work in Canada:
                    
                </p>
                <h5 className="w-h5">LMIA Required</h5>
                <p className="w-text-c">These work permits require the employer to obtain a Labour Market Impact Assessment as part of the process.</p>

                <h5 className="w-h5">LMIA Exempt</h5>
                <p className="w-text-c">Certain circumstances allow for individuals to work in Canada without first obtaining a Labour Market Impact Assessment.</p>

                <h5 className="w-h5">CUSMA</h5>
                <p className="w-text-c">These are issued under the Canada-United-States-Mexico Agreement (formerly NAFTA), allowing work without an LMIA.</p>

                <h5 className="w-h5">Intra-Company Transferst</h5>
                <p className="w-text-c">These permits will allow a company to bring certain employees to Canada from its offices abroad without a LMIA.</p>

                <h5 className="w-h5">Business Visitors</h5>
                <p className="w-text-c">In many cases, business visitors may work in Canada without a work permit, so long as they meet certain conditions and don't enter the Canadian labour market.</p>

                <h5 className="w-h5">Post-Graduation Work Permits</h5>
                <p className="w-text-c">After graduating from a Designated Learning Institution, international students in Canada may work for up to three years.</p>

            </div>
        </div>
    )
}

export default Work
