import { Link } from "react-router-dom";
import { Button_login_and_cadaster } from "../../components/Button_login_and_cadaster";
import NavBar from "../../components/NavBar";
import { ErroMenuDiv, ImgErro, TextCadaster, TextTitleImg } from "./styled";

 export default function ErroMenu(){

    return(
        <ErroMenuDiv>
            <TextTitleImg>Opsss...</TextTitleImg>
            <ImgErro src={require("../../assets/image/Error.png")}/>
            <TextCadaster>Infelizmente, parece que você ainda não está logado.</TextCadaster>
            <Button_login_and_cadaster colorWord={false} name="Cadastrar" link="/Register"/>
            <Button_login_and_cadaster colorWord={true} name="Fazer login" link="/ErroMenu"/>
            <NavBar/>
        </ErroMenuDiv>
    );
 }