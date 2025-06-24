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
import steam7 from './assets/temporadas/submerged/equipe2025/amistoso1.jpg'
import steam8 from './assets/temporadas/submerged/equipe2025/amistoso2.jpg'
import steam9 from './assets/temporadas/submerged/equipe2025/amistoso3.jpg'
import './App.css'; // Certifique-se que o CSS está sendo importado corretamente
import React, { useEffect, useState } from 'react';
// Suas importações de imagens
import ESub from "./assets/temporadas/submerged/Dnabots.jpg";
import Eune from "./assets/temporadas/unearthed/Eune.jpg";



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

  return (
    <div className="App">
      <NavBar />
      <section className="img-section">
        <img className="background-img img1" src={ESub} alt="Equipe DNA Bots em competição" />
        <img className="background-img img2" src={Eune} alt="Equipe DNA Bots 2" />

        <div className="overlay">
          <h1 className="title">DNA <span>BOTS</span></h1>
          <p className="slogan">“A robótica está no nosso DNA!”</p>
        </div>
      </section>

      <AboutUs />
      <SteamSection />
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