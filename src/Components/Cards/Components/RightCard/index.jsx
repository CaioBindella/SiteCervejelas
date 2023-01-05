import copo from "../../../../Assets/Images/copo.svg"
import { useState } from "react"
import Modal from "../Modal"

import { popUpData } from '../../../../Services/popUp'


import {
    LastContainer,
    FirstImageContainer,
    Image,
    Content,
    Title,
    TitleSmaller,
    GrayContainer,
    Button,
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
                <TitleSmaller>ATRAÇÕES</TitleSmaller>
                <GrayContainer>
                    <Button onClick={() => openModal(popUpData.dj)}>DJ’s &</Button>
                    <Button onClick={() => openModal(popUpData.palestras)}>PALESTRAS &</Button>
                    <Button onClick={() => openModal(popUpData.artistasVisuais)}>ARTISTAS VISUAIS &</Button>
                    <Button onClick={() => openModal(popUpData.livePainting)}>LIVE PAINTING &</Button>
                    <Button onClick={() => openModal(popUpData.tatto)}>TATUAGEM &</Button>
                    <Button onClick={() => openModal(popUpData.workshops)}>WORKSHOPS &</Button>
                    <Button onClick={() => openModal(popUpData.espacoKids)}>ESPAÇO KIDS.</Button>
                    <Button onClick={() => openModal(popUpData.conhecaEspaco)}>CONHEÇA O ESPAÇO</Button>

                    <Modal data={modalData} status={statusModal} setStatus={setStatusModal}/>
                </GrayContainer>
            </Content>
        </LastContainer>
    )
}

export default RightCard;