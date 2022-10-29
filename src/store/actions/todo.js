/* eslint-disable array-callback-return */
import {
    CREATE_TODO,
    GET_TODO,
    UPDATE_TODO,
    DELETE_TODO,
    DELETE_ALL
} from './type';

import Endpoint from '../../services/Endpoint';


export const createTodo = ({
    activity_group_id,
    title,
}) => async (dispatch) => {
    try {
        const res = await Endpoint.createTodo({
            activity_group_id,
            title
        });

        let payload = {
            id: res.data.id,
            activity_group_id: res.data.activity_group_id,
            title: res.data.title,
            priority: res.data.priority,
            is_active: res.data.is_active,
        }

        dispatch({
            type: CREATE_TODO,
            payload: payload,
        });

        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err);
    }
}

export const updateDataTodo = ({
    title,
    priority,
    is_active,
    id
}) => async (dispatch) => {
    try {
        const data = {
            title: title,
            priority: priority,
            is_active: is_active
        }

        const res = await Endpoint.updateTodo({
            data,
            id: id
        });

        let payload = {
            id: res.data.id,
            activity_group_id: res.data.activity_group_id,
            title: res.data.title,
            priority: res.data.priority,
            is_active: res.data.is_active,
        }

        dispatch({
            type: UPDATE_TODO,
            payload: payload,
        });

        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err);
    }
}

export const getTodo = (id) => async (dispatch) => {
    try {
        const res = await Endpoint.getAllTodo(id);
        dispatch({
            type: DELETE_ALL
        });
        res.data.data.forEach(item => {
            dispatch({
                type: CREATE_TODO,
                payload: {
                    id: item.id,
                    activity_group_id: item.activity_group_id,
                    title: item.title,
                    priority: item.priority,
                    is_active: item.is_active,
                },
            });
        });
    } catch (err) {
        console.log(err);
    }
};

export const deleteDataTodo = (item) => async (dispatch) => {
    try {
        const res = await Endpoint.deleteTodo(item.id);

        let payload = {
            id: item.id,
            title: item.title,
            email: item.email,
        }

        dispatch({
            type: DELETE_TODO,
            payload: payload,
        });
    } catch (err) {
        console.log(err);
    }
};