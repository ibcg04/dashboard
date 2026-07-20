import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { DataGrid, type GridColDef } from '@mui/x-data-grid';
import type { OpenMeteoResponse } from '../types/DashboardTypes';

interface TableUIProps {
   data: OpenMeteoResponse | undefined;
   isLoading: boolean;
   error: string | undefined;
}

function formatHour(value: string) {
   return new Intl.DateTimeFormat('es-EC', {
      day: '2-digit',
      month: 'short',
      hour: '2-digit',
      minute: '2-digit',
   }).format(new Date(value));
}

function combineWeatherData(
   time: Array<string>,
   temperature: Array<number>,
   apparentTemperature: Array<number>,
   windSpeed: Array<number>,
) {
   return time.slice(0, 24).map((label, index) => ({
      id: index,
      time: formatHour(label),
      temperature: temperature[index],
      apparentTemperature: apparentTemperature[index],
      windSpeed: windSpeed[index],
   }));
}

const columns: GridColDef[] = [
   {
      field: 'time',
      headerName: 'Hora',
      flex: 1.3,
      minWidth: 170,
   },
   {
      field: 'temperature',
      headerName: 'Temp.',
      flex: 0.8,
      minWidth: 110,
   },
   {
      field: 'apparentTemperature',
      headerName: 'Sensacion',
      flex: 1,
      minWidth: 130,
   },
   {
      field: 'windSpeed',
      headerName: 'Viento',
      flex: 0.8,
      minWidth: 110,
   },
];

export default function TableUI({ data, isLoading, error }: TableUIProps) {
   if (isLoading) {
      return (
         <Box sx={{ minHeight: 360, display: 'grid', placeItems: 'center' }}>
            <CircularProgress />
         </Box>
      );
   }

   if (error) {
      return <Alert severity="error">{error}</Alert>;
   }

   if (!data) {
      return <Alert severity="warning">No hay datos disponibles para mostrar.</Alert>;
   }

   const rows = combineWeatherData(
      data.hourly.time,
      data.hourly.temperature_2m,
      data.hourly.apparent_temperature,
      data.hourly.wind_speed_10m,
   );

   return (
      <Box sx={{ height: 360, width: '100%' }}>
         <DataGrid
            rows={rows}
            columns={columns}
            columnHeaderHeight={44}
            sx={{
               borderColor: 'var(--border)',
               bgcolor: 'var(--panel)',
               color: 'var(--text-h)',
               '& .MuiDataGrid-columnHeaders': {
                  bgcolor: 'var(--bg)',
               },
            }}
            initialState={{
               pagination: {
                  paginationModel: {
                     pageSize: 6,
                  },
               },
            }}
            pageSizeOptions={[6, 12, 24]}
            disableRowSelectionOnClick
         />
      </Box>
   );
}
