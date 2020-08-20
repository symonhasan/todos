const initialState = {
    tasks: [],
    count: 0
}

const reducer = ( state=initialState , action ) => {
    switch( action.type ){
        case "NEW_TASK":
            const { tasks } = state;
            tasks.unshift({
                ...action.payload
            })
            return{
                tasks: [...tasks],
                count: state.count + 1
            }
        default:
    }
    return state;
}

export default reducer;