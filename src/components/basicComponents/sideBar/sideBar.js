import "./sideBar.css";
import React, { useState } from "react";
import { capitalize } from "../../utils";
import { NavLink } from "react-router-dom";
export function SideBar({ dataKeysList, activeComponent, setActiveComponent }) {
    const [list1, setList1] = useState(false);
    // const [list2, setList2] = useState(false);
    const [sideBarDisplay, setSideBarDisplay] = useState(false);

    console.log("menu re-render", sideBarDisplay);
    return (
        <>
            <button
                className="floating-menu btn"
                onClick={() => {
                    setSideBarDisplay(!sideBarDisplay);
                }}
            >
                <i
                    className={
                        !sideBarDisplay
                            ? "fas fa-chevron-right"
                            : "fas fa-chevron-left"
                    }
                ></i>
            </button>
            <div
                className={sideBarDisplay ? "side-bar open" : "side-bar close"}
            >
                <div className="nav-brand">
                    <p className="text">
                        <button
                            className="btn btn-light"
                            onClick={() => {
                                setSideBarDisplay(!sideBarDisplay);
                            }}
                        >
                            <i className="fas fa-chevron-left"></i>
                        </button>
                    </p>
                    instant UI
                </div>
                <ul className="list">
                    <li className={"list-item"}>
                        <NavLink to="/">
                            <button>Home</button>
                        </NavLink>
                    </li>
                    <li className={"list-item drop"}>
                        {dataKeysList ? (
                            <button
                                onClick={() =>
                                    dataKeysList ? setList1(!list1) : ""
                                }
                            >
                                Docs
                                {dataKeysList ? (
                                    <a
                                        className={
                                            list1
                                                ? "fas fa-chevron-up down"
                                                : "fas fa-chevron-down down"
                                        }
                                        onClick={() => {
                                            setList1(!list1);
                                        }}
                                    ></a>
                                ) : (
                                    ""
                                )}
                            </button>
                        ) : (
                            <NavLink to="/docs">
                                <button>Docs</button>
                            </NavLink>
                        )}

                        <ul
                            className="list"
                            style={
                                list1
                                    ? { display: "block" }
                                    : { display: "none" }
                            }
                        >
                            {dataKeysList
                                ? dataKeysList.map((componentName) => {
                                        return (
                                            <li
                                                className={
                                                    activeComponent ===
                                                    componentName
                                                        ? "list-item active"
                                                        : "list-item"
                                                }
                                            >
                                                <button
                                                    onClick={() =>
                                                        setActiveComponent(
                                                            componentName
                                                        )
                                                    }
                                                >
                                                    {capitalize(componentName)}
                                                </button>
                                            </li>
                                        );
                                    })
                                : ""}
                        </ul>
                    </li>
                    <li className="list-item">
                        <button>Examples</button>
                    </li>
                </ul>
                <ul className="list">
                    {/* <li className="list-item search-here"><input type="text" placeholder="search"/></li> */}
                </ul>
            </div>
        </>
    );
}
