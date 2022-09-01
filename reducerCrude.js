const initialState = {
    users: [
        { id: 1, name: 'sam' },
        { id: 2, name: 'yash' },
        { id: 3, name: 'ram' },
    ]
}

const reducerCrude = (state = initialState, action) => {
    if (action.type === 'del') {
        // console.log(action.playload)
        return{...state,users:state.users.filter((u)=>u.id!==action.playload)}
    }

    if (action.type === 'add') {
         return{...state,users:state.users.concat(action.playload)}
       
    }

    if (action.type === 'edit') {
        console.log('edit...')
    }
    return state
}

export default reducerCrude