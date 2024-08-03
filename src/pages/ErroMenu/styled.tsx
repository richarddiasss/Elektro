import styled from "styled-components";
import { Link } from 'react-router-dom';

export const ErroMenuDiv = styled.div`
    flex: 1;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const TextTitleImg = styled.div`
    font-size: 2rem;
    font-weight: 600;
    text-align: center;
`

export const TextCadaster = styled.p`
    font-size: 1rem;
    font-weight: 400;
    text-align: center;
    word-break: break-all;
    width: 68%;
`

export const ImgErro = styled.img`
    
`
export const StyledLink = styled(Link)`
    color: black;
    text-decoration: none;

`