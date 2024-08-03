import { ImgPage, NameApp, PageDiv } from "./style";
import { useNavigate } from "react-router-dom";
import Router from "../../routes/Routes";
import { useEffect } from "react";


export default function InitialPage(){

    const navigate = useNavigate();

    useEffect(() => {
        const timer = window.setTimeout(() => {
            navigate('/Home');
        }, 5000);

        // Limpa o timer quando o componente é desmontado
        return () => clearTimeout(timer);
    }, [navigate]);

    return(
        <PageDiv>
            <ImgPage src={require("../../assets/image/Logo Elektro (1).png")}/>
            <NameApp>Elektro</NameApp>
        </PageDiv>

    );
}