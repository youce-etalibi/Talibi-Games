import React from "react";
import { Link } from "react-router-dom";
export default function Layout() {
  return (
    <div style={{backgroundColor:'black', color:'green', padding:'15px', display:'flex', alignItems:'center'}}>
      <ul style={{listStyleType:'none', display:'flex', flexDirection:'row', gap:'20px', margin:'15px'}}>
        <li>
          <Link to="/" style={{color:'aqua', textDecoration:'none', textTransform:'uppercase', fontWeight:'bold'}}>Home</Link>
        </li>
        <li>
          <Link to="/contact" style={{color:'aqua', textDecoration:'none', textTransform:'uppercase', fontWeight:'bold'}}>Contact</Link>
        </li>
        <li>
          <Link to="/help" style={{color:'aqua', textDecoration:'none', textTransform:'uppercase', fontWeight:'bold'}}>Help</Link>
        </li>
      </ul>
    </div>
  );
}
