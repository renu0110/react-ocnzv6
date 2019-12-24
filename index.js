import React, { useReducer } from "react";
import { render } from "react-dom";

const initialstate = {
  firstcounter: 0,
  secondcounter : 10,
}
const reducer = (state, action) => {
  switch(action.type){
    case 'increment' :
      return {...state, firstcounter : state.firstcounter + action.value};
    case 'decrement' :
      return {...state, firstcounter :  state.firstcounter - action.value};
    case 'increment10' :
      return {...state, secondcounter : state.secondcounter + action.value};
    case 'decrement10' :
      return {...state, secondcounter :  state.secondcounter - action.value};
    case 'reset' : 
      return initialstate;
    default :
      return state;
  }
};

function App() {
  const [count, dispatch] = useReducer(reducer, initialstate);
  return (
    <div >
    count-{count.firstcounter}
    <button onClick={()=> dispatch({type:'increment',value:1})}>increment</button>
    <button  onClick={()=> dispatch({type:'decrement',value:1})}>decrement</button>
    count-{count.secondcounter}
    <button onClick={()=> dispatch({type:'increment10',value:10})}>increment</button>
    <button  onClick={()=> dispatch({type:'decrement10',value:10})}>decrement</button>
    <button  onClick={()=> dispatch({type:'reset'})}>reset</button>
      </div>
  )
}

render(<App />, document.getElementById("root"));
