import styled from "styled-components"

const TextoPI = styled.p`
    margin-top: 20px;
    color: ${props => props.principal ? 'black' : 'white'};
    
    
    
`
const TituloPI = styled.h1`
    color: ${props => props.principal ? 'black' : 'white'};
    font-size: ${props => props.principal ? '50px' : '46px'};
    margin: 0px;
`

const ContenedorTextoPIStyled = styled.div`
    display:flex;
    justify-content:center;
    align-items:end;
    position:absolute;
    flex-direction: column;
    font-weight:bold;
    font-size: 24px;
    text-align: left;
    right: 10%;
    text-shadow: 3px 0px 9px rgba(0,0,0,0.44);
    padding: 20px;
    @media (max-width: 1200px) {
        right: 7%;
    }
    @media (max-width: 900px) {
        right: 20px;
    }
    @media (max-width: 600px) {
        right: auto;
        align-items:center;
        text-align:center;
    }
`

export const ContenedorTextoPI = ({TextPrincipaP1,TextPrincipaP2, TextSecundario}) =>{
    return(
        <ContenedorTextoPIStyled>
            <> 
                <TituloPI principal>{TextPrincipaP1}</TituloPI>
                <TituloPI>{TextPrincipaP2}</TituloPI>
            </>

            <TextoPI>{TextSecundario}</TextoPI>

        </ContenedorTextoPIStyled>
    )
}