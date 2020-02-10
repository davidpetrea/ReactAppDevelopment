import React from 'react';
import './App.css';
import Header from "./Components/Header"
import Content from "./Components/Content"
import Reviews from "./Components/Reviews"
import Traits from "./Components/Traits"
import Footer from "./Components/Footer"

function App() {
  return (
    <div>
        <Header />
        <Content />
        <Reviews />
        <Traits />
        <Footer/>
    </div>
  );
}

export default App;
