import styled from "styled-components";
import {Link} from 'react-router-dom';

export const FooterContainer = styled.footer`
    background-color: #101522;

`
export const FooterWrap = styled.div`
    padding: 48px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 0 auto;
    margin: 0 auto;
`
export const FooterLinksConatiner = styled.div`
    display: flex;
    justify-content: center;

    @media screen and (max-width: 820px){
        padding-top:32px ;
    }
`
export const FooterLinksWrapper = styled.div`
    display: flex;

    @media screen and (max-width:820px){
        flex-direction: column;
    }
`
export const FooterLinkItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 16px;
    text-align: left;
    width: 260px;
    box-sizing: border-box;
    color: #fff;
    @media screen and (max-width: 7680px){
       
       padding: 10px;
       width: 100%;
   }

    @media screen and (max-width: 420px){
       
        padding: 10px;
        width: 100%;
    }
`
export const FooterLinksTitle = styled.h1`
font-size: 14px;
margin-bottom: 16px;
`
export const FooterLink = styled(Link)`
    color: #fff;
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 14px;

    &:hover{
        color: #f70000;
        transition: 0.3s ease-out ;
    }
`
export const SocialMedia = styled.section`
    max-width: 100%;
    width: 100%;
`
export const SocialMediaWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1100px;
    margin: 40px auto;

    @media screen and (max-width: 820px){
        flex-direction: column;
    }
`
export const SocialLogo = styled(Link)`
    color: #fff;
    justify-self: start;
    cursor: pointer;
    display: flex;
    align-items: center;
   
`
export const WebsiteRights = styled.small`
    color:#fff;

    text-align: center;
`
export const SocialIcon = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 240px;
`

export const SocialIconLink = styled.a`
    color:#fff ;
    font-size: 24px;
`
