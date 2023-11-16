import React, { useState } from "react";
import { data } from "./data";
import { postData } from "./postData";

export default function AffichagePostUsers() {
  const [users, setUsers] = useState(data);
  const [posts, setPosts] = useState(postData);
  const [userID, setUserID] = useState(null); 

  return (
    <div style={{ color: "white", fontFamily: "verdana" }}>
      <br />
      <h2 style={{ color: "green", fontWeight: "bold" }}>Nombre Users : {data.length}</h2>
      <br />
      <div className="users" style={{ backgroundColor: "green", padding: "20px", borderRadius: "15px", width: "fit-content" }}>
        <table>
          {users.map((user) => (
            <div className="child" key={user.id} style={{ border: "2px solid white", borderRadius: "10px", margin: "10px", padding: "10px" }}>
              <tr>
                <td>
                  <span style={{ color: "yellow" }}>name :</span> {user.name}
                </td>
              </tr>
              <tr>
                <td>
                  <span style={{ color: "yellow" }}>email :</span> {user.email}
                </td>
              </tr>
              <tr>
                <td>
                  <span style={{ color: "yellow" }}>ville :</span> {user.address.city} <span style={{ color: "yellow" }}>rue :</span> {user.address.street}
                </td>
              </tr>
              <button
                style={{ backgroundColor: "white", color: "green", fontFamily: "verdana", fontWeight: "bold", boxShadow: "yellow 3px 3px", borderRadius: "8px" }}
                onClick={() => setUserID(user.id)}>
                Details Post
              </button>
              <div className="posts">
                {userID === user.id && (posts.filter((post) => post.userId === user.id).map((filteredPost) => (
                      <div key={filteredPost.id} style={{backgroundColor:'yellow', outline:'5px solid yellow', border:'2px solid black', padding:'10px', margin:'14px', borderRadius:'10px', width:'350px'}}>
                        <h4 style={{color:'green', fontWeight:'bold', textDecoration:'underline'}}><span> - </span>{filteredPost.title}</h4>
                        <p style={{paddingLeft:'10px', color:'black'}}>{filteredPost.body}</p>
                      </div>
                    ))
                )}
              </div>
            </div>
          ))}
        </table>
      </div>
      <br/>
    </div>
  );
}
