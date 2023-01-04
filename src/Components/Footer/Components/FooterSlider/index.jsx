import React from "react";

import FooterSliderImg from "../FooterSliderImg";

import acasatereIcon from '../../../../Assets/Images/Apoiadores/Acasatere.svg'
import beerGardenIcon from '../../../../Assets/Images/Apoiadores/BeerGarden.svg'
import estiloBeerIcon from '../../../../Assets/Images/Apoiadores/EstiloBeerTour.svg'
import evoresIcon from '../../../../Assets/Images/Apoiadores/Evores.svg'
import lavoroIcon from '../../../../Assets/Images/Apoiadores/Lavoro.svg'
import prefeituraIcon from '../../../../Assets/Images/Apoiadores/PMT_Turismo.svg'
import rotaCervejeiraIcon from '../../../../Assets/Images/Apoiadores/RotaCervejeira.svg'
import senacIcon from '../../../../Assets/Images/Apoiadores/Senac.svg'
import vmIcon from '../../../../Assets/Images/Apoiadores/VM.svg'
import serraJr from '../../../../Assets/Images/Apoiadores/SerraJr.svg'

import { LogoSlider, LogoSliderTrack } from "./style";

function FooterSlider() {
    return (
            <LogoSlider>
                <LogoSliderTrack>
                    <FooterSliderImg image={acasatereIcon} altText="Acasatere" />
                    <FooterSliderImg image={beerGardenIcon} altText="BeerGarden" />
                    <FooterSliderImg image={estiloBeerIcon} altText="EstiloBeer" />
                    <FooterSliderImg image={evoresIcon} altText="Evores" />
                    <FooterSliderImg image={lavoroIcon} altText="Lavoro" />
                    <FooterSliderImg image={prefeituraIcon} altText="Prefeitura" />
                    <FooterSliderImg image={rotaCervejeiraIcon} altText="RotaCervejeira" />
                    <FooterSliderImg image={senacIcon} altText="Senac" />
                    <FooterSliderImg image={vmIcon} altText="Vm" />
                    <FooterSliderImg image={serraJr} altText="SerraJr" />

                    <FooterSliderImg image={acasatereIcon} altText="Acasatere" />
                    <FooterSliderImg image={beerGardenIcon} altText="BeerGarden" />
                    <FooterSliderImg image={estiloBeerIcon} altText="EstiloBeer" />
                    <FooterSliderImg image={evoresIcon} altText="Evores" />
                    <FooterSliderImg image={lavoroIcon} altText="Lavoro" />
                    <FooterSliderImg image={prefeituraIcon} altText="Prefeitura" />
                    <FooterSliderImg image={rotaCervejeiraIcon} altText="RotaCervejeira" />
                    <FooterSliderImg image={senacIcon} altText="Senac" />
                    <FooterSliderImg image={vmIcon} altText="Vm" />
                    <FooterSliderImg image={serraJr} altText="SerraJr" />

                    <FooterSliderImg image={acasatereIcon} altText="Acasatere" />
                    <FooterSliderImg image={beerGardenIcon} altText="BeerGarden" />
                    <FooterSliderImg image={estiloBeerIcon} altText="EstiloBeer" />
                    <FooterSliderImg image={evoresIcon} altText="Evores" />
                    <FooterSliderImg image={lavoroIcon} altText="Lavoro" />
                    <FooterSliderImg image={prefeituraIcon} altText="Prefeitura" />
                    <FooterSliderImg image={rotaCervejeiraIcon} altText="RotaCervejeira" />
                    <FooterSliderImg image={senacIcon} altText="Senac" />
                    <FooterSliderImg image={vmIcon} altText="Vm" />
                    <FooterSliderImg image={serraJr} altText="SerraJr" />
                    
                </LogoSliderTrack>
            </LogoSlider>
    )
  }
  
  export default FooterSlider