import { IconDiv, ImgIcon, NavBarDiv, TextIcon } from "./style";

export default function NavBar(){
    return(
        <NavBarDiv>
            <IconDiv>
                <ImgIcon src={require("../../assets/image/Ícones_casinha.png")}/>
                <TextIcon>Home</TextIcon>
            </IconDiv>

            <IconDiv>
                <ImgIcon src={require("../../assets/image/Ícones_chat.png")}/>
                <TextIcon>Chat</TextIcon>
            </IconDiv>

            <IconDiv>
                <ImgIcon src={require("../../assets/image/Ícones__sino.png")}/>
                <TextIcon>Avisos</TextIcon>
            </IconDiv>

            <IconDiv>
                <ImgIcon src={require("../../assets/image/Ícones_perfil.png")}/>
                <TextIcon>Perfil</TextIcon>
            </IconDiv>
        </NavBarDiv>
    );
}