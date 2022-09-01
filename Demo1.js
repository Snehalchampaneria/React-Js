import React, { useState } from "react";

import { useSelector } from 'react-redux';
import Demo from "./Demo";
export default function Demo1() {

    const count = useSelector((state) => state.count)
    console.log(count)
    return (

        <h1>Demo1 :{count}</h1>


    )
}