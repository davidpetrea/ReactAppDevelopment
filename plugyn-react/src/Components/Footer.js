import React from "react"
import {Link} from 'react-router-dom'

import FooterLogo from "../footerLogo.png"
import DiscordLogo from "../discLogo.png"
import SkypeLogo from "../skypeLogo.png"

class Footer extends React.Component{
    render() {
        return(
            <div className="container footer">
                <div className="row justify-content-center"> 
                    <div className="col-lg-3 col-12">
                        <img src={FooterLogo} className="footer-logo" alt="PlugynStore Logo"></img>
                        <div className="copyright-text">Copyright &copy; Plugyn Store 2020</div>
                    </div>
                    <div className="col-lg-3 col-12 col-sm-12">
                        <div className="footer-info-header">INFORMATION</div>
                        <div className="footer-info-list">
                            <div>
                                <Link to="/howitworks"><span >How it works</span></Link>
                            </div>
                            <div>
                                <Link to="/about"><span>About us</span></Link>
                            </div>
                            <div>
                                <Link to="/faq"><span>FAQ</span></Link>
                            </div>
                            <div>
                                <Link to="/suppliers"><span>Become a Supplier</span></Link>
                            </div>
                            

                        </div>
                    </div>
                    <div className="col-lg-3 col-12">
                        <div className="footer-info-header">CONTACT US</div>
                        <div className="footer-info-list">
                            <div>
                                <img src={DiscordLogo} className="footer-contact-logo" alt="discord logo"></img>
                                <a href="https://google.com" target="_blank" rel="noopener noreferrer">PlugynStore#2310</a>
                            </div>
                            <div>
                                <img src={SkypeLogo} className="footer-contact-logo" alt="skype logo"></img>
                                <a href="https://google.com" target="_blank" rel="noopener noreferrer">live:plugynStore</a>
                            </div>
                            <div><a href="https://google.com" target="_blank" rel="noopener noreferrer">support@plugynstore.com</a></div>
                        </div>
                    </div>
                    <div className="col-lg-2 col-12 footer-register-text align-self-center">
                        All included here mentioned brand names are registered and property of the respective companies. 
                    </div>

                </div>
            </div>
        )
    }
}

export default Footer