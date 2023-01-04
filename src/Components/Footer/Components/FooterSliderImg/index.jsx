import React from "react";
import { Slide, SlideImg } from "./style";

const FooterSliderImg = ({image, altText}) =>{

    return(
        <Slide>
            <SlideImg src={image} alt={altText}/>
        </Slide>
    )
}

export default FooterSliderImg