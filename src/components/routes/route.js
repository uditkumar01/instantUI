import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pagesClusters/home";
import { DocPage } from "./pagesClusters/doc";

export function AllRoutes({
    data,
    theme,
    setTheme,
}) {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <HomePage
                        data={data}
                        theme={theme}
                        setTheme={setTheme}
                    />
                }
            />
            <Route
                path="/docs"
                element={
                    <DocPage
                        data={data}
                        theme={theme}
                        setTheme={setTheme}
                    />
                }
            />
        </Routes>
    );
}
