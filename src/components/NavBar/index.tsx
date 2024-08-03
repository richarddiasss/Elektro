import { IconDiv, ImgIcon, NavBarDiv, StyledLink, TextIcon } from "./style";
import { Link } from 'react-router-dom';

export default function NavBar(){
    return(
        <NavBarDiv>
            <IconDiv>
                <ImgIcon src={require("../../assets/image/Ícones_casinha.png")}/>
                <StyledLink to={'/Home'}> <TextIcon>Home</TextIcon> </StyledLink>
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