import React from 'react'

import instagram from "../../../../Assets/Images/instagram.svg"

import {
    Container,
    Line,
    Text,
    Image,
    Overline,
    TextDescription,
    Description,
    Link
} from './style'

const BaseBoard = () => {

    return(
        <Container>
            <Overline>
                <Link href="https://www.instagram.com/cervejelas.tere/" target={"_blank"}>
                    <Image src={instagram} alt="Logo Instagram"/>
                    <Description>CervejElas</Description>
                </Link>
                <TextDescription>Todos os direitos reservados</TextDescription>
            </Overline>
            <Line/>
            <Text>&copy; SERRA JR. ENGENHARIA 2023</Text>
        </Container>
    )
}

export default BaseBoard;