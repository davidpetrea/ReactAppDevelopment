import React from "react"
import Server from "./Server"

import backgroundAeldra from '../metin2wp2edit.jpg'
import backgroundEkstasia from "../metin2wp1edit.jpg"
import backgroundCelestial  from "../metin2wp3edit.jpg"
import backgroundMenor  from "../metin2wp4edit.jpg"
import background5 from "../metin2wp5edit.jpg"
import background6 from "../metin2wp6edit.png"
import background7 from "../metin2wp7edit.png"
import background8 from "../metin2wp8edit.png"
import background9 from "../metin2wp9edit.png"
import background10 from "../metin2wp10edit.png"

class Content extends React.Component{
    render() {
        return(
            <main>
                <div>
                    
                    <div className="showcase-text">
                        <h1 className="showcase-text-title">Welcome to the Plugyn Store!</h1>
                        <h2 className="showcase-text-main">Get cheap yang on your favourite Metin2 server and become the strongest today!</h2>
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
                                <Server image={backgroundEkstasia} serverName="Origins II" price="25kkk Yang = 10 €" serverDescription="With over 2000 players online, Origins2 has been a stable server for the past 8 months, enjoyable for those of you who are looking for a PvM – medium experience."/>
                                <Server image={backgroundCelestial} serverName="Celestial World II" price="50k Lagis = 10 €" serverDescription="This 6-year old new-school metin2 is still kicking. One of the most unique-rich servers on the market, with mechanics similar to those in Diablo and Path of Exile, is waiting for you."/>
                            </div>
                            <div  className="row">
                                <Server image={backgroundMenor} serverName="Age of Menor" price="1.2kkk Yang = 10 €" serverDescription="There’s nothing on the market quite like Age of Menor. This International server brings back the old-school vibes that made you fall in love with Metin2 in the first place. Feeling nostalgic? Give this highly-populated server a try."/>
                                <Server image={backgroundAeldra} serverName="Xaleas" price="150kk Yang = 10 €" serverDescription="Xaleas is a brand new server that nailed the perfect combination of oldschool and middleschool. With a nice progressive system focused on PvM, this server will surely make you want to stay."/>
                            </div>
                            <div className="row">
                                <Server image={background6} serverName="Nexus II" price="3kkk Yang = 10 €" serverDescription="The definition of a PvM experience, this server brings a great deal of content to the table. An ever-growing community that actually makes its voice heard awaits for you!"/>
                                <Server image={background5} serverName="Evion II" price="2.2kkk Yang = 10 €" serverDescription="Beginner-friendly and International, Evion2 is sure to please those of you who are looking for an adventure. Grab your friends and jump in this promising PvM experience together."/>
                            </div>
                            <div className="row">
                                <Server image={background7} serverName="Anima" price="6 won/600kk = 10 €" serverDescription="The latest addition to the official DE metin2 server-list will surely offer you a great challenge with a fresh old-school vibe."/>
                                <Server image={background8} serverName="Germania" price="10 won/1kkk = 10 €" serverDescription="As part of the most populated official server, the old Genesis community will make sure you have a great time and enjoy the experience."/>
                            </div>
                            <div className="row">
                                <Server image={background9} serverName="Teutonia" price="10 won/1kkk = 10 €" serverDescription="As any other official server, Teutonia takes the meaning of balanced and long lasting oldschool gaming experiences to the next level."/>
                                <Server image={background10} serverName="Columba" price="10 won/1kkk = 10 €" serverDescription="After the recent server merge, Columba became the home of many communities united by a common goal. To have the most fun and grow together."/>
                            </div>
                            
                        </div>
                    </div>
                    
                    
                </div>
            </main>
        )
    }
}

export default Content