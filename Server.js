import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

export default function Server() {


    const state = useSelector((state) => state.users)
    console.log(state)
    const dispatch = useDispatch()
    const [name, setName] = useState("")



    const deleleData = (id) => {
        return dispatch({
            type: 'del',
            playload: id
        })
    }


    const addData = (e) => {
        e.preventDefault()
        const id = Math.round(Math.random() * (1 + 100 - 1)) % 100
        
        return dispatch({
            type: 'add',
            playload: {id, name}
        })
    }


    return (
        <center>
            <form method='POST'>
                <input type="text" onChange={(e) => setName(e.target.value)} />&nbsp;&nbsp;
                <button onClick={addData}>ADD</button>
            </form>

            <table>
                <tr>
                    <td>id</td>
                    <td>Name</td>
                    <td>Action</td>
                </tr>
                {
                    state && state.map((item) =>
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td><button onClick={() => dispatch({ type: 'edit' })}>Edit</button></td>
                            <td><button onClick={() => deleleData(item.id)}>Delete</button></td>
                        </tr>
                    )
                }
            </table>
        </center>
    )
}