import http from './Base';
import qs from 'qs';

const getAllActivity = () => {
    return http.get("/activity-groups?email=yogameleniawan");
};

const createActivity = (data) => {
    return http.post("/activity-groups", JSON.stringify(data), {
        headers: {
            'Content-Type': 'application/json',
        },
    });
};

const Endpoint = {
    getAllActivity,
    createActivity
};

export default Endpoint;