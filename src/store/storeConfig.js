//Configuração de TODOS os Reducers e definição da Store

//Pega todos os reducers para combinar em uma Store
import { createStore, combineReducers } from 'redux'

const reducers = combineReducers({
    //Chave: Nome daquela parte do estado da aplicação
    //Valor: função responsável por gerar o estado

    //Do Intervalo
    numeros: function (state, action) {
        //Deve retornar o próximo estado
        return {
            min: 0,
            max: 100,
        }
    },
    nomes: function (state, action) {
        return [
            'Ana', 'Lucas', 'Rogério'
        ]
    }
})

//Configura um novo estado em cima dos existentes
function storeConfig(){
    //Retorna o estado criado
    return createStore(reducers)
}

export default storeConfig