import Esub2 from '../../../assets/temporadas/submerged/dna.jpg';
import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import "./sponsor.css"


function Sponsor() {

  const revealRefs = useRef([]);
  revealRefs.current = [];

  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

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


  // 1. Chame useNavigate para obter a função de navegação
  const navigate = useNavigate();

  // 2. Crie uma função para lidar com o clique
  const handleMoreInfoClick = () => {
    // 3. Use a função navigate para ir para a rota desejada
    // Exemplo: Navegar para uma página de formulário de patrocínio ou de contato
    navigate('/seja-patrocinador'); // Substitua '/contato-patrocinio' pela sua rota real
  };
  return (
    <section className="reveal" ref={addToRefs}>
      <div className="sponsor-container">
        <div className="sponsor-left">
          <h2 className="sponsor-title">Por que ser um patrocinador?</h2>
          <img src={Esub2} alt="Detalhe robô DNA Bots" className="sponsor-image" />
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
          <div className='more-info' onClick={handleMoreInfoClick}>Seja patrocinador</div>
        </div>
      </div>
    </section>
  )
};

export default Sponsor;
