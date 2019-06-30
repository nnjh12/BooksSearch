import React from "react";

function Input(props) {
    return (
        <form>
            <div className="form-group">
                <label>{props.label}</label>
                <input type="text" className="form-control" name="search" {...props}></input>
            </div>
        </form>
    );
}

export default Input;
