import React, { Component } from "react";

type navProps = {
    cardTitle: string,
    cardText: string,
    cardImage: string,
}

class Card extends Component<navProps>{
    render(){
        return(
            <div className="card mb-3 border-0">
                <div className="row g-0">
                    <div className="col-md-3">
                        <img src={this.props.cardImage} className="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{this.props.cardTitle}</h5>
                            <p className="card-text">{this.props.cardText}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card;