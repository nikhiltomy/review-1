import React from 'react'
import {useState} from 'react';
export function Display() {
    const [state, setstate] = useState("nikhil")
    return (
        <div>
           <button onClick={()=>{setstate("gopal")}}>change name</button>
           <p>{state}</p>   
        </div>
    )
}
