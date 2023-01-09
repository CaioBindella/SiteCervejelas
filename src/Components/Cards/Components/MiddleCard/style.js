import styled from "styled-components"
import { width } from "../../../../Services/config";

export const Container = styled.div`
    background-color: #fff;
    width: 25%;
    border-radius: 40px;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
    margin: 20px;
    margin-top: 5%;
    height: 20%;

    @media screen and (max-width: ${width.mobile}) {    
        width: 80vw;
        margin-top: 10%;
    }
    @media screen and (min-width: ${width.largeMobile}) and (max-width: ${width.tablet}) {    
        width: 80vw;
        margin-top: 10%;
    }
    @media screen and (min-width: ${width.tablet}) and (max-width: ${width.notebook}) {    
        width: 85vw;
        margin-top: 10%;
    }
    @media screen and (min-width: ${width.notebook}) and (max-width: ${width.desktop}) {    
        width: 27%;
        height: 20%;
    }
`;

export const ImageContainer = styled.div`
    background-color: #E54746;
    border-top-left-radius: 40px;
    border-top-right-radius: 40px;

    display: flex;
    justify-content: center;
    align-items: center;
    height: 80px;
`;

export const Image = styled.img`
    width: 220px;
    height: 220px;

    overflow: visible;
    margin-bottom: 20px;

`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 3%;
    margin-top: 10%;
`;

export const Title = styled.p`
    text-align: center;
    color: var(--brown);
    font-size: var(--extra-large);
    line-height: 0.5;

    @media screen and (max-width: ${width.mobile}) {    
        font-size: var(--large);
    }
    @media screen and (min-width: ${width.largeMobile}) and (max-width: ${width.tablet}) {   
        font-size: var(--large);
    }
    @media screen and (min-width: ${width.tablet}) and (max-width: ${width.notebook}) {    
        font-size: var(--large);
        margin-top: 0px;
    }
    @media screen and (min-width: ${width.notebook}) and (max-width: ${width.largeNotebook}) {    
        font-size: var(--large);
        margin-top: 0px;
    }
`;

export const Text = styled.p`
    text-align: center;
    color: var(--brown);
    font-size: 30px;
    width: 80%;
    background-color: #D9D9D9;
    padding: 5%;
    border-radius: 20px;
    margin: 3%;
    font-family: 'Inter';

    @media screen and (max-width: ${width.mobile}) {    
        width: 80%;
        text-align: center;
        font-size: var(--small);
    }

    @media screen and (min-width: ${width.largeMobile}) {    
        width: 80%;
        text-align: center;
        font-size: var(--small);
    }
`;

