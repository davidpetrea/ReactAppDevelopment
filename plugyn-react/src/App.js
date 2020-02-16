import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, withRouter} from 'react-router-dom';
import {CSSTransition, TransitionGroup} from 'react-transition-group'


import Header from "./Components/Header"
import Home from "./Components/Home"
import HowItWorks from "./Components/HowContent"
import About from "./Components/AboutContent"
import Suppliers from "./Components/SuppliersContent"
import FAQ from "./Components/FAQContent"
import ScrollToTop from "./Components/ScrollToTop"
import Footer from "./Components/Footer"


function App() {
  return (

    
        <Router>
        
          <div className="app">
          <Header/>
            <ScrollToTop>
              <div>
                
              
                <Route render={({location}) => (
                 <TransitionGroup>
                  <CSSTransition 
                    key={location.key} 
                    timeout={600} 
                    
                    classNames={'fade'}
                    
                    >
                      
                      <Switch location={location}>
                          <Route path="/" exact component={Home}/>
                          <Route path="/howitworks"  component={HowItWorks}/>
                          <Route path="/about"  component={About}/>
                          <Route path="/faq"  component={FAQ}/>
                          <Route path="/suppliers"  component={Suppliers}/>
                      </Switch>
                    
                  </CSSTransition>
                </TransitionGroup> 
              )} />

            <Footer/>  
          </div>
        </ScrollToTop>
      </div>
    </Router>
    
      
      
   
  );
}

export default App;
