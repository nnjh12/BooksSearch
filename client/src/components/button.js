import React from "react";

export function LinkButton(props) {
    return (
        <a {...props} className="btn btn-dark mr-2">{props.value}</a>
    );
}

export function Button(props) {
    return (
        <button type="button" className="btn btn-dark mr-2" {...props}>{props.value}</button>
    );
}