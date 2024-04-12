import styled from "styled-components";
import { ImgTuned } from "./ComponentesPrincipales";
import { useState, useEffect } from "react";
import bg from "../img/ropa/bgCardBoy_Girl.jpg"

const ContenedorCardStyled = styled.div`
    width: 250px;
    height: 400px;
    border-radius: 20px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    border: solid black 1px;
    background-size: cover;
    
    @media (max-width: 550px){
        width: 125px;
        height: 300px;
    }

    &:hover {
        img{
            transform: scale(1.1);
            transition: transform .3s;
        }
    }
`;


export const Card = ({ arregloImg }) => {
    const [numeroImg, setNumeroImg] = useState(0);
    const [intervalo, setIntervalo] = useState(null);

    useEffect(() => {
        return () => clearInterval(intervalo);
    }, [intervalo]);

    const funcionHover = () => {
        const interval = setInterval(() => {
            setNumeroImg(prevNumeroImg => {
                if (prevNumeroImg < 3) {
                    return prevNumeroImg + 1;
                } else {
                    return 3;
                }
            });
        }, 300); // Cambiar la imagen cada segundo
        setIntervalo(interval);
    };

    const funcionUnHover = () => {
        clearInterval(intervalo); // Detener la animación cuando deja de hacer hover
        setNumeroImg(0);
    };
    
    return (
        <ContenedorCardStyled onMouseOver={funcionHover} onMouseOut={funcionUnHover}> 
            <ImgTuned bg={true} bgType2 = {true} transicion = {numeroImg} src={bg} descripcion="Bg" />
            <ImgTuned   src={arregloImg[numeroImg]} descripcion="Imagen de selección de categoría niña/niño" />
        </ContenedorCardStyled>
    );
};
