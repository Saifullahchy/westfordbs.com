import styled from "styled-components";

export const ServicesContainer = styled.div`
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background:#8B0000;
    padding: 10px;
    @media screen and (max-width: 768px){
        max-height: 2400px;
    
    }
    
    @media screen and (max-width: 480px){
        max-height: 2400px;
    }
    
`

export const ServicesWrapper = styled.div`
    max-width: 1100px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap:15px;
    padding: 0 50px;

    @media screen and (max-width: 1000px){
        grid-template-columns: 1fr 1fr;
    }
    @media screen and (max-width: 768px){
        grid-template-columns: 1fr ;
        padding: 0 20px;
    }
`

export const ServicesCard = styled.div`
    background: #ffff;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    max-height: 400px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;

    &:hover{
        transform: scale(1.02);
        transition: all 0.2 ease-in-out;
        cursor: pointer;
    }
`

export const ServicesIcon = styled.img`
    height: 120px;
    width: 120px;
    margin-bottom: 10px;
`

export const ServicesH1 = styled.h1`
    font-size: 2.5rem;
    color: #fff;
    margin-top: 10px;
    margin-bottom: 10px;

    @media screen and (max-width: 480px){
        font-size: 2rem;
    }
`

export const ServicesH2 = styled.h2`
    font-size: 1.5rem;
    margin-bottom: 10px;
    text-align: center;
    text-align: ce;
    color: #f70000;
` 

export const ServicesP = styled.p`
    font-size:1rem;
    text-align: center;
    color: #0a0a0a;
    
`