import styled from "styled-components"
import { width } from "../../../../Services/config";

export const EdgeContainer = styled.div`
    background-color: #fff;
    width: 25%;
    height: 20%;
    border-radius: 40px;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
    margin: 20px;
    margin-top: 15%;

    @media screen and (max-width: ${width.mobile}) {    
        width: 80%;
    }
    @media screen and (min-width: ${width.largeMobile}) and (max-width: ${width.tablet}) {   
        width: 80%;
    }
    @media screen and (min-width: ${width.tablet}) and (max-width: ${width.notebook}) {    
        width: 90%;
    }
    @media screen and (min-width: ${width.notebook}) and (max-width: ${width.desktop}) {    
        width: 27%;
        height: 20%;
    }
    
`;

export const FirstImageContainer = styled.div`
    background-color: #D9C1AF;
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

export const ImageSmaller = styled.img`
    width: 150px;
    height: 150px;

    overflow: visible;
    margin-bottom: 20px;
`;

export const ImagePin = styled.img`
    width: 15%;
    margin-left: 20%;
    margin-right: 2%;
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

export const TitleSmallerFisrtaCard = styled.p`
    color: #895A95;
    margin-left: 2%;
    width: 80%;
    text-align: left;
    font-size: var(--small);
    font-family: 'Inter';
    line-height: 80%;
    background-color: #D9D9D9;
    
    /* font-family: 'Inter'; */
`;

export const TextFirstCard = styled.p`
    color: #895A95;
    margin-left: 2%;
    width: 100%;
    margin-top: 5%;
    margin: 3%;
    font-size: var(--medium);
    background-color: #D9D9D9;
    display: flex;
    align-items: center;
    justify-content: center;
`;



export const DivFirstCard = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    padding: 3%;
    background-color: #D9D9D9;
    border-radius: 20px;
    width: 80%;
    margin-top: 2%;
`;

export const DivRow = styled.div`
    display: flex;
    flex-direction: row;
    /* justify-content: center; */
    align-items: center;
    width: 100%;
`;

export const DivColumn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
`;

export const Button = styled.a`
    font-family: 'Inter';
    cursor: pointer;
    border: 2px solid;
    margin-top: 2%;
    border-radius: 10px;
    background-color: var(--white);
    color: var(--purple);   
    font-size: var(--extra-small);
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 10px;
    padding-right: 10px;
    text-decoration: none;

    &:hover{
        transition: 0.2s;
        background-color: var(--purple);
        color: #fff;
        border: 1px solid purple;
    }
`;



export const DivColumnDown = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
`;