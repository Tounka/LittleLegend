import { ContenedorPrincipal } from "../componentes/Contenedores"
import {ImgTuned} from "../componentes/ComponentesPrincipales"
import { ContenedorTextoPI } from "../componentes/ComponentesPantallaInicial"
import imgPrincipal from "../img/ropa/imgPrincipal.webp"



export const PantallaPrincipal = () => {
    return(
        <ContenedorPrincipal>
            <ImgTuned   src={imgPrincipal} descripcion="Imagen principal de primera pantalla" />
            <ContenedorTextoPI TextPrincipaP1="LittleLegend" TextPrincipaP2="Moda divertida" TextSecundario="La ropa no tiene que ser aburrida" />
        </ContenedorPrincipal>
    )
}