import React,{useContext,useEffect} from 'react'
import noteContext from '../context/notes/noteContext'

export default function About() {
    let a=useContext(noteContext)
    useEffect(() => {
        a.updateDetails()
        // eslint-disable-next-line
    }, [])
    return (
        <div>
            <p>this is {a.details.name} and age {a.details.age}</p>
        </div>
    )
}
