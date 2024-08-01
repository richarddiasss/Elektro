import styled from "styled-components";
import { TypeInformation } from ".";

export const ProdutoDiv = styled.div`
    display: flex;
    flex-direction: column;
    -webkit-box-shadow: 0px 20px 50px -17px rgba(0,0,0,0.34);
    -moz-box-shadow: 0px 20px 50px -17px rgba(0,0,0,0.34);
    box-shadow: 0px 20px 50px -17px rgba(0,0,0,0.34);
    border-radius: 20px;
`

export const ImgProduto = styled.img`
    
`

export const InfoDiv = styled.div`
    display: flex;
    flex-direction: column;
`

export const ImgLike = styled.img`
    width: 1.4rem;
    height: 1.4rem;;
`

export const DescriptionDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 4% 3%;
`

export const InfoText = styled.p<TypeInformation>`
    font-weight: ${props => props.active ? 'bold' : 400};
    font-size: 0.9rem;
    margin: 0;
    
`