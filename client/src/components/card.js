import React from "react";
import "./style.css";


function Card(props) {
    return (
        <div className="card mb-3">
            <div className="row no-gutters">
                <div className="col-md-2">
                    <img className="card-img" src={props.src} alt={props.alt}></img>
                </div>
                <div className="col-md-10">
                    <div className="card-body">
                        <h5 className="card-title title">{props.title}</h5>
                        <p className="card-text mb-0 category"><small className="text-muted">{props.category}</small></p>
                        <p className="card-text author"><small className="text-muted">{props.author}</small></p>
                        <p className="card-text description">{props.description}</p>
                        <div className="cardFooter">{props.children}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
