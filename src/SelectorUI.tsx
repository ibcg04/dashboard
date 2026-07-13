import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import { type SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';

export default function SelectorUI(){
   
   const [cityInput, setCityInput] = useState("");

    const handleChange = (event: SelectChangeEvent<string>) => {
        setCityInput(event.target.value);
    };

    return (
   <FormControl fullWidth sx={{ textAlign: 'left' }}>
      <InputLabel id="city-select-label">Ciudad</InputLabel>
      <Select
         labelId="city-select-label"
         id="city-simple-select"
         label="Ciudad"
         value =  {cityInput}
         onChange={handleChange}
         sx={{
            bgcolor: 'var(--panel)',
            color: 'var(--text-h)',
            '.MuiOutlinedInput-notchedOutline': { borderColor: 'var(--border)' },
            '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: 'var(--accent-border)' },
         }}
         >
         <MenuItem disabled><em>Seleccione una ciudad</em></MenuItem>
         <MenuItem value={"guayaquil"}>Guayaquil</MenuItem>
         <MenuItem value={"quito"}>Quito</MenuItem>
         <MenuItem value={"manta"}>Manta</MenuItem>
         <MenuItem value={"cuenca"}>Cuenca</MenuItem>
         
      </Select>
      {cityInput && (<p style={{ marginTop: 12, color: 'var(--text)' }}>Informacion del clima en <span style={{ fontWeight: 'bold', textTransform: 'Capitalize', color: 'var(--text-h)' }}>{cityInput}</span></p>)}
   </FormControl>
   )
}
