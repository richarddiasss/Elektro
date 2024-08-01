import React from "react";
import { DescriptionDiv, ImgLike, ImgProduto, InfoDiv, InfoText, ProdutoDiv } from "./style";

type InfoProduto = {
    image: any,
    name: string,
    price: number
}

export type TypeInformation = { 
    active: boolean
}

let imgHeart;

export function Produto({image, name, price}: InfoProduto){
    const [liked, setLiked] = React.useState(false)
    if(liked){
        imgHeart = require("../../assets/image/coracaoP.png");
    }else{
        imgHeart = require("../../assets/image/coracao.png");
    }
    
    return(
        <ProdutoDiv>
            <ImgProduto src={image}/>
            <DescriptionDiv>
                <InfoDiv>
                    <InfoText active={false}>{name}</InfoText>
                    <InfoText active={true}>R${price}</InfoText>
                </InfoDiv>
                <ImgLike src={imgHeart} onClick={() => setLiked(!liked)}/>
            </DescriptionDiv>
        </ProdutoDiv>
    );

}