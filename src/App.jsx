import { Container, Typography, Grid } from '@mui/material'
import { NoticiasProvider } from './contexts/NoticiasProvider';

import Formulario from './components/Formulario';
import ListadoNoticias from './components/ListadoNoticias';

function App() {

  return (
    <NoticiasProvider>
      <Container>
      <header>
        <Typography align='center' marginY={5} component='h1' variant='h3'>
          Buscador de noticias
        </Typography>
      </header>

      <Grid
        container
        direction='row'
        justifyContent='center'
        alignItems='center'
      >
        <Grid item md={6} xs={12} lg={4}>
          <Formulario />
        </Grid>
      </Grid>

      <ListadoNoticias />

    </Container>
    </NoticiasProvider>
  )
}

export default App
