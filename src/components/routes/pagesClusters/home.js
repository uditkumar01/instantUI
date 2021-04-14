import { NavBar, Home, SideBar } from "../../";
import { useState } from "react";
export function HomePage({
    data,
    theme,
    setTheme,
}) {
    const [lightNavColor, setLightNavColor] = useState(false);
    return (
        <>
            <NavBar
                lightNavColor={lightNavColor}
                theme={theme}
                setTheme={setTheme}
            />
            <SideBar
            />
            <Home
                lightNavColor={lightNavColor}
                setLightNavColor={setLightNavColor}
            />
        </>
    );
}
