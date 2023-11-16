import React from "react";
import { list } from './dataSrc';
import ResultatSearch from "./ResultatList";
    let result = '';
export default function Search() {
    const [data, setData] = React.useState('');
    function handleSubmit(e) {
        e.preventDefault();
    }
    result = list.filter((item) => item.type === data);


    return (
        <center>
            <div style={{ width: '200px', backgroundColor: 'pink', color:'red', fontFamily:'verdana', fontWeight:'bold', padding: '30px', borderRadius: '30px' }}>
                <form onSubmit={handleSubmit} style={{fontFamily:"verdana", fontWeight:'bold'}}>
                    Entrer le mot cle de recherche:
                    <br />
                    <input
                        type='text'
                        placeholder='entre...'
                        onChange={(e) => setData(e.target.value)}
                        style={{
                            border: '2px solid red',
                            borderRadius: '20px',
                            padding: '5px',
                            color: 'red',
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
                            backgroundColor: 'red',
                            cursor: 'pointer'
                        }}
                    />
                </form>
                <p>Le Type : {data}</p>
            </div>
            <br />
            <ResultatSearch result={result}/>
        </center>
    );
}

// export { result };
