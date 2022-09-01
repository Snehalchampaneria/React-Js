import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import Demo1 from "./Demo1";
export default function Demo() {

    // const [count,setCount]=useState(0);
    const count = useSelector((state) => state.count)
    const dispatch = useDispatch()
    console.log(count)
    return (
        <>
            <h1>Count:{count}</h1>
            <button onClick={() => dispatch({ type: 'inc' })}>Increment</button> &nbsp;&nbsp;&nbsp;
            <button onClick={() => dispatch({ type: 'dec' })}>Decrement</button>
            {/* <Demo1 name = {count} /> */}
        </>

    )
}