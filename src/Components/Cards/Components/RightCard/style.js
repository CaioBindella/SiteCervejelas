import styled from "styled-components"
import { width } from "../../../../Services/config";

export const LastContainer = styled.div`
    background-color: #fff;
    width: 25%;
    border-radius: 40px;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
    margin: 20px;
    margin-top: 15%;

    @media screen and (max-width: ${width.mobile}) {    
        width: 80vw;
    }
    @media screen and (min-width: ${width.largeMobile}) and (max-width: ${width.tablet}) {    
        width: 80vw;
    }
    @media screen and (min-width: ${width.tablet}) and (max-width: ${width.notebook}) {    
        width: 85vw;
    }
    @media screen and (min-width: ${width.notebook}) and (max-width: ${width.desktop}) {    
        width: 25%;
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
    @media screen and (min-width: ${width.largeMobile}) {    
        font-size: var(--large);
    }
`;

export const TitleSmaller = styled.p`
    text-align: center;
    color: var(--brown);
    font-size: var(--large);
    line-height: 0.5;

    @media screen and (min-width: ${width.largeMobile}) {    
        font-size: var(--medium);
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
`;

export const GrayContainer = styled.div`
    background-color: #D9D9D9;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 80%;
    height: 30%;
    padding: 5px;
    margin-top: 5%;
    font-family: 'Inter';
    font-weight: 500;
`;

export const Button = styled.button`
    color: var(--brown);
    font-family: 'Inter';
    cursor: pointer;
    border: 1.5px solid;
    margin-top: 2%;
    border-radius: 10px;
    background-color: #FFF;
    color: var(--brown);
    font-size: var(--extra-small);
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 10px;
    padding-right: 10px;

    &:hover{
        transition: 0.2s;
        background-color: var(--brown);
        color: #fff;
        border: 1px solid #6E4227;
    }
`;