import * as actions from './actionType';
import { getUsersAPI, postUsersAPI } from '../assets/services';
import axios from "axios";

export const onGetUsers = () => {
    return (dispatch) => {
        axios
            .get(getUsersAPI)
            .then((res) => {
                dispatch(
                    ((data) => {
                        return {
                            type: actions.GET_USERS_DATA,
                            payload: {
                                httpResponse: data.slice(0, 6),
                            },
                        };
                    })(res.data.data)
                );
            })
            .catch((err) => {
                console.log(err);
            });
    };
};

export const onpostUsers = (data) => {
    return (dispatch) => {
        axios.post(postUsersAPI, {
            "name": data.name,
            "job": data.job,
        }).then((res) => {
            dispatch(
                ((userData) => {
                    return {
                        type: actions.POST_USER_DATA,
                        payload:  userData,
                    };
                })(res.data)
            );
        }).catch((err) => {
            console.log(err);
        });
    }
}

export const onDeleteUser = (id) =>{
    return{
        type: actions.DELETE_USER_DATA,
        payload: id,
    }
}