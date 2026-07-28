import Alert from '@mui/material/Alert';

interface AlertConfig {
    description: string;
}


export default function AlertUI(config: AlertConfig) {
    return (
        <Alert 
            severity="success"
            variant = "outlined"
            sx={{
                borderRadius: 2,
                px: 2,
                py: 1,
                bgcolor: 'rgba(22, 163, 74, 0.08)',
                borderColor: 'rgba(22, 163, 74, 0.35)',
                color: 'var(--text-h)',
                fontWeight: 700,
            }}>
              {config.description}
        </Alert>
    );
}
