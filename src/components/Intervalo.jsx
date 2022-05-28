import "./Intervalo.css";
import React from "react";

//Conecta o componente ao estado da aplicação. Devolve um componente que tem ligação com o estado global
import { connect } from "react-redux";

//Importação da Action
import { alterarNumeroMaximo, alterarNumeroMinimo } from '../store/actions/numeros'

import Card from "./Card";


function Intervalo(props) {

  const { min, max, nome } = props

  return (
    <Card title="Intervalo de Números" red>
      <div className="Intervalo">
        <span>
          <strong>Mínino:</strong>
          <input 
            type="number"
            value={min}
            onChange={(e) => props.alterarMinimo(+e.target.value)}
          />
        </span>

        <span>
          <strong>Máximo:</strong>
          <input 
            type="number"
            value={max}
            onChange={(e) => props.alterarMaximo(+e.target.value)}
          />
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

//Por não poder chamar a função diretamente, é necessário usar manipulação
//Mapeia as Actions Creators para o componente
function mapDispatchToProps(dispatch) {
  return {
    //novoNumero definido por este componente
    alterarMinimo(novoNumero) {
      //chama a Action Creator, uma função, que retorna uma Action
      const action = alterarNumeroMinimo(novoNumero)

      //Dispatch: dispara o resultado (Action) para todos os reducers. O próprio Redux faz isso
      dispatch(action)
    },

    alterarMaximo(novoNumero) {
      //chama a Action Creator, uma função, que retorna uma Action
      const action = alterarNumeroMaximo(novoNumero)

      //Dispatch: dispara o resultado (Action) para todos os reducers. O próprio Redux faz isso
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Intervalo)