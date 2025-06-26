// src/pages/Home.js
import AboutUs from './componentes/homepage/AboutUsSection/aboutus';
import Sponsor from './componentes/homepage/SponsorSection/Sponsor';
import NavBar from './componentes/homepage/Navbar/navbar';
import RobotShowcase from './componentes/homepage/robot/robot';
import Season from './componentes/homepage/SeasonsSection/season';
import Competidores from './componentes/homepage/Competitor/competitor';
import Quote from './componentes/homepage/QuoteSection/quote';
import SteamSection from './componentes/homepage/Steam/SteamSection';

import steam1 from './assets/Steam1.jpg';
import steam2 from './assets/Steam2.jpeg';
import steam3 from './assets/Steam3.jpeg';
import steam4 from './assets/Steam4.jpeg';
import steam5 from './assets/Steam5.jpeg';
import steam6 from './assets/Steam6.png';
import steam7 from './assets/temporadas/submerged/equipe2025/amistoso1.jpg';
import steam8 from './assets/temporadas/submerged/equipe2025/amistoso2.jpg';
import steam9 from './assets/temporadas/submerged/equipe2025/amistoso3.jpg';
import './App.css'; // Certifique-se que o CSS está sendo importado corretamente
import React, { useEffect, useState } from 'react';
// Suas importações de imagens
import ESub from "./assets/temporadas/submerged/Dnabots.jpg";
import Eune from "./assets/temporadas/unearthed/Eune.jpg";
import Emaster from "./assets/temporadas/masterpiece/EquipeMasterpiece.jpeg";
import Winners from "./assets/temporadas/submerged/classificacao.jpg"
import Margarida from "./assets/patrocinadores/escola/escola.png"



// import { useNavigate } from 'react-router-dom';
function Home() {
  const imagens = [
    steam1,
    steam2,
    steam3,
    steam4,
    steam5,
    steam6,
    steam7,
    steam8,
    steam9
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

  const achievements = [
    "1º lugar Champions Award Internacional – EUA 2022/2023",
    "1º lugar Champions Award Minas 2022/2023",
    "2º lugar Champions Award Minas 2020/2021",
    "3º lugar Champions Award Nacional 2022/2023",
    "3º lugar Champions Award Minas 2023/2024",
  ];
  return (
    <div className="App">
      <NavBar />
      <section className="img-section">
        <img className="background-img img1" src={ESub} alt="Equipe DNA Bots em competição submerged 2024" />
        <img className="background-img img2" src={Eune} alt="Equipe DNA Bots na competição amistosa submerged com novos membros da equipe 2025" />
        <img className='background-img img3' src={Emaster} alt="primeira versão da equipe DNA Bots na temporada masterpiece 2023"></img>

        <div className="overlay">
          <h1 className="title">DNA <span>BOTS</span></h1>
          <p className="slogan">“A robótica está no nosso DNA!”</p>
        </div>
      </section>

      <AboutUs />
      <SteamSection />
      <div className="hero-section">
        <div className="hero-title">
          <span className="first">FIRST</span> <span className="lego-league">LEGO League</span>
        </div>
        <div className="hero-content">
          <div className="hero-image-container">
            <img src={Winners} alt="Equipe Amigos Droids FLL" className="hero-image" />
          </div>
          <div className="hero-text-container">
            <p>
              A Amigos Droids FLL começou em 2015 com um amor imerso pela FIRST e pelo universo da robótica. Ao
              longo dos nossos nove anos de existência, fomos motivados a impactar e inspirar a vida de outras pessoas
              com nossos projetos, sempre mantendo objetivos claros que nos ajudam a manter o foco e a força de
              trabalho. Onde quer que fôssemos, levávamos muito amor e amizade, construindo não apenas uma história
              marcante, mas também uma família unida e dedicada. Além disso, conquistamos grandes realizações, fruto
              de muito trabalho árduo, como:
            </p>
            <ul>
              {achievements.map((achievement, index) => (
                <li key={index}>{achievement}</li>
              ))}
            </ul>
            <p>
              Em 2024, tivemos que descontinuar a equipe seguindo com o FTC, mas decidimos pela primeira vez na
              história das equipes da FIRST LEGO League, compartilhar todos os materiais desenvolvidos ao longo desses
              anos de competição. Explore nossos projetos, designs de robô e estratégias de sucesso, inspirando-se na
              nossa jornada de inovação na FLL. Inscreva-se agora e obtenha acesso aos materiais que serão postados
              semanalmente. Confira a programação:
            </p>
          </div>
        </div>
      </div>
      <section>
        <div className='school'>
          <h3>Nossa escola:</h3>
          <img src={Margarida}></img>
        </div>

        <div className='school'>
          <h3>Nossos patrocinadores:</h3>
          <p className='sponsor'>Seja o primeiro patrocinador!</p>
        </div>
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

      <section className='support'>
        <div className='supporter'>
          <h4>Apoiadores:</h4>
          <p className='p_sup'>Seja o primeiro apoiador!</p>
        </div>
        <div>
          <p>DNA Bots | Escola Municipal Margarida Soares Guimarães </p>
          <p>R. Tocantins, 335 - Brasiléia, Betim - MG</p>
        </div>
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
      </section>       
    </div>
  );
}

export default Home;