import "./App.css";
import {
    NavBar,
    HomeContent,
    SideBar,
    DocHomeContent,
} from "./components/index";
import { useEffect, useState } from "react";
import { getData } from "./components/data/getData";

function HomeRoute({ setCurrentRoute, currentRoute }) {
    const [lightNavColor, setLightNavColor] = useState(false);
    return (
        <>
            <NavBar
                lightNavColor={lightNavColor}
                setCurrentRoute={setCurrentRoute}
                currentRoute={currentRoute}
            />
            <SideBar setCurrentRoute={setCurrentRoute} />
            <HomeContent
                lightNavColor={lightNavColor}
                setLightNavColor={setLightNavColor}
                setCurrentRoute={setCurrentRoute}
                currentRoute={currentRoute}
            />
        </>
    );
}

function DocRoute({ data, setCurrentRoute, currentRoute }) {
    return (
        <>
            <DocHomeContent
                data={data}
                setCurrentRoute={setCurrentRoute}
                currentRoute={currentRoute}
            />
        </>
    );
}

function App() {
    const [currentRoute, setCurrentRoute] = useState("docs");
    const [data, setData] = useState(() => getData());
    return (
        <div className="App">
            {
                {
                    home: (
                        <HomeRoute
                            setCurrentRoute={setCurrentRoute}
                            currentRoute={currentRoute}
                        />
                    ),
                    docs: (
                        <DocRoute
                            data={data}
                            setCurrentRoute={setCurrentRoute}
                            currentRoute={currentRoute}
                        />
                    ),
                }[currentRoute]
            }
        </div>
    );
}

export default App;
