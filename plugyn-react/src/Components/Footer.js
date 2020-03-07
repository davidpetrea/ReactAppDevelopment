import React from "react"
import {Link} from 'react-router-dom'
import {Helmet} from 'react-helmet'

import FooterLogo from "../footerLogo.png"
import DiscordLogo from "../discLogo.png"
import SkypeLogo from "../skypeLogo.png"
import EpvpLogo from "../epvpicon.png"

class Footer extends React.Component{
    render() {
        return(
            <div>
                <Helmet>
                    <meta name="description" content="Metin2 Yang Store, Cheap and secure Yang for all servers. Best price for Evion, Celestial World, Nexus, Nayah and many more!"/>
                </Helmet>
                <div className="container footer">
                <div className="row justify-content-center"> 
                    <div className="col-lg-3 col-12">
                        <Link to="/">
                             <img src={FooterLogo} className="footer-logo" alt="PlugynStore Logo"></img>
                        </Link>
                        
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
                                <a href="https://discordapp.com/users/557175395695198229" target="_blank" rel="noopener noreferrer">PlugynStore#2310</a>
                            </div>
                            <div>
                                <img src={SkypeLogo} className="footer-contact-logo" alt="skype logo"></img>
                                <a href="https://join.skype.com/invite/iRidvFOxNO2l" target="_blank" rel="noopener noreferrer">live:plugynStore</a>
                            </div>
                            <div>
                                <img src={EpvpLogo} className="footer-contact-logo" alt="discord logo"></img>
                                <a href="https://www.elitepvpers.com/forum/metin2-trading/4599199-all-private-servers-600-positive-reviews-yangstore-plugyn-cheap-safe.html" target="_blank" rel="noopener noreferrer">ElitePVPers.com</a>
                            </div>
                            <div><a href="mailto:support@plugynstore.com" target="_blank" rel="noopener noreferrer">support@plugynstore.com</a></div>
                        </div>
                    </div>
                    <div className="col-lg-2 col-12 footer-register-text align-self-center">
                        All included here mentioned brand names are registered and property of the respective companies. We are not affiliated with any of the servers mentioned.
                    </div>

                </div>
            </div>
            </div>
            
        )
    }
}

export default Footer