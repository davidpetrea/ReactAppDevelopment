import React from "react"

import Stars from "../star_iconv25.png"
class Reviews extends React.Component{
    render(){
        return(
            <div className="reviews-container" id='reviews'>
                <div className="reviews-title"> Why Choose Us?</div>
                <div className="reviews-text">
                    We are a small team of passionate and experienced gamers, therefore we know what the grind feels like! So we consider our mission as simple as this: to help people achieve smooth gaming experiences with less time invested into some boring and repetitive tasks.
                </div>
                <div className="review-elite-box">
                    <div className="reviews-elite">Store Rated 5 Stars</div> 
                    <div className="stars-container">
                        <img className="stars" src={Stars}></img>
                    </div>
                    <div className="reviews-text">With over <span className="rates">500</span>  unique positive reviews on</div>
                    <div className="elite-text"><a href="https://www.elitepvpers.com/forum/members/7528862-plugyn.html" target="_blank">ELITEPVPERS.COM</a></div>
                    <div>
                        <a href="https://www.elitepvpers.com/forum/metin2-trading/4599199-all-private-servers-450-positive-reviews-yangstore-plugyn-cheap-safe.html" target="_blank"><button className="button-4">Check our thread</button></a>
                    </div>
                </div>
                   
            </div>
        )
    }
}

export default Reviews