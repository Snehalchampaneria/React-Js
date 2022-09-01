import React, { useEffect } from "react";
import { useState } from 'react';


export default function Login() {


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [users, setUsers] = useState("");


    useEffect(()=>{
        const verify = users && users.filter((user) => {
            return user.email === email
        })
        if(verify){
            if (verify[0].password === password) {
                if (verify[0].role_id === 1) {
                    console.log("Admin..")
                } else {
                    console.log("User..")
                }
        
            }
        }

    })

    const handleLogin = (e) => {
        e.preventDefault()
        fetch('http://localhost:3001/users')
            .then(res => res.json())
            .then(json => setUsers(json))
    }

    // const handleLogin = () => {
    // const data = { email, password };
    // console.log(data);


    return (
        <>

            <div className="container">
                <div className="row mt-4 justify-content-center">
                    <div className="col-md-4">
                        <h1>Login</h1>
                        <form onSubmit={handleLogin}>

                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setEmail(e.target.value)} />
                            </div>

                            <div className="mb-3">
                                <label for="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            <div className="btn-block">
                            <button type="submit" className="btn btn-primary btn-block">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
