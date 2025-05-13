
import React, { useEffect, useRef } from 'react';
import "./sponsor.css"


function Season() {

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
    )
};

export default Season;
