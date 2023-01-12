import React from "react";

import trigo from '../../Assets/Images/trigo.svg'

import {
    Container,
    ImageContainer, 
    Image,
    Content,
    Text, 
    ContentHistory,
    ContentImage,
    ContentContainer,

} from './style'


const History = () => {
    return(
        <Container>
           <ImageContainer>
                <Image src={trigo} alt="Imagem de um saco de trigo" />
           </ImageContainer>
           <Content>
                <Text>NOSSA HISTÓRIA</Text>
           </Content>

            <ContentContainer>
                <ContentHistory>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae eveniet sit nulla libero corrupti, beatae consectetur, maiores hic dolorum nam praesentium. Voluptate placeat in voluptatum, adipisci libero distinctio eos totam.
                </ContentHistory>
                <ContentImage src={trigo}>

                </ContentImage>
            </ContentContainer>
           
        </Container>
    )
}

export default History