import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MensagemSucesso from "../../Componentes/Mensagem/MensagemSucesso";
import MensagemErro from "../../Componentes/Mensagem/MensagemErro";
import editarFilme from '../../imagens/editar-filme.png'

const EditarFilme = () => {

    const { id } = useParams();
    const [mensagemSucesso, setMensagemSucesso] = useState('');
    const [mensagemErro, setMensagemErro] = useState('');
    const [nome, setNome] = useState('');
    const [classificacao, setClassificacao] = useState('');
    const [comentario, setComentario] = useState('');


    useEffect(() => {
        axios.get(`http://localhost:8080/filmes/` + id)
            .then((resposta) => {
                setNome(resposta.data.nome);
                setClassificacao(resposta.data.classificacao);
                setComentario(resposta.data.comentario);

            })
    }, [id])

    const salvar = (evento) => {
        evento.preventDefault();

        const filmeEditado = {
            nome,
            classificacao,
            comentario
        }

        axios.put(`http://localhost:8080/filmes/` + id, filmeEditado)
            .then((resposta) => {
                console.log(resposta.data);
                setMensagemSucesso('Atualização realizada com sucesso!')
                setTimeout(() => {
                    setMensagemSucesso('')
                }, 3000)

            })
            .catch((erro) => {
                console.log(erro);
                setMensagemSucesso('Ops, parece que algo deu errado!')
                setTimeout(() => {
                    setMensagemErro('')
                }, 3000)
            })

        setNome('');
        setClassificacao('');
        setComentario('');
    }


    return (
        <>
            <div className="d-flex justify-content-center">
                <img src={editarFilme} alt="editar-filme" className="img-fluid titulo filmes-titulo" />
            </div>
            <form onSubmit={salvar} className="container form-novo-filme">
                <div className="row g-3">
                    <div className="col-12">
                        <label>Nome do filme</label>
                        <input value={nome} onChange={(evento) => setNome(evento.target.value)} type="text" className="form-control" />
                    </div>
                    <div className="col-12">
                        <label>Classificação</label>
                        <input value={classificacao} onChange={(evento) => setClassificacao(evento.target.value)} type="text" className="form-control" />
                    </div>
                    <div className="col-12">
                        <label>Comentário</label>
                        <textarea value={comentario} onChange={(evento) => setComentario(evento.target.value)} type="text" className="form-control" />
                    </div>
                    <div className=" container container-botao-cadastrar">
                        <button className="btn btn-outline-primary botao-cadastrar">Atualizar</button>
                    </div>

                </div>
            </form>
            <div className="col-12 mensagem-sucesso d-flex justify-content-center mt-4">
                {mensagemSucesso && <MensagemSucesso msgSucesso={mensagemSucesso} />}
                {mensagemErro && <MensagemErro msgErro={mensagemErro} />}
            </div>

        </>
    )
}

export default EditarFilme;