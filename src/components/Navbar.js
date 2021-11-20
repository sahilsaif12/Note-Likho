import React from 'react'
import { Link,useLocation } from 'react-router-dom'

export default function Navbar() {
  let location=useLocation()
  // useEffect(() => {
  //   console.log(location.pathname);
  // }, [location])
  return (
  
  
  <nav class="mb-1 navbar navbar-expand-lg navbar-dark sticky-top" style={{backgroundColor:"#2D767F"}}>
  <Link class="navbar-brand" to="/">Note Likho <i class="fas fa-book-open"></i></Link>
  
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-4" aria-controls="navbarSupportedContent-4" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent-4">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item ">
        <Link class="nav-link waves-effect waves-light" to="/about">
          <i class="fas fa-envelope"></i> Contact
          <span class="sr-only">(current)</span>
        </Link>
      </li>
      <li class="nav-item">
        <a class="nav-link waves-effect waves-light" href="#">
          <i class="fas fa-gear"></i> Settings</a>
      </li>
      <li class="nav-item active">
        <a class="nav-link waves-effect waves-light" id="navbarDropdownMenuLink-4" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <i class="fas fa-user grey rounded-circle p-2"></i> Profile </a>
      </li>
    </ul>
  </div>
</nav>
  )
   

  
}


