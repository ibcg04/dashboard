import Typography from '@mui/material/Typography';

interface HeaderUIProps {
    cityName: string;
}

export default function HeaderUI({ cityName }: HeaderUIProps) {
    return (
        <>
            <Typography
                variant="overline"
                component="p"
                sx={{
                    color: 'var(--accent)',
                    fontWeight: 800,
                    letterSpacing: 1,
                    mb: 0.5,
                }}
            >
                Open-Meteo Dashboard
            </Typography>
            <Typography
                variant="h2"
                component="h1"
                sx={{
                    fontWeight: 900,
                    color: 'var(--text-h)',
                    lineHeight: 1.05,
                }}
            >
                Clima actual en {cityName}
            </Typography>
            <Typography
                component="p"
                sx={{
                    color: 'var(--text)',
                    maxWidth: 640,
                    mt: 1.5,
                    lineHeight: 1.6,
                }}
            >
                Indicadores, pronostico por hora y comparacion visual de temperatura, sensacion termica, humedad y viento.
            </Typography>
        </>
    );
}
