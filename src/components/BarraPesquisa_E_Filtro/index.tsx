import { FiltroDiv, ImgFiltro, ImgLupa, InputDiv, InputPesquisa, PesquisaFiltroDiv, TextoFiltro } from "./style";

type Props = {
    photo: any,
}

export default function BarraPesquisa_E_Filtro({photo}: Props){
    return(
        <PesquisaFiltroDiv>
            <InputDiv>
                <ImgLupa src={require("../../assets/image/LupaB.png")}/>
                <InputPesquisa placeholder="Encontrar na Elektro"/>
            </InputDiv>

            <FiltroDiv>
                <ImgFiltro src={photo}/>
                <TextoFiltro>Filtro</TextoFiltro>
            </FiltroDiv>

        </PesquisaFiltroDiv>
    );
}