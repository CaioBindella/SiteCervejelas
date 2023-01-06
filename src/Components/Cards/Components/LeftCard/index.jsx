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
    ImagePin,
    EdgeContainer,
    Button,
    DivColumnDown

} from "./style"

const LeftCard = () => { 
    
    return(
        <EdgeContainer>
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
                    <DivColumnDown>
                        <TextFirstCard>RUA ALFREDO REBELO FILHO, 660</TextFirstCard>
                        <Button target={"_blank"} href="https://www.instagram.com/p/Cet6147Fwjv/">CONHEÇA O ESPAÇO</Button>
                    </DivColumnDown>
                </DivFirstCard>
            
                <ImageSmaller src={beerGardenLogo}></ImageSmaller>

            </Content>
        </EdgeContainer>
    )
}

export default LeftCard;