import React, {useState} from "react";
export default function Counter(){
    const [nbr, setNbr] = useState(0);
    React.useEffect(function(){
        document.title = `Counter : ${nbr}`
    }, [nbr])
    return(
        <center>
            <br/>
        <div style={{color:'white', fontFamily:'verdana', backgroundColor:'black', width:'fit-content', padding:'40px', borderRadius:'15px'}}>
            <h3>{nbr}</h3>
            <input type="button" value='++1' onClick={function(){setNbr(nbr+1)}} style={{color : 'black', backgroundColor:'white', fontFamily:'verdana', fontWeight:'bold', width:'60px', borderRadius:"20px"}}/>
            <input type="button" value='- -1' onClick={e => setNbr(nbr-1)} style={{color : 'black', backgroundColor:'white', fontFamily:'verdana', fontWeight:'bold', width:'60px', borderRadius:"20px"}}/>
        </div>
        </center>
    )};