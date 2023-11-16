import React from 'react';
export default function ResultatSearch({ result }) {
  return (
    <div>
      <table className='tableResult' style={{ color: 'white', border: '2px solid white', backgroundColor: 'red', padding: '15px', borderRadius: '10px' }}>
        <thead>
          <tr>
            <th>NOM</th>
            <th>PICTURE</th>
          </tr>
        </thead>
        <tbody>
          {result.map((item, index) => (
            <tr key={index}>
              <td>{item.nom}</td>
              <td style={{ textAlign: 'center' }}>
                <span style={{ backgroundColor: 'white', width: 'fit-content', borderRadius: '5px' }}>{item.symbole}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
