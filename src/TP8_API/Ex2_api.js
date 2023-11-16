import React, { useState, useEffect } from "react";

const AffichageDetailUsers = () => {
  const [id, setId] = useState("");
  const [dataUsers, setDataUsers] = useState([]);
  const [msgError, setMsgError] = useState("");

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => {
        setDataUsers(users);
      });
  }, []);

  const userFilter = dataUsers.filter((user) => user.id === parseInt(id));

  useEffect(() => {
    if (userFilter.length === 0 && id !== "") {
      setMsgError('Veuillez choisir un ID valide');
    } else {
      setMsgError('');
    }
  }, [id, userFilter]);

  return (
    <div>
      <div className="SearchBar">
        <br />
        <div className="InputContainer">
          <h2 className="Header">Détails de l'Utilisateur</h2>
          <label htmlFor="idInput">Entrez un ID : </label>
          <input
            className="IdInput"
            type="text"
            id="idInput"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </div>
        <p className="ErrorMsg">{msgError}</p>
      </div>
      <div className="Result">
        <table className="UserTable">
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
              <tr className="UserRow" key={user.id}>
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
};

export default AffichageDetailUsers;
