import "./App.css";
import {
    NavBar,
    HomeContent,
    SideBar,
    DocHomeContent,
} from "./components/index";
import { useEffect, useState } from "react";
import { getData } from "./components/data/getData";

function HomeRoute({ setCurrentRoute, currentRoute, data, theme, setTheme }) {
    const [lightNavColor, setLightNavColor] = useState(false);
    return (
        <>
            <NavBar
                lightNavColor={lightNavColor}
                setCurrentRoute={setCurrentRoute}
                currentRoute={currentRoute}
                theme={theme}
                setTheme={setTheme}
            />
            <SideBar
                setCurrentRoute={setCurrentRoute}
                currentRoute={currentRoute}
            />
            <HomeContent
                lightNavColor={lightNavColor}
                setLightNavColor={setLightNavColor}
                setCurrentRoute={setCurrentRoute}
            />
        </>
    );
}

function DocRoute({ data, setCurrentRoute, currentRoute, theme, setTheme }) {
    return (
        <>
            <DocHomeContent
                data={data}
                setCurrentRoute={setCurrentRoute}
                currentRoute={currentRoute}
                theme={theme}
                setTheme={setTheme}
            />
        </>
    );
}

function App() {
    const [currentRoute, setCurrentRoute] = useState("home");
    const [data, setData] = useState(() => getData());
    // true means light theme is active
    const [theme, setTheme] = useState(true);
    useEffect(() => {
        if (theme) {
            document.body.className = "";
        } else {
            document.body.className = "body-dark";
        }
    }, [theme]);
    return (
        <div className="App">
            {
                {
                    home: (
                        <HomeRoute
                            setCurrentRoute={setCurrentRoute}
                            currentRoute={currentRoute}
                            data={data}
                            theme={theme}
                            setTheme={setTheme}
                        />
                    ),
                    docs: (
                        <DocRoute
                            data={data}
                            setCurrentRoute={setCurrentRoute}
                            currentRoute={currentRoute}
                            theme={theme}
                            setTheme={setTheme}
                        />
                    ),
                }[currentRoute]
            }
        </div>
    );
}

export default App;
