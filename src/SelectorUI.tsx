import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { type SelectChangeEvent } from '@mui/material/Select';
import { useState } from 'react';

interface SelectorProps {
   onOptionSelect: (option: string | null) => void;
}

export default function SelectorUI({ onOptionSelect }: SelectorProps) {
   const [cityInput, setCityInput] = useState('');

   const handleChange = (event: SelectChangeEvent<string>) => {
      const selectedValue = event.target.value;
      setCityInput(selectedValue);
      onOptionSelect(selectedValue || null);
   };

   return (
      <FormControl fullWidth sx={{ textAlign: 'left' }}>
         <InputLabel id="city-select-label">Ciudad</InputLabel>
         <Select
            labelId="city-select-label"
            id="city-simple-select"
            label="Ciudad"
            value={cityInput}
            onChange={handleChange}
            sx={{
               bgcolor: 'var(--panel)',
               color: 'var(--text-h)',
               '.MuiOutlinedInput-notchedOutline': { borderColor: 'var(--border)' },
               '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: 'var(--accent-border)' },
            }}
         >
            <MenuItem disabled value="">
               <em>Seleccione una ciudad</em>
            </MenuItem>
            <MenuItem value="Guayaquil">Guayaquil</MenuItem>
            <MenuItem value="Quito">Quito</MenuItem>
            <MenuItem value="Manta">Manta</MenuItem>
            <MenuItem value="Cuenca">Cuenca</MenuItem>
         </Select>
         {cityInput && (
            <p style={{ marginTop: 12, color: 'var(--text)' }}>
               Informacion del clima en{' '}
               <span style={{ fontWeight: 'bold', color: 'var(--text-h)' }}>{cityInput}</span>
            </p>
         )}
      </FormControl>
   );
}
