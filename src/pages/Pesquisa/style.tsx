import styled from "styled-components";

export const PesquisaDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
` 

export const ProdutoPesquisado = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    gap: 32%;

`

export const TextoProduto = styled.p`
    font-size: 0.87rem;
    
`

export const IconCancel = styled.img`
    
`

export const DivisionLine = styled.hr`
    width: 80%;
    border: 4% solid black;

 `

 export const TextDeleteSearch = styled.p`
    color: #0271A0;
    font-size: 0.87rem;
    border-bottom: 1px solid #0271A0;

 `

 export const TextSugestion = styled.p`
    background: #2B2B2B;

    color: white;
    font-size: 0.87rem;

    position: relative;
    right: 21%;

    padding: 2% 6% 2% 2%;
    border-radius: 16px;

 `