import styled from "styled-components";
import { width } from "../../../../Services/config";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #D9D9D9;
    border-radius: 30px;
    width: 60%;
    padding-top: 10px;
    padding-bottom: 10px;
    margin-top: 20px;

    @media screen and (max-width: ${width.mobile}) {    
        width: 90%;
    }
    @media screen and (min-width: ${width.largeMobile}) and (max-width: ${width.tablet}) {    
        width: 80%;
    }
    @media screen and (min-width: ${width.tablet}) and (max-width: ${width.notebook}) {    
        width: 80%;
    }
    @media screen and (min-width: ${width.notebook}) and (max-width: ${width.largeNotebook}) {  
        width: 80%;
    }
    @media screen and (min-width: ${width.largeNotebook}) and (max-width: ${width.desktop}) {  
        width: 70%;
    }
`;

export const TimeContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
`;

export const Time = styled.div`
    width: 20%;
`;

export const Text = styled.p`
    text-align: center;
    color: var(--brown);
    font-size: var(--extra-large);
    line-height: 0.5;
    margin: 0;
    margin-bottom: 2%;

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
export const TextSmall = styled.p`
    text-align: center;
    color: var(--brown);
    font-size: var(--medium);
    line-height: 0.5;
    margin: 0;

    @media screen and (max-width: ${width.mobile}) {    
        font-size: var(--extra-small);
    }
    @media screen and (min-width: ${width.largeMobile}) and (max-width: ${width.tablet}) {    
        font-size: var(--extra-small);
    }
    @media screen and (min-width: ${width.tablet}) and (max-width: ${width.notebook}) {    
        font-size: var(--medium);
    }
    @media screen and (min-width: ${width.notebook}) and (max-width: ${width.largeNotebook}) {  
        font-size: var(--medium);
    }
`

    

