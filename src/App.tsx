import { Box, Grid, Typography } from '@mui/material';
import { useState } from 'react';
import AlertUI from './AlertUI';
import ChartUI from './components/ChartUI';
import IndicatorUI from './components/IndicatorUI';
import TableUI from './components/TableUI';
import useFetchData from './hooks/useFetchdata';
import SelectorUI from './SelectorUI';
import HeaderUI from './Typography';

import './App.css';

function App() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const { data, loading, error } = useFetchData(selectedOption);
  const cityName = selectedOption ?? 'Guayaquil';

  return (
    <Box className="dashboard-shell">
      <Grid
        container
        spacing={3}
        sx={{
          minHeight: '100vh',
          p: { xs: 2, sm: 3, md: 4 },
          justifyContent: 'flex-start',
          alignItems: 'stretch',
        }}
      >
        <Grid size={{ xs: 12, md: 8 }}>
          <HeaderUI cityName={cityName} />
        </Grid>

        <Grid
          size={{ xs: 12, md: 4 }}
          container
          sx={{
            justifyContent: { xs: 'flex-start', md: 'flex-end' },
            alignItems: 'center',
          }}
        >
          <AlertUI description="No se preveen lluvias." />
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <Box className="dashboard-panel selector-panel">
            <Typography variant="overline" component="p" sx={{ color: 'var(--muted)', fontWeight: 700 }}>
              Ubicacion
            </Typography>
            <SelectorUI onOptionSelect={setSelectedOption} />
          </Box>
        </Grid>

        <Grid container size={{ xs: 12, md: 8 }} spacing={2.5}>
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <IndicatorUI
              title="Temperatura (2m)"
              description={
                loading
                  ? 'Cargando...'
                  : error
                    ? `Error: ${error}`
                    : data
                      ? `${data.current.temperature_2m} ${data.current_units.temperature_2m}`
                      : 'No hay datos disponibles'
              }
            />
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <IndicatorUI
              title="Sensacion termica"
              description={
                loading
                  ? 'Cargando...'
                  : error
                    ? `Error: ${error}`
                    : data
                      ? `${data.current.apparent_temperature} ${data.current_units.apparent_temperature}`
                      : 'No hay datos disponibles'
              }
            />
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <IndicatorUI
              title="Velocidad del viento"
              description={
                loading
                  ? 'Cargando...'
                  : error
                    ? `Error: ${error}`
                    : data
                      ? `${data.current.wind_speed_10m} ${data.current_units.wind_speed_10m}`
                      : 'No hay datos disponibles'
              }
            />
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <IndicatorUI
              title="Humedad relativa"
              description={
                loading
                  ? 'Cargando...'
                  : error
                    ? `Error: ${error}`
                    : data
                      ? `${data.current.relative_humidity_2m} ${data.current_units.relative_humidity_2m}`
                      : 'No hay datos disponibles'
              }
            />
          </Grid>
        </Grid>

        <Grid size={{ xs: 12 }}>
          <Box className="dashboard-panel chart-panel">
            <ChartUI data={data} isLoading={loading} error={error} />
          </Box>
        </Grid>

        <Grid size={{ xs: 12, md: 7 }}>
          <Box className="dashboard-panel">
            <TableUI data={data} isLoading={loading} error={error} />
          </Box>
        </Grid>

        <Grid size={{ xs: 12, md: 5 }}>
          <Box className="dashboard-panel info-panel">
            <Typography variant="overline" component="p" sx={{ color: 'var(--muted)', fontWeight: 700 }}>
              Resumen
            </Typography>
            <Typography variant="h5" component="h2" sx={{ color: 'var(--text-h)', fontWeight: 800, mb: 1 }}>
              Datos en tiempo real
            </Typography>
            <Typography component="p" sx={{ color: 'var(--text)', lineHeight: 1.65 }}>
              La tabla y el grafico se actualizan con los datos horarios de Open-Meteo para {cityName}.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
