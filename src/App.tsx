import { PokemonsProvider } from './contexts/PokemonsContext'
import { AppRoutes } from './routes/routes'
import './styles/global.scss'

function App() {

  return (
    <PokemonsProvider>
      <AppRoutes />
    </PokemonsProvider>
  )
}

export default App
