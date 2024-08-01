import styled from "styled-components";


export const InputDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    justify-content: center;
    border-bottom: 1.5px solid #B9B9B9;

`

export const InputS = styled.input`

    border: 0;
    margin: 2% 0% 1% 0%;
    outline: none;

    &::placeholder{
        color: #B9B9B9;
        font-size: 1.1rem;
    }

`

export const LabelInput = styled.label`
    background-color: white;
    font-size: 1.1rem;
   

    
`