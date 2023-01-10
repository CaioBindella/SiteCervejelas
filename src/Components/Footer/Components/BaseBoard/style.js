import styled from "styled-components"
import { width } from "../../../../Services/config";

export const Container = styled.div`
    width: 100vw;
    height: 15vh;
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: center;
    background-color: #895A95;
    border-top: 1px solid white;
    cursor: default;
    font-size: 15px;

    @media screen and (max-width: ${width.mobile}) {    
        font-size: 10px;
        height: 10vh;
    }

    @media screen and (min-width: ${width.desktop}) and (max-width: ${width.largeDesktop}) {    
        height: 12vh;
        font-size: 18px;
    }

    @media screen and (min-width: ${width.largeDesktop}) and (max-width: ${width.extraLargeDesktop}) {    
        height: 9vh;
        font-size: 30px;
    }
`;

export const Text = styled.p`
    font-family: "Oswald";
    /* font-size: 20px; */
    font-weight: 200;
    color: white;
`;

export const Line = styled.div`
    border-top: 1px solid white;
    width: 80vw;
`;

export const Image = styled.img`
    width: 25px;
    height: 25px;
    overflow: visible;

    @media screen and (max-width: ${width.mobile}) {    
        width: 16px;
        height: 16px;
    }
    
    @media screen and (min-width: ${width.largeDesktop}) and (max-width: ${width.extraLargeDesktop}) {    
        width: 37px;
        height: 37px;
    }
`;


export const Overline = styled.div`
    width: 80vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
`;

export const Link = styled.a`
    display: flex;
    text-decoration: none;
`;

export const Description = styled.p`
    font-family: "Oswald";
    font-weight: 200;
    color: white;
    margin-left: 10px;
    align-self: flex-end;
`;

export const TextDescription = styled.p`
    font-family: "Oswald";
    font-weight: 200;
    color: white;
`;


