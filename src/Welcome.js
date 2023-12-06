import React from "react";


function Welcome(props){
    return (
        <div>
            <br/>
            <b>
                <a>Привет {props.name}!!!</a>
            </b>
        </div>
    )
}

export default Welcome