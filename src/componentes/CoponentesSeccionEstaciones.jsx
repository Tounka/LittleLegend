import styled from 'styled-components'
import { ImgTuned } from './ComponentesPrincipales'
import { LinkStyled } from './ComponentesPrincipales'
import imgVerano from '../img/ropa/ImgTemporadas/Verano.jpg'
import imgOtono from '../img/ropa/ImgTemporadas/Otono.jpg'
import imgPrimavera from '../img/ropa/ImgTemporadas/Primavera.jpg'
import imgInvierno from '../img/ropa/ImgTemporadas/Invierno.jpg'

const ContenedorSeccionTemporadaStyled = styled.div`
    display: grid;
    min-height: 40vh;
    
    width: 90%;
    height:auto;
    
    @media (min-width: 900px) {
        min-height: 55vh;
        
    }
    @media (min-width: 768px) {
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: 1fr 1fr;
        
    }
    @media (max-width: 767px) {
        grid-template-rows: repeat(4, 250px);
    }
    
    gap: 20px;
    margin: 20px 0;
`

const ContenedorSeccionIndividualStyled = styled(LinkStyled)`
    width: 100%;
    height: 100%;
    
    position:relative;

    @media (min-width: 768px) {
        grid-row: ${props => props.grande ? 'span 2' : 'span 1'};
    }
    
    overflow:hidden;
    img{
        transition: transform .2s ease-in;
    }
    &::after{
        content: '';
        position: absolute;
        top: 0;
        left: -130%;
        width: 250%;
        height: 20px;
        background: linear-gradient(to bottom, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0));
        transition: opacity 0.5s ease-in-out;
        
        transform: rotate(315deg);
    }
    &:hover::after {
        opacity: 1;
        top: 110%;
        left: 110%;
        transition: top .5s ease-in-out, left .4s ease-in-out;
    }
    &:hover{
        img{
            transform: scale(1.1);
            transition: transform .2s ease-in;
        }
    }

    
   
`


const ContenedorSeccionIndividual = ({grande, src}) =>{
    return(
        
        <ContenedorSeccionIndividualStyled to='/404' grande= {grande} >
            <ImgTuned  src={src}  />
        </ContenedorSeccionIndividualStyled>
       

    )
}

export const SeccionTemporadas = () => {
    return(
        <ContenedorSeccionTemporadaStyled>
            <ContenedorSeccionIndividual  grande src={imgVerano} />
            <ContenedorSeccionIndividual  src={imgOtono} />
            <ContenedorSeccionIndividual  grande src={imgPrimavera} />
            <ContenedorSeccionIndividual  src={imgInvierno} />
        </ContenedorSeccionTemporadaStyled>
    )
}
