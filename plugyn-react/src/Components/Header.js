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
                                    <img src={logo} alt="Plugyn Store"/>
                                </a>
                            </div>
                            <div className="col-5">
                                {/* <button className="header-menu">
                                    <span className="header-menu-button">
                                        <span className="header-menu-button-icon">

                                        </span>
                                    </span>
                                </button> */}
                                
                                
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        )
    }
}



export default Header