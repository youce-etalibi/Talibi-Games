import React from "react";
export default function Example() {
    const [count, setCount] = React.useState(0);
    React.useEffect(() => {
    document.title = `Count: ${count}`;}, [count]);
    return (
    <div>
        <br/>
    <h3 style={{color:'blue'}}>{count}</h3>
    <button className="btn btn-outline-primary" onClick={() => setCount(count + 1)}>
    Increment
    </button>
    </div> );}