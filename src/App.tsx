import { Grid } from '@mui/material';
import HeaderUI from './Typography';
import AlertUI from './AlertUI';
import SelectorUI from './SelectorUI';
import IndicatorUI from './components/IndicatorUI';
import useFetchData from './hooks/useFetchdata';
import TableUI from './components/TableUI';
import ChartUI from './components/ChartUI';
import { useState } from 'react';


import './App.css';

function App() {
   const [selectedOption, setSelectedOption] = useState<string | null>(null);
   const { data, isLoading, error } = useFetchData(selectedOption);
  return (
    <Grid
      container
      spacing={4}
      sx={{
        minHeight: '100vh',
        p: { xs: 2.5, md: 4 },
        justifyContent: 'flex-start',
        alignItems: 'stretch',
      }}
    >
      {/* Encabezado */}
      <Grid size={{ xs: 12, md: 12 }}>
        <HeaderUI />
      </Grid>

      {/* Alertas */}
      <Grid
        size={{ xs: 12, md: 12 }}
        container
        sx={{
          justifyContent: { xs: 'flex-start', md: 'flex-end' },
          alignItems: 'center',
        }}
      >
        <AlertUI description="No se preveen lluvias." />
      </Grid>

      {/* Selector */}
      <Grid size={{ xs: 12, md: 4 }}>
        <SelectorUI onOptionSelect={setSelectedOption} />
      </Grid>

      {/* Indicadores */}
      <Grid container size={{ xs: 12, md: 8 }} spacing={3}>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
         {data &&
        (<IndicatorUI
            title='Temperatura (2m)'
            description={ `${data.current.temperature_2m} ${data.current_units.temperature_2m}` } />)
    }
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          {data && (<IndicatorUI
            title='Sensación térmica'
            description={ `${data.current.apparent_temperature} ${data.current_units.apparent_temperature}` } />)
          }
            </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          {data && (
            <IndicatorUI
              title='Velocidad del viento'
              description={ `${data.current.wind_speed_10m} ${data.current_units.wind_speed_10m}` } />
          )}
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          {data && (
            <IndicatorUI
              title='Humedad relativa'
              description={ `${data.current.relative_humidity_2m} ${data.current_units.relative_humidity_2m}` } />
          )}
        </Grid>
      </Grid>

      {/* Grafico */}
      <Grid
        size={{ xs: 12 }}
        sx={{
          minHeight: 420,
          p: 3,
          borderRadius: 2,
          border: '1px solid',
          borderColor: 'var(--border)',
          bgcolor: 'var(--panel)',
          color: 'var(--text)',
          textAlign: 'left',
        }}
      >
        <ChartUI data={data} isLoading={isLoading} error={error} />
      </Grid>

      {/* Tabla */}
      <Grid
        size={{ xs: 12, md: 7 }}
        sx={{
          minHeight: 420,
          p: 3,
          borderRadius: 2,
          border: '1px solid',
          borderColor: 'var(--border)',
          bgcolor: 'var(--panel)',
          color: 'var(--text)',
          textAlign: 'left',
        }}
      >
        <TableUI data={data} isLoading={isLoading} error={error} />
      </Grid>

      {/* Informacion adicional */}
      <Grid
        size={{ xs: 12, md: 5 }}
        sx={{
          minHeight: 420,
          p: 3,
          borderRadius: 2,
          border: '1px solid',
          borderColor: 'var(--border)',
          bgcolor: 'var(--panel)',
          color: 'var(--text)',
          textAlign: 'left',
        }}
      >
        Elemento: Informacion adicional
      </Grid>
    </Grid>
  );
}

export default App;
