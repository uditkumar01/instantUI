import "./error404.css";
import { NavLink } from "react-router-dom";
export function Error404() {
    return (
        <div className="error-container">
            <img src="https://purepng.com/public/uploads/large/astronauts-2ue.png" />
            <img src="https://purepng.com/public/uploads/large/purepng.com-clipart-rocketrocketflyingfire-401520865321rhvws.png" />
            <div className="error">
                <p>404</p>
                <span>
                    <NavLink to="/">
                        <button className="btn btn-lg primary br-3">
                            Return Home
                        </button>
                    </NavLink>
                </span>
            </div>
        </div>
    );
}
