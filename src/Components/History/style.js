import styled from "styled-components";
import { width } from "../../Services/config";


export const Container = styled.div`
    background-color: #fff;
    width: 65%;
    border-radius: 40px;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
    margin: 20px;

    @media screen and (max-width: ${width.mobile}) {    
        width: 80%;
        margin-top: -100px;
    }
    @media screen and (min-width: ${width.largeMobile}) and (max-width: ${width.tablet}) {    
        width: 80%;
        margin-top: -50px;
    }
    @media screen and (min-width: ${width.tablet}) and (max-width: ${width.notebook}) {    
        width: 85%;
    }
    @media screen and (min-width: ${width.notebook}) and (max-width: ${width.largeNotebook}) {  
        width: 80%;
    }
    @media screen and (min-width: ${width.largeNotebook}) and (max-width: ${width.desktop}) {  
        width: 70%;
    }
    @media screen and (min-width: ${width.largeDesktop}) and (max-width: ${width.extraLargeDesktop}) {  
        width: 45%;
    }
    
`;

export const ImageContainer = styled.div`
    background-color: var(--yellow);
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

    @media screen and (max-width: ${width.mobile}) {    
        width: 220px;
        height: 220px;
    }
    @media screen and (min-width: ${width.largeMobile}) and (max-width: ${width.tablet}) {    
        width: 220px;
        height: 220px;
    }
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 3%;
    margin-top: 7%;

    @media screen and (max-width: ${width.mobile}) {    
        margin-top: 15%;
    }
    @media screen and (min-width: ${width.largeMobile}) and (max-width: ${width.tablet}) {    
        margin-top: 8%;
    }
    @media screen and (min-width: ${width.tablet}) and (max-width: ${width.notebook}) {    
        margin-top: 8%;
    }
    
`;

export const Text = styled.p`
    text-align: center;
    color: var(--brown);
    font-size: var(--extra-large);
    line-height: 0.5;

    @media screen and (max-width: ${width.mobile}) {    
        font-size: var(--medium);
    }
    @media screen and (min-width: ${width.largeMobile}) and (max-width: ${width.tablet}) {    
        font-size: var(--medium);
    }
    @media screen and (min-width: ${width.tablet}) and (max-width: ${width.notebook}) {    
        font-size: var(--large);
    }
`;

export const ContentHistory = styled.p`

    width: 40%;

`;

export const ContentImage = styled.img`
    width: 200px;
    height: 200px;
`;

export const ContentContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 3%;
`;



