import React,{useContext,useState,useEffect} from 'react'
import { Link ,useHistory} from 'react-router-dom'
import noteContext from '../context/notes/noteContext'
import { MDBDropdown,MDBDropdownItem,MDBDropdownToggle,MDBDropdownMenu } from 'mdbreact';

export default function Navbar(props) {
  let history=useHistory()
  // let location=useLocation()
  const { setloginStatus } = props
  const context = useContext(noteContext)
  const {getUserDetails,setnote}=context
const [user, setuser] = useState('User')
useEffect(async() => {
  let profile= await  getUserDetails()
  setuser(profile)
}, [])

  let handleLogOut=async()=>{
    history.push("/")
    localStorage.removeItem('token')
    setloginStatus('loading')
    setTimeout(() => {
      setloginStatus(false)
    }, 500);
    setnote([])

  }
  return (
  
  
  <nav className="mb-1 navbar navbar-expand-lg navbar-dark sticky-top" style={{backgroundColor:"#2D767F"}}>
  <Link className="navbar-brand" to="/">Note Likho <i className="fas fa-book-open"></i></Link>
  
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-4" aria-controls="navbarSupportedContent-4" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent-4">
    <ul className="navbar-nav ml-auto">
    <li className="nav-item">
        <Link className="nav-link waves-effect waves-light" to="/">
          <i className="fas fa-gear"></i> All Notes</Link>
      </li>
      <li className="nav-item ">
        <Link className="nav-link waves-effect waves-light" to="/stared">Stared
          <i className="fas fa-star" style={{transform:'scale(.7)'}}></i> 
          <span className="sr-only">(current)</span>
        </Link>
      </li>
      
      <li className="nav-item active">
      <MDBDropdown>
                <MDBDropdownToggle nav >
                  <a className=" waves-light">
          <i className="fas fa-user grey rounded-circle p-2 mx-2"></i>{user.slice(0,22)}</a>
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default">
                  <MDBDropdownItem onClick={handleLogOut} >Log out</MDBDropdownItem>
                  <MDBDropdownItem href="#!">profile Update</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
        
      </li>
    </ul>
  </div>
</nav>
  )
   

  
}


