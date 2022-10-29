/* eslint-disable array-callback-return */
import {
    CREATE_TODO,
    UPDATE_TODO,
    DELETE_TODO,
    DELETE_ALL,
    FILTER_AZ,
    FILTER_LATEST,
    FILTER_ZA,
    FILTER_OLDEST,
    FILTER_UNFINISHED
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
            created_at: res.data.created_at,
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
            created_at: res.data.created_at,
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

        res.data.data.forEach(async item => {
            const result = await Endpoint.getOneTodo(item.id);
            dispatch({
                type: CREATE_TODO,
                payload: {
                    id: result.data.id,
                    activity_group_id: result.data.activity_group_id,
                    title: result.data.title,
                    priority: result.data.priority,
                    is_active: result.data.is_active,
                    created_at: result.data.created_at,
                },
            });
        });
    } catch (err) {
        console.log(err);
    }
};

export const deleteDataTodo = (item) => async (dispatch) => {
    try {
        await Endpoint.deleteTodo(item.id);

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


export const filterData = (type) => async (dispatch) => {
    try {
        switch (type) {
            case 'sort-latest':
                dispatch({
                    type: FILTER_LATEST,
                })
                break;
            case 'sort-oldest':
                dispatch({
                    type: FILTER_OLDEST,
                })
                break;
            case 'sort-az':
                dispatch({
                    type: FILTER_AZ,
                })
                break;
            case 'sort-za':
                dispatch({
                    type: FILTER_ZA,
                })
                break;
            case 'sort-unfinished':
                dispatch({
                    type: FILTER_UNFINISHED,
                })
                break;

            default:
                break;
        }
    } catch (err) {
        console.log(err)
    }
}