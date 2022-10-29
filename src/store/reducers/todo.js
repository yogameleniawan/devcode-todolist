import {
    CREATE_TODO,
    GET_TODO,
    UPDATE_TODO,
    DELETE_TODO,
    DELETE_ALL
} from '../actions/type';

const statetodo = [];

function todoReducer(todos = statetodo, action) {
    const {
        type,
        payload
    } = action;

    switch (type) {
        case CREATE_TODO:
            return [...todos, payload];

        case GET_TODO:
            return payload;

        case UPDATE_TODO:
            return todos.map((todo) => {
                if (todo.id === payload.id) {
                    return {
                        ...todo,
                        ...payload,
                    };
                } else {
                    return todo;
                }
            });

        case DELETE_TODO:
            return todos.filter(({
                id
            }) => id !== payload.id);

        case DELETE_ALL:
            return []
        default:
            return todos;
    }
}

export default todoReducer;