import trigoVerde from "../../../../Assets/Images/trigoVerde.svg"
import Pin from "../../../../Assets/Images/locationPin.svg"
import beerGardenLogo from "../../../../Assets/Images/beerGardenLogo.svg"

import { 
    Container,
    FirstImageContainer,
    Image,
    Content,
    Title,
    TitleSmaller,
    DivFirstCard,
    DivRow,
    DivColumn,
    TitleSmallerFisrtaCard,
    ImageSmaller,
    TextFirstCard,
    ImagePin
} from "./style"

const LeftCard = () => {
    return(
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
    )
}

export default LeftCard;