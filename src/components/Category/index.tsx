
import { CategoryType, ContainerCategory, ImgCategory } from "./style";

type category = {
    image: any,
    name: string,
}

export default function Category({image, name}: category){
    return(
        <ContainerCategory>
            <ImgCategory src={image}/>
            <CategoryType>{name}</CategoryType>
        </ContainerCategory>
    );
}