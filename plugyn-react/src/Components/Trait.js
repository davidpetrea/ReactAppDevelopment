import React from 'react'

class Trait extends React.Component{
        render()  {
            

            return(
                <div className="col-8 col-lg-3 trait-item">
                    <div className="trait-img">
                        <img src={this.props.image} ></img>
                    </div>
                    <div className="trait-header">
                        {this.props.traitHeader}
                    </div>
                    <div className="trait-text">
                        {this.props.traitText}
                    </div>
                </div>
            )
        }
}

export default Trait