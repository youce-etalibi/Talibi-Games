import React, { useState } from 'react';
export default function Tp6() {
    const list = [
        { nom: "banane", type: "fruit", symbole: '🍌' },
        { nom: "orange", type: "fruit", symbole: '🍊' },
        { nom: "pomme", type: "fruit", symbole: '🍎' },
        { nom: "raisins", type: "fruit", symbole: '🍇' },
        { nom: "kiwi", type: "fruit", symbole: '🥝' },
        { nom: "tomate", type: "legume", symbole: '🍅' },
        { nom: "carotte", type: "legume", symbole: '🥕' },
        { nom: "pomme de terre", type: "legume", symbole: '🥔' },
        { nom: "navet", type: "legume", symbole: '🍈' },
        { nom: "poivron", type: "legume", symbole: '🥭' }
    ];
    const [data, setData] = useState('');
    function handleSubmit(e) {
        e.preventDefault();
    }
    const result = list.filter((item) => item.type === data);

    return (
        <center>
            <br />
            <div style={{ width: '400px', backgroundColor: 'yellowgreen', padding: '30px', borderRadius: '30px', color: 'white', fontFamily: 'verdana' }}>
                <h2 style={{ fontWeight: 'bold' }}>Composant App A</h2>
                <div style={{ width: '200px', backgroundColor: 'green', padding: '30px', borderRadius: '30px' }}>
                    <form onSubmit={handleSubmit} style={{fontFamily:"verdana", fontWeight:'bold'}}>
                        Entrer le mot cle de recherche:
                        <br />
                        <input
                            type='text'
                            placeholder='entre...'
                            onChange={(e) => setData(e.target.value)}
                            style={{
                                border: '2px solid white',
                                borderRadius: '20px',
                                padding: '5px',
                                color: 'green',
                                fontFamily: 'verdana',
                                fontWeight: '600',
                                width: '100px',
                                margin: '5px'
                            }}
                        />
                        <input
                            type='submit'
                            value='Search'
                            style={{
                                border: '2px solid white',
                                borderRadius: '20px',
                                padding: '5px',
                                color: 'white',
                                fontFamily: 'verdana',
                                fontWeight: '600',
                                backgroundColor: 'yellowgreen',
                                cursor: 'pointer'
                            }}
                        />
                    </form>
                </div>
                <br />
                <p style={{ color: 'green', fontFamily: 'verdana', fontWeight: 'bold', backgroundColor: 'white', width: 'fit-content', padding: '5px', borderRadius: '15px' }}>
                    Le Type: {data}
                </p>
                <table className='tableResult' style={{ color: 'white', border: '2px solid white', backgroundColor: 'green', padding: '15px', borderRadius: '10px' }}>
                    <tr>
                        <th>NOM</th>
                        <th>PICTURE</th>
                    </tr>
                    {result.map((item, index) => (
                        <tr key={index}>
                            <td>{item.nom}</td>
                            <td style={{ textAlign: 'center' }}>
                                <span style={{ backgroundColor: 'white', width: 'fit-content', borderRadius: '5px' }}>{item.symbole}</span>
                            </td>
                        </tr>
                    ))}
                </table>
            </div>
        </center>
    );
}
