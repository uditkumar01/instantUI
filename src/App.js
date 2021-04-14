import "./App.css";
import { useEffect, useState } from "react";
import { getData } from "./components/data/getData";
import { AllRoutes } from "./components";

function App() {
    const [data, setData] = useState(() => getData());
    // true means light theme is active
    const [theme, setTheme] = useState(true);
    useEffect(() => {
        console.log(JSON.stringify(localStorage));
        if (localStorage.getItem("darkThemeIUI") !== null) {
            setTheme(() => false);
        }
    }, []);
    useEffect(() => {
        if (theme) {
            document.body.className = "";
            localStorage.removeItem("darkThemeIUI");
        } else {
            document.body.className = "body-dark";
            localStorage.setItem("darkThemeIUI", "true");
        }
    }, [theme]);
    return (
        <div className="App">
            <AllRoutes
                data={data}
                theme={theme}
                setTheme={setTheme}
            />
        </div>
    );
}

export default App;
