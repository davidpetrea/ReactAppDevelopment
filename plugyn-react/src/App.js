import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {CSSTransition, TransitionGroup} from 'react-transition-group'

import Header from "./Components/Header"
import Home from "./Components/Home"
import HowItWorks from "./Components/HowItWorks"
import About from "./Components/About"
import FAQ from "./Components/FAQ"
import ScrollToTop from "./Components/ScrollToTop"

function App() {
  return (
    <Router>
      <ScrollToTop>
        <div>
          <Header />

          <Route render={({location}) => (
            <TransitionGroup>
              <CSSTransition key={location.key} timeout={300} className="fade">
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/howitworks" component={HowItWorks}/>
                    <Route path="/about" component={About}/>
                    <Route path="/faq" component={FAQ}/>
                </Switch>
              </CSSTransition>
           </TransitionGroup> 
          )} />

          
        </div>
      </ScrollToTop>
    </Router>
      
   
  );
}

export default App;
