import objetivo from "../../Assets/Images/objetivo.svg"
import copo from "../../Assets/Images/copo.svg"
import trigo from "../../Assets/Images/trigo.svg"
import trigoVerde from "../../Assets/Images/TrigoVerde.svg"
import beerGardenLogo from "../../Assets/Images/beerGardenLogo.svg"
import Pin from "../../Assets/Images/locationPin.svg"

import LeftCard from "./Components/LeftCard/index"
import MiddleCard from "./Components/MiddleCard/index"
import RightCard from "./Components/RightCard/index"


import { 
    StyledDiv
} from "./styles";

const Cards = () => {
    return(
        <StyledDiv>
            <LeftCard />
            <MiddleCard />
            <RightCard />
        </StyledDiv>
    )
}

export default Cards;