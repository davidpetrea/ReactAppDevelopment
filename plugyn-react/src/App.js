import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {CSSTransition, TransitionGroup} from 'react-transition-group'

import Header from "./Components/Header"
import Home from "./Components/Home"
import HowItWorks from "./Components/HowItWorks"
import About from "./Components/About"

function App() {
  return (
    <Router>
        <div>
          <Header />

          <Route render={({location}) => (
            <TransitionGroup>
              <CSSTransition key={location.key} timeout={300} className="fade">
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/howitworks" component={HowItWorks}/>
                    <Route path="/about" component={About}/>
                </Switch>
              </CSSTransition>
           </TransitionGroup> 
          )} />

          
        </div>
    </Router>
      
   
  );
}

export default App;
