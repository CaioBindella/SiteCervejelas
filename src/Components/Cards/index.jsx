import objetivo from "../../Assets/Images/objetivo.svg"
import copo from "../../Assets/Images/copo.svg"
import trigo from "../../Assets/Images/trigo.svg"
import trigoVerde from "../../Assets/Images/TrigoVerde.svg"
import beerGardenLogo from "../../Assets/Images/beerGardenLogo.svg"
import Pin from "../../Assets/Images/locationPin.svg"


import { 
    Container,
    ImageContainer,
    FirstImageContainer,
    Image,
    Content,
    Text,
    Title,
    TitleSmaller,
    GrayContainer,
    StyledDiv,
    ImagePin,
    TitleSmallerFisrtaCard,
    TextFirstCard,
    LastContainer,
    Button,
    DivFirstCard,
    DivRow,
    DivColumn,
    ImageSmaller

} from "./styles";

const Cards = () => {
    return(
        <StyledDiv>
            {/* primeiro card */}
            <Container>
                <FirstImageContainer>
                    <Image src={trigoVerde} alt="Trigo Verde image"></Image>
                </FirstImageContainer>
                <Content>
                    <Title>NOSSO PONTO DE </Title>
                    <TitleSmaller>ENCONTRO É...</TitleSmaller>

                    <DivFirstCard>
                        <DivRow>
                            <ImagePin src={Pin} alt="Location Pin Image"/>
                            <DivColumn>
                                <TitleSmallerFisrtaCard>BEER</TitleSmallerFisrtaCard>
                                <TitleSmallerFisrtaCard>GARDEN</TitleSmallerFisrtaCard>
                            </DivColumn>
                        </DivRow>
                        <DivRow>
                            <TextFirstCard>RUA ALFREDO REBELO FILHO, 660</TextFirstCard>
                        </DivRow>
                    </DivFirstCard>
                    
                    <ImageSmaller src={beerGardenLogo}></ImageSmaller>
                </Content>
            </Container>

            {/* segundo card */}
            <Container>
                <ImageContainer>
                    <Image src={objetivo} alt="Objetivo Card"></Image>
                </ImageContainer>
                <Content>
                    <Title>NOSSOS</Title>
                    <TitleSmaller>OBJETIVOS</TitleSmaller>

                    {/* <GrayContainer> */}
                        <Text>Promever e valorizar a cultura cervejeitra realizada por mulheres da Região Serrana do Estado do Rio de Janeiro, ampliando a percepção do público sobre o consumo e produção da bebida independente do gênero.</Text>
                    {/* </GrayContainer> */}
                </Content>
            </Container>

            {/* terceiro card */}
            <LastContainer>
                <FirstImageContainer>
                    <Image src={copo} alt="Copo de Cerveja"></Image>
                </FirstImageContainer>
                <Content>
                    <Title>ATIVIDADES &</Title>
                    <TitleSmaller>ATRAÇÕES</TitleSmaller>
                    <GrayContainer>
                        <Button>DJ’s &</Button>
                        <Button>PALESTRAS &</Button>
                        <Button>ARTISTAS VISUAIS &</Button>
                        <Button>LIVE PAINTING &</Button>
                        <Button>TATUAGEM &</Button>
                        <Button>WORKSHOPS &</Button>
                        <Button>ESPAÇO KIDS.</Button>
                    </GrayContainer>
                </Content>
            </LastContainer>
        </StyledDiv>
    )
}

export default Cards;