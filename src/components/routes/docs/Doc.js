import "./doc.css";
import { CardWithCode, SideBar } from "../../index";
import React, { useState, useEffect } from "react";
import "../../../components.css";
import { NavBar } from "../../basicComponents/navbar/navbar";
import { SideBarStatic } from "../../basicComponents/sideBar/sidebarStatic";
import { ScrollSpy } from "../../basicComponents/scrollSpy/scrollSpy";

export function Doc({ data, theme, setTheme }) {
    const [staticSideBar, setStaticSidebar] = useState(true);
    const dataKeysList = Object.keys(data);
    const [activeComponent, setActiveComponent] = useState(dataKeysList[0]);

    function handleResize() {
        setStaticSidebar((staticSideBar) => {
            if (window.innerWidth < 1400) {
                return false;
            }
            return true;
        });
    }

    useEffect(() => {
        handleResize();
    });
    
    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return (_) => {
            window.removeEventListener("resize", handleResize);
        };
    });
    return (
        <>
            <div className="nav-fixed">
                <NavBar
                    lightNavColor={true}
                    theme={theme}
                    setTheme={setTheme}
                />
            </div>
            <div className="doc-container">
                {!staticSideBar ? (
                    <SideBar
                        dataKeysList={dataKeysList}
                        activeComponent={activeComponent}
                        setActiveComponent={setActiveComponent}
                    />
                ) : (
                    <div className="doc-left-side">
                        <SideBarStatic
                            dataKeysList={dataKeysList}
                            activeComponent={activeComponent}
                            setActiveComponent={setActiveComponent}
                        />
                    </div>
                )}
                <div className="doc-body">
                    <CardWithCode
                        data={data[activeComponent]}
                        activeComponent={activeComponent}
                    />
                    <br />
                    <br />
                    <br />
                </div>
                <div className="doc-right-side">
                    <ScrollSpy scrollSpyData={data[activeComponent]} />
                </div>
            </div>
        </>
    );
}
