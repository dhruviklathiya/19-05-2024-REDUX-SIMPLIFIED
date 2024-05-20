// Funtion-function game function
const increase_number = (data = 0) => {
    return (dispatch) => {
        dispatch({
            type: 'ADD',
            payload: data
        })
    }
}

const decrease_number = (data = 0) => {
    return (dispatch) => {
        dispatch({
            type: 'MINUS',
            payload: data
        })
    }
}

export {
    increase_number,
    decrease_number
}