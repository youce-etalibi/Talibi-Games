import React from "react";
export default function Footer(){
    return(
        <div style={{backgroundColor:'black', color:'aqua', padding:'20px'}}>
            <center>
                <h5>Copyright{new Date().getFullYear()}</h5>
            </center>
        </div>
    )
}