import styled from "styled-components";
import { width } from "../../Services/config";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 10%;

    @media screen and (max-width: ${width.mobile}) {    
        margin-top: 0px;
    }

    @media screen and (min-width: ${width.largeMobile}) and (max-width: ${width.tablet}) { 
        margin-top: 0px;
    }

    @media screen and (min-width: ${width.tablet}) and (max-width: ${width.notebook}) {
        margin-top: 3%;    
    }
    @media screen and (min-width: ${width.notebook}) and (max-width: ${width.largeNotebook}) {    
        margin-top: 0px; 
    }
    @media screen and (min-width: ${width.desktop}) and (max-width: ${width.largeDesktop}) {    
        margin-top: 0px; 
    }
    
`;

export const MarcaSerra = styled.div`
    background-color: rgb(137, 90, 149);
    color: white;
    border-radius: 10px;
    padding: 0.2%;
    width: 27vw;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
    margin-top: 10px;
    font-family: "Oswald";
    font-size: 45%;
    border: 1px solid white;
    

    @media screen and (max-width: ${width.mobile}) {    
        width: 70vw;
        font-size: 1rem; 
    }

    @media screen and (min-width: ${width.largeMobile}) and (max-width: ${width.tablet}) { 
        width: 65vw;
        font-size: 1rem;
    }
    
    @media screen and (min-width: ${width.tablet}) and (max-width: ${width.notebook}) {
        width: 55vw;
        font-size: 1.5rem;    
    }

    @media screen and (min-width: ${width.notebook}) and (max-width: ${width.largeNotebook}) {    
        width: 45vw;
        font-size: 1.5rem; 
        
    }
`;