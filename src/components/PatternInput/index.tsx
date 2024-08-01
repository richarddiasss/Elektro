import { Placeholder } from "react-bootstrap";
import { InputDiv, InputS, LabelInput } from "./style";

type Props = {
    name: string,
    placeholder: string,
}

export default function PatternInput(props:Props){

    return(
        <InputDiv>
            <LabelInput>{props.name}</LabelInput>
            <InputS placeholder={props.placeholder}/>
        </InputDiv>
    );
    
}