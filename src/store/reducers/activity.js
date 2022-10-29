import {
    CREATE_ACTIVITY,
    GET_ACTIVITY,
    UPDATE_ACTIVITY,
    DELETE_ACTIVITY,
} from '../actions/type';

const stateActivity = [];

function activityReducer(activities = stateActivity, action) {
    const {
        type,
        payload
    } = action;

    switch (type) {
        case CREATE_ACTIVITY:
            return [...activities, payload];

        case GET_ACTIVITY:
            return payload;

        case UPDATE_ACTIVITY:
            return activities.map((activity) => {
                if (activity.id === payload.id) {
                    return {
                        ...activity,
                        ...payload,
                    };
                } else {
                    return activity;
                }
            });

        case DELETE_ACTIVITY:
            return activities.filter(({
                id
            }) => id !== payload.id);

        default:
            return activities;
    }
}

export default activityReducer;