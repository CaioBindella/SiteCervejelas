import React from "react";
import Countdown from "react-countdown";

import {
    Container,
    Time,
    TimeContainer,
    Text,
    TextSmall
} from './style.js'

const Timer = () => {

    const eventDay = new Date(2023, 0, 21, 0, 0, 0).getTime() - Date.now()

    const renderer = ({ days, hours, minutes, seconds }) => {
        return(
            <TimeContainer>
                <Time>
                    <Text>{days}</Text>
                    <TextSmall>DIAS</TextSmall>
                </Time>
                <Time>
                    <Text>{hours}</Text>
                    <TextSmall>HORAS</TextSmall>
                </Time>
                <Time>
                    <Text>{minutes}</Text>
                    <TextSmall>MINUTOS</TextSmall>
                </Time>
                <Time>
                    <Text>{seconds}</Text>
                    <TextSmall>SEGUNDOS</TextSmall>
                </Time>
            </TimeContainer>
        )
      };
    return(
        <Container>
            <Text>FALTAM APENAS</Text>
            <Countdown date={Date.now() + eventDay} renderer={renderer} />
        </Container>
    )
}

export default Timer