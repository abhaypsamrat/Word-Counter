import React from 'react'
import './App.css'
import About from './components/About'
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar tittle="TextExchanger" About="About TextExchanger" />

        <div className="container my-3">
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              <TextForm heading="Enter the text to analyze" />
            </Route>
          </Switch>
        </div>
        <div className="footer">
        <h6>Made With ❤ By <a href="https://abhaypsamrat.netlify.app/" target="blank">Samrat</a></h6>
      </div>
      </Router>
    </>
  )
}

export default App
