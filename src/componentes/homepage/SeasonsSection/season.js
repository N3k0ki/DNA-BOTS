import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import "./season.css";
import Master from "../../../assets/temporadas/masterpiece/masterpiece.png";
import Sub from "../../../assets/temporadas/submerged/submerged.png";
import Une from "../../../assets/temporadas/unearthed/unearthed.png";

function Season() {
    const navigate = useNavigate();

    const seasons = [
        { title: "Masterpiece", image: Master, cssClass: "bg-masterpiece", path: "/temporada/masterpiece" },
        { title: "Submerged", image: Sub, cssClass: "bg-submerged", path: "/temporada/submerged" },
        { title: "Unearthed", image: Une, cssClass: "bg-unearthed", path: "/temporada/unearthed" },
    ];

    const revealRefs = useRef([]);
    revealRefs.current = [];

    const addToRefs = (el) => {
        if (el && !revealRefs.current.includes(el)) {
            revealRefs.current.push(el);
        }
    };

    const handleNavClick = (path) => {
        if (path && typeof path === 'string') {
            navigate(path);
        } else {
            console.error("Caminho de navegação inválido:", path);
        }
    };

    useEffect(() => {
        if (typeof window === 'undefined') return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        const currentRefs = revealRefs.current;
        currentRefs.forEach(ref => observer.observe(ref));

        return () => currentRefs.forEach(ref => observer.unobserve(ref));
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
    );
}

export default Season;
