/* eslint-disable jsx-a11y/alt-text */
import { slide as Menu } from 'react-burger-menu'
import { MenuHamburguerDiv, DivisonLine, OtherPages, UsuarioDiv, UsuarioDiv1, UsuarioImg, UsuarioName, StyledLink } from './styled';
import { Link } from 'react-router-dom';

type Props = {
    color: any,
}

export default function MenuHamburguer({color}: Props){
    return(
        <MenuHamburguerDiv>
             <Menu id='MenuHamburguer' width={'50%'} className='MenuHamburguer' customBurgerIcon={ <img src={color} />}>
                <UsuarioDiv>
                    <UsuarioDiv1>
                        <UsuarioImg src={require("../../assets/image/UserImg.png")}/>
                        <UsuarioName>Usuário</UsuarioName>
                    </UsuarioDiv1>
                    
                    <StyledLink to={'/ErroMenu'}><OtherPages>Editar dados</OtherPages> </StyledLink>
                    <DivisonLine/>

                    <OtherPages>Meus pedidos</OtherPages>
                    <DivisonLine/>

                    <OtherPages>Meus produtos</OtherPages>
                    <DivisonLine/>

                    <OtherPages>Meu carrinho</OtherPages>

                </UsuarioDiv>

            </Menu>
        </MenuHamburguerDiv>
    );
}