import React from "react"
import Server from "./Server"

class Content extends React.Component{
    render() {
        return(
            <main>
                <div>
                    <div className="background__image background__image--homepage">

                    </div>
                    <div className="showcase-text">
                        <div className="showcase-text-title">Best Metin2 Deals on the Market</div>
                        <div className="showcase-text-main">Get the cheapest yang on your favourite Metin2 server and become the strongest today!</div>
                        <div className="showcase-buttons">
                            <button className="button-1">
                                Choose your server
                            </button>
                            <button className="button-2">
                                Check our reviews
                            </button>
                        </div>
                        <div className="servers-section">
                            <h2 className="servers-title">Servers We Support</h2>
                        </div>
                        <div className="container servers">
                            <Server />
                            <Server />
                            <Server />
                        </div>
                    </div>
                    
                    
                </div>
            </main>
        )
    }
}

export default Content