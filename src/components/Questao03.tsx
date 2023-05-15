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
    <div>
      {nums.length > 0 ? (
        <div>
          {/* mostra a capital e a população do maior */}
          <h1>
            maior: {nums[0].capital} - {nums[0].population}
          </h1>

          {/* mostra a capital e a população do menor */}
          <h1>
            menor: {nums[1].capital} - {nums[1].population}
          </h1>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

// exporta o componente
export default Questao03;
