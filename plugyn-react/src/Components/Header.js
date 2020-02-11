import React from 'react'
import logo from '../Logopng.png'

import {Link} from 'react-router-dom'

class Header extends React.Component{
    render(){
        return(
            <div>
                <header>
                    <div className="container">
                        <div className="row ">
                            <div className="col-7 col-sm-6 col-md-4 col-lg-3">
                                <a className="logo" href="/">
                                    <img className="logo-image" src={logo} alt="Plugyn Store"/>
                                </a>
                            </div>
                            <div className="col-1 offset-2 offset-sm-3 offset-md-6 col-lg-2 align-self-center mobile-header-button">
                                <div className="header-buttons">
                                    <button className="button-background">
                                        <span className="menu-button"></span>
                                    </button>
                                </div>
                            </div>
                            
                            <div className="col-md align-self-center nav-item">
                                <Link to='/howitworks' style={{textDecoration: 'none'}}>
                                    <span className="nav-item-text"><a href="http://www.google.com" target="_blank">HOW IT WORKS</a></span>
                                </Link>
                            </div>
                            
                            <div className="col-md align-self-center nav-item">
                                <Link to='/about' style={{textDecoration: 'none'}}>
                                    <span className="nav-item-text"><a href="http://www.google.com" target="_blank">ABOUT US</a></span>
                                </Link>
                            </div>
                        
                            <div className="col-md align-self-center nav-item">
                                <span className="nav-item-text"><a href="http://www.google.com" target="_blank">CONTACT US</a></span>
                            </div>
                            <div className="col-md align-self-center nav-item">
                                <span className="nav-item-text"><a href="http://www.google.com" target="_blank">BECOME A SUPPLIER</a></span>
                            </div>
                            <div className="col-md align-self-center nav-item">
                                <Link to='/faq' style={{textDecoration: 'none'}}>
                                    <span className="nav-item-text"><a href="http://www.google.com" target="_blank">FAQ</a></span>
                                </Link>
                            </div>


                        </div>
                    </div>
                </header>
            </div>
        )
    }
}



export default Header