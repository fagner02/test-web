import { useState } from "react";

const Questao02X = () => {
  // cria um estado para guardar booleana dizendo qual lado esta mostrando
  const [front, setFront] = useState(true);

  return (
    <div style={{ display: "flex" }}>
      {/* botao atualiza o valor do front quando clica */}
      <button
        onClick={() => setFront((x) => !x)}
        style={{ padding: "8px 5px" }}
        className="hover-effect">
        <p
          style={{
            writingMode: "vertical-lr",
            textOrientation: "upright",
            margin: "0",
            fontFamily: "monospace",
            letterSpacing: "-2px",
            fontSize: "smaller",
          }}>
          VIRAR
        </p>
      </button>
      {/* se for front mostra a frente */}
      {front ? (
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"></img>
      ) : (
        // caso contrario mostra as costas
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png"></img>
      )}
    </div>
  );
};

// exporta o componente
export default Questao02X;
