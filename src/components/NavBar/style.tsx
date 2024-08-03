import styled from "styled-components";
import {Link} from "react-router-dom";

export const NavBarDiv = styled.div`
    background-color:#2B2B2B;
    width: 100%;
    position: fixed;
    bottom: 0;
    overflow-x: hidden;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;

   padding-top: 2%;
   padding-bottom: 2%;

`

export const TextIcon = styled.p`
    font-size: 0.87rem;
    color: white;
    margin: 0;
`

export const ImgIcon = styled.img`
    
`

export const IconDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 6px;
`

export const StyledLink = styled(Link)`
    color: white;
    text-decoration: none;
`