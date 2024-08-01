/* eslint-disable eqeqeq */
import styled from "styled-components";
import { Props } from ".";

export const ButtonContainer = styled.button<Props>`
    background-color: ${props => props.colorWord ? 'white' : '#2B2B2B'};
    color: ${props => props.colorWord ? 'black' : 'white'};

    font-size: 1.1rem;
    border-radius: 10px;
    padding: 4% 13%;
    border: 0;
    border-radius: 16px;
    outline: none;

    margin-top: 7%;
`