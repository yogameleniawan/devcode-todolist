import http from './Base';

const getAllActivity = () => {
    return http.get("/activity-groups?email=tss@gmail.com");
};

const createActivity = (data) => {
    return http.post("/activity-groups", JSON.stringify(data), {
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
    deleteActivity
};

export default Endpoint;