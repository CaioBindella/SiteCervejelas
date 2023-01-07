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

`;

export const MarcaSerra = styled.div`
    background-color: #D9D9D9;
    border-radius: 10px;
    padding: 0.2%;
    width: 25vw;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
    margin-top: 10px;

    @media screen and (max-width: ${width.mobile}) {    
        width: 60vw;
        font-size: 1.8rem; 
    }

    @media screen and (min-width: ${width.largeMobile}) and (max-width: ${width.tablet}) { 
        width: 60vw;
        font-size: 1.8rem;  
  
    }
    
    @media screen and (min-width: ${width.tablet}) and (max-width: ${width.notebook}) {
        width: 30vw;
        font-size: 2.8rem;    
    }

`;