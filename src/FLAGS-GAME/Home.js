import React, { Fragment } from "react";
import './FlagsGame.css'
import { Link } from "react-router-dom";
export default function Home(){
    const flags = {flag : '🇩🇰'}
    return(
        <Fragment>
            <center>
            <div className="body">
                    <section className="section-game">
                        <span id="titleGame">Flags Game <svg style={{paddingBottom:'8px', width:'25px'}} xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-hexagon-fill" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8.5.134a1 1 0 0 0-1 0l-6 3.577a1 1 0 0 0-.5.866v6.846a1 1 0 0 0 .5.866l6 3.577a1 1 0 0 0 1 0l6-3.577a1 1 0 0 0 .5-.866V4.577a1 1 0 0 0-.5-.866L8.5.134z"/></svg></span>
                        <div className="links">
                            <Link to='/flagOfName'>
                                <button id="flag-name">Flag of Name </button>
                            </Link>
                            <Link to='/NameOfFlag'>
                                <button id="name-flag">Name of Flag</button>
                            </Link>
                        </div>
                        <div className="anotherLinks">
                            <Link to='/'>
                                <button class="anotherBottons">ِ<svg style={{fontWeight:'bold', paddingBottom:'3px',}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house-door" viewBox="0 0 16 16"><path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146ZM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5Z"/></svg>Capital cities</button>
                            </Link>
                            <Link to='/'>
                                <button class="anotherBottons">ِ<svg  style={{fontWeight:'bold', paddingBottom:'3px',}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-fill" viewBox="0 0 16 16"><path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/><path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z"/></svg>LANDMARKS</button>
                            </Link>
                            <Link to='/'>
                                <button class="anotherBottons"><svg  style={{fontWeight:'bold', paddingBottom:'3px',}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard2-fill" viewBox="0 0 16 16"><path d="M9.5 0a.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5.5.5 0 0 1 .5.5V2a.5.5 0 0 1-.5.5h-5A.5.5 0 0 1 5 2v-.5a.5.5 0 0 1 .5-.5.5.5 0 0 0 .5-.5.5.5 0 0 1 .5-.5h3Z"/><path d="M3.5 1h.585A1.498 1.498 0 0 0 4 1.5V2a1.5 1.5 0 0 0 1.5 1.5h5A1.5 1.5 0 0 0 12 2v-.5c0-.175-.03-.344-.085-.5h.585A1.5 1.5 0 0 1 14 2.5v12a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5v-12A1.5 1.5 0 0 1 3.5 1Z"/></svg>TOUCH AND LEARN</button>
                            </Link>
                            
                        </div>
                    </section>
                </div>
            </center>
        </Fragment>
    )
}