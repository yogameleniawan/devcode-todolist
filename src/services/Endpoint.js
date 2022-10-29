import http from './Base';

const getAllActivity = () => {
    return http.get("/activity-groups?email=yogameleniawan@gmail.com");
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

const Endpoint = {
    getAllActivity,
    createActivity,
    updateActivity,
    deleteActivity
};

export default Endpoint;