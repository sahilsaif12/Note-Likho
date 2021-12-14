import React, { useState, useContext,useEffect } from 'react'
import noteContext from '../context/notes/noteContext'
import '../App.css'
import vid from "../note likho.mp4"
import { MDBInput } from 'mdbreact';
import {useHistory} from "react-router-dom";


const Signup = (props) => {
    let history=useHistory()
    const context = useContext(noteContext)
    const { userSignIn, userLogIn, getNotes } = context
    const { setloginStatus } = props
    const [signup, setsignup] = useState(true)
    const [userDetails, setuserDetails] = useState({ "name": "", "email": "", "password": "" })
    const [SignUpError, setSignUpError] = useState([])
    const [LogInError, setLogInError] = useState([])
    useEffect(() => {
        history.push("/")
        // eslint-disable-next-line
    }, [])
    let handleOnchange = (e) => {
        setuserDetails({ ...userDetails, [e.target.name]: e.target.value })
    }
    let handleSignIn = async () => {
        // setloginStatus('loading')
        let response = await userSignIn(userDetails.name.trim(), userDetails.email.trim(), userDetails.password)
        if (response.success) {
            // getNotes()
            setloginStatus(true)
        }
        else {
            
            setSignUpError({
                matched:response.matched,
                error:response.errors
            })
        }
    }
    let handleLogIn = async () => {
        let response = await userLogIn(userDetails.email, userDetails.password)
        if (response.success) {
            setloginStatus('loading')
            await getNotes()
            setloginStatus(true)
        }
        else{
            setLogInError({
                matched:response.matched,
                error:response.errors
            })

            setTimeout(() => {
                setLogInError([])
            }, 2500);
        }
    }

    return (
        <div style={{ height: "100vh", width: "100%", backgroundColor: "#ECFFFB" }} >
            <div className="row d-flex justify-content-center align-items-center h-100 w-100 ">
                <div className={`car text-black w-100 ${window.outerWidth <= 995 ?"":"h-100"} rounded`} style={{ backgroundColor: " #ECFFFB" }}>
                    {window.outerWidth <= 995 && <p className="text-center h2 p-3 blue-grey-text" >Note Likho</p>
                    }
                    <div className="row d-flex h-100  justify-content-center align-items-center">
                        <div className="order-2 order-lg-2 d-flex flex-column  justify-content-around " style={window.outerWidth > 995 ? { borderLeft: "4px dashed #a3a2a0", width: "40%" } : { height: "" }} >
                            <div className=" d-flex justify-content-center ml-4  py-3 ">

                                <div className="btn-group">
                                    <span onClick={() => setsignup(true)} className={`btn ${signup ? "teal lighten-1 " : "teal darken-1 "} text-white`}>Sign Up</span>
                                    <span onClick={() => setsignup(false)} className={`btn ${!signup ? "teal lighten-1" : "teal darken-1 "} text-white`}>Log In</span>
                                </div>
                            </div>

                            <form className={`mx-1 mx-md-4  flex-column justify-content-center  align-items-center   ${!signup ? "d-none" : "d-flex"} `}>
                                <div className={`position-relative ${window.outerWidth > 995 && "w-75" }`}>
                                    {SignUpError.matched==="invalid" && SignUpError.error.map((msg) => msg.param === "name" && <small className="align-self-start pink-text position-absolute" >{msg.msg}</small>)}
                                    <MDBInput onChange={handleOnchange} name="name" className="w-100" label="Your name *" icon="user" />
                                </div>
                                <div className={`position-relative ${window.outerWidth > 995 && "w-75" }`}>
                                    {SignUpError.matched==="invalid" && SignUpError.error.map((msg) => msg.param === "email" && <small className="align-self-start pink-text position-absolute" >{msg.msg}</small>)}
                                    <MDBInput onChange={handleOnchange} name="email" className="w-100" label="Email *" icon="envelope" type="email" />
                                </div>
                                <div className={`position-relative ${window.outerWidth > 995 && "w-75" }`}>
                                    {SignUpError.matched==="invalid" && SignUpError.error.map((msg) => msg.param === "password" && <small className="pink-text position-absolute w-100" >{msg.msg}</small>)}
                                    <MDBInput onChange={handleOnchange} name="password" className="w-100" label={`Password *`} icon="lock" type="password" />
                                </div>
                                <div className={`position-relative w-100 text-center`}>
                                {SignUpError.matched===true  &&    <small className="red-text w-100 " >{SignUpError.error}</small>}
                                </div>
                                <div className="d-flex justify-content-center w-100 ml-4 mb-lg-4">
                                    <button type="button" onClick={handleSignIn} className="btn btn-primary btn-lg rounded signUp-btn">Sign up</button>
                                </div>
                                <p className="text-center">Already have an account? <span onClick={() => setsignup(false)} className="teal-text" style={{ textDecoration: "underline" }} >Log in</span></p>

                            </form>

                            <form className={`mx-1 mx-md-4  flex-column justify-content-center align-items-center  ${signup ? "d-none" : "d-flex"} `}>

                            <div className={`position-relative ${window.outerWidth > 995 && "w-75" }`}>
                            {LogInError.matched==="invalid" && LogInError.error.map((msg) => msg.param === "email" && <small className="align-self-start pink-text position-absolute" >{msg.msg}</small>)}
                                <MDBInput onChange={handleOnchange} name="email" className="w-100" label="Email" icon="envelope" type="email" />
                                </div>

                                <div className={`position-relative ${window.outerWidth > 995 && "w-75" }`}>
                                {LogInError.matched==="invalid" && LogInError.error.map((msg) => msg.param === "password" && <small className="align-self-start pink-text position-absolute" >{msg.msg}</small>)}
                                <MDBInput onChange={handleOnchange} name="password" className="w-100" label="Password" icon="lock" type="password" />
                                </div>

                                <div className={`position-relative w-100 text-center`}>
                                {LogInError.matched===false &&   <small className="red-text w-100 " >{LogInError.error}</small>}
                                </div>

                                <div className="d-flex justify-content-center ml-4 mb-3 mb-lg-4">
                                    <button type="button" onClick={handleLogIn} className="btn btn-primary btn-lg rounded signUp-btn">Log in</button>
                                </div>
                                <p className="text-center">Don't have an account? <span onClick={() => setsignup(true)} className="teal-text" style={{ textDecoration: "underline" }}  >sign up</span></p>

                            </form>

                        </div>
                        <div className={`d-flex align-items-center order-1 order-lg-1 ${window.outerWidth >= 995 ? "h-100" : ""} `}>

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
