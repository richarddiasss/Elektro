import { Link } from "react-router-dom";
import styled from "styled-components";

export const RegisterDiv = styled.div`
    flex: 1;
    height: 100vh;
    align-items: center;
    justify-content: center;
    
    
`

export const HeaderDiv = styled.header`
    border-bottom: 1px solid #858585;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 4% 0% 4% 11%;
    gap: 16%;

    margin-bottom: 6%;
`

export const TitlePag = styled.h1`
    color: black;
    font-size: 1.5rem;
    font-weight: 600;
    margin: 0;

`

export const IconBack = styled.img`
    
`

export const ImgCadaster = styled.img`
    
`

export const TextCadaster = styled.p`
    color: black;
    font-size: 1.25rem;
    word-break: break-all;
    width: 65%;
    text-align: center;

    font-weight: 500;

`

export const ButtonCadaster = styled.button`
    background-color: #2B2B2B;
    color: white;
    font-size: 1.1rem;
    border-radius: 10px;
    padding: 4% 13%;
    border: 0;
    border-radius: 16px;
    outline: none;

    margin-top: 7%;

`

export const MainElementsCadaster = styled.main`
    display: flex;
    flex-direction: column;
     width: 100%;
    align-items: center;
    justify-content: center;
    margin-top: 20%;
`

export const LinkForLogin = styled.a`
    color: #0271A0;
    font-size: 1.1rem;
    margin-top: 50%;
    

`
export const StyledLink  = styled(Link)`
    width: 100%;
    height: 100%;
`