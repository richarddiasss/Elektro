import { IconHearder } from "../../pages/Home/style";
import MenuHamburguer from "../MenuHamburguer";
import { HeaderDiv, TextHeader } from "./style";


export default function HeaderPesquisa(){
    return(
        <HeaderDiv>
            <MenuHamburguer color={require('../../assets/image/3BarrasP.png')}/>
            <TextHeader>Pesquisa</TextHeader>
            <IconHearder src={require("../../assets/image/Usuario.png")}/>
        </HeaderDiv>
    );
}