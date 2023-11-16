import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { data } from "./data";
export default function Detail(){
    const id = useParams().id
    const name = useParams().name
    const email = useParams().email
    const age = useParams().age
    const password = useParams().password
    const image = useParams().image
    const profil = data.find((i)=>(i.id==id))
    // console.log(profil)
    const [cover, setCover] = useState(profil.cover)
    console.log(cover)
    // const back = "<-";
    const home = useNavigate('');
    return(
        <div style={{display:'flex', justifyContent:'center', color:'white'}}>
        <div style={{width:'800px', backgroundColor:'black', borderRadius:'10px'}}>
            <div className="Cover" style={{width:'97%', position:'relative', bottom:'0px'}}>
            <button style={{backgroundColor:'white', width:'30px', height:'30px', fontWeight:'bold', borderRadius:'50%', position:'relative', top:'24px', left :'24px'}} onClick={()=>home('/')}>&#x2039;</button>
                <img src={`/Covers/${cover}`} alt="Profile Cover" style={{objectFit:'cover', width:'100%', margin:'12px', borderRadius:'10px', height:"190px", marginTop:'-15px'}} />
            </div>
                <Link to={`showPic.js/${id}`}>
                    <img src={`/Profiles/${image}`} style={{width:'180px', objectFit:'cover', height:'180px', borderRadius:'50%', border:'4px solid white', boxShadow:'0px 0px 100px 10px white', position:'relative', bottom:'120px', left:'40px'}}/>
                </Link>
                <h6 style={{color:'white', marginTop:'-10px',marginLeft:"15px", color:'white', backgroundColor:'black', border:'2px solid white', borderRadius:'25px', padding:'5px', width:'fit-content', position:'relative', bottom:'165px', left:'610px'}}>{profil.formation}</h6>
            <div className="details" style={{position:'relative', backgroundColor:'white', padding:'10px',  borderRadius:'10px', width:'87%', bottom:'100px', left:'50px'}}>
                <h1 style={{textTransform:'capitalize', color:'black', marginBottom:'15px', fontWeight:'bold'}}>{name}</h1>
                <h6 style={{color:'black', marginTop:'-10px',marginLeft:"15px", color:'white', backgroundColor:'black', borderRadius:'25px', padding:'5px', width:'fit-content'}}>{profil.headline}</h6>
                <p style={{color:'black', marginTop:'-5px', marginLeft:"15px", fontSize:'18px'}}>{profil.hashtags}</p>
                <h6 style={{color:'black', marginTop:'-5px', textTransform:'capitalize',marginLeft:"20px", textDecoration:'underline'}}>{profil.localisation}</h6>
                <div style={{backgroundColor:'black', color:'white', width:'90%', margin:'auto', padding:'10px', borderRadius:'10px'}}>
                <h5 style={{ textDecoration:'underline dotted', paddingLeft:'3px'}}>Infos</h5>
                <p style={{margin:'4px'}}>-{profil.desciption}</p>
                <h6 style={{marginLeft:"20px", textDecoration:'underline'}}>{profil.email}</h6>
                <h6 style={{marginLeft:"20px", textDecoration:'underline'}}>{profil.nbr}</h6>
                </div>
            </div>
        </div>
        </div>
    );
}