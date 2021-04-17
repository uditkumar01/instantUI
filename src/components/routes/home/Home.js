import React from "react";
import "./home.css";
import "../../../components.css";
import { v4 as uuid } from "uuid";
import { cardData } from "../../data/cardData";
import { BodyCarousel } from "../../basicComponents/bodyCarousel/bodyCarousel";
import { SmCardWithCode } from "../../basicComponents/cards/HomeSmCard";


export function Home({ lightNavColor, setLightNavColor }) {
    const bodyContainerRef = React.createRef();
    function navColorHandler() {
        const ht = bodyContainerRef.current.scrollTop;

        if (ht > 20 && !lightNavColor) {
            setLightNavColor(true);
        } else if (ht <= 20 && lightNavColor) {
            setLightNavColor(false);
        }
    }
    return (
        <div
            ref={bodyContainerRef}
            className="body-container"
            onScroll={navColorHandler}
        >
            <BodyCarousel />
            <div className="body-content">
                <div className="home-card-container">
                    {cardData.map((data) => {
                        return <SmCardWithCode key={uuid()} data={data} />;
                    })}
                </div>
                <br />
                <br />
                <br />
                <br />
                <br />
            </div>
        </div>
    );
}
