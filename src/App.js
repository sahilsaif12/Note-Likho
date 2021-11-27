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

function App() {
  const [loginStatus, setloginStatus] = useState(false)
  
  return (
    <>
    <NoteState>
    {loginStatus===false && <Signup setloginStatus={setloginStatus} />}
    {loginStatus==='loading' && <Spinner/>}
    {loginStatus===true && 
      <Router>
        <Navbar setloginStatus={setloginStatus}/> 
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/about">
            <About/>
          </Route> 
        </Switch>
      </Router>}
      </NoteState>
      </>
  );
}

export default App;