import React from "react";
import Person from "./Person";
export default function FriendList(props){
    const friends = props.FriendListNames;
    return(
        <div>
            <h3>List d'amis : </h3>
            <ul>
              {friends.map((item, index)=>(
                <li key={index}>
                    <Person name={item.name} age={item.age}/>
                </li>
              ))}
            </ul>
        </div>
    );
}