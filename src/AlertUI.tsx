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
                bgcolor: 'var(--panel)',
            }}>
              {config.description}
        </Alert>
    );
}
