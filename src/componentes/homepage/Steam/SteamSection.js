// src/componentes/homepage/SteamSection/SteamSection.jsx
import React, { useEffect, useRef, useState } from 'react';
import './SteamSection.css';

import steam1 from '../../../assets/Steam1.jpg';
import steam2 from '../../../assets/Steam2.jpeg';
import steam3 from '../../../assets/Steam3.jpeg';
import steam4 from '../../../assets/Steam4.jpeg';
import steam5 from '../../../assets/Steam5.jpeg';
import steam6 from '../../../assets/Steam6.png';
import steam7 from '../../../assets/temporadas/submerged/equipe2025/amistoso1.jpg';
import steam8 from '../../../assets/temporadas/submerged/equipe2025/amistoso2.jpg';
import steam9 from '../../../assets/temporadas/submerged/equipe2025/amistoso3.jpg';

function SteamSection() {
  const imagens = [steam1, steam2, steam3, steam4, steam5, steam6, steam7, steam8, steam9];
  const [indice, setIndice] = useState(0);
  const [fade, setFade] = useState(true);

  const revealRefs = useRef([]);
  revealRefs.current = [];

  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    revealRefs.current.forEach(ref => observer.observe(ref));
    return () => revealRefs.current.forEach(ref => observer.unobserve(ref));
  }, []);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndice((prev) => (prev + 3) % imagens.length);
        setFade(true);
      }, 500);
    }, 5000);

    return () => clearInterval(intervalo);
  }, [imagens.length]);

  const imagensVisiveis = [
    imagens[indice],
    imagens[(indice + 1) % imagens.length],
    imagens[(indice + 2) % imagens.length],
  ];

  return (
    <>
      <section className="steam_section reveal" ref={addToRefs}>
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

      <section className="learn_section reveal" ref={addToRefs}>
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
    </>
  );
}

export default SteamSection;
