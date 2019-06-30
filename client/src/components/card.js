import React from "react";
import { LinkButton, SaveButton } from "../components/button"

function Card(props) {
    return (
        <div className="card mb-3">
            <div className="row no-gutters">
                <div className="col-md-4">
                    <img className="card-img" src={props.src} style={props.style}></img>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title title">{props.title}</h5>
                        <p className="card-text mb-0 category"><small className="text-muted">{props.category}</small></p>
                        <p className="card-text author"><small className="text-muted">{props.author}</small></p>
                        <p className="card-text description">{props.description}</p>
                        <div>{props.children}</div>
                        {/* <LinkButton
                            href={props.href}
                            target="_blank"
                            value="view"
                            id="linkButton" />
                        <SaveButton
                            value="save"
                            onClick={props.onClick}
                            id="saveButton"
                            /> */}

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
