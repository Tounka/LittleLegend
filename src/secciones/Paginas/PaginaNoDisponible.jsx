import styled from 'styled-components'

const ContenedorPaginaNoDisponible = styled.div`
    background-color:#4285F4;
    max-height: 100%;
    height: 100vh;
    overflow:hidden;
    width: 100%;
    display:flex;
   
`
const ContenedorTextoPaginaNoDisponible = styled(ContenedorPaginaNoDisponible)`
    color: white;
    font-size: 80px;
    width: 65%;
    display:flex;
    padding:40px;

` 
function PaginaNoDisponible (){
    return(
        <ContenedorPaginaNoDisponible>
            <ContenedorTextoPaginaNoDisponible>
                Pagina En Progreso <br /> :D
            </ContenedorTextoPaginaNoDisponible>
        </ContenedorPaginaNoDisponible>
    )
}

export default PaginaNoDisponible;