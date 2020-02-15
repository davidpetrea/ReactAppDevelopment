import React from 'react';



import Content from "./Content"
import Reviews from "./Reviews"
import Traits from "./Traits"


class Home extends React.Component{
    render(){
        return (
            <div>
                
                <Content />
                <Reviews />
                <Traits />
  
            </div>
        );      
    }
    
   
}

export default Home;
