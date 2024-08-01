import styled from "styled-components"; 

export const RegisterDiv = styled.div`
    flex: 1;
    align-items: center;
   justify-content: center;

    overflow-x: hidden;
  
    
`

export const HeaderDiv = styled.header`
    border-bottom: 1px solid #858585;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 11%;
    gap: 16%;

    margin-bottom: 6%;
`

export const TitlePag = styled.h1`
    color: black;
    font-size: 1.5rem;
    font-weight: 600;

`

export const IconBack = styled.img`
    
`

export const LogoSocialMedia = styled.img`
    
`

export const DivisionLine = styled.hr`
  position: relative;
  outline: 0;
  color: black;
  border: 0;
  text-align: center;
  height: 1.5em;
  width: 75%;
  margin-top: 5%;
  margin-bottom: 13%;


    &:before {
        content: '';
        background: #2B2B2B;

        position: absolute;
        left: 0;
        top: 50%;
        width: 100%;
        height: 1px;
  }

  &:after {
    content: attr(data-content);
    position: relative;
    display: inline-block;
    color: black;

    padding: 0% 5% 0% 5%;
    line-height: 1.5em;
    // this is really the only tricky part, you need to specify the background color of the container element...
    color: #818078;
    background-color: #fcfcfa;
  }
    
`

export const SocialMediaDiv = styled.div`
    display: flex;
    flex-direction: row;

    gap:25%;
    margin-top: 10%;
    justify-content: center;
    
`

export const AreaForms = styled.form`
    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;
    gap: 1.1rem;
`