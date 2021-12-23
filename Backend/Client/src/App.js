import React, { useState,useContext } from 'react'
import './App.css';
import Navbar from './components/Navbar'
import {
  BrowserRouter as Router,
  Switch,
  Route,withRouter
} from "react-router-dom";
import Home from './components/Home';
import Signup from './components/Signup';
import Spinner from './components/Spinner';
import ConfirmBoxAlert from './components/ConfirmBoxAlert';
import StaredList from './components/StaredList';
import noteContext from './context/notes/noteContext';
import ExpandedNoteBox from './components/ExpandedNoteBox';
import Footer from './components/Footer';

function App() {
  const [loginStatus, setloginStatus] = useState(false)
  const [confirmAlert, setconfirmAlert] = useState({ alert: false, id: '' })
  const context = useContext(noteContext)
  const { expandNoteBox } = context
  const [expand, setexpand] = useState(false)
  if (expand) {
    document.querySelector('body').style.overflow="hidden"
}
else{
    document.querySelector('body').style.overflow="visible"

}
  return (
    <>
        {loginStatus === false && <Signup setloginStatus={setloginStatus} />}
        {loginStatus === 'loading' && <Spinner />}
        {loginStatus === true &&
          <Router>
            <Navbar setloginStatus={setloginStatus} />
            {confirmAlert.alert && <ConfirmBoxAlert confirmAlert={confirmAlert} setconfirmAlert={setconfirmAlert}/>}
            {expandNoteBox.expand && <ExpandedNoteBox/>}

            <Switch>
              <Route exact path="/">
                <Home confirmAlert={confirmAlert} setconfirmAlert={setconfirmAlert}  setexpand={setexpand} expand={expand} />
              </Route>
              <Route exact path="/stared" >
                <StaredList confirmAlert={confirmAlert} setconfirmAlert={setconfirmAlert}  setexpand={setexpand} expand={expand}/>
              </Route>
            </Switch>
          </Router>}
          <Footer/>
          {/* {loginStatus === true &&  <Footer/>} */}
    </>
  );
}

export default withRouter(App) ;