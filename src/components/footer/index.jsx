import React from 'react'
import {animateScroll as scroll} from 'react-scroll';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logored.png'
// import {DialPad} from 'frh-react-dial-pad'
import {FaFacebook, FaInstagram ,FaYoutube , FaTwitter, FaLinkedin} from 'react-icons/fa'
import { FooterContainer,
        FooterWrap,
        FooterLink,
        FooterLinkItems,
        FooterLinksConatiner,
        FooterLinksTitle ,
        FooterLinksWrapper,
        SocialIcon,
        SocialIconLink,
        SocialLogo,
        SocialMedia,
        SocialMediaWrap,
        WebsiteRights
        
       } from './FooterElements'   


const Footer = () => {
    const toggleHome = () =>{
        scroll.scrollToTop();
    };
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksConatiner>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinksTitle> Explore Your Options </FooterLinksTitle>
                                <FooterLink to= "/immigrate">Immigrate</FooterLink>
                                <FooterLink to= "/study-permit">Study Permit</FooterLink>
                                <FooterLink to= "/business">Business Migration</FooterLink>
                                <FooterLink to= "/contactus">Family Sponsorship</FooterLink>
                                <FooterLink to= "/contactus">Work Permit</FooterLink>
                                <FooterLink to= "/contactus">Refusal Appeals and Inadmissibility</FooterLink>
                                <FooterLink to='/career'>Career</FooterLink>
                        </FooterLinkItems>
                        {/* <FooterLinkItems>
                            <FooterLinksTitle> Videos </FooterLinksTitle>
                                <FooterLink to= "/contactus">Submit Video</FooterLink>
                                <FooterLink to= "/contactus">Ambassadors</FooterLink>
                                <FooterLink to= "/contactus">Agency</FooterLink>
                                <FooterLink to= "/contactus">Influencer</FooterLink>
                        </FooterLinkItems> */}
                        <FooterLinkItems>
                            <FooterLinksTitle> Contact Info </FooterLinksTitle>
                                <FooterLink to= "/contactus">Address: <br/>House #28, Road # 07, Niketan,<br/> Gulshan –1, Dhaka- 1212. </FooterLink>
                                <FooterLink to= "/contactus">Email: westfordbd@gmail.com</FooterLink>
                                <FooterLink to= "/">Phone: +8801633661199</FooterLink>
                                <FooterLink to= "/contactus">Whatsapp/Telegram: +14373889215</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        
                        <FooterLinkItems>
                            <FooterLinksTitle> Social Media </FooterLinksTitle>
                                <FooterLink to= "/">Facebook</FooterLink>
                                <FooterLink to= "/">Instagram</FooterLink>
                                <FooterLink to= "/">Twitter</FooterLink>
                                <FooterLink to= "/">Youtube</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksConatiner>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo  onClick={toggleHome}> 
                            <img src ={logo} height="80px" width="230px" alt= "Logo"/></SocialLogo>
                        <WebsiteRights> Westfordbd.com © {new Date().getUTCFullYear()} All rights Reserved. </WebsiteRights>
                        <SocialIcon>
                            <SocialIconLink href="/" target = "_balnk" aria-label="Facebook">
                                <FaFacebook />
                                </SocialIconLink> 
                                <SocialIconLink href="/" target = "_balnk" aria-label="Instagram">
                                <FaInstagram />
                                </SocialIconLink> 
                                <SocialIconLink href="/" target = "_balnk" aria-label="Youtube">
                                <FaYoutube />
                                </SocialIconLink> 
                                <SocialIconLink href="/" target = "_balnk" aria-label="Twitter">
                                <FaTwitter />
                                </SocialIconLink> 
                                <SocialIconLink href="/" target = "_balnk" aria-label="Linkdin">
                                <FaLinkedin />
                                </SocialIconLink> 
                        </SocialIcon>
                    </SocialMediaWrap>
                </SocialMedia>
                <WebsiteRights> Developed By <a className='link' href='https://www.linkedin.com/in/saifullah-chowdhury-bb0005159/'> <br /> Saifullah Chowdhury</a> </WebsiteRights>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
