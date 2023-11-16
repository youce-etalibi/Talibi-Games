import React from "react";
export default function Accueil(props){
    return(
        <div style={{width:'400px', height:'200px', backgroundColor:'aliceblue', border : '2px solid blue', display: 'flex', justifyContent:'center', alignItems:'center',paddingTop:'-20px', color:'blue', fontFamily:'verdana', borderRadius:'15px'}}>
            <center>
                <h4>Accueil</h4>
                <h5>Bonjour, {props.name}</h5>
            </center>
        </div>
    )
}