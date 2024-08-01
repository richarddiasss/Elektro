import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import Carousel from 'react-bootstrap/Carousel';
import { CaroselDiv, ImgCarrossel } from "./style";


export default function Carosel(){
    return (
        <CaroselDiv>
            <Carousel controls={false} fade>
                
                <Carousel.Item interval={1500}>
                    <ImgCarrossel src={require('../../assets/image/eletronicos.png')} alt="eletronicos"/>
                    

                </Carousel.Item>
                <Carousel.Item interval={1000} >
                    <ImgCarrossel src={require("../../assets/image/circuito.jpg")} alt="placa-mãe"/>
                

                </Carousel.Item>

                <Carousel.Item interval={1000} >
                <ImgCarrossel src={require('../../assets/image/eletronicos2.jpg')} alt="fotoEletronicos2"/>

                </Carousel.Item>

            </Carousel>


        </CaroselDiv>
    );
}