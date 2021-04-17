import { highLightKeywords } from "../../utils";
import parser from "html-react-parser";
export function CodeSnippetItem({ item }) {
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
