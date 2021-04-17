import { highLightKeywords } from "../../utils";
import parser from "html-react-parser";
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