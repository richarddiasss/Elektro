import { Link } from "react-router-dom";
import { CongratulationsDiv, ImgCongratulations, ImgNextPage, TextCongratulations, TitleCongratulations } from "./style";

export default function Congratulations(){
    return(
        <CongratulationsDiv>
            <ImgCongratulations src={require("../../assets/image/ImgCongratulations.png")}/>
            <TitleCongratulations>Parabéns, você conseguiu!</TitleCongratulations>
            <TextCongratulations>Bem-vindo ao time de usuários e colaboradores Elektro. </TextCongratulations>
            <Link to={'/Home'}> <ImgNextPage src={require("../../assets/image/NextPage.png")}/> </Link>
        </CongratulationsDiv>
    );
}