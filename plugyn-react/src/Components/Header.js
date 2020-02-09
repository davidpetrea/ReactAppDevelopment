import React from 'react'
import logo from '../Logopng.png'

class Header extends React.Component{
    render(){
        return(
            <div>
                <header>
                    <div className="container">
                        <div className="row">
                            <div className="col-7">
                                <a className="header-logo" href="/">
                                    <img className="logo-test" src={logo} alt="Plugyn Store"/>
                                </a>
                            </div>
                            <div className="col-5">
                                <div className="row">
                                    <div className="col-12 header-buttons">
                                        <button className="button-background">
                                            <span className="menu-button"></span>
                                        </button>
                                    </div>
                                    
                                </div>

                                
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        )
    }
}



export default Header