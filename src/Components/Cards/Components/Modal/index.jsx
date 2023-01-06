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

    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          width: '30vw',
          height: '50vh',
          color: '#001830',
          paddingTop: 0,
          backgroundColor: 'transparent',
          borderRadius: 70,
          border: 0,
          padding: 0,
        },

        overlay: {
            backgroundColor: '#0000003c',
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
                <Container>
                    <Header>   
                        <Title>{data.activity}</Title>
                        <Close onClick={() => setStatus(false)}>X</Close>
                    </Header>
                    
                    <Content>
                        {data.attractions.map((eachData, key) => {
                            return(
                                <Attraction>
                                    <Image key={key} src={eachData.image} alt={eachData.name} />
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