import React, { useState } from 'react'
import NoteContext from './noteContext'


export default function NoteState(props) {
    let s={
        "name":"sahil",
        "age":19
    }
    const [details, setdetails] = useState(s)
    let updateDetails=()=>{
        setTimeout(() => {
            setdetails({
                "name":"sk saifuddin",
                "age":20
            })
        }, 1500);
    }
    return (
        <NoteContext.Provider value={{details, updateDetails}}>
            {props.children}
        </NoteContext.Provider>
    )
}
