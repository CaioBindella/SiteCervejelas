import Card from "../Card/index";

import objetivo from "../../Assets/Images/objetivo.svg"
import copo from "../../Assets/Images/copo.svg"
import trigo from "../../Assets/Images/trigo.svg"

import { 
    Container,
    ImageContainer,
    Image,
    Content,
    Text,
    Title,
    TitleSmaller,
    GrayContainer
} from "./styles";

const Card = () => {
    return(
        <Container>
            <ImageContainer>
                <Image src={props.image} alt="Card"></Image>
            </ImageContainer>
            <Content>
                <Title>{props.title}</Title>
                <TitleSmaller>{props.titleSmaller}</TitleSmaller>

                <GrayContainer>
                    <Text>{props.text}</Text>
                </GrayContainer>
            </Content>

        </Container>
    )
}

export default Card;