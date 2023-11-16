import React, { useState, Fragment } from "react";
import { Posts, Users } from "./data";

export default function App() {
  const [user, setUser] = useState(Users);
  const [post, setPost] = useState(Posts);

  return (
    <Fragment>
        <div style={{width:'500px'}}>
            {user.map((item, index) => (
                <div style={{backgroundColor:'#003296', padding:'20px', margin:'10px', borderRadius:'10px'}}>
                <div className="User" style={{display:'flex'}}>
                    <img src={`Profiles/${item.profil}`} style={{
                        width: "50px",
                        height: "50px",
                        objectFit: "cover",
                        borderRadius: "50%"}}/>
                    <div style={{display:'flex', flexDirection:'column', lineHeight:'-3px', marginLeft:'10px', fontFamily:'verdana'}}>
                    <h5 style={{ color: "white", fontWeight:'bold' }}>{item.fullName}</h5>
                    <p style={{ color: "white", marginTop: "-10px" }}>{item.userName}</p>
                    </div>
                </div>
                <div className="Post" style={{color:'white', backgroundColor:'#1279d3', padding:'10px', borderRadius:'10px'}}>
                    {post.filter((e)=>e.userId === item.id).map((item2, index2) => (
                        <div key={index2} style={{margin:'3px'}}>
                            <h3>{item2.title}</h3>
                            <p style={{margin:'10px', marginTop:'-8px'}}>{item2.body}</p>
                            <center>
                                <img src={`Pic_Posts/${item2.pictur}`} style={{width:'400px', borderRadius:'10px'}}/>
                            </center>
                        </div>
                    ))}
                    <br/>
                </div>
                </div>
            ))}
        </div>
    </Fragment>
  );
}
