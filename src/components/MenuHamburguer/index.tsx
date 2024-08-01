import { slide as Menu } from 'react-burger-menu'
import { MenuHamburguerDiv, DivisonLine, OtherPages, UsuarioDiv, UsuarioDiv1, UsuarioImg, UsuarioName } from './styled';


export default function MenuHamburguer(){
    return(
        <MenuHamburguerDiv>
             <Menu id='MenuHamburguer' width={'50%'} className='MenuHamburguer' customBurgerIcon={ <img src={require("../../assets/image/3BarrasB.png")} />}>
                <UsuarioDiv>
                    <UsuarioDiv1>
                        <UsuarioImg src={require("../../assets/image/UserImg.png")}/>
                        <UsuarioName>Usuário</UsuarioName>
                    </UsuarioDiv1>
                    
                    
                    <OtherPages>Editar dados</OtherPages>
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