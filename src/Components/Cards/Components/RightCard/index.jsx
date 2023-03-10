import copo from "../../../../Assets/Images/copo.svg"
import brinde from "../../../../Assets/Images/brinde.svg"

import { useState } from "react"

import Modal from "../Modal"

import { popUpData } from '../../../../Services/popUp'


import {
    LastContainer,
    FirstImageContainer,
    Image,
    Content,
    Title,
    GrayContainer,
    Button,
    MinorImage
} from "./style"

const RightCard = () => {

    const [statusModal, setStatusModal] = useState(false)
    const [modalData, setModalData] = useState()

    const openModal = (data) => {
        setStatusModal(!statusModal)
        setModalData(data)
    }

    return(
        <LastContainer>
            <FirstImageContainer>
                <Image src={copo} alt="Copo de Cerveja"></Image>
            </FirstImageContainer>
            <Content>
                <Title>ATIVIDADES &</Title>
                <Title>ATRAÇÕES</Title>
                <GrayContainer>
                    <Button onClick={() => openModal(popUpData.cervejeiras)}>CERVEJEIRAS &</Button>
                    <Button onClick={() => openModal(popUpData.palestras)}>PALESTRAS &</Button>
                    <Button onClick={() => openModal(popUpData.livePainting)}>LIVE PAINTING &</Button>
                    <Button onClick={() => openModal(popUpData.tatto)}>TATUAGEM &</Button>
                    <Button onClick={() => openModal(popUpData.atracoes)}>ATRAÇÕES</Button>

                    <Modal data={modalData} status={statusModal} setStatus={setStatusModal}/>
                </GrayContainer>
                <MinorImage src={brinde} alt="Ícone de Evento"/>
            </Content>
        </LastContainer>
    )
}

export default RightCard;