import EMaster from "../../../assets/temporadas/masterpiece/EquipeMasterpiece.jpeg"
import React, { useEffect, useRef } from 'react';
import "./aboutus.css"


function AboutUs() {

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

    return (
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
                    <a href="#sobre-nos" className="botao">SAIBA MAIS ➤</a>
                </div>
            </div>
        </section>
    )
};

export default AboutUs;
