import copo from "../../../../Assets/Images/copo.svg"

import {
    LastContainer,
    FirstImageContainer,
    Image,
    Content,
    Title,
    TitleSmaller,
    GrayContainer,
    Button
} from "./style"

const RightCard = () => {
    return(
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
    )
}

export default RightCard;