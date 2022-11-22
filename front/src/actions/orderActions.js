import axios from "axios";

import {
    CREATE_ORDER_FAIL,
    CREATE_ORDER_REQUEST,
    CREATE_ORDER_SUCCESS,
    CLEAR_ERRORS
} from "../constants/orderConstanst"

export const createOrder = (order) => async (dispatch) => {
    try {
        dispatch({ type: CREATE_ORDER_REQUEST })
        
        const config = {
            headers: {
                "Content-Type":"application/json"
            }
        }

        const {data}= await axios.post("/api/order/new", order, config)

        dispatch({
            type: CREATE_ORDER_SUCCESS,
            payload:data
        })
    } catch (error) {
        dispatch({
            type: CREATE_ORDER_FAIL,
            payload:error.response.data.message
        })
    }
}

//clear Errors
export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS
    })
}