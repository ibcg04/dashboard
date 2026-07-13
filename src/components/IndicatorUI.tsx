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
                boxShadow: '0 12px 30px rgba(0, 0, 0, 0.08)',
            }}
         >
             <CardContent sx={{ height: '100%', p: 3, textAlign: 'center' }}>
             <Typography variant="h5" component="div" sx={{ fontWeight: 700, mb: 1 }}>
                 {props.description}
             </Typography>
             <Typography variant="body2" component="p" sx={{ lineHeight: 1.35, color: 'var(--text)' }}>
                 {props.title}
             </Typography>
             </CardContent>
         </Card>
     )
 }
