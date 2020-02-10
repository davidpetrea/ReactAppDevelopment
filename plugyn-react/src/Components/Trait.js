import React from 'react'

class Trait extends React.Component{
        render()  {
            const style={backgroundImage: "url("+this.props.image+")"};

            return(
                <div className="col-12 col-lg-3 trait-item">
                    <div style={style}>
                        
                    </div>
                    <div>
                        {this.props.traitText}
                    </div>
                </div>
            )
        }
}

export default Trait