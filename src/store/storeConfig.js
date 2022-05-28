//Configuração de TODOS os Reducers e definição da Store

//Pega todos os reducers para combinar em uma Store
import { createStore, combineReducers } from 'redux'

//Reducers
import numerosReducers from './reducers/numeros'
import nomesReducers from './reducers/nomes'

const reducers = combineReducers({
    //Chave: Nome daquela parte do estado da aplicação
    //Valor: função responsável por gerar o estado

    //Do Intervalo
    numeros: numerosReducers,
    nomes: nomesReducers
})

//Configura um novo estado em cima dos existentes
function storeConfig(){
    //Retorna o estado criado
    return createStore(reducers)
}

export default storeConfig