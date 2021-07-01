import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Paginas/Home';
import NavBar from './Componentes/Navbar';
import Rodape from './Componentes/Rodape';
import Filmes from './Paginas/Filmes';
import NovoFilme from './Paginas/Filmes/NovoFilme';
import EditarFilme from './Paginas/Filmes/EditarFilme';


function App() {
  return (
    <BrowserRouter>
    <NavBar />
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/filmes">
        <Filmes />
      </Route>
      <Route path="/filmes/cadastrar">
        <NovoFilme />
      </Route>
      <Route path="/filmes/editar/:id">
        <EditarFilme />
      </Route>
    </Switch>
    <Rodape />
    </BrowserRouter>
  );
}

export default App;
