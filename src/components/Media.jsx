import React from "react";

import Card from "./Card";

//Conecta o componente ao estado da aplicação. Devolve um componente que tem ligação com o estado global
import { connect } from "react-redux";

//Função em letra maiuscula por ser COMPONENTE
function Media(props){
  //Destructuring
  const {min, max} = props

  return (
    <Card title="Média dos Números" green>
      <div>
        <span>
          <span>Resultado: </span>
          <strong>{(max + min)/2}</strong>
        </span>
      </div>
    </Card>
  );
}

//Mapeia o estado para o componente
function mapStateToProps(state){
  return{
    //Chave definida no Store
    min: state.numeros.min,
    max: state.numeros.max
  }
}

//Devemos passar parâmetros para o Connect
export default connect(mapStateToProps)(Media)
