import React from "react";

export function LinkButton(props) {
    return (
        <a {...props} className="btn btn-dark">{props.value}</a>
    );
}

export function Button(props) {
    return (
        <button type="button" className="btn btn-dark" {...props}>{props.value}</button>
    );
}