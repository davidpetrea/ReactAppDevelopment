import React from 'react';


import Header from "./Header"
import Content from "./Content"
import Reviews from "./Reviews"
import Traits from "./Traits"
import Footer from "./Footer"

class Home extends React.Component{
    render(){
        return (
            <div>
                
                <Content />
                <Reviews />
                <Traits />
                <Footer/>
            </div>
        );      
    }
    
   
}

export default Home;
