import styled from "styled-components";


export const Container = styled.div`
    background-color: #fff;
    width: 65%;
    border-radius: 40px;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
    margin: 20px;
    
`;

export const ImageContainer = styled.div`
    background-color: var(--light-brown);
    border-top-left-radius: 40px;
    border-top-right-radius: 40px;

    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
`;

export const Image = styled.img`
    width: 350px;
    height: 350px;

    overflow: visible;
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 3%;
    margin-top: 7%;
`;

export const Text = styled.p`
    text-align: center;
    color: var(--brown);
    font-size: var(--extra-large);
    line-height: 0.5;
`;


