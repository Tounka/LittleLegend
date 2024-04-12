import { ContenedorPrincipal } from "../componentes/Contenedores";
import { Card } from "../componentes/ComponentesSeccionSwitch";
import { LinkStyled } from "../componentes/ComponentesPrincipales";
import { H3 } from "../componentes/ComponentesPrincipales";

import ImgBoy1 from "../img/ropa/ImgBoyTransition/ImgBoy1.png";
import ImgBoy2 from "../img/ropa/ImgBoyTransition/ImgBoy2.png";
import ImgBoy3 from "../img/ropa/ImgBoyTransition/ImgBoy3.png";
import ImgBoy4 from "../img/ropa/ImgBoyTransition/ImgBoy4.png";

import ImgGirl1 from "../img/ropa/ImgGirlTransition/ImgGirl1.png";
import ImgGirl2 from "../img/ropa/ImgGirlTransition/ImgGirl2.png";
import ImgGirl3 from "../img/ropa/ImgGirlTransition/ImgGirl3.png";
import ImgGirl4 from "../img/ropa/ImgGirlTransition/ImgGirl4.png";
import styled from 'styled-components';


const ContenedorSelectorGenero = styled(ContenedorPrincipal)`
    H3{
        margin: 0 0 20px;
    }
  
    
`

const ContenedorLinks = styled.div`
    display:flex;
    flex-direction: row;
    gap: 40px;
    margin-bottom: 20px;
`
export const PantallaSeleccionGenero = () => {
    const ImagesBoy = [ImgBoy1,ImgBoy2,ImgBoy3,ImgBoy4];
    const ImagesGirl = [ImgGirl1,ImgGirl2,ImgGirl3,ImgGirl4];
    return(
        <ContenedorSelectorGenero>
            <H3> Ropa para todos </H3>
            <ContenedorLinks>
                <LinkStyled to= '/404'>
                    <Card arregloImg = {ImagesBoy}/>
                </LinkStyled>
                <LinkStyled to= '/404'>
                    <Card arregloImg = {ImagesGirl}/>
                </LinkStyled>
            </ContenedorLinks>
      
            
        </ContenedorSelectorGenero>
    )
}