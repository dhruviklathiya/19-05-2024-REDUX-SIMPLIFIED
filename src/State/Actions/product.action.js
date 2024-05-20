// Funtion-function game function
const add_price = (data = 10) => {
    return (dispatch) => {
        dispatch(
            {
                type: "add",
                payload: data
            }
        )
    }
}

const remove_price = (data = 10) => {
    return (dispatch) => {
        dispatch(
            {
                type: "remove",
                payload: data
            }
        )
    }
}

export {
    add_price,
    remove_price
}