import { ImgSugestion, SugestionDiv, TextSugestion } from "./style";

type Props = {
    imageS: any,
    TextS: string,
}

export default function ProductsSugestion({imageS, TextS}: Props){
    return(
        <SugestionDiv>
            <ImgSugestion src={imageS}/>
            <TextSugestion>{TextS}</TextSugestion>
        </SugestionDiv>
    );
}