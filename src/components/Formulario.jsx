import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import CATEGORIAS from '../constants/Categorias';
import useNoticias from '../hooks/useNoticias';

const Formulario = () => {
  const { categoria, setCategoria } = useNoticias();

  return (
    <form>
      <FormControl fullWidth>
        <InputLabel>Categoria</InputLabel>
        <Select 
          label='categoria'
          value={categoria}
          onChange={e => setCategoria(e.target.value)}
        >
          {CATEGORIAS.map( categoria => (
            <MenuItem 
              key={categoria.value} 
              value={categoria.value}
            >
              {categoria.label}
            </MenuItem>
          ))}
        </Select>

      </FormControl>
    </form>
  )
}

export default Formulario