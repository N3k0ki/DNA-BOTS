// src/pages/Home.js
import React, { useState, useEffect, useRef } from 'react'; // Importar Hooks
import './App.css'; // Certifique-se que o CSS está sendo importado corretamente
import ESub from "./assets/Dnabots.jpg";
import EMaster from "./assets/EquipeMasterpiece.jpeg";
import Esub2 from "./assets/dna.jpg";
import Master from "./assets/masterpiece.png";
import Sub from "./assets/submerged.png";
import Une from "./assets/unearthed.png";
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para o menu mobile

  const seasons = [
    { title: "Masterpiece", image: Master, cssClass: "bg-masterpiece", path: "/temporada/masterpiece" },
    { title: "Submerged", image: Sub, cssClass: "bg-submerged", path: "/temporada/submerged" },
    { title: "Unearthed", image: Une, cssClass: "bg-unearthed", path: "/temporada/unearthed" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // --- Lógica para Animação de Scroll ---
  const revealRefs = useRef([]); // Array para guardar refs dos elementos a animar
  revealRefs.current = []; // Limpar em cada render

  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  useEffect(() => {
    // Garante que estamos no lado do cliente antes de usar IntersectionObserver
    if (typeof window === 'undefined') {
      return; // Não faz nada no lado do servidor
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // observer.unobserve(entry.target); // Descomente para animar apenas uma vez
        } else {
          // entry.target.classList.remove('visible'); // Descomente para reverter animação
        }
      });
    }, // <<<<<<<<<<<<<<<<<<<<<<< A VÍRGULA ESTÁ AQUI AGORA
      { // Início do objeto de opções
        threshold: 0.1 // Trigger quando 10% visível
      }); // Fim do new IntersectionObserver()

    const currentRefs = revealRefs.current; // Copia as refs para usar no cleanup

    currentRefs.forEach(ref => {
      if (ref) { // Garante que a ref existe
        observer.observe(ref);
      }
    });

    // Cleanup observer on component unmount
    return () => {
      currentRefs.forEach(ref => {
        if (ref) {
          observer.unobserve(ref); // Importante desobservar
        }
      });
    };
  }, []); // Array de dependências vazio, executa apenas uma vez na montagem/desmontagem

  // Função auxiliar para navegação e fechar menu
  const handleNavClick = (path) => {
    // Adiciona uma verificação básica para o path
    if (path && typeof path === 'string') {
      navigate(path);
    } else {
      console.error("Caminho de navegação inválido:", path);
    }
    setIsMenuOpen(false); // Fecha o menu ao navegar
  }


  return (
    <div className="App">
      <nav className="navbar">
        {/* Botão Hambúrguer */}
        <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? '✕' : '☰'} {/* Alterna ícone */}
        </button>

        {/* Lista de Navegação */}
        {/* Adiciona a classe 'open' condicionalmente */}
        <ul className={isMenuOpen ? 'open' : ''}>
          {/* Atualizar itens para usar handleNavClick */}
          <li onClick={() => handleNavClick('/')}>Sobre</li>
          {/* Os itens abaixo precisam ter rotas válidas definidas no seu Router */}
          <li onClick={() => handleNavClick('/patrocinador')}>Seja Patrocinador</li>
          <li onClick={() => handleNavClick('/temporadas')}>Temporadas</li>
          <li onClick={() => handleNavClick('/competidores')}>Competidores</li>
        </ul>
      </nav>

      {/* Adicionar ref={addToRefs} e class="reveal" aos elementos/seções a animar */}

      <section className="img-section"> {/* Primeira seção geralmente não animada */}
        <img
          className="background-img"
          src={ESub}
          alt="Equipe DNA Bots em competição"
        />
        <div className="overlay">
          <h1 className="title">DNA <span>BOTS</span></h1>
          <p className="slogan">“A robótica está no nosso DNA!”</p>
        </div>
      </section>

      {/* Adicionar ref e classe reveal */}
      <section className="sobre-nos reveal" ref={addToRefs}>
        <div className="container">
          <div className="imagem">
            <img src={EMaster} alt="Equipe DNA Bots Masterpiece" />
          </div>
          <div className="texto">
            <h2>Sobre nós</h2>
            <p>
              Somos a <span className="destaque">DNA Bots</span>, uma equipe de robótica da Escola Municipal Margarida Soares Guimarães,
              localizada em Betim, Minas Gerais. Nossa equipe é formada por alunos do ensino fundamental, unidos pela curiosidade,
              criatividade e vontade de transformar o mundo com a ajuda da tecnologia.
            </p>
            {/* Idealmente, este botão deveria navegar para uma seção/página de "Saiba Mais" */}
            <a href="#sobre-nos" className="botao">SAIBA MAIS ➤</a>
          </div>
        </div>
      </section>

      {/* Adicionar ref e classe reveal à seção inteira */}
      <section className="reveal" ref={addToRefs}>
        <div className="sponsor-container">
          {/* Pode-se adicionar a classe reveal aos filhos também para animação escalonada se desejar */}
          <div className="sponsor-left">
            <h2 className="sponsor-title">Por que ser um patrocinador?</h2>
            <img
              src={Esub2}
              alt="Detalhe robô DNA Bots"
              className="sponsor-image"
            />
          </div>
          <div className="sponsor-right">
            <div className="sponsor-item">
              <h3><span>01</span> Visibilidade da marca</h3>
              <p>Sua empresa será divulgada em nossos uniformes, banners, redes sociais e eventos da equipe.</p>
            </div>
            <div className="sponsor-item">
              <h3><span>02</span> Conexão com a educação e inovação</h3>
              <p>Mostre que sua marca apoia a formação de jovens em áreas como ciência, tecnologia e sustentabilidade.</p>
            </div>
            <div className="sponsor-item">
              <h3><span>03</span> Apoio social com impacto real</h3>
              <p>Você estará contribuindo diretamente para o crescimento pessoal e profissional de estudantes da rede pública.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Adicionar ref e classe reveal */}
      <section className="seasons-section reveal" ref={addToRefs}>
        <h2 className="seasons-title">Temporadas</h2>
        <p className="seasons-subtitle">
          Cada temporada, um novo desafio. Cada desafio, uma nova conquista.
        </p>
        <div className="seasons-grid">
          {seasons.map((season, index) => (
            <div
              key={index}
              className="season-card clickable-card reveal"
              ref={addToRefs} // Adiciona ref para observação individual
              onClick={() => handleNavClick(season.path)}
              style={{ transitionDelay: `${index * 0.1}s` }} // Opcional: Stagger animation
            >
              <div className={`season-image ${season.cssClass}`}>
                <img src={season.image} alt={`Logo da temporada ${season.title}`} />
              </div>
              <div className="season-label">{season.title}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Adicionar ref e classe reveal */}
      <section className="quoteSection reveal" ref={addToRefs}>
        <blockquote className="quoteText">
          <p>
            "Dna bots, avante sem parar, com força e coragem,
            vamos dominar! Somos amigos, somos unidos,
            Unidos na competição rumo á inovação. Somos
            amigos sempre em comunhão. Dna vamos lá!"
          </p>
        </blockquote>
      </section>
    </div>
  );
}

export default Home;