import objetivo from "../../../../Assets/Images/objetivo.svg"

import {
    Container,
    ImageContainer,
    Image,
    Content,
    Title,
    Text
} from "./style"

const MiddleCard = () => {
    return(
        <Container>
            <ImageContainer>
                <Image src={objetivo} alt="Objetivo Card"></Image>
            </ImageContainer>
                <Content>
                    <Title>NOSSOS</Title>
                    <Title>OBJETIVOS</Title>
                    
                    <Text>Promever e valorizar a cultura cervejeitra realizada por mulheres da Região Serrana do Estado do Rio de Janeiro, ampliando a percepção do público sobre o consumo e produção da bebida independente do gênero.</Text>
                </Content>
        </Container>
    )
}

export default MiddleCard;