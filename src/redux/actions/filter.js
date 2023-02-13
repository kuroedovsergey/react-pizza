export const setFilter = ({type, order}) => ({
    type: 'SET_SORT_BY',
    payload: {type, order},
})


export const setCategory = (catIndex) => {
    return {
        type: 'SET_CATEGORY',
        payload: catIndex
    }
} 

