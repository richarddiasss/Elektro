import Carosel from "../../components/Carosel";
import Category from "../../components/Category";
import MenuHamburguer from "../../components/MenuHamburguer";
import NavBar from "../../components/NavBar";
import { Produto } from "../../components/Produto";
import { Link } from 'react-router-dom';
import { CategoryDiv, DivInput, CategoryTypes, SectionDiv, DivisionLine, Header, HomeDiv, IconHearder, InfoText, InputSearch, Logo, ProductsDiv, WelcomeDiv, WelcomeText, FooterDiv, IconesRedesSocias, DivisionLineCarosel, StyledLink, ImgLupa} from "./style";

export interface photoTipo{
    active: boolean
}

export function Home(){

    return(
        <HomeDiv>
            <Header>
                <MenuHamburguer color={require('../../assets/image/3BarrasB.png')}/>
                <DivInput>
                    <ImgLupa src={require("../../assets/image/LupaPP.png")}/>
                    <StyledLink to={'/Pesquisa'}><InputSearch placeholder="Encontrar na Elektro"/> </StyledLink>

                </DivInput>
                <IconHearder src={require("../../assets/image/carrinho.png")} alt="3Barras"/>
            </Header>

            <WelcomeDiv>
                <Logo src={require("../../assets/image/Logo Elektro.png")}/>
                <WelcomeText>Bem-vindo à Elektro!</WelcomeText>

            </WelcomeDiv>

            <Carosel/>

            

            <CategoryDiv>
                <DivisionLineCarosel/> 
                 <InfoText>Categorias Elektro</InfoText>
                 <CategoryTypes>
                    <Category image={require("../../assets/image/iphone.png")} name="Celulares"/>
                    <Category image={require("../../assets/image/notebooks.png")} name="Notebooks"/>
                    <Category image={require("../../assets/image/tablet.png")} name="Tablets"/>
                    <Category image={require("../../assets/image/perifericos.png")} name="Periféricos"/>

                 </CategoryTypes>

                 <CategoryTypes>
                    <Category image={require("../../assets/image/tv.png")} name="TVs"/>
                    <Category image={require("../../assets/image/acessorios.png")} name="Acessórios"/>
                    <Category image={require("../../assets/image/pc.png")} name="PCs"/>
                    <Category image={require("../../assets/image/relogio.png")} name="Smartwatches"/>

                 </CategoryTypes>

            </CategoryDiv>

            
            <SectionDiv>

                <InfoText>Para você</InfoText>
                <DivisionLine/>
                <ProductsDiv>
                    <Produto image={require("../../assets/image/android_rosa.png")} name="Celular" price={100.10}/>
                    <Produto image={require("../../assets/image/android_preto.png")} name="Capa protetora " price={100.10}/>
                    <Produto image={require("../../assets/image/carregador.png")} name="Carregador" price={100.10}/>
                    <Produto image={require("../../assets/image/mousePad.png")} name="Mousepad" price={100.10}/>
                    <Produto image={require("../../assets/image/teclado.png")} name="Teclado" price={100.10}/> 
                </ProductsDiv>
            </SectionDiv>

            <SectionDiv>

                <InfoText>Produtos em destaque</InfoText>
                <DivisionLine/>
                <ProductsDiv>
                    <Produto image={require("../../assets/image/smartTV.png")} name="Smart TV" price={1400.00}/>
                    <Produto image={require("../../assets/image/smartTV2.png")} name="Smart TV" price={750.00}/>
                    <Produto image={require("../../assets/image/headSet.png")} name="Headset" price={250.00}/>
                    <Produto image={require("../../assets/image/tablet2.png")} name="Tablet" price={300.00}/>
                    <Produto image={require("../../assets/image/notebook2.png")} name="Notebook" price={900.00}/> 
                </ProductsDiv>
            </SectionDiv>

            <SectionDiv>

                <InfoText>Mais vendidos</InfoText>
                <DivisionLine/>
                <ProductsDiv>
                    <Produto image={require("../../assets/image/iphone2.png")} name="Smartphone" price={3200.00}/>
                    <Produto image={require("../../assets/image/smartWatch.png")} name="Smartwatch" price={900.00}/>
                    <Produto image={require("../../assets/image/mouse.png")} name="Mouse" price={50.00}/>
                    <Produto image={require("../../assets/image/fone_de_ouvido.png")} name="Fone de ouvido" price={50.00}/>
                    <Produto image={require("../../assets/image/caixa_de_som.png")} name="Caixa de som" price={300.00}/> 
                </ProductsDiv>
            </SectionDiv>
            
            <FooterDiv>
                <InfoText>Siga-nos nas redes sociais!</InfoText>
                <IconesRedesSocias src={require("../../assets/image/redesSociais.png")}/>
            </FooterDiv>

            <NavBar/>
        </HomeDiv>
    );
}