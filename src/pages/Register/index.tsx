import { Link } from "react-router-dom";
import { Button_login_and_cadaster } from "../../components/Button_login_and_cadaster";
import { Header } from "../Home/style";
import { ButtonCadaster, HeaderDiv, IconBack, ImgCadaster, LinkForLogin, MainElementsCadaster, RegisterDiv, TextCadaster, TitlePag } from "./style"

export default function Register(){
    return (
        <RegisterDiv>
            <HeaderDiv>
                <Link to={'/ErroMenu'}> <IconBack src={require("../../assets/image/voltar.png")}/> </Link>
                <TitlePag>Cadastrar-se</TitlePag>

            </HeaderDiv>

            <MainElementsCadaster>
                <ImgCadaster src={require("../../assets/image/imageLogin.png")}/>
                <TextCadaster>Faça parte do nosso time. Cadastre-se!</TextCadaster>
                <Button_login_and_cadaster colorWord={false} name={"Cadastre-se!"} link="/Register2"/> 
                
                <LinkForLogin href="">Já possui cadastro? Faça Login!</LinkForLogin>
            
            </MainElementsCadaster>
            
        </RegisterDiv>
    );
}