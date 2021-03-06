import React from 'react'
import styled from 'styled-components'


const ContactContainer = styled.div `
    width: 100%;
    background: #991A1E;
`
const ContactWrapper = styled.div`
    padding: 3px;
    display: flex;
    justify-content: flex-end;

`
const ContactInfoWrapper = styled.div`
    padding: 2px;
    margin-right: 10px;
    margin-top: 10px;
    display: flex;
    flex-direction: row;


`

const Icon = styled.div`
color: #fff;
margin-right:10px;
width: 30px;
`
const ContactP = styled.p`
    margin-right: 10px;
    margin-top: 7px;
    color: #fff ;
    font-family: 'Open Sans Condensed', sans-serif;
    font-size: 13px;
    text-align: center;
    display: flex;
    /* justify-content: flex-end; */
    
`

const NavContactInfo = () => {
    return (
        <ContactContainer>
            <ContactWrapper className="wrapper">
                <ContactInfoWrapper>
               
                   <Icon> <i className ="fa fa-phone fa-lg"/> </Icon>
                   <ContactP>  +8801633661199</ContactP>
                {/* </ContactInfoWrapper>
                <ContactInfoWrapper> */}
                
                    <Icon><i className ="fa fa-whatsapp fa-lg"/></Icon>
                    <ContactP>  +14373889215</ContactP>
                </ContactInfoWrapper>   
            </ContactWrapper>
        </ContactContainer>
    )
}

export default NavContactInfo
