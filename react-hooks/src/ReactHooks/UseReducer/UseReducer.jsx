import { useReducer } from "react";

const reducerfn = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const UseReducer = () => {
  //syntax for useReducer
  //const [state,dispatch] = useReducer(ReducerFunction,state value)
  //state = state value
  //dispatch = ReducerFunction
  const [state, dispatch] = useReducer(reducerfn, { count: 1 });

  const increment = () => {
    dispatch({ type: "increment" }); //we can be write the logic in the dispatch()
  };
  const decrement = () => {
    dispatch({ type: "decrement" });
  };
  console.log(state);

  return (
    <>
      <h1>{state.count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </>
  );
};

export default UseReducer;
