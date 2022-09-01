import React, { useState } from "react";

export default function Form(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    // const handleClick =()=>{
    //     const data ={name, email};
    //     console.log(data);
    // };

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = { name, email };
        console.log(data);
    };

    return (
        <center>
            <div>
                <h1>Form</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Enter Name"
                        onChange={(e) => setName(e.target.value)} />
                    <br />
                    <input
                        type="email"
                        placeholder="Enter Email "
                        onChange={(e) => setEmail(e.target.value)} />
                    <br />
                    <button>Save</button>

                    {/* <br />
                    <button onClick={()=>handleClick()}>Save</button> */}



                </form>
            </div>
        </center>
    );
}