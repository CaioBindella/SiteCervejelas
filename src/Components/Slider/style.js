import styled, { css } from "styled-components";
import { width } from "../../Services/config";

export const SliderContainer = styled.div`
    width: 100%;
`;

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding-top: 5%;
    padding-bottom: 5%;
`;

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    @media screen and (max-width: ${width.notebook}) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;

export const Content = styled.div`
    width: 65%;
    height: 100%;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom-left-radius: 40px;
    border-bottom-right-radius: 40px;
`;

export const Title = styled.p`
    border-top-left-radius: 40px;
    border-top-right-radius: 40px;
    background-color: var(--purple);
    width: 65%;
    text-align: center;
    color: #fff;
    padding-top: 10px;
    padding-bottom: 10px;
`;


export const Logo = styled.img`
    width: 50%;
    height: 300px;
    /* @media screen and (max-width: ${width.tablet}) {    
        height: 15vh;
        border-radius: 20px;
    }
    @media screen and (min-width: ${width.largeDesktop}) {    
        height: 20vh;
        border-radius: 20px;
    } */
`;

export const Circle = styled.span`	
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: #FBD168;
    margin: 50px;
`;

export const Text = styled.span`
    text-align: center;
    color: var(--brown);
    font-size: var(--medium);
    line-height: 0.5;
    margin: 3%;
    width: 50%;
    /* @media screen and (max-width: ${width.largeMobile}) {
        width: 85%;
        font-size: 1rem;
        height: 50vh;
    }
    @media screen and (min-width: ${width.tablet}) {
        width: 85%;
        font-size: 1rem;
        height: 20vh;
    }
    @media screen and (min-width: ${width.notebook}) {
        height: 23vh;
        
    }
    @media screen and (min-width: ${width.largeDesktop}) {
        font-size: 2.0rem;
        height: 20vh;
    }
    @media screen and (min-width: ${width.extraLargeDesktop}) {
        font-size: 3.0rem;
        height: 20vh;
    } */
    
`;