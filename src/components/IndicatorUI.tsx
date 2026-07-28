 import Card from '@mui/material/Card';
 import CardContent from '@mui/material/CardContent';
 import Typography from '@mui/material/Typography';

 interface IndicatorUIProps {
     title?: string;
     description?: string;
 }

 export default function IndicatorUI(props: IndicatorUIProps) {
     return (
         <Card
            sx={{
                height: '100%',
                borderRadius: 2,
                border: '1px solid',
                borderColor: 'var(--border)',
                bgcolor: 'var(--panel)',
                color: 'var(--text-h)',
                boxShadow: 'var(--shadow)',
                overflow: 'hidden',
                position: 'relative',
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    inset: '0 0 auto',
                    height: 4,
                    bgcolor: 'var(--accent)',
                },
            }}
         >
             <CardContent sx={{ height: '100%', p: 2.5, textAlign: 'left' }}>
             <Typography variant="h5" component="div" sx={{ fontWeight: 900, mb: 1, color: 'var(--text-h)' }}>
                 {props.description}
             </Typography>
             <Typography variant="body2" component="p" sx={{ lineHeight: 1.35, color: 'var(--muted)', fontWeight: 700 }}>
                 {props.title}
             </Typography>
             </CardContent>
         </Card>
     )
 }
