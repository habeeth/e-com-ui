import { productConstants } from "../actions/constants"

const initialState = {
    products: [],
    productsByPrice: {
        under5k: [],
        under10k: [],
        under15k: [],
        under20k: [],
        under30k: []
    },
    error: null,
    loading: false
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case productConstants.GET_PRODUCTS_REQUEST:
            console.log('product.reducers', 'GET_PRODUCTS_REQUEST', payload);
            state = {
                ...state,
                ...payload,
                loading: true
            }
            break;
        case productConstants.GET_PRODUCTS_SUCCESS:
            console.log('product.reducers', 'GET_PRODUCTS_SUCCESS', payload);
            state = {
                ...state,
                loading: false,
                products: payload.products,
                productsByPrice: {
                    ...payload.productsByPrice
                }
            }
            break;
        case productConstants.GET_PRODUCTS_FAILURE:
            console.log('product.reducers', 'GET_PRODUCTS_FAILURE', payload);

            state = {
                ...initialState,
                error: payload.error
            }
            break;
    }
    return state;
}
