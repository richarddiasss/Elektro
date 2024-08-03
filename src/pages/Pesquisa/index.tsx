/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/jsx-pascal-case */
import BarraPesquisa_E_Filtro from "../../components/BarraPesquisa_E_Filtro";
import HeaderPesquisa from "../../components/HeaderPesquisa";
import NavBar from "../../components/NavBar";
import ProductsSugestion from "../../components/ProductsSugestion";
import { DivisionLine, IconCancel, PesquisaDiv, ProdutoPesquisado, StyledLink, TextDeleteSearch, TextoProduto, TextSugestion } from "./style";
import { Link } from 'react-router-dom';


const sugestions = [

    {img: require("../../assets/image/IphoneS.png"), text: "Celulares"},
    {img: require("../../assets/image/teclado(2).png"), text: "Teclados"},
    {img: require("../../assets/image/monitoresS.png"), text: "Monitores"},
]

export default function Pesquisa(){
    return(
        <PesquisaDiv>
            <HeaderPesquisa/>
            <BarraPesquisa_E_Filtro photo={require("../../assets/image/GoogleIcon.png")}/>
            <NavBar/>

            <ProdutoPesquisado>
                <TextoProduto>Monitor</TextoProduto>
                <IconCancel src={require("../../assets/image/IconCancel.png")}/>
            </ProdutoPesquisado>

            <ProdutoPesquisado>
                <StyledLink to={'/ProductFound'}>  <TextoProduto>Smart TV</TextoProduto> </StyledLink>
                <IconCancel src={require("../../assets/image/IconCancel.png")}/>
            </ProdutoPesquisado>

            <ProdutoPesquisado>
                <TextoProduto>Mousepad</TextoProduto>
                <IconCancel src={require("../../assets/image/IconCancel.png")}/>
            </ProdutoPesquisado>

            <DivisionLine/>

            <TextDeleteSearch>Apagar Histórico de Pesquisa</TextDeleteSearch>

            <TextSugestion>Sugestão de busca</TextSugestion>

            {sugestions.map((sugestion) => {
                return <ProductsSugestion TextS={sugestion.text} imageS={sugestion.img}/>;
            })}

        </PesquisaDiv>
    );
}