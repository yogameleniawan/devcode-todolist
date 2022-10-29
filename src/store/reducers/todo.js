import {
    CREATE_TODO,
    GET_TODO,
    UPDATE_TODO,
    DELETE_TODO,
    DELETE_ALL,
    FILTER_LATEST,
    FILTER_OLDEST,
    FILTER_AZ,
    FILTER_ZA,
    FILTER_UNFINISHED
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

        case FILTER_LATEST:
            const latest = todos.sort(function (a, b) {
                if (a.created_at === undefined || b.created_at === undefined) {
                    return a.title.localeCompare(b.title);
                } else {
                    return a.created_at.localeCompare(b.created_at);
                }
            });
            return [...latest];

        case FILTER_OLDEST:
            const oldest = todos.sort(function (a, b) {
                if (a.created_at === undefined || b.created_at === undefined) {
                    return b.title.localeCompare(a.title);
                } else {
                    return b.created_at.localeCompare(a.created_at);
                }
            });
            return [...oldest];

        case FILTER_ZA:
            const descending = todos.sort(function (a, b) {
                return b.title.localeCompare(a.title);
            });
            return [...descending];

        case FILTER_AZ:
            const ascending = todos.sort(function (a, b) {
                return a.title.localeCompare(b.title);
            });
            return [...ascending];

        case FILTER_UNFINISHED:
            const unfinished = todos.sort(function (a, b) {
                return b.is_active.toString().localeCompare(a.is_active.toString());
            });
            return [...unfinished];

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