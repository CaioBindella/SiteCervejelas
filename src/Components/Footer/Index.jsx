import React, { useState } from "react";

import FooterSlider from './Components/FooterSlider'
import { popUpData } from "../../Services/popUp";
import Modal from "../Cards/Components/Modal";
import BaseBoard from "./Components/BaseBoard";

import {
    Container,
    MarcaSerra,
} from './style'

const Footer = () => {

    const [statusModal, setStatusModal] = useState(false)
    const [modalData, setModalData] = useState()

    const openModal = (data) => {
        setStatusModal(!statusModal)
        setModalData(data)
    }

    return(
        <Container> 
            <MarcaSerra onClick={() => openModal(popUpData.desenvolvedores)}>Desenvolvedores do Site</MarcaSerra>
            {/* &copy; */}
            <FooterSlider />
            <BaseBoard />
            <Modal data={modalData} status={statusModal} setStatus={setStatusModal}/>
        </Container>
    )
}

export default Footer