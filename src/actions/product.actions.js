import axiosInstance from "../helpers/axios";
import { productConstants } from "./constants";


export const getProductsBySlug = (slug) => {
    return async dispatch => {
        dispatch({ type: productConstants.GET_PRODUCTS_REQUEST });
        const response = await axiosInstance.get(`/products/${slug}`);
        console.log('product.action.js', 'response', response);
        if (response.status == 200) {
            const { data } = response;
            dispatch({
                type: productConstants.GET_PRODUCTS_SUCCESS,
                payload: data
            });
        } else {
            const { data } = response;
            dispatch({
                type: productConstants.GET_PRODUCTS_FAILURE,
                payload: data
            });
        }
    }
}