import { Button_login_and_cadaster } from "../../components/Button_login_and_cadaster";
import PatternInput from "../../components/PatternInput";
import { AreaForms, DivisionLine, HeaderDiv, IconBack, LogoSocialMedia, RegisterDiv, SocialMediaDiv, TitlePag } from "./style"

export default function Register2(){
    return(
        <RegisterDiv>
            <HeaderDiv>
                
                <IconBack src={require("../../assets/image/voltar.png")}/>
                <TitlePag>Cadastrar-se</TitlePag>

            </HeaderDiv>

            <SocialMediaDiv>
                <LogoSocialMedia src={require("../../assets/image/LogoFace.png")}/>
                <LogoSocialMedia src={require("../../assets/image/LogoGoogle.png")}/>

            </SocialMediaDiv>

            <DivisionLine data-content="ou"/>

            <AreaForms>
                <PatternInput name="Nome" placeholder="Digite seu nome completo"/>
                <PatternInput name="CPF" placeholder="Digite seu CPF"/>
                <PatternInput name="Telefone" placeholder="Digite seu telefone"/>
                <PatternInput name="E-mail" placeholder="Digite seu e-mail"/>
                <PatternInput name="Senha" placeholder="Digite sua senha"/>
                <PatternInput name="Confirme sua senha" placeholder="Confirme sua senha"/>
                <Button_login_and_cadaster colorWord={false} name="Cadastrar-se!"/>
            </AreaForms>

            
        

            
            

        </RegisterDiv>
           
    );
}