//Action Creator que define um novo valor para o valor mínimo
export function alterarNumeroMinimo(novoNumero){
    return {
        type: 'NUM_MIN_ALTERADO',
        payload: novoNumero
    }
}

//Action Creator que define um novo valor para o valor máximo
export function alterarNumeroMaximo(novoNumero){
    return {
        type: 'NUM_MAX_ALTERADO',
        payload: novoNumero
    }
}