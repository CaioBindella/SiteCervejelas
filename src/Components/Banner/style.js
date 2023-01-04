import styled from "styled-components";


export const Container = styled.div`
    width: 100%;
`;


export const Header = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 0px;
    background-color: #7B509A;

    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

    background: rgba( 255, 255, 255, 0.05 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 3.5px );
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    -webkit-backdrop-filter: blur( 3.5px );
    border: 1px solid rgba( 255, 255, 255, 0.18 );
`;

export const Logo = styled.img`
    width: 6%;
    height: 6%;
    /* margin-top: -1%;
    margin-bottom: -2%;  */
`;

export const LowHeader = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 2%;
`;

export const LineIcon = styled.img`
    width: 400px;
    height: 400px;
`;

export const BeerIcon = styled.img`
    width: 500px;
    height: 500px;
    margin-left: 6%;
`;