import React from "react";
export default function Section(props){
    return(
        <center>
        <div style={{display:'grid', placeItems:'center', alignItems:'center', width:'98%', height:'470px', backgroundColor:'aqua', border:'2px solid black', outline:'10px solid aqua', borderRadius:'9px', boxShadow:'aqua 0px 0px 80px 10px'}}>
            <h3 style={{color:'black', fontFamily:'verdana', fontWeight:'bold', textTransform:'uppercase'}}>{props.content}</h3>
        </div>
        </center>
    )
}