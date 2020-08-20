const initialState = {
    tasks: [],
    count: 0,
};

const reducer = (state = initialState, action) => {
    if (action.type === "NEW_TASK") {
        const { tasks } = state;
        tasks.unshift({
            ...action.payload,
        });
        return {
            tasks: [...tasks],
            count: state.count + 1,
        };
    } else if (action.type === "EDIT_TASK") {
        const { tasks } = state;
        const { id , text } = action.payload;
        tasks.splice( id , 1 );
        tasks.splice( id , 0 , {
            text: text,
            status: true,
        });
        return{
            ...state,
            tasks: [...tasks],
        }
    }
    return state;
};

export default reducer;
