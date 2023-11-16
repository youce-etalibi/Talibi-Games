import React, { useState, useEffect } from "react";
import {data} from './data';
export default function AffichageDetailUsers() {
  const [id, setId] = useState("");
  const [dataUsers, setDataUsers] = useState([]);
  const [msgError, setMsgError] = useState("");

  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //     .then((response) => response.json())
  //     .then((users) => {
  //       setDataUsers(users);
  //     })}, []);

  const userFilter = data.filter((user) => user.id == id);
  useEffect(() => {
    if (userFilter.length === 0 && id !== "") {
      setMsgError('Svp choisir un ID Valide');
    } else {
      setMsgError('');
    }
  }, [id, userFilter]);

  return (
    <div>
      <div className="SearchBar" style={{color:'white', fontFamily:'verdana'}}>
        <br/>
        <div style={{backgroundColor:'green', padding:'20px', borderRadius:'15px', width:'fit-content'}}>
        <br />
        <h2 style={{fontWeight:"bold"}}>Details Utilisateur</h2>
        <label>Donnez ID : </label>
        <input
        style={{
          backgroundColor:'aliceblue',
          borderRadius:'8px',
          padding:'6px',
          fontWeight:'bold',
          color:'green',
          outline:'1px solid yellow'
        }}
          className="form-check"
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
          key="idInput"
          />
          </div>
        <p>{msgError}</p>
      </div>
      <div className="Result">
        <table className="table table-bordered bg-success" style={{color:'white', width:'500px', borderRadius:'10px'}} >
          <thead>
            <tr>
              <th>NOM</th>
              <th>EMAIL</th>
              <th>VILLE</th>
              <th>RUE</th>
            </tr>
          </thead>
        <tbody>
        {userFilter.map((user) => (
          <tr className="child" key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.address.city}</td>
            <td>{user.address.street}</td>
          </tr>
        ))}
        </tbody>
        </table>
      </div>
    </div>
  );
}