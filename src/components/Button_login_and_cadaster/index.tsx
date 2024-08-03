import { ButtonContainer, StyledLink } from "./style";

export interface Props {
    colorWord: boolean;
    name: string;
    link: string,
  }

export const Button_login_and_cadaster = (props: Props) => {
    return(
       <StyledLink to={props.link}><ButtonContainer link={""} colorWord={props.colorWord} name={props.name}>{props.name}</ButtonContainer>  </StyledLink>
    );
}
