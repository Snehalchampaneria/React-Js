import React from "react";

function ListComp(props) {
    return <li>{props.games}</li>
}

export default function List() {
    const games = ["Ludo", "Hopschotch", "Tic-Tac-Toe","Cricket", "Basketball", "Football"]

    // return(

    //     <div>
    //         <h1>List the color</h1>
    //         <ul>
    //             {
    //                 color && color.map((c)=>
    //                 <li key={{c}}>{c}</li>
    //                 )
    //             }
    //         </ul>
    //     </div>
    // );

    return (
        <div>
            <h1>List the games</h1>
            <ul>
                {
                    games.map((g) =>
                        <ListComp games= {g}/>
                    )
                }
            </ul>
        </div>

    )
}