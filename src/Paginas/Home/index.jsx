
import banner from '../../imagens/banner.svg'
import titulo from '../../imagens/titulo.png'
import './estilos.css'
import { Link } from 'react-router-dom'

const Home = () => {
    return <div className="container">
        <div className="row mb-0">
            <div className="col-12 col-lg-6 titulo-home">
               <img src={titulo} alt="titulo" className=" img-fluid titulo" />
               <br />
                <Link to="/filmes/cadastrar" type="button" class="btn btn-outline-primary botao-ver-mais">CADASTRAR FILME</Link>
            </div>
            <div className="col-12 col-lg-6 d-flex justify-content-center">
               <img className="img-fluid banner" src={banner} alt="logo" />
            </div>
     
        </div>
       

    </div>
}

export default Home;