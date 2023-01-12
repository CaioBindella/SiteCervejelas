import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import { historyData } from '../../Services/history'

import {
    Container,
    Wrapper,
    Content,
    Logo,
    SliderContainer,
    Title,
    Text,
    Circle,
    DivRow
} from "./style"


const Carousel = () => {    
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
    };

    return(
        <SliderContainer>
            <Slider {...settings}>
                { historyData.map((item, key) => {

                    return (
                        <Container key={key}>
                            <Wrapper>
                                <Title>História da Cerveja</Title>
                                <Content>
                                    <Circle>{item.circle}</Circle>
                                    <DivRow>
                                        <Logo src={item.image} alt={item.text}/>
                                        <Text>{item.text}</Text>
                                    </DivRow>
                                </Content>
                            </Wrapper>
                        </Container>
                    )
                })}
            </Slider>
        </SliderContainer>
    )
}

export default Carousel