import React from "react"
import Server from "./Server"

import backgroundAeldra from '../metin2wp2edit.jpg'
import backgroundEkstasia from "../metin2wp1edit.jpg"
import backgroundCelestial  from "../metin2wp3edit.jpg"
import backgroundMenor  from "../metin2wp4edit.jpg"
import background5 from "../metin2wp5edit.jpg"

class Content extends React.Component{
    render() {
        return(
            <main>
                <div>
                    
                    <div className="showcase-text">
                        <div className="showcase-text-title">Best Metin2 Deals on the Market</div>
                        <div className="showcase-text-main">Get yang on your favourite Metin2 server and become the strongest today!</div>
                        <div className="showcase-buttons">
                             <a href='#servers'>
                                <button className="button-1">
                                    Choose your server
                                </button>
                            </a>
                            <a href='#reviews'>
                                <button className="button-2">
                                    Check our reviews
                                </button>
                            </a>
                        </div>
                        <div className="servers-section"  id='servers'>
                            <h2 className="servers-title">Servers We Support</h2>
                        </div>
                        <div className="container servers">
                            <div className="row">
                                <Server image={backgroundEkstasia} serverName="Ekstasia" price="3.8kkk Yang = 10 €" serverDescription="Enjoy one of the most popular Private Servers by getting the best equipment out there! "/>
                                <Server image={backgroundCelestial} serverName="Celestial World II" price="50k Lagis = 10 €" serverDescription="Grab an advantage on this unique Metin2 experience with entirely new systems and mechanics!"/>
                            </div>
                            <div  className="row">
                                <Server image={backgroundMenor} serverName="Age of Menor" price="300kk Yang = 10 €" serverDescription="Grab an advantage on this unique Metin2 experience with entirely new systems and mechanics!"/>
                                <Server image={backgroundAeldra} serverName="Nayah II" price="50kkk Yang = 10 €" serverDescription="Get stronger today on the newest Metin2 Private Server available!"/>
                            </div>
                            <div className="row">
                                <Server image={backgroundAeldra} serverName="Nexus II" price="300kk Yang = 10 €" serverDescription="Grab an advantage on this unique Metin2 experience with entirely new systems and mechanics!"/>
                                <Server image={background5} serverName="Evion" price="1.2kkk Yang = 10 €" serverDescription="Get stronger today on the newest Metin2 Private Server available!"/>
                            </div>
                            <div className="row">
                                <Server image={backgroundMenor} serverName="Lysium" price="300kk Yang = 10 €" serverDescription="Grab an advantage on this unique Metin2 experience with entirely new systems and mechanics!"/>
                                <Server image={backgroundCelestial} serverName="Someya" price="1.2kkk Yang = 10 €" serverDescription="Get stronger today on the newest Metin2 Private Server available!"/>
                            </div>
                            
                        </div>
                    </div>
                    
                    
                </div>
            </main>
        )
    }
}

export default Content