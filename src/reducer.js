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
    } else if (action.type === "DONE") {
        const { tasks } = state;
        const { id } = action.payload;
        const { text } = tasks[ id ];
        const newTask = {
            text: text,
            status: false,
        }
        tasks.splice( id , 1 );
        tasks.splice( id , 0 , newTask );
        return{
            tasks: [...tasks],
            count: state.count - 1
        }
    } else if (action.type === "REMOVE") {
        const { tasks } = state;
        const { id } = action.payload;
        const { status } = tasks[ id ];
        tasks.splice( id , 1 );
        let count = state.count;
        if( status ){
            count = count - 1;
        }
        return{
            tasks: [...tasks],
            count: count
        }
    }
    return state;
};

export default reducer;
