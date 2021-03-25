import "../../../../components.css";
import React, { useState, useEffect } from "react";
import "./homeContent.css";
import { highLightKeywords, capitalize } from "../../../utils";
import "../../../../components.css";
import parser from "html-react-parser";
import uuid from "react-uuid";

function BodyHeader({setCurrentRoute}) {
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
                    <a className="gs-btn btn-light" onClick={()=>setCurrentRoute(()=>"docs")}>Get Started</a>
                    <a className="gs-btn btn-light-br">Download</a>
                </span>
                <br />
                <br />
            </div>
        </div>
    );
}
function CodeSnippetItem({ item }) {
    return (
        <>
            {item.subTitle ? (
                <h2 key={item.id} id={item.id}>
                    {item.subTitle}
                </h2>
            ) : (
                ""
            )}
            {item.codeOutput ? (
                <div className="code-output">{item.codeOutput}</div>
            ) : (
                ""
            )}

            {item.cardText}
            <br />
            <br />

            <div className={"code-snippet"}>
                <button
                    className="copy"
                    onClick={() =>
                        navigator.clipboard.writeText(item.codeSnippet.trim())
                    }
                ></button>
                <ul className="tabs">
                    <li className="item">
                        <button></button>
                    </li>
                    <li className="item">
                        <button></button>
                    </li>
                    <li className="item">
                        <button></button>
                    </li>
                </ul>

                <p className="code">
                    {parser(highLightKeywords(item.codeSnippet.trim()))}
                </p>
            </div>

            <br />
        </>
    );
}

export function CardWithCode({ data, activeComponent }) {
    return (
        <div className="ui-card ui-card-horizontal">
            <div className="text-section">
                <div className="ui-card-header">
                    <p className="text fs-14">{capitalize(activeComponent)}</p>
                </div>
                <div className="ui-card-body">
                    <p className="text">
                        {data?data.map((item) => {
                            // console.log(data.)
                            return <CodeSnippetItem item={item} />;
                        }):""}
                    </p>
                </div>
                <div className="ui-card-footer">
                    <center>
                        <p className="text text-muted fs-09">
                            instant v0.0.1 2021
                        </p>
                    </center>
                </div>
            </div>
        </div>
    );
}

export function SmCardWithCode({ data }) {
    return (
        <>
            <div
                className="ui-card ui-card-horizontal"
                style={{ border: "none" }}
            >
                <div className="text-section">
                    <div className="ui-card-header">
                        <p className="text fs-14">
                            {data.iconClass1 ? (
                                <i className={data.iconClass1}></i>
                            ) : (
                                ""
                            )}
                            {data.title}
                            {data.iconClass2 ? (
                                <i className={data.iconClass2}></i>
                            ) : (
                                ""
                            )}
                        </p>
                    </div>
                    <div className="ui-card-body">
                        <p className="text">
                            {data.content.map((item) => {
                                // console.log(data.)
                                return (
                                    <>
                                        {item.subTitle ? (
                                            <h2>{item.subTitle}</h2>
                                        ) : (
                                            ""
                                        )}
                                        {item.codeOutput ? (
                                            <div className="code-output">
                                                {item.codeOutput}
                                            </div>
                                        ) : (
                                            ""
                                        )}

                                        {item.cardText}
                                        <br />
                                        <br />

                                        <div className={"code-snippet"}>
                                            <button
                                                className="copy"
                                                onClick={() =>
                                                    navigator.clipboard.writeText(
                                                        item.codeSnippet.trim()
                                                    )
                                                }
                                            ></button>
                                            <ul className="tabs">
                                                <li className="item">
                                                    <button></button>
                                                </li>
                                                <li className="item">
                                                    <button></button>
                                                </li>
                                                <li className="item">
                                                    <button></button>
                                                </li>
                                            </ul>

                                            <p className="code">
                                                {parser(
                                                    highLightKeywords(
                                                        item.codeSnippet.trim()
                                                    )
                                                )}
                                            </p>
                                        </div>

                                        <br />
                                    </>
                                );
                            })}
                        </p>
                    </div>
                    <div className="ui-card-footer">
                        <center>
                            <p className="v-text text-muted fs-09">
                                instant v0.0.1 2021
                            </p>
                        </center>
                    </div>
                </div>
            </div>
        </>
    );
}
export function HomeContent({ lightNavColor, setLightNavColor, setCurrentRoute }) {
    const bodyContainerRef = React.createRef();
    const cardData = [
        {
            id: uuid(),
            title: "How to Use",
            content: [
                {
                    subTitle: "",
                    cardText:
                        "Copy this snippet and paste it in you html page's head tag :",
                    codeSnippet: `
            <link rel="stylesheet" href="https://fonts.googleapis.com/css"/>
            `,
                },
                {
                    subTitle: "",
                    cardText:
                        "Copy this snippet and paste it in your css file directly :",
                    codeSnippet: `
            @import("https://fonts.googleapis.com/css")
            `,
                },
                {
                    subTitle: "",
                    cardText: "For using js copy snippet link :",
                    codeSnippet: `
            <link rel="stylesheet" href="https://fonts.googleapis.com/js"/>
            `,
                },
            ],
            iconClass1: "fas fa-question-circle",
            iconClass2: "fas fa-question",
            footerText: "Read Docs for further info.",
        },
        {
            id: uuid(),
            title: "Need an example",
            content: [
                {
                    cardText:
                        "Copy this snippet and paste it in you html page's body tag :",
                    codeSnippet: `
<div class="card card-horizontal">
    <div class="card-pic">
        <span class="tag"></span>
    </div>
    <div class="text-section">
        <div class="card-header">
            <p class="text fs-14">Card title</p>
        </div>
        <div class="card-body">
            <p class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, vero ipsam minus eius perspiciatis magni inventore optio minima modi magnam fugit quia eaque sint similique placeat vel! Commodi, voluptas debitis!</p>
        </div>
        <div class="card-footer">
            <p class="text text-muted fs-09">Last updated 3 mins ago</p>
        </div>
    </div>
</div>
`,
                },
            ],
            iconClass1: "fas fa-lightbulb",
            iconClass2: "fas fa-question",
            footerText: "For further info read docs.",
        },
    ];
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
            <BodyHeader setCurrentRoute={setCurrentRoute}/>
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
