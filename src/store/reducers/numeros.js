//Reducer de números

//Estado inicial. Carrega na primeira vez
const initialState = {
    min: 0,
    max: 0
}

//Caso o estado ainda não tenha sido evoluido, entra o Estado Inicial
export default function (state = initialState, action) {

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
            return state
    }
}