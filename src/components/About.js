import React,{useContext,useEffect} from 'react'
import noteContext from '../context/notes/noteContext'

export default function About() {
    let a=useContext(noteContext)
    useEffect(() => {
        // a.updateDetails()
        // eslint-disable-next-line
    }, [])
    return (
        <form className="form-inline active-purple-4">
  <input className="form-control form-control-sm mr-3 w-75" value={a} type="text" placeholder="Search"
    aria-label="Search"/>
  <i className="fas fa-search" aria-hidden="true"></i>
</form>
    )
}
