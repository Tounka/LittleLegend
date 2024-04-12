import { ContenedorPrincipal } from "../componentes/Contenedores"
import { SeccionTemporadas } from "../componentes/CoponentesSeccionEstaciones"
import styled from 'styled-components'
const ContenedorEstaciones = styled(ContenedorPrincipal)`
    padding: 20px 0;
    height:auto;
   @media (max-height: 767px){
        min-height: 55vh;
        
   }
`
export const PantallaEstaciones = () => {
    return(
        <ContenedorEstaciones>
            <SeccionTemporadas />
        </ContenedorEstaciones>
    )
}