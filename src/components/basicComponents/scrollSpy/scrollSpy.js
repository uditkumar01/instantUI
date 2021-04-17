import { useState, useEffect } from "react";
import { ScrollSpyItem } from "./scrollSpyItem";
export function ScrollSpy({ scrollSpyData }) {
    const [activeSec, setActiveSec] = useState(scrollSpyData[0].id);
    useEffect(() => {
        setActiveSec(scrollSpyData[0].id);
    }, [scrollSpyData[0].id]);
    // console.log(scrollSpyData,"focus spy");
    return (
        <div className={"side-bar open sidebar-static"}>
            <ul className="list">
                <br />
                <li className="list-item active">
                    <a>
                        <br />
                        <br />
                    </a>
                </li>
                <li className="list-item active">
                    <a className="title">Contents</a>
                </li>

                {scrollSpyData.map(({ id, subTitle }) => {
                    return (
                        <ScrollSpyItem
                            key={id}
                            id={id}
                            subTitle={subTitle}
                            activeSec={activeSec}
                            setActiveSec={setActiveSec}
                        />
                    );
                })}
            </ul>
        </div>
    );
}
