import { ButtonContainer } from "./style";

export interface Props {
    colorWord: boolean;
    name: string;
  }

export const Button_login_and_cadaster = (props: Props) => {
    return(
       <ButtonContainer colorWord={props.colorWord} name={props.name}>{props.name}</ButtonContainer> 
    );
}
