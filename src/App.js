// src/pages/Home.js
import React, { useState, useEffect, useRef, useCallback } from 'react';
import AboutUs from './componentes/homepage/AboutUsSection/aboutus';
import Sponsor from './componentes/homepage/SponsorSection/Sponsor';
import NavBar from './componentes/homepage/Navbar/navbar';
import './App.css'; // Certifique-se que o CSS está sendo importado corretamente

// Suas importações de imagens
import ESub from "./assets/temporadas/submerged/Dnabots.jpg";

import Master from "./assets/temporadas/masterpiece/masterpiece.png";
import Sub from "./assets/temporadas/submerged/submerged.png";
import Une from "./assets/temporadas/unearthed/unearthed.png";
import { useNavigate } from 'react-router-dom';
import isabelle from './assets/membros/Submerged/isabelle.png';
import daniela from './assets/membros/Submerged/daniela.png';
import izabella from './assets/membros/Submerged/izabella.png';

function Home() {
  const navigate = useNavigate();
  const [/*isMenuOpen*/, setIsMenuOpen] = useState(false);

  const seasons = [
    { title: "Masterpiece", image: Master, cssClass: "bg-masterpiece", path: "/temporada/masterpiece" },
    { title: "Submerged", image: Sub, cssClass: "bg-submerged", path: "/temporada/submerged" },
    { title: "Unearthed", image: Une, cssClass: "bg-unearthed", path: "/temporada/unearthed" },
  ];

  // --- Lógica para Animação de Scroll ---
  const revealRefs = useRef([]);
  revealRefs.current = [];

  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  // --- Dados dos Competidores ---
  const competidores = [
    { id: 1, nome: 'Isabelle', imagem: isabelle },
    // { id: 2, nome: 'Ana Clara', imagem: anaClara },
    // { id: 3, nome: 'Geovanna', imagem: geovanna },
    // { id: 4, nome: 'João', imagem: joao },
    // { id: 5, nome: 'Stefany', imagem: stefany },
    { id: 6, nome: 'Daniela', imagem: daniela },
    { id: 7, nome: 'Izabella', imagem: izabella },
    // { id: 8, nome: 'Poliane', imagem: poliane },
    // { id: 9, nome: 'Matheus', imagem: matheus },
  ];

  // --- Lógica do Carrossel de Competidores ---
  const [carouselCurrentIndex, setCarouselCurrentIndex] = useState(0);
  const itemsPerCarouselPage = 3;
  const totalCarouselPages = Math.ceil(competidores.length / itemsPerCarouselPage);
  const carouselTrackRef = useRef(null);
  const touchStartXRef = useRef(0);
  const touchEndXRef = useRef(0);
  const isDraggingRef = useRef(false);
  const MIN_SWIPE_DISTANCE = 50; // Mínimo de pixels para considerar um swipe

  const goToCarouselPage = useCallback((pageIndex) => {
    setCarouselCurrentIndex(pageIndex);
  }, []);

  const handleCarouselPrev = () => {
    setCarouselCurrentIndex((prev) => (prev === 0 ? totalCarouselPages - 1 : prev - 1));
  };

  const handleCarouselNext = () => {
    setCarouselCurrentIndex((prev) => (prev === totalCarouselPages - 1 ? 0 : prev + 1));
  };

  const handleCarouselTouchStart = (e) => {
    touchStartXRef.current = e.targetTouches[0].clientX;
    isDraggingRef.current = false;
  };

  const handleCarouselTouchMove = (e) => {
    touchEndXRef.current = e.targetTouches[0].clientX;
    if (Math.abs(touchStartXRef.current - touchEndXRef.current) > 10) {
      isDraggingRef.current = true;
    }
  };

  const handleCarouselTouchEnd = () => {
    if (!isDraggingRef.current) return; // Se não foi um arrasto significativo

    const swipeDistance = touchStartXRef.current - touchEndXRef.current;
    if (swipeDistance > MIN_SWIPE_DISTANCE) {
      handleCarouselNext();
    } else if (swipeDistance < -MIN_SWIPE_DISTANCE) {
      handleCarouselPrev();
    }
    // Resetar isDraggingRef aqui é importante para permitir cliques após um swipe curto que não mudou de página.
    // No entanto, o if no início da função já trata isso.
  };

  const handleCompetidorCardClick = (competidor, e) => {
    if (isDraggingRef.current) {
      e.preventDefault(); // Previne a navegação ou outra ação se foi um swipe
      return;
    }
    // Lógica de clique no competidor (ex: navegar para página de detalhes)
    console.log('Clicou em:', competidor.nome);
    // navigate(`/competidor/${competidor.id}`); // Exemplo de navegação
  };

  // Agrupar competidores em páginas para o carrossel
  const carouselPages = [];
  for (let i = 0; i < competidores.length; i += itemsPerCarouselPage) {
    carouselPages.push(competidores.slice(i, i + itemsPerCarouselPage));
  }
  // --- Fim da Lógica do Carrossel ---

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          } else {
            // entry.target.classList.remove('visible'); // Para reverter animação ao sair da tela
          }
        });
      },
      {
        threshold: 0.1
      }
    );

    const currentRefs = revealRefs.current;
    currentRefs.forEach(ref => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      currentRefs.forEach(ref => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, []);

  const handleNavClick = (path) => {
    if (path && typeof path === 'string') {
      navigate(path);
    } else {
      console.error("Caminho de navegação inválido:", path);
    }
    setIsMenuOpen(false);
  };
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
              ref={addToRefs}
              onClick={() => handleNavClick(season.path)}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className={`season-image ${season.cssClass}`}>
                <img src={season.image} alt={`Logo da temporada ${season.title}`} />
              </div>
              <div className="season-label">{season.title}</div>
            </div>
          ))}
        </div>
      </section>
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
      {/* --- Seção dos Competidores com Carrossel Integrado --- */}
      <section className="competidores-section reveal" ref={addToRefs}>
        <p className="competidores-title">Competidores</p>
        <p className="competidores-subtitle">clique para saber mais!</p>

        <div className="competidores-carousel-container"> {/* Classe principal do CSS */}
          <div className="carousel-viewport">
            <div
              className="carousel-track"
              ref={carouselTrackRef}
              onTouchStart={handleCarouselTouchStart}
              onTouchMove={handleCarouselTouchMove}
              onTouchEnd={handleCarouselTouchEnd}
              style={{ transform: `translateX(-${carouselCurrentIndex * 100}%)` }}
            >
              {carouselPages.map((page, pageIndex) => (
                <div className="carousel-slide" key={pageIndex}>
                  {page.map((competidor, competidorIndex) => (
                    <div
                      key={competidor.id || competidorIndex} // Usar ID se disponível, senão index
                      className="competidor-card-wrapper"
                      onClick={(e) => handleCompetidorCardClick(competidor, e)}
                    >
                      <div className="competidor-card">
                        <div className="competidor-card-inner">
                          <img
                            src={competidor.imagem}
                            alt={competidor.nome}
                            className="competidor-image"
                            draggable="false" // Previne o arrastar padrão da imagem
                          />
                          <p className="competidor-nome">{competidor.nome}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Botões de navegação (apenas desktop) */}
          <button className="carousel-btn left desktop-only" onClick={handleCarouselPrev} aria-label="Anterior">
            &lt;
          </button>
          <button className="carousel-btn right desktop-only" onClick={handleCarouselNext} aria-label="Próximo">
            &gt;
          </button>

          {/* Bolinhas de Paginação */}
          <div className="carousel-dots">
            {Array.from({ length: totalCarouselPages }).map((_, idx) => (
              <button
                key={idx}
                className={`dot ${carouselCurrentIndex === idx ? 'active' : ''}`}
                onClick={() => goToCarouselPage(idx)}
                aria-label={`Ir para página ${idx + 1} do carrossel de competidores`}
              />
            ))}
          </div>
        </div>
      </section>
      {/* --- Fim da Seção dos Competidores --- */}


    </div>
  );
}

export default Home;