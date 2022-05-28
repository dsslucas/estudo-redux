import React from "react";

//Conecta o componente ao estado da aplicação. Devolve um componente que tem ligação com o estado global
import { connect } from "react-redux";

import Card from "./Card";

function Sorteio(props) {
  const {min, max} = props

  return (
    <Card title="Sorteio de um Número" purple>
      <div>
        <span>
          <span>Resultado: </span>
          <strong>{parseInt(Math.random() * (max - min)) + min}</strong>
        </span>
      </div>
    </Card>
  );
}

//Mapeia o estado para o componente
function mapStateToProps(state) {
  return {
    //Chave definida no Store
    min: state.numeros.min,
    max: state.numeros.max
  }
}

//Devemos passar parâmetros para o Connect
export default connect(mapStateToProps)(Sorteio)

