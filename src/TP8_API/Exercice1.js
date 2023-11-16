import React from "react";
import {data} from "./data";
export default function AffichageEx1(){
    const[UserData, setUserData] = React.useState(data);
    // React.useEffect(()=>{
    //     fetch('https://jsonplaceholder.typicode.com/users/3')
    //     .then((response)=>{console.log(response);return response.json()})
    //     .then((users)=>{console.log(users); setUserData(users)})
    // }, []);
    return(  
        <div style={{width:'500px'}}>
            <br/>
            <h3 style={{color:'blue', fontWeight:'bold'}}>Les information</h3>
            <br/>
            

        <table border='1' className="table table-bordered bg-primary" style={{color:'white', borderRadius:'20px'}}>
        <thead>
            <tr>
                    <th>NAME</th>
                    <th>EMAIL</th>
                    <th>VILLE</th>
                    <th>RUE</th>
            </tr>
                </thead>
            <tbody>

            {UserData.map(user =>{
                return(  
                    <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.address.city}</td>
                    <td>{user.address.street}</td>
                    </tr>
                        )   
                    })}
                    </tbody>
                    </table>
        </div>
    )
}