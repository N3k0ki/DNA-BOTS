import React from "react";
import { useEffect, useRef } from "react";
import "./robot.css";
import v1 from "../../../assets/robo/v1.png";
import v2 from "../../../assets/robo/v2.png";
import v3 from "../../../assets/robo/v3.png";
import v4 from "../../../assets/robo/v4.png";
import v5 from "../../../assets/robo/v5.png";


const RobotShowcase = () => {
    const robotData = [
        {
            version: "Choir",
            image: v1,
            features: [
                { name: "Impreciso", included: false },
                { name: "Problemas com a roda boba", included: false },
                { name: "Robusto", included: true },
                { name: "Sensor de cor", included: true },
                { name: "Fácil encaixe", included: true },
            ],
        },
        {
            version: "Smile V1",
            image: v2,
            features: [
                { name: "Sensores", included: false },
                { name: "Dificil encaixe", included: false },
                { name: "Problemas com o hub", included: false },
                { name: "Robusto", included: true },
                { name: "Preciso", included: true },
            ],
        },
        {
            version: "Smile V2",
            image: v3,
            features: [
                { name: "Sensores", included: false },
                { name: "Má distribuição de peso", included: false },
                { name: "Problemas com o hub", included: false },
                { name: "Preciso", included: true },
                { name: "Fácil encaixe de garras", included: true },
            ],
        },
        {
            version: "Smile V3 (Libélula)",
            image: v4,
            features: [
                { name: "Dificil encaixe de garras", included: false },
                { name: "Problemas com a roda boba", included: false },
                { name: "Robusto", included: true },
                { name: "Sensores", included: true },
                { name: "Boa distribuição de peso", included: true },
            ],
        },
        {
            version: "Betinho",
            image: v5,
            features: [
                { name: "Base grande", included: false },
                { name: "Robusto", included: true },
                { name: "Preciso", included: true },
                { name: "Sensores", included: true },
                { name: "Boa distribuição de peso", included: true },
                { name: "Fácil encaixe de garras", included: true },
            ],
        },
    ];

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
        <div className="robot-body" >
            <div className="robot-section" ref={addToRefs}>
                <h1>Conheça nosso robô!</h1>
                <p>
                    Ele já passou por 5 versões, cada uma com melhorias importantes. Atualmente, usamos a versão 5, mais estavel e eficiente, e já estamos desenvolvendo a versão 6, buscando ainda mais desempenho e inovação!
                </p>
                <p>Atualmente, ela está em sua quinta versão, com 4 motores e 2 sensores.</p>

                <div className="versions-container">
                    {robotData.map((robot, index) => (
                        <div key={index} className="robot-card">
                            <h2>{robot.version}</h2>
                            <ul>
                                {robot.features.map((item, i) => (
                                    <li key={i}>
                                        {item.included ? "✔" : "✘"} {item.name}
                                    </li>
                                ))}
                            </ul>
                            <img
                                src={robot.image}
                                alt={robot.version}
                                className={robot.version === "Betinho" ? "betinho-img" :
                                    robot.version === "Smile V3 (Libélula)" ? "libelula-img" : ""
                                }
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RobotShowcase;
