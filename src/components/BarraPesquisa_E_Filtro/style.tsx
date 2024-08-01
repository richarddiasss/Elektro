import styled from "styled-components";


const imgLupa = require("../../assets/image/circuito.jpg");

export const PesquisaFiltroDiv = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
    justify-content: center;

    gap: 10%;
    margin-bottom: 4%;
    
    
    
` 

export const InputPesquisa = styled.input`

    padding: 2% 8% 2% 1%;
    background-color: #1B1B1B;
    border: 0;
    outline: none;
   
    color: #B9B9B9;
    border-bottom: 2px solid white;
    
    font-size: 1rem;

    &::placeholder{
        color: #B9B9B9;
    }
`   

export const InputDiv = styled.div`
    display: flex;
    flex-direction: row;
    background-color: #1B1B1B;
    border-radius: 16px;
    padding: 2% 7% 2.5% 2%;


`

export const ImgLupa = styled.img`
    border-bottom: 2px solid white;
`

export const ImgFiltro = styled.img`
    

`

export const TextoFiltro = styled.p`
    font-size: 0.87rem;
    margin-top: 5px;
    margin-bottom: 0;
    
`

export const FiltroDiv = styled.div`
    display: flex;
    flex-direction: column;
`


