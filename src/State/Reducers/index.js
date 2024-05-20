import { combineReducers } from "redux";
import product_reducer from "./product_reducer";
import number_reducer from "./number_reducer";

const reducers = combineReducers({
    product: product_reducer,
    number: number_reducer
    // :: useSelector(state => state.aaya_aapelu_name) :: product: product_reducer
})

export default reducers