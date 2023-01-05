import styled from "styled-components"

export const Container = styled.div`
    background-color: #fff;
    width: 25%;
    border-radius: 40px;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
    margin: 20px;
    margin-top: 40px;
    
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
    margin-left: 10%;
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
`;

export const TitleSmaller = styled.p`
    text-align: center;
    color: var(--brown);
    font-size: var(--large);
    line-height: 0.5;
`;

export const TitleSmallerFisrtaCard = styled.p`
    color: #895A95;
    margin-left: 2%;
    width: 80%;
    text-align: left;
    font-size: var(--extra-large);
    line-height: 45%;
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
    justify-content: center;
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