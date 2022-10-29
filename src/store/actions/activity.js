/* eslint-disable array-callback-return */
import {
    CREATE_ACTIVITY,
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

        let payload = {
            id: res.data.id,
            title: res.data.title,
            email: res.data.email,
        }

        dispatch({
            type: CREATE_ACTIVITY,
            payload: payload,
        });

        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err);
    }
}

export const updateData = ({
    title,
    id
}) => async (dispatch) => {
    try {
        const data = {
            title: title
        }

        const res = await Endpoint.updateActivity({
            data,
            id: id
        });

        let payload = {
            id: res.data.id,
            title: res.data.title,
        }

        dispatch({
            type: UPDATE_ACTIVITY,
            payload: payload,
        });

        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err);
    }
}

export const get = () => async (dispatch) => {
    try {
        const res = await Endpoint.getAllActivity();
        localStorage.setItem("activities", JSON.stringify(res.data.data));

        JSON.parse(localStorage.getItem("activities")).forEach(item => {
            dispatch({
                type: CREATE_ACTIVITY,
                payload: {
                    id: item.id,
                    title: item.title,
                    email: item.email
                },
            });
        });
    } catch (err) {
        console.log(err);
    }
};

export const deleteData = (item) => async (dispatch) => {
    try {
        await Endpoint.deleteActivity(item.id);

        let payload = {
            id: item.id,
            title: item.title,
            email: item.email,
        }

        dispatch({
            type: DELETE_ACTIVITY,
            payload: payload,
        });
    } catch (err) {
        console.log(err);
    }
};