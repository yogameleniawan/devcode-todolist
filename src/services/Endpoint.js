import http from './Base';

const getAllActivity = () => {
    return http.get("/activity-groups?email=yogameleniawan@gmail.com");
};

const getDetail = (id) => {
    return http.get("/activity-groups/" + id);
};

const createActivity = (data) => {
    return http.post("/activity-groups", JSON.stringify(data), {
        headers: {
            'Content-Type': 'application/json',
        },
    });
};

const updateActivity = ({
    data,
    id
}) => {
    return http.patch(`/activity-groups/${id}`, JSON.stringify(data), {
        headers: {
            'Content-Type': 'application/json',
        },
    });
};

const deleteActivity = (id) => {
    return http.delete("/activity-groups/" + id, {
        headers: {
            'Content-Type': 'application/json',
        },
    });
};

const getAllTodo = (id) => {
    return http.get(`/todo-items?activity_group_id=${id}`);
}

const getOneTodo = (id) => {
    return http.get(`/activity-groups/${id}`);
}

const createTodo = (data) => {
    return http.post("/todo-items", JSON.stringify(data), {
        headers: {
            'Content-Type': 'application/json',
        },
    });
};

const updateTodo = ({
    data,
    id
}) => {
    return http.patch(`/todo-items/${id}`, JSON.stringify(data), {
        headers: {
            'Content-Type': 'application/json',
        },
    });
};

const deleteTodo = (id) => {
    return http.delete("/todo-items/" + id, {
        headers: {
            'Content-Type': 'application/json',
        },
    });
};

const Endpoint = {
    getAllActivity,
    getDetail,
    createActivity,
    updateActivity,
    deleteActivity,
    getAllTodo,
    getOneTodo,
    createTodo,
    updateTodo,
    deleteTodo
};

export default Endpoint;