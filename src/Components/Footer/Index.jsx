import React from "react";

import FooterSlider from './Components/FooterSlider'

import {
    Container,
    MarcaSerra
} from './style'

const Footer = () => {
    return(
        <Container>
            <MarcaSerra>SERRA JR. ENGENHERIA &copy;</MarcaSerra>
            <FooterSlider />
        </Container>
    )
}

export default Footer