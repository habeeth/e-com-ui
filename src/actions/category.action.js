import axiosInstance from "../helpers/axios";
import { categoryConstants } from "./constants";

export const getAllCategories = () => {
    return async dispatch => {
        dispatch({ type: categoryConstants.GET_ALL_CATEGORIES_REQUEST });
        const res = await axiosInstance.get(`/category/fetchAll`);
        if (res.status === 200) {
            const { categoriesList } = res.data;
            console.log('category.action.js', 'GET_ALL_CATEGORIES_SUCCESS');

            dispatch({
                type: categoryConstants.GET_ALL_CATEGORIES_SUCCESS,
                payload: { categoriesList: categoriesList }
            });
        }
        else {
            console.log('category.action.js', 'GET_ALL_CATEGORIES_FAILURE');
            dispatch({
                type: categoryConstants.GET_ALL_CATEGORIES_FAILURE,
                payload: { error: res.error.message }
            });
        }
    }
};
