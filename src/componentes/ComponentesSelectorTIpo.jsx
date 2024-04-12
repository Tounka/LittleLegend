import styled from "styled-components";
import { ImgTuned } from "./ComponentesPrincipales";
import { LinkStyled } from "./ComponentesPrincipales";

const BurbujaContenedorTipoStyled = styled(LinkStyled)`
    overflow:hidden;
    height: 150px;
    width: 150px;
    border-radius: 50%;
    display:flex;
    position:relative;
    margin: 0 20px;
    border: black solid 1px;
`
const ImgTunedBurbuja = styled(ImgTuned)`
    
    &img{
        opacity: 1 !important;
    }
`
const TextoBurbuja = styled.div`
    height: 100%;
    width: 100%;
    font-size: 18px;
    font-weight: bold;
    color: white;

    display:flex;
    align-items:center;
    justify-content: center;
    opacity: 0;
    transition: opacity .4s ease;
   
    cursor:pointer;
    position:relative;
    border-radius: 50%;

    &::before {
        content: "";
        
        background-color: rgba(0, 0, 0, 0.3); /* Color de fondo con opacidad */
        border-radius: 50%;
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1; /* Asegurar que esté detrás del texto */
    }
    &:hover{
        opacity: 1;
        transition: opacity .4s ease;
        border-radius: 50%;
    }
`
export const BurbujaContenedorTipo = ({src, nombre, index}) =>{
    return(
        
        <BurbujaContenedorTipoStyled key ={index} to='/404'>
            
                <ImgTunedBurbuja src={src} bg={true} descripcion={'Burbuja de tipo ' + nombre}/>
                <TextoBurbuja>{nombre}</TextoBurbuja>
            
      
        </BurbujaContenedorTipoStyled>
        
    )
}