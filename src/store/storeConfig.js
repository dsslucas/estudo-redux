//Configuração de TODOS os Reducers e definição da Store

//Pega todos os reducers para combinar em uma Store
import { createStore, combineReducers } from 'redux'

const reducers = combineReducers({
    //Chave: Nome daquela parte do estado da aplicação
    //Valor: função responsável por gerar o estado

    //Do Intervalo
    numeros: function (state, action) {

        //Estabelece por qual tipo é definido
        switch(action.type){
            case 'NUM_MIN_ALTERADO':
                return {
                    ...state, min: action.payload
                }
            case 'NUM_MAX_ALTERADO':
                return {
                    ...state, max: action.payload
                }
            default:
                return {
                    min: 5,
                    max: 35
                }
        }
    },
    nomes: function (state, action) {
        console.log('Reducer de nomes chamado')
        console.log(state, '', action)
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