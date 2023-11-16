import React from "react";
export default function Person(props){
    return(
        <h2>Je m'appelle {props.name} et j'ai {props.age} ans</h2>
    )
}