import React from 'react'


class Server extends React.Component{
    render(){
        const style= {
            backgroundImage: "url("+this.props.image+"), linear-gradient(180deg, rgba(34, 37, 47, 0.2) 1.61%, rgba(34, 37, 47, 0.95) 99.23%)"
        }
        return(
            
                <div className="col-12 col-lg server-item" style={style}>
                    <div className="server-content">
                        <div className="server-name">
                            {this.props.serverName}
                        </div>
                        <div className="server-description">
                            {this.props.serverDescription}
                        </div>
                        <div className="server-price">
                            {this.props.price}
                        </div>
                        <div>
                            <button className="button-3">BUY NOW</button>
                        </div>
                    </div>
                </div>
            
        )
    }
    
}




export default Server