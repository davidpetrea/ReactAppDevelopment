import React from "react"


import FooterLogo from "../footerLogo.png"
import DiscordLogo from "../discLogo.png"
import SkypeLogo from "../skypeLogo.png"

class Footer extends React.Component{
    render() {
        return(
            <div className="container footer">
                <div className="row"> 
                    <div className="col-lg-3">
                        <img src={FooterLogo} className="footer-logo"></img>
                        <div className="copyright-text">Copyright &copy; Plugyn Store 2020</div>
                    </div>
                    <div className="col-lg-3">
                        <div className="footer-info-header">INFORMATION</div>
                        <div className="footer-info-list">
                            <div><a href="https://google.com" target="_blank">How it works</a></div>
                            <div><a href="https://google.com" target="_blank">About Us</a></div>
                            <div><a href="https://google.com" target="_blank">Terms & Rules</a></div>
                            <div><a href="https://google.com" target="_blank">Become a Supplier</a></div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="footer-info-header">CONTACT US</div>
                        <div className="footer-info-list">
                            <div>
                                <img src={DiscordLogo} className="footer-contact-logo"></img>
                                <a href="https://google.com" target="_blank">PlugynStore#2310</a>
                            </div>
                            <div>
                                <img src={SkypeLogo} className="footer-contact-logo"></img>
                                <a href="https://google.com" target="_blank">live:plugynStore</a>
                            </div>
                            <div><a href="https://google.com" target="_blank">support@plugynstore.com</a></div>
                        </div>
                    </div>
                    <div className="col-lg-2 footer-register-text align-self-center">
                        All included here mentioned brand names are registered and property of the respective companies. 
                    </div>

                </div>
            </div>
        )
    }
}

export default Footer