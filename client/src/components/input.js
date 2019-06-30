import React from "react";

function Input(props) {
    return (
        <form>
            <div class="form-group">
                <label>{props.label}</label>
                <input type="text" class="form-control" name="search" {...props}></input>
            </div>
        </form>
    );
}

export default Input;
