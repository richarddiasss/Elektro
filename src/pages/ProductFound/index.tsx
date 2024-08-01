import { text } from "stream/consumers";
import BarraPesquisa_E_Filtro from "../../components/BarraPesquisa_E_Filtro";
import HeaderPesquisa from "../../components/HeaderPesquisa";
import NavBar from "../../components/NavBar";
import { PageDiv, ProductsDiv } from "./style";
import { Produto } from "../../components/Produto";

const Products = [
    {img: require("../../assets/image/TVLG.png"), price: 2000, name: "TV LG"},
    {img: require("../../assets/image/TVSg.png"), price: 1400, name: "TV Samsung"},
    {img: require("../../assets/image/TVTCL.png"), price: 1000, name: "TV TCL"},
    {img: require("../../assets/image/TVSemp.png"), price: 1200, name: "TV Semp"},
    {img: require("../../assets/image/TVAOC.png"), price: 1300, name: "TV AOC"},
    {img: require("../../assets/image/TVPH.png"), price: 1400, name: "TV Philips"}

]
export default function ProductFound(){
    return(
        <PageDiv>
            <HeaderPesquisa/>
            <BarraPesquisa_E_Filtro photo={require("../../assets/image/FilterIcon.png")}/>
            
            <ProductsDiv>
                {Products.map(product => {
                    return <Produto image={product.img} name={product.name} price={product.price}/>
                })}
            </ProductsDiv>

            <NavBar/>

        </PageDiv>      
    );
}