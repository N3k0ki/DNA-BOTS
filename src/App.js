// src/pages/Home.js
import './App.css';
import ESub from "./assets/Dnabots.jpg";
import EMaster from "./assets/EquipeMasterpiece.jpeg"
import  { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate();

  return (
    <div className="App">
      <nav className="navbar">
        <ul>
          <li onClick={() => navigate('/')}>Sobre</li>
          <li>|</li>
          <li>Seja Patrocinador</li>
          <li>|</li>
          <li>Temporadas</li>
          <li>|</li>
          <li>Competidores</li>
        </ul>
      </nav>
      <section className="img-section">
        <img
          className="background-img"
          src={ESub}
          alt="Descrição da imagem ou deixe vazio se for decorativa"
        />
        <div className="overlay">
          <h1 className="title">DNA <span>BOTS</span></h1>
          <p className="slogan">“A robótica está no nosso DNA!”</p>
        </div>
      </section>
      <section className="sobre-nos">
        <div className="container">
          <div className="imagem">
            <img src={EMaster} alt="Equipe DNA Bots" />
          </div>
          <div className="texto">
            <h2>Sobre nós</h2>
            <p>
              Somos a <span className="destaque">DNA Bots</span>, uma equipe de robótica da Escola Municipal Margarida Soares Guimarães,
              localizada em Betim, Minas Gerais. Nossa equipe é formada por alunos do ensino fundamental, unidos pela curiosidade,
              criatividade e vontade de transformar o mundo com a ajuda da tecnologia.
            </p>
            <a href="#saiba-mais" className="botao">SAIBA MAIS ➤</a>
          </div>
        </div>
      </section>
    
    </div>
  );
}

export default Home;
