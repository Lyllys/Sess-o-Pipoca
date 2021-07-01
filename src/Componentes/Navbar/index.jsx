import { Link } from "react-router-dom";
import detalhe from '../../imagens/detalhe-superior.png';
import './estilos.css'

const NavBar = () => {
  return (
    <nav className="container-navbar">
     
      <img className="img-detalhe img-fluid" src={detalhe} alt="" /> 
      
     
      <div className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item ms-4 ">
                <Link className="nav-link " aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item ms-4">
                <Link className="nav-link" to="/filmes">Filmes Assistidos</Link>
              </li>
              <li className="nav-item ms-4">
                <Link className="nav-link" to="/filmes/cadastrar">Cadastrar filme</Link>
              </li>
            </ul>
            <div className="d-flex">
            
            <form className="d-flex">
              <input className="form-control ms-3 me-1" type="search" placeholder="Buscar" aria-label="Search" />
              <button className="btn btn-outline-success botao-search" type="submit">Buscar</button>
            </form>
            </div>
          </div>
        </div>
      </div>
    </nav>

  )
}

export default NavBar;