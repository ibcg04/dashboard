import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
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
      <Box sx={{ width: '100%' }}>
         <Typography variant="overline" component="p" sx={{ color: 'var(--muted)', fontWeight: 700 }}>
            Proximas 24 horas
         </Typography>
         <Typography variant="h5" component="h2" sx={{ color: 'var(--text-h)', fontWeight: 800, mb: 2 }}>
            Detalle horario
         </Typography>
         <DataGrid
            rows={rows}
            columns={columns}
            rowHeight={48}
            columnHeaderHeight={44}
            sx={{
               height: 360,
               borderColor: 'var(--border)',
               bgcolor: 'var(--panel)',
               color: 'var(--text-h)',
               borderRadius: 2,
               '& .MuiDataGrid-columnHeaders': {
                  bgcolor: 'var(--table-header-bg)',
                  color: 'var(--table-header-text)',
               },
               '& .MuiDataGrid-columnHeader': {
                  bgcolor: 'var(--table-header-bg)',
                  color: 'var(--table-header-text)',
               },
               '& .MuiDataGrid-columnHeaderTitle': {
                  color: 'var(--table-header-text)',
                  fontWeight: 800,
               },
               '& .MuiDataGrid-sortIcon, & .MuiDataGrid-menuIconButton': {
                  color: 'var(--table-header-text)',
               },
               '& .MuiDataGrid-cell': {
                  color: 'var(--text-h)',
               },
               '& .MuiDataGrid-footerContainer': {
                  color: 'var(--text-h)',
               },
               '& .MuiTablePagination-root, & .MuiTablePagination-selectLabel, & .MuiTablePagination-displayedRows': {
                  color: 'var(--text-h)',
               },
               '& .MuiTablePagination-actions button': {
                  color: 'var(--text-h)',
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
