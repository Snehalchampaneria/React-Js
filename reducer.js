const initialState = {
    count: 0
}

const reducer = (state = initialState, action) => {
    if (action.type ==='inc'){
        return{...state,count:state.count+1}
    }
    if (action.type ==='dec'){
        return{...state,count:state.count-1}
    }
    return state
}

export default reducer