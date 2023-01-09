import styled from "styled-components";
import { width } from "../../../../Services/config";

export const Container = styled.div`
    display: flex;
    flex-direction: column;

`;

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #D9C1AF;
    border-top-left-radius: 40px;
    border-top-right-radius: 40px;
    height: 80px;
    position: sticky;
    top: 0;
`;

export const Title = styled.h1`
    width: 90%;
    font-size: var(--medium);
    text-align: center;
    color: var(--brown);
`;

export const Close = styled.button`
    background-color: #fff;
    border: 1px solid var(--brown);
    font-size: 20px;
    width: 40px;
    height: 40px;
    margin-right: 20px;
    border-radius: 20px;
    color: var(--brown);
    background-color: var(--light-brown);
    &:hover{
        border: 1px solid #fff;
        background-color: #E54746;
        transition: 0.3s;
        color: #fff;
        cursor: pointer;
    }
    /* @media screen and (max-width: ${width.largeMobile}){
        width: 30px;
        height: 30px;
        border-radius: 15px;
    }
    @media screen and (min-width: ${width.largeDesktop}){
        width: 60px;
        height: 60px;
        border-radius: 30px;
    }
    @media screen and (min-width: ${width.extraLargeDesktop}){
        width: 80px;
        height: 80px;
        border-radius: 40px;
    } */
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: var(--white);
    
    
    border-bottom-left-radius: 40px;
    border-bottom-right-radius: 40px;
`;

export const Attraction = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const Image = styled.img`
    width: 15vw;

    @media screen and (max-width: ${width.mobile}) {    
        width: 40vw;
    }
    @media screen and (min-width: ${width.largeMobile}) and (max-width: ${width.tablet}) {    
        width: 30vw;
    }
`;

export const Contact = styled.div`
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: var(--small);
    color: #000;
    margin: 20px;

    @media screen and (max-width: ${width.mobile}) {    
        font-size: var(--extra-small);
    }
    @media screen and (min-width: ${width.largeMobile}) and (max-width: ${width.tablet}) {    
        font-size: var(--extra-small);
    }
    @media screen and (min-width: ${width.tablet}) and (max-width: ${width.notebook}) {    
        font-size: var(--extra-small);
    }
`;