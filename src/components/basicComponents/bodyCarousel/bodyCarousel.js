import { NavLink } from "react-router-dom";
export function BodyCarousel() {
    return (
        <div className="body-header">
            <div class="wave-wrapper">
                <div class="wave"></div>
                <div class="wave"></div>
                <div class="wave"></div>
            </div>
            <div className="logo">
                <p className="text">
                    U
                    <span className="thunder">
                        <svg
                            className="lightning-container"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="-243.6 360 41.6 73.7"
                        >
                            <defs>
                                <path
                                    id="SVGID_1_"
                                    className="stroke"
                                    d="M-202.4 362.5c.6-1 .3-1.7-.5-2.2-.7-.4-1.6-.3-2.2.7l-30.9 38.2c-.1.1-.1.1-.1.2l-.1.1c-.2.3-.2.6-.1.8.1.6.8.8 1.7.9h7.6c1.5-.1 2.2.8 1.6 1.8l-17.3 28.5c-.6 1-.3 1.7.5 2.2.7.4 1.5.2 2.2-.7l30.9-38.2c.1-.1.1-.1.1-.2l.1-.1c.2-.3.2-.6.1-.8-.1-.6-.8-.8-1.7-.9l-7.5-.1c-1.5.1-2.2-.8-1.6-1.8l17.2-28.4"
                                />
                                <linearGradient id="MyGradient">
                                    <stop offset="8%" stop-color="#AD0C90" />
                                    <stop offset="95%" stop-color="#AD0C90" />
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
            </div>
            <div className="about-site">
                <h3 className="title">
                    Build responsive UI instantly with instant UI
                </h3>
                <p className="text">
                    Instantly design and customize responsive mobile first sites
                    with instant UI, get pre made responsive components to help
                    you design unique ui instantly. We have well written docs
                    and some pre made examples pages for better your
                    understanding.
                </p>
                <span className="btn-contain">
                    <NavLink className="gs-btn btn-light" to="/docs">
                        Get Started
                    </NavLink>
                    <a className="gs-btn btn-light-br">Download</a>
                </span>
                <br />
                <br />
            </div>
        </div>
    );
}