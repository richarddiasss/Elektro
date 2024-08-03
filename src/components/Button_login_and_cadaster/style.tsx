/* eslint-disable eqeqeq */
import styled from "styled-components";
import { Props } from ".";
import { Link } from 'react-router-dom';

export const ButtonContainer = styled.button<Props>`

    width: 80%;

    background-color: ${props => props.colorWord ? 'white' : '#2B2B2B'};
    color: ${props => props.colorWord ? 'black' : 'white'};
    -webkit-box-shadow: 0px 0px 16px 1px rgba(0,0,0,0.45);
    -moz-box-shadow: 0px 0px 16px 1px rgba(0,0,0,0.45);
    box-shadow: 0px 0px 16px 1px rgba(0,0,0,0.45);
    

    font-size: 1.1rem;
    border-radius: 10px;
    padding: 4% 13%;
    border: 0;
    border-radius: 16px;
    outline: none;

    align-self: center;
    align-content: center;
    align-items: center;

    margin-top: 7%;
    margin-left: 10%;
`

export const StyledLink = styled(Link)`
    color: black;
    text-decoration: none;
    width: 60%;
    
    

    

`