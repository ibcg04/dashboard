import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import { LineChart } from '@mui/x-charts/LineChart';
import type { OpenMeteoResponse } from '../types/DashboardTypes';

interface ChartUIProps {
   data: OpenMeteoResponse | undefined;
   isLoading: boolean;
   error: string | undefined;
}

function formatHour(value: string) {
   return new Intl.DateTimeFormat('es-EC', {
      hour: '2-digit',
      minute: '2-digit',
   }).format(new Date(value));
}

export default function ChartUI({ data, isLoading, error }: ChartUIProps) {
   if (isLoading) {
      return (
         <Box sx={{ minHeight: 360, display: 'grid', placeItems: 'center', width: '100%' }}>
            <CircularProgress />
         </Box>
      );
   }

   if (error) {
      return <Alert severity="error">{error}</Alert>;
   }

   if (!data) {
      return <Alert severity="warning">No hay datos disponibles para graficar.</Alert>;
   }

   const labels = data.hourly.time.slice(0, 24).map(formatHour);
   const temperatures = data.hourly.temperature_2m.slice(0, 24);
   const apparentTemperatures = data.hourly.apparent_temperature.slice(0, 24);

   return (
      <Box sx={{ width: '100%' }}>
         <Typography variant="h5" component="div" sx={{ color: 'var(--text-h)', mb: 2 }}>
            Pronostico por hora
         </Typography>
         <LineChart
            height={340}
            margin={{ top: 28, right: 28, bottom: 54, left: 48 }}
            series={[
               { data: temperatures, label: `Temperatura (${data.hourly_units.temperature_2m})` },
               {
                  data: apparentTemperatures,
                  label: `Sensacion (${data.hourly_units.apparent_temperature})`,
               },
            ]}
            xAxis={[{ scaleType: 'point', data: labels }]}
         />
      </Box>
   );
}
