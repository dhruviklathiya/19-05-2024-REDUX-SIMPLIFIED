// Multiple conditions returning state
const product_reducer = (state = {
    price: 100,
    product_name: "LAPTOP"
}, action) => {
    if (action.type == "add") {
        return { ...state, price: state.price + action.payload }
    }
    else if (action.type == "remove") {
        return { ...state, price: state.price - action.payload }
    }
    else if (action.type == "") {
        return state.price
    }
    else if (action.type == "") {
        return state.price
    }
    else {
        return state
    }
}

export default product_reducer