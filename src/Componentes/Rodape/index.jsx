import './estilos.css'
import detalhe from '../../imagens/detalhe-inferior.png'
import { RiGithubLine } from 'react-icons/ri';
import { FiLinkedin } from 'react-icons/fi';
import { FaHeart } from 'react-icons/fa';

const Rodape = () => {
  return <footer className=" rodape">

    <a target="_blank"  rel="noreferrer" href="https://github.com/Lyllys"> <RiGithubLine size="40" color="#2B2929" /></a>
    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/lyllys-galhardo"> <FiLinkedin size="40" color="#2B2929" /></a>
    <p className="rodape-copyright"> Made with  <FaHeart /> by Lyllys</p>
    <img className="img-detalhe-rodape img-fluid" src={detalhe} alt="" /> 
    
  </footer>
}

export default Rodape;