import { useState, useEffect } from "react";

const Questao03 = () => {
  // cria um estado para guardar o menor e menor elemento da lista em um vetor
  const [nums, setNums]: any = useState([]);

  // use effect sem parâmetros de watch que executa apenas uma vez
  useEffect(() => {
    // fetch que busca os dados
    fetch(
      "https://restcountries.com/v3.1/region/europe?fields=capital,population"
    )
      .then((response) => {
        // retorna a resposta como json
        return response.json();
      })
      .then((data) => {
        const values = data.map((x: any) => x.population);
        // pega a menor e maior elemento
        let max = values.indexOf(Math.max(...values));
        let min = values.indexOf(Math.min(...values));
        // retorna vetor com o menor e maior elemento
        setNums([data[max], data[min]]);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div
      style={{
        background: "hsl(0, 0%, 10%)",
        borderRadius: "10px",
        margin: "10px 0",
        padding: "5px 30px",
      }}>
      {nums.length > 0 ? (
        <div>
          {/* mostra a capital e a população do maior */}
          <h2>
            maior: {nums[0].capital} - {nums[0].population} <br />
            {/* mostra a capital e a população do menor */}
            menor: {nums[1].capital} - {nums[1].population}
          </h2>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

// exporta o componente
export default Questao03;
