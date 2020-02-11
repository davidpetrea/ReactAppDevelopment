import React from 'react';


import Header from "./Header"
import Content from "./Content"
import Reviews from "./Reviews"

import Footer from "./Footer"

class About extends React.Component{
    render(){
        return (
            <div>
               
                <Content />
                <Reviews />
                
                <Footer/>
            </div>
        );      
    }
    
   
}

export default About;