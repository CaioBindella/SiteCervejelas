import styled from "styled-components";

export const StyledDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding-top: 3%;
`


export const Container = styled.div`
    background-color: #fff;
    width: 25%;
    border-radius: 40px;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
    margin: 20px;
    margin-top: 40px;
    
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
`;

export const TitleSmaller = styled.p`
    text-align: center;
    color: var(--brown);
    font-size: var(--large);
    line-height: 0.5;
`;

export const Text = styled.p`
    text-align: center;
    color: var(--brown);
    font-size: var(--medium);
    line-height: 0.5;
    margin: 3%;
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
`;


export const ImagePin = styled.img`
    
`;


export const TitleSmallerFisrtaCard = styled.p`
    color: #895A95;
    margin-left: 2%;
    width: 100%;
    line-height: 50%;
`;


export const TextFirstCard = styled.p`
    color: #895A95;
    margin-left: 2%;
    width: 100%;
    line-height: 50%;
    margin-top: 5%;
    margin: 3%;
`;


export const LastContainer = styled.div`
    background-color: #fff;
    width: 25%;
    border-radius: 40px;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
    margin: 20px;
    margin-top: 40px;
`;


export const Button = styled.button`
    color: var(--brown);
    font-family: 'Harler Mixgiter';
    /* width: 40%;
    height: 3vh; */
    border: 1px solid;
    margin-top: 2%;
    border-radius: 10px;
    background-color: var(--white);
    color: var(--purple);
    font-size: var(--small);

    &:hover{
        background-color: var(--purple);
        color: #fff;
        border: 1px solid purple;
    }
`;
