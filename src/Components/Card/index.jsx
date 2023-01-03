import React from "react";

import trigo from '../../Assets/Images/trigo.svg'
import Timer from "./Components/Timer";

import {
    Container,
    ImageContainer, 
    Image,
    Content,
    Text
} from './style'

const Card = () => {
    return(
        <Container>
           <ImageContainer>
                <Image src={trigo} alt="Imagem de um saco de trigo" />
           </ImageContainer>
           <Content>
                <Text>O MOMENTO DA EMPREENDEDORA</Text>
                <Text>CERVEJEIRA CHEGOU!</Text>
                <Timer />
           </Content>
           
        </Container>
    )
}

export default Card