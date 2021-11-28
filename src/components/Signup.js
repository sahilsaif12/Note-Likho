import React, {  useState, useContext } from 'react'
import noteContext from '../context/notes/noteContext'
import '../App.css'
import vid from "../note likho.mp4"
import { MDBInput } from 'mdbreact';

const Signup = (props) => {
    const context = useContext(noteContext)
    const{userSignIn,userLogIn,getNotes}=context
    const { setloginStatus } = props
    const [signup, setsignup] = useState(true)
    const [userDetails, setuserDetails] = useState({ "name": "", "email": "", "password": "" })
let handleOnchange=(e)=>{
setuserDetails({...userDetails,[e.target.name]: e.target.value })
}
let handleSignIn=async()=>{
    setloginStatus('loading')
    let x= await userSignIn(userDetails.name,userDetails.email,userDetails.password)
    if (x) {
            // getNotes()
            setloginStatus(true)
        // history.push('/')
    }
}
let handleLogIn= async()=>{
    setloginStatus('loading')
    let x=await userLogIn(userDetails.email,userDetails.password)
    if (x) {
            getNotes()
            setloginStatus(true)
        // history.push('/')
    }
}
    return (
        <div style={{ height: "100vh", width: "100vw", backgroundColor: "#ECFFFB" }} >
            <div class="row d-flex justify-content-center align-items-center h-100 w-100 ">
                <div class="car text-black w-100 h-100 rounded" style={{ backgroundColor: " #ECFFFB" }}>
                            {window.outerWidth <= 995 && <p  className="text-center h2 p-3 blue-grey-text" >Note Likho</p>
                            }
                    <div class="row d-flex h-100  justify-content-center align-items-center">
                        <div class="order-2 order-lg-2 d-flex flex-column  justify-content-around " style={window.outerWidth > 995 ? { borderLeft: "4px dashed #a3a2a0", width: "40%" } : {height:""}} >
                            <div className=" d-flex justify-content-center ml-4  py-3 ">

                                <div class="btn-group">
                                    <a onClick={() => setsignup(true)} class={`btn ${signup ? "teal lighten-1 " : "teal darken-1 "} text-white`}>Sign Up</a>
                                    <a onClick={() => setsignup(false)} class={`btn ${!signup ? "teal lighten-1" : "teal darken-1 "} text-white`}>Log In</a>
                                </div>
                            </div>

                            <form class={`mx-1 mx-md-4  flex-column justify-content-center  align-items-center   ${!signup ? "d-none" : "d-flex"} `}>

                                <MDBInput onChange={handleOnchange} name="name" className="w-100" label="Your name" icon="user" />
                                <MDBInput onChange={handleOnchange} name="email" className="w-100" label="Email" icon="envelope" type="email" />
                                <MDBInput onChange={handleOnchange} name="password" className="w-100" label="Password" icon="lock" type="password" />
                                <div class="d-flex justify-content-center w-100 ml-4 mb-lg-4">
                                    <button type="button" onClick={handleSignIn} class="btn btn-primary btn-lg rounded signUp-btn">Sign up</button>
                                </div>
                                <p className="text-center">Already have an account? <a onClick={() => setsignup(false)} className="teal-text" style={{ textDecoration: "underline" }} >Log in</a></p>

                            </form>

                            <form class={`mx-1 mx-md-4  flex-column justify-content-center align-items-center  ${signup ? "d-none" : "d-flex"} `}>

                                <MDBInput onChange={handleOnchange} name="email" className="w-100" label="Email" icon="envelope" type="email" />
                                <MDBInput onChange={handleOnchange} name="password" className="w-100" label="Password" icon="lock" type="password" />
                                <div class="d-flex justify-content-center ml-4 mb-3 mb-lg-4">
                                    <button  type="button" onClick={handleLogIn} class="btn btn-primary btn-lg rounded signUp-btn">Log in</button>
                                </div>
                                <p className="text-center">Don't have an account? <a onClick={() => setsignup(true)} className="teal-text" style={{ textDecoration: "underline" }}  >sign up</a></p>

                            </form>

                        </div>
                        <div class={`d-flex align-items-center order-1 order-lg-1 ${window.outerWidth >= 995 ? "h-100" : ""} `}>

                            <video className={window.outerWidth <= 995 ? "d-none" : ""} width="100%" height="100%" autoPlay muted >
                                <source src={vid} type="video/mp4" />
                            </video>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
}

export default Signup
