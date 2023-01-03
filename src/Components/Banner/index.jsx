import React from "react";

import cervejelasIcon from '../../Assets/Images/cervejelasIcon.svg'
import linha from '../../Assets/Images/linha.svg'
import cerveja from '../../Assets/Images/cerveja.svg'

import {
    Container,
    Header,
    Logo,
    LowHeader,
    LineIcon,
    BeerIcon
} from './style'

const Banner = () => {
    return(
        <Container>
            <Header>
                <Logo src={cervejelasIcon} alt="Logo Cervejelas" />
            </Header>

            <LowHeader>
                <LineIcon src={linha} alt="Cervejelas 2023" />
                <BeerIcon src={cerveja} alt="Cervejelas 2023" />
            </LowHeader>
        </Container>
    )
}

export default Banner