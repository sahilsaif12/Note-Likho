import React, { useState } from 'react'
import './App.css';
import Navbar from './components/Navbar'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import About from './components/About';
import NoteState from './context/notes/NoteState';
import Home from './components/Home';
import Signup from './components/Signup';
import Spinner from './components/Spinner';
import ConfirmBoxAlert from './components/ConfirmBoxAlert';

function App() {
  const [loginStatus, setloginStatus] = useState(false)
  const [confirmAlert, setconfirmAlert] = useState({ alert: false, id: '' })

  return (
    <>
      <NoteState>
        {loginStatus === false && <Signup setloginStatus={setloginStatus} />}
        {loginStatus === 'loading' && <Spinner />}
        {loginStatus === true &&
          <Router>
            <Navbar setloginStatus={setloginStatus} />
            {confirmAlert.alert && <ConfirmBoxAlert confirmAlert={confirmAlert} setconfirmAlert={setconfirmAlert}/>}
            
            <Switch>
              <Route exact path="/">
                <Home confirmAlert={confirmAlert} setconfirmAlert={setconfirmAlert} />
              </Route>
              <Route exact path="/about">
                <About />
              </Route>
            </Switch>
          </Router>}
      </NoteState>
    </>
  );
}

export default App;