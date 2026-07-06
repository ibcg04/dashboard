import { Grid } from '@mui/material';
import HeaderUI from './Typography';
import AlertUI from './AlertUI';

import './App.css'

function App() {
    return (
      <Grid container spacing={5} sx={{justifyContent: 'left', alignItems: 'center' }} >

         {/* Encabezado */}
         <Grid size={{ xs: 12 , md:12}}>
            <HeaderUI />
         </Grid>

         {/* Alertas */}|
         <Grid size={{ xs: 12 , md:12}}
          container sx={{justifyContent: 'right', alignItems: 'center' }}>
            <AlertUI description="No se preveen lluvias." />
         </Grid>

         {/* Selector */}
         <Grid>Elemento: Selector</Grid>

         {/* Indicadores */}
         <Grid>Elemento: Indicadores</Grid>

         {/* Gráfico */}
         <Grid sx={{ display: { xs: "none", md: "block"} }}>Elemento: Gráfico</Grid>

         {/* Tabla */}
         <Grid sx={{ display: { xs: "none", md: "block"} }} >Elemento: Tabla</Grid>

         {/* Información adicional */}
         <Grid>Elemento: Información adicional</Grid>

      </Grid>
    );
}

export default App;
