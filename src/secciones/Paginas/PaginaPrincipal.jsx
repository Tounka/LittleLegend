import { PantallaPrincipal } from '../PantallaInicial';
import { PantallaSeleccionGenero } from '../PantallaSeleccionGenero';
import { PantallaSeleccionTipo } from '../PantallaSelectorTipo';
import { PantallaEstaciones } from '../PantallaEstaciones';
import { FooterX } from '../../componentes/ComponentesPrincipales';
function PaginaInicio () {
  return (
    <>
        <PantallaPrincipal />
        <PantallaSeleccionGenero />
        <PantallaEstaciones /> 
        <PantallaSeleccionTipo />
        <FooterX />
    </>
  );
}
export default PaginaInicio;
