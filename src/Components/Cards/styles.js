import styled from "styled-components";
import { width } from "../../Services/config";

export const StyledDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;

    @media screen and (max-width: ${width.mobile}) {    
        flex-direction: column;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    @media screen and (min-width: ${width.largeMobile}) and (max-width: ${width.tablet}) {    
        flex-direction: column;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    @media screen and (min-width: ${width.tablet}) and (max-width: ${width.notebook}) {    
        flex-direction: column;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;
