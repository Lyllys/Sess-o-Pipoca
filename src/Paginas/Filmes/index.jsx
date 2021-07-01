import { useEffect, useState } from "react";
import axios from "axios";
import './estilos.css';
import filmesAssistidos from '../../imagens/filmes-assistidos.png';
import { Link } from "react-router-dom";
const Filmes = () => {
    
    const [filmes, setFilmes] = useState([]);

    const obterFilmes = () => {
      axios.get('http://localhost:8080/filmes')
      .then(resposta => setFilmes(resposta.data))
      .catch(erro => console.log(erro));
    }

    useEffect(() => {
        obterFilmes()
    }, []);

    const excluir = (filme) => {
      axios.delete(`http://localhost:8080/filmes/` + filme.id)
      .then(() => obterFilmes())
    }

    return ( < >
    <div className="d-flex justify-content-center container-cadastrar">
    <img src={filmesAssistidos} alt="filmes-assistidos" className="img-fluid titulo filmes-titulo"/>
    </div>
    <table className="table table-striped table-hover container tabela-filmes">
    <thead>
      <tr>
        <th scope="col">NOME</th>
        <th scope="col">CLASSIFICAÇÃO</th>
        <th scope="col">COMENTÁRIO</th>
        <th scope="col">DATA</th> 
        <th scope="col">EDITAR</th> 
        <th scope="col">EXCLUIR</th> 
      </tr>
    </thead>
    <tbody>
        {filmes.map((filme) => <tr key={filme.id}>
            <td> {filme.nome}</td>
            <td>{filme.classificacao}</td>
            <td> {filme.comentario}</td>
            <td> {filme.diaSessao}</td>
            <td>
              <Link className="btn btn-sm btn-outline-info" to={`/filmes/editar/${filme.id}`}>editar</Link>
            </td>
            <td>
              <button type="button" className="ml-2 btn btn-sm btn-outline-danger" onClick={() => { excluir(filme) }}>excluir</button>
            </td>
        </tr> )}
     
    </tbody>
  </table>
    </>)
    
}

export default Filmes;