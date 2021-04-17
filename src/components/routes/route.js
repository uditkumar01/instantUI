import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pagesClusters/home";
import { DocPage } from "./pagesClusters/doc";
import { Error404 } from "./error/error404";

export function AllRoutes({ data, theme, setTheme }) {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <HomePage data={data} theme={theme} setTheme={setTheme} />
                }
            />
            <Route
                path="/docs"
                element={
                    <DocPage data={data} theme={theme} setTheme={setTheme} />
                }
            />
            <Route
                path="/*"
                element={
                    <Error404 />
                }
            />
        </Routes>
    );
}
