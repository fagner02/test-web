import { useState, useEffect } from "react";

const Questão01Y = ({ alunos, update }: any) => {
  // função que retorna o vetor de medias
  const media = (alunos: any) => {
    // mapeia cada aluno para uma media
    var vet = alunos.map((x: any) => {
      let res: any = 0;
      // soma os valores no object notas
      const values = Object.values(x.notas);
      values.forEach((element) => {
        return (res += element);
      });
      // retorna a soma sobre a quantidade de entradas(media)
      return res / values.length;
    });
    // retorna o vetor de medias
    return vet;
  };

  // use effect sem parâmetros de watch que executa apenas uma vez
  useEffect(() => {
    // atualiza o vetor de medias do componente pai
    update(() => media(alunos));
  }, []);

  return <div></div>;
};

function Questao01X() {
  const alunos = [
    { nome: "Sicrano", notas: { ap1: 8.4, ap2: 5.4 } },
    { nome: "Beltrano", notas: { ap1: 6.7, ap2: 3.5 } },
    { nome: "Fulano", notas: { ap1: 7.3, ap2: 9.2 } },
  ];

  // criar estado para guardar as medias de cada aluno em um vetor
  const [state, update] = useState([]);

  return (
    <div
      style={{
        background: "hsl(0, 0%, 10%)",
        borderRadius: "10px",
        margin: "10px 0",
        padding: "10px 0",
      }}>
      {/* componente filho  */}
      <Questão01Y alunos={alunos} update={update}></Questão01Y>
      {/* filtra e mapeia o vetor com as medias e retorna um elemento que mostra o nome e a media do aluno */}
      {state
        .filter((x) => x >= 7.0)
        .map((x: any, i: number) => (
          <div key={x}>
            {alunos[i].nome} - {x}
          </div>
        ))}
    </div>
  );
}

// exporta o componente
export default Questao01X;
