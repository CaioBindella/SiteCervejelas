import React, { useState } from 'react'
import ReactModal from 'react-modal'
import { 
    Container,
    Title, 
    Close, 
    Header,
    Content,
    Image,
    Attraction,
    Contact,
} from './style';


ReactModal.setAppElement('#root');

const Modal = ({status, setStatus, data}) =>{

    if(data){
        return(
            <ReactModal
                isOpen={status}
                onRequestClose={() => setStatus(false)}
                contentLabel="Example Modal"
                preventScroll={true}
                className="Modal"
                overlayClassName="Overlay"
            >
                <Container>
                    <Header>   
                        <Title>{data.activity}</Title>
                        <Close onClick={() => setStatus(false)}>X</Close>
                    </Header>
                    
                    <Content>
                        {data.attractions.map((eachData, key) => {
                            return(
                                <Attraction>
                                    {eachData.image ?
                                        <Image key={key} src={eachData.image} alt={eachData.name} />
                                        :
                                        null
                                    }
                                    <Contact>{eachData.contact}</Contact>
                                </Attraction>
                            )
                        })}
                        
                    </Content>
                </Container>
            </ReactModal>
        )
    }
    else{
        return null
    }
}
 
export default Modal