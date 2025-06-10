// src/pages/Home.js
import AboutUs from './componentes/homepage/AboutUsSection/aboutus';
import Sponsor from './componentes/homepage/SponsorSection/Sponsor';
import NavBar from './componentes/homepage/Navbar/navbar';
import RobotShowcase from './componentes/homepage/robot/robot';
import Season from './componentes/homepage/SeasonsSection/season';
import Competidores from './componentes/homepage/Competitor/competitor';
import Quote from './componentes/homepage/QuoteSection/quote';
import steam1 from './assets/Steam1.jpg';
import steam2 from './assets/Steam2.jpeg';
import steam3 from './assets/Steam3.jpeg';
import steam4 from './assets/Steam4.jpeg';
import steam5 from './assets/Steam5.jpeg';
import steam6 from './assets/Steam6.png'
import './App.css'; // Certifique-se que o CSS está sendo importado corretamente
import React, { useEffect, useState } from 'react';
// Suas importações de imagens
import ESub from "./assets/temporadas/submerged/Dnabots.jpg";


// import { useNavigate } from 'react-router-dom';
function Home() {
  const imagens = [
    steam1,
    steam2,
    steam3,
    steam4,
    steam5,
    steam6
  ];

  const [indice, setIndice] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setFade(false); // inicia transição
      setTimeout(() => {
        setIndice((prev) => (prev + 3) % imagens.length);
        setFade(true); // aplica nova transição
      }, 500); // tempo da transição
    }, 5000);

    return () => clearInterval(intervalo);
  }, [imagens.length]);

  const imagensVisiveis = [
    imagens[indice],
    imagens[(indice + 1) % imagens.length],
    imagens[(indice + 2) % imagens.length]
  ];

  return (
    <div className="App">
      <NavBar />
      <section className="img-section">
        <img className="background-img" src={ESub} alt="Equipe DNA Bots em competição" />
        <div className="overlay">
          <h1 className="title">DNA <span>BOTS</span></h1>
          <p className="slogan">“A robótica está no nosso DNA!”</p>
        </div>
      </section>

      <AboutUs />
      <section className="steam_section reveal">
        <blockquote className="quoteText">
          <h3 className='steam_h3'>O que é o Método STEAM?</h3>
          <p className='steam_p'>
            O método STEAM integra <b>Ciência</b>, <b>Tecnologia</b>, <b>Engenharia</b>, <b>Artes</b> e <b>Matemática</b> em uma abordagem prática e interdisciplinar, que conecta teoria e realidade. Ele desenvolve habilidades como pensamento crítico, criatividade, trabalho em equipe e protagonismo.
          </p>
          <p className='steam_p'>
            A <b>DNA Bots</b> adota o STEAM em seus projetos de robótica, incentivando soluções criativas e preparando seus membros para os desafios do futuro.
          </p>
        </blockquote>
      </section>
      <section className="learn_section reveal">
        <blockquote className="SteamText">
          <h3 className='learn_h3'>Aprenda a usar o método STEAM</h3>
          <p className='steam_p'>
            Na prática, o STEAM pode ser aplicado por meio de projetos que envolvem resolução de problemas reais, uso de ferramentas tecnológicas, construção de protótipos, experimentos e atividades criativas que unam lógica e expressão artística.
          </p>

          <div className="carousel-container">
            <div className="carrossel-container">
              <div className={`carrossel-trilha ${fade ? 'fade-in' : 'fade-out'}`}>
                {imagensVisiveis.map((src, i) => (
                  <img key={i} src={src} alt={`Slide ${i}`} className="carrossel-imagem" />
                ))}
              </div>
            </div>
          </div>
        </blockquote>
      </section>
      <Sponsor />
      <Season />

      <Competidores />
      <RobotShowcase />

      <section className="social-section">
        <div className="left">
          <h2>Novidades nas redes!</h2>
          <p>
            Siga nossas redes sociais para ficar por dentro das novidades e acompanhar tudo o que acontece. Elas também são um canal direto para você entrar em contato conosco de forma rápida e prática.
          </p>
          <div className="social-icons">
            <a href="https://www.instagram.com/dna_bots" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.tiktok.com/@dnabots" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-tiktok"></i>
            </a>
            <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=DmwnWrRpccnBXftqVsZRxCJLMdRwvjCzhBHPVHDlPdjPznLNZSjKQwpvMSBBRxKvDWBDJtfhDpZq" target="_blank">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>

        <div className="right">
          <div className="media-container">
            <div className="widget-container">
              <script src="https://static.elfsight.com/platform/platform.js" async></script>
              <div
                className="elfsight-app-f97e576a-0659-433d-83ca-8249586fad71"
                data-elfsight-app-lazy
              ></div>
            </div>
          </div>
        </div>
      </section>
      <Quote />


    </div>
  );
}

export default Home;