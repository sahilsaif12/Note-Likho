import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  // let location=useLocation()
  // useEffect(() => {
  //   console.log(location.pathname);
  // }, [location])
  return (
  
  
  <nav className="mb-1 navbar navbar-expand-lg navbar-dark sticky-top" style={{backgroundColor:"#2D767F"}}>
  <Link className="navbar-brand" to="/">Note Likho <i className="fas fa-book-open"></i></Link>
  
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-4" aria-controls="navbarSupportedContent-4" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent-4">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item ">
        <Link className="nav-link waves-effect waves-light" to="/about">
          <i className="fas fa-envelope"></i> Contact
          <span className="sr-only">(current)</span>
        </Link>
      </li>
      <li className="nav-item">
        <a className="nav-link waves-effect waves-light" href="#!">
          <i className="fas fa-gear"></i> Settings</a>
      </li>
      <li className="nav-item active">
        <a className="nav-link waves-effect waves-light" id="navbarDropdownMenuLink-4" data-toggle="dropdown"  aria-expanded="false" href="#!">
          <i className="fas fa-user grey rounded-circle p-2"></i> Profile </a>
      </li>
    </ul>
  </div>
</nav>
  )
   

  
}


