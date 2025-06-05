import React, { useCallback, useRef, useState, useEffect} from 'react';
import './competitor.css';

// --- Importe imagens ---
import isabelle from '../../../assets/membros/Submerged/isabelle.png';
import daniela from '../../../assets/membros/Submerged/daniela.png';
import izabella from '../../../assets/membros/Submerged/izabella.png';

function Competidores() {
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
    { id: 6, nome: 'Daniela', imagem: daniela },
    { id: 7, nome: 'Izabella', imagem: izabella },
  ];

  // --- Lógica do Carrossel de Competidores ---
  const [carouselCurrentIndex, setCarouselCurrentIndex] = useState(0);
  const itemsPerCarouselPage = 3;
  const totalCarouselPages = Math.ceil(competidores.length / itemsPerCarouselPage);
  const carouselTrackRef = useRef(null);
  const touchStartXRef = useRef(0);
  const touchEndXRef = useRef(0);
  const isDraggingRef = useRef(false);
  const MIN_SWIPE_DISTANCE = 50;

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
    if (!isDraggingRef.current) return;

    const swipeDistance = touchStartXRef.current - touchEndXRef.current;
    if (swipeDistance > MIN_SWIPE_DISTANCE) {
      handleCarouselNext();
    } else if (swipeDistance < -MIN_SWIPE_DISTANCE) {
      handleCarouselPrev();
    }
  };

  const handleCompetidorCardClick = (competidor, e) => {
    if (isDraggingRef.current) {
      e.preventDefault();
      return;
    }
    console.log('Clicou em:', competidor.nome);
    // Navegação futura pode ser adicionada aqui
    // navigate(`/competidor/${competidor.id}`);
  };

  // Agrupando os competidores em páginas
  const carouselPages = [];
  for (let i = 0; i < competidores.length; i += itemsPerCarouselPage) {
    carouselPages.push(competidores.slice(i, i + itemsPerCarouselPage));
  }


   useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    reveals.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="competidores-section reveal" ref={addToRefs}>
      <p className="competidores-title">Competidores</p>
      <p className="competidores-subtitle">clique para saber mais!</p>

      <div className="competidores-carousel-container">
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
                    key={competidor.id || competidorIndex}
                    className="competidor-card-wrapper"
                    onClick={(e) => handleCompetidorCardClick(competidor, e)}
                  >
                    <div className="competidor-card">
                      <div className="competidor-card-inner">
                        <img
                          src={competidor.imagem}
                          alt={competidor.nome}
                          className="competidor-image"
                          draggable="false"
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

        <button
          className="carousel-btn left desktop-only"
          onClick={handleCarouselPrev}
          aria-label="Anterior"
        >
          &lt;
        </button>
        <button
          className="carousel-btn right desktop-only"
          onClick={handleCarouselNext}
          aria-label="Próximo"
        >
          &gt;
        </button>

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
  );
}

export default Competidores;
