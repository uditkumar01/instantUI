import { capitalize } from "../../utils";
import { CodeSnippetItem } from "./CodeSnippetItem";
export function CardWithCode({ data, activeComponent }) {
    return (
        <div className="ui-card ui-card-horizontal">
            <div className="text-section">
                <div className="ui-card-header">
                    <p className="text fs-14">{capitalize(activeComponent)}</p>
                </div>
                <div className="ui-card-body">
                    <p className="text">
                        {data
                                ? data.map((item) => {
                                    return <CodeSnippetItem item={item} />;
                                })
                                : ""}
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
