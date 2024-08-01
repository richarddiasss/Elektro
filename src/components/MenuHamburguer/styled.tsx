import styled from "styled-components";

export const MenuHamburguerDiv = styled.div`
.bm-burger-button {
  position: relative;
  width: 24px;
  height: 24px;
  
}

/* Color/shape of burger icon bars */
.bm-burger-bars {
  background: #373a47;
}

/* Color/shape of burger icon bars on hover*/
.bm-burger-bars-hover {
  background: #a90000;
}

/* Position and sizing of clickable cross button */
.bm-cross-button {
  height: 24px;
  width: 24px;
}

/* Color/shape of close button cross */

/*
Sidebar wrapper styles
Note: Beware of modifying this element as it can break the animations - you should not need to touch it in most cases
*/
.bm-menu-wrap {
  position: fixed;
  height: 100%;
}

/* General sidebar styles */
.bm-menu {
  background: white;
  font-size: 1.15em;
}

/* Morph shape necessary with bubble or elastic */
.bm-morph-shape {
  fill: #373a47;
}

/* Wrapper for item list */
.bm-item-list {
  color: #b8b7ad;
}

/* Individual item */
.bm-item {
  display: inline-block;
}

/* Styling of overlay */
.bm-overlay {
  background: rgba(0, 0, 0, 0.3);
  left: 0;
  top: 0%;
}

#MenuHamburguer{
    left: 0;
    top: 0;
}
`

export const IconMenuHamburguer = styled.img`
    
`

export const UsuarioDiv = styled.div`
    background-color: #2B2B2B;
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100px;
`

export const UsuarioDiv1 = styled.div`
    background-color: #2B2B2B;
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
    gap: 9%;
    height: 100px;
    
`
export const UsuarioName = styled.p`
    font-size: 1.3rem;
    font-weight: 600;
    color: white;
    margin: 0;

`

export const UsuarioImg = styled.img`
    margin-left: 5%;
`

export const OtherPages = styled.p`
    font-size: 1rem;
    color: #2B2B2B;
    margin: 10% 0% 10% 5%;
`
export const DivisonLine = styled.hr`
    color: #B9B9B9;
    border: 1px solid #494747;
    width: 90%;
  
`

