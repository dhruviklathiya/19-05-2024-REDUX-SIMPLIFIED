import { configureStore } from "@reduxjs/toolkit";
import reducers from "./Reducers";

// createStore is outdated
// configureStore automatically uses middleware (redux-thunk)

// Rest of the code is same as taught in class
const store = configureStore(
    {
        // Combining all our reducers as a single name reducer because that's requirement of this function
        reducer: reducers
    })

export default store