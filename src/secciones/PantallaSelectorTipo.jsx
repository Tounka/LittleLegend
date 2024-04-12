import { ContenedorPrincipal } from "../componentes/Contenedores";
import { BurbujaContenedorTipo } from "../componentes/ComponentesSelectorTIpo";
import { H3 } from "../componentes/ComponentesPrincipales";

import styled from 'styled-components';
import camisasType from '../img/ropa/imgTipos/camisas.webp';
import pantalonesType from '../img/ropa/imgTipos/pantalones.webp';
import conjuntosType from '../img/ropa/imgTipos/conjuntos.webp';
import calcetinesType from '../img/ropa/imgTipos/calcetines.webp';
import gorrasType from '../img/ropa/imgTipos/gorras.webp';
import camisetasType from '../img/ropa/imgTipos/camisetas.webp';
import mochilasType from '../img/ropa/imgTipos/mochilas.webp';

const objTiposRopa = [
    { img: camisasType, nombreTipo: 'Camisas' },
    { img: pantalonesType, nombreTipo: 'Pantalones' },
    { img: conjuntosType, nombreTipo: 'Conjuntos' },
    { img: calcetinesType, nombreTipo: 'Calcetines' },
    { img: gorrasType, nombreTipo: 'Gorras' },
    { img: camisetasType, nombreTipo: 'Camisetas' },
    { img: mochilasType, nombreTipo: 'Mochilas' }
];

const ContenedorSeccionBurbuja = styled(ContenedorPrincipal)`
    height: auto;
`;

const ContenedorBurbuja = styled.div`
    overflow-x: auto; 
    overflow-y: hidden; 
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
    height: 250px;
    display: flex;
    cursor: grab;
    user-select: none;
    align-items: center;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
    ::-webkit-scrollbar {
        display: none; 
    }
`;



const ContenedorSelectorTipo = styled.div`
    display: flex;
    margin: 20px 0;
`;


export const PantallaSeleccionTipo = () => {
    let isDragging = false;
    let startX, scrollLeft;

    const handleMouseDown = (e) => {
        isDragging = true;
        startX = e.pageX - e.currentTarget.offsetLeft;
        scrollLeft = e.currentTarget.scrollLeft;
    };

    const handleMouseUp = () => {
        isDragging = false;
    };

    const handleMouseMove = (e) => {
        if (isDragging) {
            const newScrollLeft = startX - (e.pageX - e.currentTarget.offsetLeft);
            e.currentTarget.scrollLeft = scrollLeft + newScrollLeft;
        }
    };


    return (
        <ContenedorSeccionBurbuja>
            <H3> Categorías Especiales </H3>
            <ContenedorBurbuja
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
            >
                <ContenedorSelectorTipo>
                    {objTiposRopa.map((tipo, index) => (
                        
                            <BurbujaContenedorTipo key={index} src={tipo.img} nombre={tipo.nombreTipo} />
                        
                        
                    ))}
                </ContenedorSelectorTipo>
            </ContenedorBurbuja>
        </ContenedorSeccionBurbuja>
    );
};
