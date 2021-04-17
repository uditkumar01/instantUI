import { NavLink } from "react-router-dom";
import { capitalize } from "../../utils";
import { useState } from "react";

export function SideBarStatic({ dataKeysList, activeComponent, setActiveComponent }) {
    const [list1, setList1] = useState(false);
    return (
        <div className={"side-bar open sidebar-static"}>
            <ul className="list">
                <br />
                <br />
                <br />
                <br />
                <li className={"list-item"}>
                    <NavLink to="/">
                        <button>Home</button>
                    </NavLink>
                </li>
                <li className={"list-item drop"}>
                    <button
                        onClick={() => {
                            setList1(!list1);
                        }}
                    >
                        Docs
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
                    </button>

                    <ul
                        className="list"
                        style={
                            list1 ? { display: "block" } : { display: "none" }
                        }
                    >
                        {dataKeysList.map((componentName) => {
                            return (
                                <li
                                    className={
                                        activeComponent === componentName
                                            ? "list-item active"
                                            : "list-item"
                                    }
                                >
                                    <button
                                        onClick={() =>
                                            setActiveComponent(componentName)
                                        }
                                    >
                                        {capitalize(componentName)}
                                    </button>
                                </li>
                            );
                        })}
                    </ul>
                </li>
                <li className="list-item">
                    <button>Examples</button>
                </li>
            </ul>
        </div>
    );
}