// src/pages/Home.js
import AboutUs from './componentes/homepage/AboutUsSection/aboutus';
import Sponsor from './componentes/homepage/SponsorSection/Sponsor';
import NavBar from './componentes/homepage/Navbar/navbar';
import RobotShowcase from './componentes/homepage/robot/robot';
import Season from './componentes/homepage/SeasonsSection/season';
import Competidores from './componentes/homepage/Competitor/competitor';
import Quote from './componentes/homepage/QuoteSection/quote';

import './App.css'; // Certifique-se que o CSS está sendo importado corretamente

// Suas importações de imagens
import ESub from "./assets/temporadas/submerged/Dnabots.jpg";


// import { useNavigate } from 'react-router-dom';
function Home() {


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
      <Sponsor />
      <Season />
      <Quote />
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



    </div>
  );
}

export default Home;