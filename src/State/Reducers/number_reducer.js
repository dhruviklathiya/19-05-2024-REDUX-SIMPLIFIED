// Multiple conditions returning state
const number_reducer = (state = {
    value: 100,
    number_name: "Golden"
}, action) => {
    if (action.type == "ADD") {
        return { ...state, value: state.value + action.payload }
    }
    else if (action.type == "MINUS") {
        return { ...state, value: state.value - action.payload }
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

export default number_reducer