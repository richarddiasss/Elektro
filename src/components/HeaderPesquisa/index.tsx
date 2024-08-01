import { IconHearder } from "../../pages/Home/style";
import { HeaderDiv, TextHeader } from "./style";

export default function HeaderPesquisa(){
    return(
        <HeaderDiv>
            <IconHearder src={require("../../assets/image/3BarrasP.png")}/>
            <TextHeader>Pesquisa</TextHeader>
            <IconHearder src={require("../../assets/image/Usuario.png")}/>
        </HeaderDiv>
    );
}