import "./quote.css"
import { useRef } from "react";

function Quote() {
  const revealRefs = useRef([]);
    revealRefs.current = [];
  
    const addToRefs = (el) => {
      if (el && !revealRefs.current.includes(el)) {
        revealRefs.current.push(el);
      }
    };

    return (
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
    )
};

export default Quote;

