import React from 'react';
export default function Form(){
    const [Data, setData] = React.useState()
    return(
        <div>
            <form>
                Title : <input id='Title'/>
                Descripption : <input id='desc'/>
                Price : <input id='price'/>
            </form>
        </div>
    );
}