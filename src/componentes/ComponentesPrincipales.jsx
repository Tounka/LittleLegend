import styled from 'styled-components'
import { Link } from "react-router-dom";

const PictureStyled = styled.picture`
    height: 100%;
    width: 100%;
    position: absolute;
    z-index: -1;
    
    img {
        
        opacity: ${props => (props.bgType2 ? (props.transicion >0 ? '1' : '0') : '1')}; 
        transition: opacity 0.2s ;

        

        

    }

    /* Aplicar estilos al hacer hover en el contenedor principal */
 

    & > img {
        object-fit: cover;
        height: 100%;
        width: 100%;
        position: ${props => (props.bg ? 'absolute' : '')};
        top: ${props => (props.bg ? '0' : '')};
        left: ${props => (props.bg ? '0' : '')};
    }
`;

export const ImgTuned = ({ src, descripcion, bg, bgType2, transicion}) => {
    return (
        <PictureStyled bg={bg} bgType2={bgType2} transicion={transicion} className={bg ? "bgImagen" : ""} >
            <source srcSet={src} type="image/webp" />
            <img src={src} alt={descripcion}  />
        </PictureStyled>
    );
}


export const LinkStyled =styled(Link)`
    text-decoration:none;
`
export const H3 = styled.h3`
    color: #4285F4;
    font-size: 72px;
    @media (max-width: 767px) {
        font-size: 48px;
    }
    margin: 20px 0 0 0;
    text-align:center;
`

const ContenedorFooter = styled.div`
    margin-top: 30px;
    width: 100%;
    height: auto;
    display:flex;
    padding: 30px 0;
    justify-content:center;
    
    font-size: 18px;
    color: black;
    text-align:center;
`
export const FooterX = () =>{
    return(
        <ContenedorFooter>
            Desarrollado por Ramón Castillo <br />  
            Luisarraca@hotmail.com <br />  
            6691382961

        </ContenedorFooter>
    )
}