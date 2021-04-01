import React, { useEffect, useState } from "react";
import "./navbar.css";

export function NavBar({ lightNavColor, setCurrentRoute , currentRoute, theme, setTheme}) {
    
    // console.log("checking",currentRoute==="docs",currentRoute);
    return (
        <nav className={lightNavColor ? "ui-navbar ui-light-style" : "ui-navbar"}>
            <div className="ui-nav-brand">
                <p className="ui-text">
                    U
                    <span className="ui-thunder">
                        <svg
                            className="ui-lightning-container"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns="http://www.w3.org/1999/xlink"
                            viewBox="-243.6 360 41.6 73.7"
                        >
                            <defs>
                                <path
                                    id="SVGID_1_"
                                    className="stroke"
                                    d="M-202.4 362.5c.6-1 .3-1.7-.5-2.2-.7-.4-1.6-.3-2.2.7l-30.9 38.2c-.1.1-.1.1-.1.2l-.1.1c-.2.3-.2.6-.1.8.1.6.8.8 1.7.9h7.6c1.5-.1 2.2.8 1.6 1.8l-17.3 28.5c-.6 1-.3 1.7.5 2.2.7.4 1.5.2 2.2-.7l30.9-38.2c.1-.1.1-.1.1-.2l.1-.1c.2-.3.2-.6.1-.8-.1-.6-.8-.8-1.7-.9l-7.5-.1c-1.5.1-2.2-.8-1.6-1.8l17.2-28.4"
                                />
                                <linearGradient id="MyGradient">
                                    <stop offset="8%" stop-color="#95C8F8" />
                                    <stop offset="95%" stop-color="#B2FEFA" />
                                </linearGradient>
                            </defs>
                            <clipPath id="SVGID_2_">
                                <use xlink="#SVGID_1_" overflow="visible" />
                            </clipPath>
                            <path
                                id="path"
                                className="st0 lightning stroke"
                                d="M-202.9 360.3L-229 397h13l-26.2 36.5"
                            />
                        </svg>
                    </span>
                </p>
                <p>instant UI</p>
            </div>
            <ul className="ui-list">
                <li className={currentRoute==="home"?"ui-list-item active":"ui-list-item"} onClick={()=>{setCurrentRoute(()=>"home")}}>
                    Home
                    <hr />
                </li>
                <li className={currentRoute==="docs"?"ui-list-item active":"ui-list-item"} onClick={()=>{setCurrentRoute(()=>"docs")}}>
                    Docs
                    <hr />
                </li>
                <li className={currentRoute==="examples"?"ui-list-item active":"ui-list-item"}>
                    Examples
                    <hr />
                </li>
            </ul>
            <ul className="ui-list">
                {/* <li className="ui-list-item search-here"><input type="text" placeholder="search"/></li> */}
                <li className="ui-list-item ui-btn ui-btn-light" onClick={()=>{setCurrentRoute(()=>"docs")}}>Get Started</li>
                <i
                    class={
                        theme ? "fas fa-moon theme-btn" : "fas fa-sun theme-btn"
                    }
                    onClick={() => {
                        setTheme((theme) => !theme);
                    }}
                ></i>
            </ul>
        </nav>
    );
}
