import React from 'react'
import logo from '../Logopng.png'

import {Link} from 'react-router-dom'
import ContactModal from './ContactModal'
import MobileMenuModal from './MobileMenuModal'

class Header extends React.Component{
    constructor(props){
        super(props);
        this.state={addModalShow: false,addMenuModalShow:false}
    }
    
    
    render(){

        let addModalClose=() => this.setState({addModalShow:false});
        let addMenuModalClose=() => this.setState({addMenuModalShow:false});


        return(
            <div>
                <header>
                    <div className="container">
                        <div className="row ">
                            <div className="col-7 col-sm-6 col-md-4 col-lg-3">
                                <Link to="/" className="logo" >
                                    <img className="logo-image" src={logo} alt="Plugyn Store"/>
                                </Link>
                            </div>
                            <div className="col-1 offset-2 offset-sm-3 offset-md-6 col-lg-2 align-self-center mobile-header-button">
                                <div className="header-buttons">

                                        <button className="button-background" onClick={()=>this.setState({addMenuModalShow:true})}>
                                            <span className="menu-button"></span>
                                        </button>

                                </div>
                            </div>
                            
                            <div className="col-md align-self-center nav-item">
                                <Link to='/howitworks' className="header-links" >
                                    <span className="nav-item-text">HOW IT WORKS</span>
                                </Link>
                            </div>
                            
                            <div className="col-md align-self-center nav-item">
                                <Link to='/about' className="header-links" >
                                    <span className="nav-item-text">ABOUT US</span>
                                </Link>
                            </div>
                        
                            
                            <div className="col-md align-self-center nav-item">
                                <Link to='/suppliers' className="header-links" >
                                    <span className="nav-item-text">BECOME A SUPPLIER</span>
                                </Link>
                            </div>

                            <div className="col-md align-self-center nav-item">
                                <Link to='/faq' className="header-links" >
                                    <span className="nav-item-text">FAQ</span>
                                </Link>
                            </div>
                            <div className="col-md align-self-center nav-item">
                                <button className="nav-contact-button" onClick={()=>this.setState({addModalShow:true})}>CONTACT US</button>
                            </div>

                            


                        </div>
                    </div>
                </header>
                <ContactModal
                    show={this.state.addModalShow}
                    onHide={addModalClose}
                 />

                 <MobileMenuModal
                    show={this.state.addMenuModalShow}
                    onHide={addMenuModalClose}
                 />
                <div className="background__image background__image--homepage">

                </div>
            </div>
        )
    }
}



export default Header