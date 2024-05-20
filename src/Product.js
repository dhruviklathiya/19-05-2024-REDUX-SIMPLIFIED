import { useDispatch, useSelector } from "react-redux";
import { actionCreators } from "./State";

// ES5 (2009)

function Product() {
  // "Selector hook will provide us with needed state"
  const product = useSelector(state => state.product)
  // Point to remember: "State is object made of multiple individual states returning... from reducers of particular files"
  // Reason: combineReducers

  // We have initialize hook in a variable
  const dispatch = useDispatch()
  return (
    <>
      <h1>{product.product_name}</h1>
      <h1>{product.price}</h1>
      {/* "Action is always dispatched" === Action && Dispatch are close terms || Dispatch triggers action || */}
      <button onClick={() => { dispatch(actionCreators.add_price(100)) }}>+</button>
      {/* Our code had actions in form of objects cause we have exported all actions in object and imported them as * in index.js of actions or in some cases index.js of src */}
      <button onClick={() => { dispatch(actionCreators.remove_price(100)) }}>-</button>
    </>
  );
}

export default Product;