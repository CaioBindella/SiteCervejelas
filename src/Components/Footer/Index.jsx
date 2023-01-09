import React from "react";

import FooterSlider from './Components/FooterSlider'

import {
    Container,
    MarcaSerra
} from './style'

const Footer = () => {
    return(
        <Container>
            <MarcaSerra>&copy; SERRA JR. ENGENHERIA 2023</MarcaSerra>
            <FooterSlider />
        </Container>
    )
}

export default Footer