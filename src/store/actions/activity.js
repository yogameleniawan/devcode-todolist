import {
    CREATE_ACTIVITY,
    GET_ACTIVITY,
    UPDATE_ACTIVITY,
    DELETE_ACTIVITY,
} from './type';

import Endpoint from '../../services/Endpoint';


export const create = ({
    title,
    email
}) => async (dispatch) => {
    try {
        const res = await Endpoint.createActivity({
            title,
            email
        });

        dispatch({
            type: CREATE_ACTIVITY,
            payload: res.data,
        });

        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err);
    }
}

export const get = () => async (dispatch) => {
    try {
        const res = await Endpoint.getAllActivity();

        dispatch({
            type: GET_ACTIVITY,
            payload: res.data,
        });
    } catch (err) {
        console.log(err);
    }
};