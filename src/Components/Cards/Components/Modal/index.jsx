import React, { useState } from 'react'
import ReactModal from 'react-modal'
import { 
    ModalLine, 
    ModalContainer,
    ModalTitle, 
    ModalCrossButton, 
    ModalH2, 
    ModalHeader, 
} from './style';


ReactModal.setAppElement('#root');

const Modal = ({status, setStatus, data}) =>{

    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          width: '30vw',
          height: '40vh',
          color: '#001830',
          paddingTop: 0,
        },

        overlay: {
            backgroundColor: '#00000028',
        }
      };

    if(data){
        return(
            <ReactModal
                isOpen={status}
                onRequestClose={() => setStatus(false)}
                contentLabel="Example Modal"
                style={customStyles}
            >
                <ModalContainer>
                    <ModalHeader>
                        <ModalTitle>    
                            <h1>{data.name}</h1>
                            <ModalCrossButton onClick={() => setStatus(false)}>X</ModalCrossButton>
                        </ModalTitle>

                        <ModalLine />
                    </ModalHeader>
                    
                    <ModalH2>Resumo do projeto</ModalH2>
                </ModalContainer>
            </ReactModal>
        )
    }
    else{
        return null
    }
}
 
export default Modal