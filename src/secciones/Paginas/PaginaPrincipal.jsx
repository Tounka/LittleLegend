import { PantallaPrincipal } from '../PantallaInicial';
import { PantallaSeleccionGenero } from '../PantallaSeleccionGenero';
import { PantallaSeleccionTipo } from '../PantallaSelectorTipo';
import { PantallaEstaciones } from '../PantallaEstaciones';
function PaginaInicio () {
  return (
    <>
        <PantallaPrincipal />
        <PantallaSeleccionGenero />
        <PantallaEstaciones /> 
        <PantallaSeleccionTipo />
        
    </>
  );
}
export default PaginaInicio;
