import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { numberactionCreators } from './State'

// ES6 (2015)

const Number = () => {
    // "Selector hook will provide us with needed state"
    const number = useSelector(state => state.number)
    // Point to remember: "State is object made of multiple individual states returning... from reducers of particular files"
    // Reason: combineReducers

    // We have initialize hook in a variable
    const dispatch = useDispatch()
    return (
        <>
            <h1>Total budget: {number.value}</h1>
            {/* "Action is always dispatched" === Action && Dispatch are close terms || Dispatch triggers action || */}
            <button onClick={() => { dispatch(numberactionCreators.increase_number(1000)) }}>+++</button>
            {/* Our code had actions in form of objects cause we have exported all actions in object and imported them as * in index.js of actions or in some cases index.js of src */}
            <button onClick={() => { dispatch(numberactionCreators.decrease_number(1000)) }}>---</button>
        </>
    )
}

export default Number