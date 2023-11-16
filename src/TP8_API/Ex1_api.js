import React, { useState, useEffect } from "react";

export default function AffichageEx1() {
  const [userData, setUserData] = useState([]); 
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setUserData(users)); 
  }, []);

  return (
    <div style={{ width: '500px' }}>
      <br />
      <h3 style={{ color: 'green', fontWeight: 'bold' }}>Les informations</h3>
      <br />
      <table border='1' className="table table-bordered bg-success" style={{ color: 'white', borderRadius: '20px' }}>
        <thead>
          <tr>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>VILLE</th>
            <th>RUE</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.address.city}</td>
              <td>{user.address.street}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
