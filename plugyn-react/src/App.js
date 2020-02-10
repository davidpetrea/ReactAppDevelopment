import React from 'react';
import './App.css';
import Header from "./Components/Header"
import Content from "./Components/Content"
import Reviews from "./Components/Reviews"
import Traits from "./Components/Traits"

function App() {
  return (
    <div>
        <Header />
        <Content />
        <Reviews />
        <Traits />
    </div>
  );
}

export default App;
