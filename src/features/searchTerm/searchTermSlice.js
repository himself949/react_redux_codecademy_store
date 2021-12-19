const initialState = ""
export const searchTermReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'searchTerm/setSerachTerm':
            return action.payload
        case 'searchTerm/clearSearchTerm':
            return ""
        default:
            return state
    }
}

export const setSerachTerm = (term) => {
    return {
        type: 'searchTerm/setSerachTerm',
        payload: term,
    }
}

export const clearSearchTerm = () => {
    return {
        type: 'searchTerm/clearSearchTerm',
    }
}