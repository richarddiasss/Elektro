
import styled from "styled-components";
import { photoTipo } from ".";
export const HomeDiv = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Header = styled.header`
    width: 100%;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    background-color: #2B2B2B;
    padding: 3.5%;
    gap: 20px;
    margin-bottom: 4%;
    border-radius: 0 0 15px 15px;
`

export const IconHearder = styled.img`

`

export const InputSearch = styled.input`
    width: 70%;
    height: 2.5rem;
    background-size: 20px;
    background-color: #F5F5F5;
    background-image: url(require("../../assets/image/Logo Elektro.png"));
    
    border-radius: 16px;
    border: 0;
    outline: none;

    font-size: 1.2rem;
    text-align: center;
    
    

`

export const Logo = styled.img`
    
`

export const CaroselDiv = styled.div `

`

export const WelcomeDiv = styled.div`
    display: flex;
    flex-direction: row;
    
    margin-bottom: 2%;
`

export const WelcomeText = styled.h1`
    color: #FF8F0E;
    font-size: 24px;
    font-weight: bold;
`

export const DivisionLine = styled.hr`
    border: 1.5px solid black;
    width: 95%;
    margin: 1% 0% 5% 0%;
`

export const DivisionLineCarosel = styled.hr`
    border: 1.5px solid black;
    width: 100%;
    margin: 1% 0% 5% 0%;
`

export const ImgPage = styled.img<photoTipo>`
    border-radius: ${props => props.active ? '50%' : '0'};
`

export const InfoText = styled.h2`
    font-size: 1rem;
    color:#000000;
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: flex-start;
    font-weight: 500;
    margin-bottom: 2%;

`

export const CategoryTypes = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 7%;
    
`

export const CategoryDiv = styled.section`

    width: 100%;
    display: flex;
    flex-direction: column;

    padding: 0% 9%;
`

export const SectionDiv = styled.section`

    width: 100%;
    display: flex;
    flex-direction: column;

    padding: 0% 0% 0% 9%;
    margin-bottom: 5%;
`

export const ProductsDiv = styled.section`
    display: flex;
    flex-direction: row;
    overflow-x: scroll;
    gap: 5%;
`

export const FooterDiv = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 230px;

    background-color: #FFAE50;
`

export const IconesRedesSocias = styled.img`
    
`
