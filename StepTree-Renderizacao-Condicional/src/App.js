import React from "react";

const listCostumer = [
  {id: 1,
    nome: 'Relton Lima'
  },
  {id: 2,
    nome: 'Relton Fidelis'
  },
  {id: 3,
    nome: 'Relton Ferreira'
  }
]

const App = () => {

  const renderCostumers = (costumer , index) => {
    return (
    <li key={`costomer_id_${costumer.id}`}>{costumer.nome}</li>
    )
  }

  return (
  <div>
    <ul>
      {listCostumer.map(renderCostumers)}
    </ul>
  </div>
  );
};
export default App;