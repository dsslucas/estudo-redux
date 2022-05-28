import "./Intervalo.css";
import React from "react";

//Conecta o componente ao estado da aplicação. Devolve um componente que tem ligação com o estado global
import { connect } from "react-redux";

import Card from "./Card";

function Intervalo(props) {
  
  const {min, max} = props
  
  return (
    <Card title="Intervalo de Números" red>
      <div className="Intervalo">
        <span>
          <strong>Mínino:</strong>
          <input type="number" value={min} 
            readOnly />
        </span>
        <span>
          <strong>Máximo:</strong>
          <input type="number" value={max}
            readOnly />
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

export default connect(mapStateToProps)(Intervalo)