import { Doc } from "../../";
export function DocPage({ data, theme, setTheme }) {
    return (
        <>
            <Doc
                data={data}
                theme={theme}
                setTheme={setTheme}
            />
        </>
    );
}