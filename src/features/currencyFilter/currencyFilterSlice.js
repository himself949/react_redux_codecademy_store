const initialState = 'USD'
export const currencyFilterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'currencyFilter/setCurrency':
            return action.payload
        default:
            return state
    }
}

export const setCurrency = (currency) => {
    return {
        type: 'currencyFilter/setCurrency',
        payload: currency
    }
}