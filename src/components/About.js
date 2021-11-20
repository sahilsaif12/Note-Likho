import React,{useContext,useEffect} from 'react'
import noteContext from '../context/notes/noteContext'

export default function About() {
    let a=useContext(noteContext)
    useEffect(() => {
        // a.updateDetails()
        // eslint-disable-next-line
    }, [])
    return (
        <form class="form-inline active-purple-4">
  <input class="form-control form-control-sm mr-3 w-75" value={a} type="text" placeholder="Search"
    aria-label="Search"/>
  <i class="fas fa-search" aria-hidden="true"></i>
</form>
    )
}
