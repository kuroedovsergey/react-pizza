const initialState = {
    sortBy: {
        type: 'popular',
        order: 'desc'
    },
    category: null
}


function filterReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_SORT_BY':
            return {
                ...state,
                sortBy: action.payload,
            }
        case 'SET_CATEGORY':
            return {
                ...state,
                category: action.payload,
            }
        default:
            return state
    }
}

export default filterReducer;