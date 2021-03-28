import uuid from "react-uuid";
export function getData() {
    const data = {
        navbars: [
            {
                id: uuid(),
                subTitle: "NavBar v0.0.1",
                codeOutput: (
                    <>
                        <nav className="navbar nav-iv primary mid-animation">
                            <div className="nav-brand">
                                <p>NAVBAR</p>
                                <button id="ham-icon">&#8801;</button>
                            </div>
                            <div className="links-container">
                                <ul className="links" style={{}}>
                                    <li className="link">
                                        Home
                                        <hr />
                                    </li>
                                    <li className="link active">
                                        About
                                        <hr />
                                    </li>
                                    <li className="link">
                                        Contact
                                        <hr />
                                    </li>
                                </ul>
                                <ul className="links" style={{}}>
                                    <li className="link">
                                        <i className="fas fa-search icon"></i>
                                    </li>
                                    <li className="link">
                                        <i className="fas fa-inbox icon"></i>
                                    </li>
                                    <li className="link avatar-link">
                                        <div
                                            className="avatar icon"
                                            style={{
                                                backgroundImage:
                                                    "url(https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)",
                                                width: "42px",
                                                height: "42px",
                                                position: "relative",
                                            }}
                                        ></div>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </>
                ),
                cardText:
                    "Copy this snippet and paste it in your html page's body tag:",
                codeSnippet: `
<nav class="navbar nav-iv primary mid-animation">
    <div class="nav-brand">
        <p>NAVBAR</p>
        <button id="ham-icon" onclick="hamClickHandler();">
            &#8801;
        </button>
    </div>
    <div class="links-container">
        <ul class="links" style="">
            <li class="link">
                Home
                <hr />
            </li>
            <li class="link active">
                About
                <hr />
            </li>
            <li class="link">
                Contact
                <hr />
            </li>
        </ul>
        <ul class="links" style="">
            <li class="link"><i class="fas fa-search icon"></i></li>
            <li class="link"><i class="fas fa-inbox icon"></i></li>
            <li class="link avatar-link">
                <div
                    class="avatar icon"
                    style="
                        background-image: url(https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260);
                        width: 42px;
                        height: 42px;
                        position: relative;
                    "
                ></div>
            </li>
        </ul>
    </div>
</nav>
        `,
            },

            {
                id: uuid(),
                subTitle: "NavBar v0.0.2",
                codeOutput: (
                    <>
                        <nav className="navbar nav-iv secondary mid-animation">
                            <div className="nav-brand">
                                <p>NAVBAR</p>
                                <button id="ham-icon">&#8801;</button>
                            </div>
                            <div className="links-container single-ul">
                                <ul className="links" style={{}}>
                                    <li className="link">
                                        Home
                                        <hr />
                                    </li>
                                    <li className="link active">
                                        About
                                        <hr />
                                    </li>
                                    <li className="link">
                                        Contact
                                        <hr />
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </>
                ),
                cardText:
                    "Copy this snippet and paste it in your html page's body tag:",
                codeSnippet: `
<nav class="navbar nav-iv secondary mid-animation">
    <div class="nav-brand">
        <p>NAVBAR</p>
        <button id="ham-icon" onclick="hamClickHandler();">
            &#8801;
        </button>
    </div>
    <div class="links-container single-ul">
        <ul class="links" style="">
            <li class="link">
                Home
                <hr />
            </li>
            <li class="link active">
                About
                <hr />
            </li>
            <li class="link">
                Contact
                <hr />
            </li>
        </ul>
    </div>
</nav>
        `,
            },

            {
                id: uuid(),
                subTitle: "NavBar v0.0.3",
                codeOutput: (
                    <>
                        <nav className="navbar nav-iv success mid-animation">
                            <div className="nav-brand">
                                <p>NAVBAR</p>
                                <button id="ham-icon">&#8801;</button>
                            </div>
                            <div className="links-container">
                                <ul className="links" style={{}}>
                                    <li className="link">
                                        Home
                                        <hr />
                                    </li>
                                    <li className="link active">
                                        About
                                        <hr />
                                    </li>
                                    <li className="link">
                                        Contact
                                        <hr />
                                    </li>
                                </ul>
                                <ul className="links" style={{}}>
                                    <li className="link">
                                        <i className="fas fa-search icon"></i>
                                        <hr />
                                    </li>
                                    <li className="link active">
                                        <i className="fas fa-inbox icon"></i>
                                        <hr />
                                    </li>
                                    <li className="link">
                                        <i className="fas fa-bell icon">
                                            <span className="badge badge-xsm danger top right br-3 pl-3 pr-3 pt-1 pb-1">
                                                9+
                                            </span>
                                        </i>
                                        <hr />
                                    </li>
                                    <li className="link avatar-link">
                                        <div
                                            className="avatar icon"
                                            style={{
                                                backgroundImage:
                                                    "url(https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)",
                                                width: "42px",
                                                height: "42px",
                                                position: "relative",
                                            }}
                                        ></div>
                                        <hr />
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </>
                ),
                cardText:
                    "Copy this snippet and paste it in your html page's body tag:",
                codeSnippet: `
<nav class="navbar nav-iv success mid-animation">
    <div class="nav-brand">
        <p>NAVBAR</p>
        <button id="ham-icon" onclick="hamSpClickHandler();">
            &#8801;
        </button>
    </div>
    <div class="links-container">
        <ul class="links" style="">
            <li class="link">
                Home
                <hr />
            </li>
            <li class="link active">
                About
                <hr />
            </li>
            <li class="link">
                Contact
                <hr />
            </li>
        </ul>
        <ul class="links" style="">
            <li class="link">
                <i class="fas fa-search icon"></i>
                <hr />
            </li>
            <li class="link active">
                <i class="fas fa-inbox icon"></i>
                <hr />
            </li>
            <li class="link">
                <i class="fas fa-bell icon"
                    ><span
                        class="badge badge-xsm danger top right br-3 pl-3 pr-3 pt-1 pb-1"
                        >9+</span
                    ></i
                >
                <hr />
            </li>
            <li class="link avatar-link">
                <div
                    class="avatar icon"
                    style="
                        background-image: url(https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260);
                        width: 42px;
                        height: 42px;
                        position: relative;
                    "
                ></div>
                <hr />
            </li>
        </ul>
    </div>
</nav>
        `,
            },

            {
                id: uuid(),
                subTitle: "NavBar v0.0.4",
                codeOutput: (
                    <>
                        <nav className="navbar nav-iv nav-sp dark mid-animation">
                            <div className="nav-brand">
                                <p>NAVBAR</p>
                                <ul className="social-links" style={{}}>
                                    <li className="link">
                                        <i className="fab fa-twitter"></i>
                                    </li>
                                    <li className="link">
                                        <i className="fab fa-facebook-f"></i>
                                    </li>
                                    <li className="link">
                                        <i className="fab fa-instagram"></i>
                                    </li>
                                    <li className="link">
                                        <i className="fab fa-linkedin-in"></i>
                                    </li>
                                </ul>
                            </div>
                            <div className="links-container">
                                <ul className="links" style={{}}>
                                    <li className="link">
                                        Home
                                        <hr />
                                    </li>
                                    <li className="link active">
                                        About
                                        <hr />
                                    </li>
                                    <li className="link">
                                        Contact
                                        <hr />
                                    </li>
                                </ul>
                                <ul className="links" style={{}}>
                                    <li className="link">
                                        <button id="ham-icon">&#8801;</button>
                                        <hr />
                                    </li>
                                    <li className="link">
                                        <i className="fas fa-inbox icon"></i>
                                        <hr />
                                    </li>
                                    <li className="link active">
                                        <i className="fas fa-bell icon">
                                            <span className="badge badge-xsm danger top right br-3 pl-3 pr-3 pt-1 pb-1">
                                                9+
                                            </span>
                                        </i>
                                        <hr />
                                    </li>
                                    <li className="link avatar-link">
                                        <div
                                            className="avatar icon"
                                            style={{
                                                backgroundImage:
                                                    "url(https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)",
                                                width: "42px",
                                                height: "42px",
                                                position: "relative",
                                            }}
                                        ></div>
                                        <hr />
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </>
                ),
                cardText:
                    "Copy this snippet and paste it in your html page's body tag:",
                codeSnippet: `
<nav class="navbar nav-iv nav-sp dark mid-animation">
    <div class="nav-brand">
        <p>NAVBAR</p>
        <ul class="social-links" style="">
            <li class="link">
                <i class="fab fa-twitter"></i>
            </li>
            <li class="link">
                <i class="fab fa-facebook-f"></i>
            </li>
            <li class="link">
                <i class="fab fa-instagram"></i>
            </li>
            <li class="link">
                <i class="fab fa-linkedin-in"></i>
            </li>
        </ul>
    </div>
    <div class="links-container">
        <ul class="links" style="">
            <li class="link">
                Home
                <hr />
            </li>
            <li class="link active">
                About
                <hr />
            </li>
            <li class="link">
                Contact
                <hr />
            </li>
        </ul>
        <ul class="links" style="">
            <li class="link" onclick="hamSp2ClickHandler();">
                <button id="ham-icon">&#8801;</button>
                <hr />
            </li>
            <li class="link">
                <i class="fas fa-inbox icon"></i>
                <hr />
            </li>
            <li class="link active">
                <i class="fas fa-bell icon"
                    ><span
                        class="badge badge-xsm danger top right br-3 pl-3 pr-3 pt-1 pb-1"
                        >9+</span
                    ></i
                >
                <hr />
            </li>
            <li class="link avatar-link">
                <div
                    class="avatar icon"
                    style="
                        background-image: url(https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260);
                        width: 42px;
                        height: 42px;
                        position: relative;
                    "
                ></div>
                <hr />
            </li>
        </ul>
    </div>
</nav>
        `,
            },
            {
                id: uuid(),
                subTitle: "NavBar v0.0.5",
                codeOutput: (
                    <>
                        <nav className="navbar nav-iv nav-sp warning mid-animation">
                            <div className="nav-brand">
                                <p>NAVBAR</p>
                                <ul className="social-links" style={{}}>
                                    <li className="link">
                                        <i className="fab fa-twitter"></i>
                                    </li>
                                    <li className="link">
                                        <i className="fab fa-facebook-f"></i>
                                    </li>
                                    <li className="link">
                                        <i className="fab fa-instagram"></i>
                                    </li>
                                    <li className="link">
                                        <i className="fab fa-linkedin-in"></i>
                                    </li>
                                </ul>
                            </div>
                            <div className="links-container">
                                <ul className="links" style={{}}>
                                    <li className="link">
                                        Home
                                        <hr />
                                    </li>
                                    <li className="link active">
                                        About
                                        <hr />
                                    </li>
                                    <li className="link">
                                        Contact
                                        <hr />
                                    </li>
                                </ul>
                                <ul className="links" style={{}}>
                                    <li className="link">
                                        <button id="ham-icon">&#8801;</button>
                                        <hr />
                                    </li>
                                    <li className="link">
                                        <i className="fas fa-inbox icon"></i>
                                        <hr />
                                    </li>
                                    <li className="link active">
                                        <i className="fas fa-bell icon">
                                            <span className="badge badge-xsm danger top right br-3 pl-3 pr-3 pt-1 pb-1">
                                                9+
                                            </span>
                                        </i>
                                        <hr />
                                    </li>
                                    <li className="link avatar-link">
                                        <div
                                            className="avatar icon"
                                            style={{
                                                backgroundImage:
                                                    "url(https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)",
                                                width: "42px",
                                                height: "42px",
                                                position: "relative",
                                            }}
                                        ></div>
                                        <hr />
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </>
                ),
                cardText:
                    "Copy this snippet and paste it in your html page's body tag:",
                codeSnippet: `
<nav class="navbar nav-iv nav-sp warning mid-animation">
    <div class="nav-brand">
        <p>NAVBAR</p>
        <ul class="social-links" style="">
            <li class="link">
                <i class="fab fa-twitter"></i>
            </li>
            <li class="link">
                <i class="fab fa-facebook-f"></i>
            </li>
            <li class="link">
                <i class="fab fa-instagram"></i>
            </li>
            <li class="link">
                <i class="fab fa-linkedin-in"></i>
            </li>
        </ul>
    </div>
    <div class="links-container">
        <ul class="links" style="">
            <li class="link">
                Home
                <hr />
            </li>
            <li class="link active">
                About
                <hr />
            </li>
            <li class="link">
                Contact
                <hr />
            </li>
        </ul>
        <ul class="links" style="">
            <li class="link" onclick="hamSp2ClickHandler();">
                <button id="ham-icon">&#8801;</button>
                <hr />
            </li>
            <li class="link">
                <i class="fas fa-inbox icon"></i>
                <hr />
            </li>
            <li class="link active">
                <i class="fas fa-bell icon"
                    ><span
                        class="badge badge-xsm danger top right br-3 pl-3 pr-3 pt-1 pb-1"
                        >9+</span
                    ></i
                >
                <hr />
            </li>
            <li class="link avatar-link">
                <div
                    class="avatar icon"
                    style="
                        background-image: url(https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260);
                        width: 42px;
                        height: 42px;
                        position: relative;
                    "
                ></div>
                <hr />
            </li>
        </ul>
    </div>
</nav>
        `,
            },
            {
                id: uuid(),
                subTitle: "NavBar v0.0.6",
                codeOutput: (
                    <>
                        <nav className="navbar nav-iv nav-sp light mid-animation">
                            <div className="nav-brand">
                                <p>NAVBAR</p>
                                <ul className="social-links" style={{}}>
                                    <li className="link">
                                        <i className="fab fa-twitter"></i>
                                    </li>
                                    <li className="link">
                                        <i className="fab fa-facebook-f"></i>
                                    </li>
                                    <li className="link">
                                        <i className="fab fa-instagram"></i>
                                    </li>
                                    <li className="link">
                                        <i className="fab fa-linkedin-in"></i>
                                    </li>
                                </ul>
                            </div>
                            <div className="links-container">
                                <ul className="links" style={{}}>
                                    <li className="link">
                                        Home
                                        <hr />
                                    </li>
                                    <li className="link active">
                                        About
                                        <hr />
                                    </li>
                                    <li className="link">
                                        Contact
                                        <hr />
                                    </li>
                                </ul>
                                <ul className="links" style={{}}>
                                    <li className="link">
                                        <button id="ham-icon">&#8801;</button>
                                        <hr />
                                    </li>
                                    <li className="link">
                                        <i className="fas fa-inbox icon"></i>
                                        <hr />
                                    </li>
                                    <li className="link active">
                                        <i className="fas fa-bell icon">
                                            <span className="badge badge-xsm danger top right br-3 pl-3 pr-3 pt-1 pb-1">
                                                9+
                                            </span>
                                        </i>
                                        <hr />
                                    </li>
                                    <li className="link avatar-link">
                                        <div
                                            className="avatar icon"
                                            style={{
                                                backgroundImage:
                                                    "url(https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)",
                                                width: "42px",
                                                height: "42px",
                                                position: "relative",
                                            }}
                                        ></div>
                                        <hr />
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </>
                ),
                cardText:
                    "Copy this snippet and paste it in your html page's body tag:",
                codeSnippet: `
<nav class="navbar nav-iv nav-sp light mid-animation">
    <div class="nav-brand">
        <p>NAVBAR</p>
        <ul class="social-links" style="">
            <li class="link">
                <i class="fab fa-twitter"></i>
            </li>
            <li class="link">
                <i class="fab fa-facebook-f"></i>
            </li>
            <li class="link">
                <i class="fab fa-instagram"></i>
            </li>
            <li class="link">
                <i class="fab fa-linkedin-in"></i>
            </li>
        </ul>
    </div>
    <div class="links-container">
        <ul class="links" style="">
            <li class="link">
                Home
                <hr />
            </li>
            <li class="link active">
                About
                <hr />
            </li>
            <li class="link">
                Contact
                <hr />
            </li>
        </ul>
        <ul class="links" style="">
            <li class="link" onclick="hamSp2ClickHandler();">
                <button id="ham-icon">&#8801;</button>
                <hr />
            </li>
            <li class="link">
                <i class="fas fa-inbox icon"></i>
                <hr />
            </li>
            <li class="link active">
                <i class="fas fa-bell icon"
                    ><span
                        class="badge badge-xsm danger top right br-3 pl-3 pr-3 pt-1 pb-1"
                        >9+</span
                    ></i
                >
                <hr />
            </li>
            <li class="link avatar-link">
                <div
                    class="avatar icon"
                    style="
                        background-image: url(https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260);
                        width: 42px;
                        height: 42px;
                        position: relative;
                    "
                ></div>
                <hr />
            </li>
        </ul>
    </div>
</nav>
        `,
            },
            {
                id: uuid(),
                subTitle: "NavBar v0.0.7",
                codeOutput: (
                    <>
                        <nav className="navbar nav-iv danger mid-animation">
                            <div className="nav-brand">
                                <p>NAVBAR</p>
                                <button id="ham-icon">&#8801;</button>
                            </div>
                            <div className="links-container single-ul">
                                <ul className="links" style={{}}>
                                    <li className="link">
                                        Home
                                        <hr />
                                    </li>
                                    <li className="link active">
                                        About
                                        <hr />
                                    </li>
                                    <li className="link">
                                        Contact
                                        <hr />
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </>
                ),
                cardText:
                    "Copy this snippet and paste it in your html page's body tag:",
                codeSnippet: `
<nav class="navbar nav-iv danger mid-animation">
    <div class="nav-brand">
        <p>NAVBAR</p>
        <button id="ham-icon" onclick="hamClickHandler();">
            &#8801;
        </button>
    </div>
    <div class="links-container single-ul">
        <ul class="links" style="">
            <li class="link">
                Home
                <hr />
            </li>
            <li class="link active">
                About
                <hr />
            </li>
            <li class="link">
                Contact
                <hr />
            </li>
        </ul>
    </div>
</nav>
        `,
            },
        ],
        cards: [
            {
                id: uuid(),
                subTitle: "H Card v0.0.1",
                codeOutput: (
                    <>
                        <div className="card card-horizontal">
                            <div className="card-pic">
                                <span className="tag"></span>
                            </div>
                            <div className="text-section">
                                <div className="card-header">
                                    <p className="text fs-14">Card title</p>
                                </div>
                                <div className="card-body">
                                    <p className="text">
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Repellendus, vero
                                        ipsam minus eius perspiciatis magni
                                        inventore optio minima modi magnam fugit
                                        quia eaque sint similique placeat vel!
                                        Commodi, voluptas debitis!
                                    </p>
                                </div>
                                <div className="card-footer">
                                    <p className="text text-muted fs-09">
                                        Last updated 3 mins ago
                                    </p>
                                </div>
                            </div>
                        </div>
                    </>
                ),
                cardText:
                    "Copy this snippet and paste it in your html page's body tag:",
                codeSnippet: `
<div class="card card-horizontal">
    <div class="card-pic">
        <span class="tag"></span>
    </div>
    <div class="text-section">
        <div class="card-header">
            <p class="text fs-14">Card title</p>
        </div>
        <div class="card-body">
            <p class="text">
                Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Repellendus, vero
                ipsam minus eius perspiciatis magni
                inventore optio minima modi magnam fugit
                quia eaque sint similique placeat vel!
                Commodi, voluptas debitis!
            </p>
        </div>
        <div class="card-footer">
            <p class="text text-muted fs-09">
                Last updated 3 mins ago
            </p>
        </div>
    </div>
</div>
        `,
            },
            {
                id: uuid(),
                subTitle: "HR Card v0.0.1",
                codeOutput: (
                    <>
                        <div className="card card-horizontal rev img-right">
                            <div className="card-pic">
                                <span className="tag"></span>
                            </div>
                            <div className="text-section">
                                <div className="card-header">
                                    <p className="text fs-14">Card title</p>
                                </div>
                                <div className="card-body">
                                    <p className="text">
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Repellendus, vero
                                        ipsam minus eius perspiciatis magni
                                        inventore optio minima modi magnam fugit
                                        quia eaque sint similique placeat vel!
                                        Commodi, voluptas debitis!
                                    </p>
                                </div>
                                <div className="card-footer">
                                    <p className="text text-muted fs-09">
                                        Last updated 3 mins ago
                                    </p>
                                </div>
                            </div>
                        </div>
                    </>
                ),
                cardText:
                    "Copy this snippet and paste it in your html page's body tag:",
                codeSnippet: `
<div class="card card-horizontal rev img-right">
    <div class="card-pic">
        <span class="tag"></span>
    </div>
    <div class="text-section">
        <div class="card-header">
            <p class="text fs-14">Card title</p>
        </div>
        <div class="card-body">
            <p class="text">
                Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Repellendus, vero
                ipsam minus eius perspiciatis magni
                inventore optio minima modi magnam fugit
                quia eaque sint similique placeat vel!
                Commodi, voluptas debitis!
            </p>
        </div>
        <div class="card-footer">
            <p class="text text-muted fs-09">
                Last updated 3 mins ago
            </p>
        </div>
    </div>
</div>
        `,
            },
            {
                id: uuid(),
                subTitle: "V Card v0.0.1",
                codeOutput: (
                    <>
                        <div className="card card-vertical">
                            <div className="card-pic">
                                <span className="tag"></span>
                            </div>
                            <div className="text-section">
                                <div className="card-header">
                                    <p className="text fs-14">Card title</p>
                                </div>
                                <div className="card-body">
                                    <p className="text">
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Repellendus, vero
                                        ipsam minus eius perspiciatis magni
                                        inventore optio minima modi magnam fugit
                                        quia eaque sint similique placeat vel!
                                        Commodi, voluptas debitis!
                                    </p>
                                </div>
                                <div className="card-footer">
                                    <p className="text text-muted fs-09">
                                        Last updated 3 mins ago
                                    </p>
                                </div>
                            </div>
                        </div>
                    </>
                ),
                cardText:
                    "Copy this snippet and paste it in your html page's body tag:",
                codeSnippet: `
<div class="card card-vertical">
    <div class="card-pic">
        <span class="tag"></span>
    </div>
    <div class="text-section">
        <div class="card-header">
            <p class="text fs-14">Card title</p>
        </div>
        <div class="card-body">
            <p class="text">
                Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Repellendus, vero
                ipsam minus eius perspiciatis magni
                inventore optio minima modi magnam fugit
                quia eaque sint similique placeat vel!
                Commodi, voluptas debitis!
            </p>
        </div>
        <div class="card-footer">
            <p class="text text-muted fs-09">
                Last updated 3 mins ago
            </p>
        </div>
    </div>
</div>
        `,
            },
            {
                id: uuid(),
                subTitle: "V Card v0.0.2",
                codeOutput: (
                    <>
                        <div className="card card-vertical img-below">
                            <div className="card-pic">
                                <span className="tag"></span>
                            </div>
                            <div className="text-section">
                                <div className="card-header">
                                    <p className="text fs-14">Card title</p>
                                </div>
                                <div className="card-body">
                                    <p className="text">
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Repellendus, vero
                                        ipsam minus eius perspiciatis magni
                                        inventore optio minima modi magnam fugit
                                        quia eaque sint similique placeat vel!
                                        Commodi, voluptas debitis!
                                    </p>
                                </div>
                                <div className="card-footer">
                                    <p className="text text-muted fs-09">
                                        Last updated 3 mins ago
                                    </p>
                                </div>
                            </div>
                        </div>
                    </>
                ),
                cardText:
                    "Copy this snippet and paste it in your html page's body tag:",
                codeSnippet: `
<div class="card card-vertical img-below">
    <div class="card-pic">
        <span class="tag"></span>
    </div>
    <div class="text-section">
        <div class="card-header">
            <p class="text fs-14">Card title</p>
        </div>
        <div class="card-body">
            <p class="text">
                Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Repellendus, vero
                ipsam minus eius perspiciatis magni
                inventore optio minima modi magnam fugit
                quia eaque sint similique placeat vel!
                Commodi, voluptas debitis!
            </p>
        </div>
        <div class="card-footer">
            <p class="text text-muted fs-09">
                Last updated 3 mins ago
            </p>
        </div>
    </div>
</div>
        `,
            },

            {
                id: uuid(),
                subTitle: "HD Card v0.0.3",
                codeOutput: (
                    <>
                        <div className="card card-horizontal dark-mode">
                            <div className="card-pic">
                                <span className="tag"></span>
                            </div>
                            <div className="text-section">
                                <div className="card-header">
                                    <p className="text fs-14">Card title</p>
                                </div>
                                <div className="card-body">
                                    <p className="text">
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Repellendus, vero
                                        ipsam minus eius perspiciatis magni
                                        inventore optio minima modi magnam fugit
                                        quia eaque sint similique placeat vel!
                                        Commodi, voluptas debitis!
                                    </p>
                                </div>
                                <div className="card-footer">
                                    <p className="text text-muted fs-09">
                                        Last updated 3 mins ago
                                    </p>
                                </div>
                            </div>
                        </div>
                    </>
                ),
                cardText:
                    "Copy this snippet and paste it in your html page's body tag:",
                codeSnippet: `
<div class="card card-horizontal dark-mode">
    <div class="card-pic">
        <span class="tag"></span>
    </div>
    <div class="text-section">
        <div class="card-header">
            <p class="text fs-14">Card title</p>
        </div>
        <div class="card-body">
            <p class="text">
                Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Repellendus, vero
                ipsam minus eius perspiciatis magni
                inventore optio minima modi magnam fugit
                quia eaque sint similique placeat vel!
                Commodi, voluptas debitis!
            </p>
        </div>
        <div class="card-footer">
            <p class="text text-muted fs-09">
                Last updated 3 mins ago
            </p>
        </div>
    </div>
</div>
        `,
            },
            {
                id: uuid(),
                subTitle: "HD Card v0.0.4",
                codeOutput: (
                    <>
                        <div className="card card-horizontal rev img-right dark-mode">
                            <div className="card-pic">
                                <span className="tag"></span>
                            </div>
                            <div className="text-section">
                                <div className="card-header">
                                    <p className="text fs-14">Card title</p>
                                </div>
                                <div className="card-body">
                                    <p className="text">
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Repellendus, vero
                                        ipsam minus eius perspiciatis magni
                                        inventore optio minima modi magnam fugit
                                        quia eaque sint similique placeat vel!
                                        Commodi, voluptas debitis!
                                    </p>
                                </div>
                                <div className="card-footer">
                                    <p className="text text-muted fs-09">
                                        Last updated 3 mins ago
                                    </p>
                                </div>
                            </div>
                        </div>
                    </>
                ),
                cardText:
                    "Copy this snippet and paste it in your html page's body tag:",
                codeSnippet: `
<div class="card card-horizontal rev img-right dark-mode">
    <div class="card-pic">
        <span class="tag"></span>
    </div>
    <div class="text-section">
        <div class="card-header">
            <p class="text fs-14">Card title</p>
        </div>
        <div class="card-body">
            <p class="text">
                Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Repellendus, vero
                ipsam minus eius perspiciatis magni
                inventore optio minima modi magnam fugit
                quia eaque sint similique placeat vel!
                Commodi, voluptas debitis!
            </p>
        </div>
        <div class="card-footer">
            <p class="text text-muted fs-09">
                Last updated 3 mins ago
            </p>
        </div>
    </div>
</div>
        `,
            },
            {
                id: uuid(),
                subTitle: "VD Card v0.0.1",
                codeOutput: (
                    <>
                        <div className="card card-vertical dark-mode">
                            <div className="card-pic">
                                <span className="tag"></span>
                            </div>
                            <div className="text-section">
                                <div className="card-header">
                                    <p className="text fs-14">Card title</p>
                                </div>
                                <div className="card-body">
                                    <p className="text">
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Repellendus, vero
                                        ipsam minus eius perspiciatis magni
                                        inventore optio minima modi magnam fugit
                                        quia eaque sint similique placeat vel!
                                        Commodi, voluptas debitis!
                                    </p>
                                </div>
                                <div className="card-footer">
                                    <p className="text text-muted fs-09">
                                        Last updated 3 mins ago
                                    </p>
                                </div>
                            </div>
                        </div>
                    </>
                ),
                cardText:
                    "Copy this snippet and paste it in your html page's body tag:",
                codeSnippet: `
<div class="card card-vertical dark-mode">
    <div class="card-pic">
        <span class="tag"></span>
    </div>
    <div class="text-section">
        <div class="card-header">
            <p class="text fs-14">Card title</p>
        </div>
        <div class="card-body">
            <p class="text">
                Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Repellendus, vero
                ipsam minus eius perspiciatis magni
                inventore optio minima modi magnam fugit
                quia eaque sint similique placeat vel!
                Commodi, voluptas debitis!
            </p>
        </div>
        <div class="card-footer">
            <p class="text text-muted fs-09">
                Last updated 3 mins ago
            </p>
        </div>
    </div>
</div>
        `,
            },
            {
                id: uuid(),
                subTitle: "VD Card v0.0.2",
                codeOutput: (
                    <>
                        <div className="card card-vertical img-below dark-mode">
                            <div className="card-pic">
                                <span className="tag"></span>
                            </div>
                            <div className="text-section">
                                <div className="card-header">
                                    <p className="text fs-14">Card title</p>
                                </div>
                                <div className="card-body">
                                    <p className="text">
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Repellendus, vero
                                        ipsam minus eius perspiciatis magni
                                        inventore optio minima modi magnam fugit
                                        quia eaque sint similique placeat vel!
                                        Commodi, voluptas debitis!
                                    </p>
                                </div>
                                <div className="card-footer">
                                    <p className="text text-muted fs-09">
                                        Last updated 3 mins ago
                                    </p>
                                </div>
                            </div>
                        </div>
                    </>
                ),
                cardText:
                    "Copy this snippet and paste it in your html page's body tag:",
                codeSnippet: `
<div class="card card-vertical img-below dark-mode">
    <div class="card-pic">
        <span class="tag"></span>
    </div>
    <div class="text-section">
        <div class="card-header">
            <p class="text fs-14">Card title</p>
        </div>
        <div class="card-body">
            <p class="text">
                Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Repellendus, vero
                ipsam minus eius perspiciatis magni
                inventore optio minima modi magnam fugit
                quia eaque sint similique placeat vel!
                Commodi, voluptas debitis!
            </p>
        </div>
        <div class="card-footer">
            <p class="text text-muted fs-09">
                Last updated 3 mins ago
            </p>
        </div>
    </div>
</div>
        `,
            },
        ],
        alerts: [
            {
                id: uuid(),
                subTitle: "Alert info",
                codeOutput: (
                    <>
                        <div className="alert info">
                            <div className="alert-header">
                                <span className="close-btn">&times;</span>
                                <p className="text">
                                    <span className="alert-icon">
                                        <i className="fas fa-info-circle"></i>
                                        &nbsp;&nbsp;
                                    </span>
                                    Alert!!!
                                </p>
                            </div>
                            <div className="alert-body">
                                <p>
                                    Lorem ipsum dolor, sit amet consectetur
                                    adipisicing elit. Dolor maiores ipsa cumque
                                    magnam.
                                </p>
                            </div>
                        </div>
                    </>
                ),
                cardText:
                    "Copy this snippet and paste it in your html page's body tag:",
                codeSnippet: `

<div class="alert info">
    <div class="alert-header">
        <span class="close-btn">&times;</span>
        <p class="alert-text">
            <span class="alert-icon">
                <i class="fas fa-info-circle"></i>
            </span>
            Alert!!!
        </p>
    </div>
    <div class="alert-body">
        <p>
            Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Dolor maiores ipsa
            cumque magnam.
        </p>
    </div>
</div>
        `,
            },

            {
                id: uuid(),
                subTitle: "Alert success",
                codeOutput: (
                    <>
                        <div className="alert success">
                            <div className="alert-header">
                                <span className="close-btn">&times;</span>
                                <p className="text">
                                    <span className="alert-icon">
                                        <i className="fas fa-check-circle"></i>
                                        &nbsp;&nbsp;
                                    </span>
                                    Alert!!!
                                </p>
                            </div>
                            <div className="alert-body">
                                <p className="text">
                                    Lorem ipsum dolor, sit amet consectetur
                                    adipisicing elit. Dolormaiores ipsa cumque
                                    magnam.
                                </p>
                            </div>
                        </div>
                    </>
                ),
                cardText:
                    "Copy this snippet and paste it in your html page's body tag:",
                codeSnippet: `
<div class="alert success">
    <div class="alert-header">
        <span class="close-btn">&times;</span>
        <p class="alert-text">
            <span class="alert-icon">
                <i class="fas fa-check-circle"></i>
            </span>
            Alert!!!
        </p>
    </div>
    <div class="alert-body">
        <p class="alert-text">
            Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Dolormaiores ipsa cumque
            magnam.
        </p>
    </div>
</div>
        `,
            },

            {
                id: uuid(),
                subTitle: "Alert warning",
                codeOutput: (
                    <>
                        <div className="alert warning">
                            <div className="alert-header">
                                <span className="close-btn">&times;</span>
                                <p className="text">
                                    <span className="alert-icon">
                                        <i className="fas fa-exclamation-circle"></i>
                                        &nbsp;&nbsp;
                                    </span>
                                    Alert!!!
                                </p>
                            </div>
                            <div className="alert-body">
                                <p>
                                    Lorem ipsum dolor, sit amet consectetur
                                    adipisicing elit. Dolormaiores ipsa cumque
                                    magnam.
                                </p>
                            </div>
                        </div>
                    </>
                ),
                cardText:
                    "Copy this snippet and paste it in your html page's body tag:",
                codeSnippet: `
<div class="alert warning">
    <div class="alert-header">
        <span class="close-btn">&times;</span>
        <p class="alert-text">
            <span class="alert-icon">
                <i class="fas fa-exclamation-circle"></i>
            </span>
            Alert!!!
        </p>
    </div>
    <div class="alert-body">
        <p>
            Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Dolormaiores ipsa cumque
            magnam.
        </p>
    </div>
</div>
        `,
            },

            {
                id: uuid(),
                subTitle: "Alert danger",
                codeOutput: (
                    <>
                        <div className="alert danger">
                            <div className="alert-header">
                                <span className="close-btn">&times;</span>
                                <p className="text">
                                    <span className="alert-icon">
                                        <i className="fas fa-times-circle"></i>
                                        &nbsp;&nbsp;
                                    </span>
                                    Alert!!!
                                </p>
                            </div>
                            <div className="alert-body">
                                <p>
                                    Lorem ipsum dolor, sit amet consectetur
                                    adipisicing elit. Dolormaiores ipsa cumque
                                    magnam.
                                </p>
                            </div>
                        </div>
                    </>
                ),
                cardText:
                    "Copy this snippet and paste it in your html page's body tag:",
                codeSnippet: `
<div class="alert danger">
    <div class="alert-header">
        <span class="close-btn">&times;</span>
        <p class="alert-text">
            <span class="alert-icon">
                <i class="fas fa-times-circle"></i>
            </span>
            Alert!!!
        </p>
    </div>
    <div class="alert-body">
        <p>
            Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Dolormaiores ipsa cumque
            magnam.
        </p>
    </div>
</div>
        `,
            },

            {
                id: uuid(),
                subTitle: "Alert small",
                codeOutput: (
                    <>
                        <div className="alert alert-sm">
                            <div className="alert-header">
                                <span className="alert-icon">
                                    <i className="fas fa-info-circle"></i>
                                </span>
                                <span className="text">
                                    Lorem ipsum dolor, sit amet consectetur
                                    adipisicing elit. Dolormaiores ipsa cumque
                                    magnam.
                                </span>
                                <span className="close-btn">&times;</span>
                            </div>
                        </div>
                    </>
                ),
                cardText:
                    "Copy this snippet and paste it in your html page's body tag:",
                codeSnippet: `
<div class="alert alert-sm">
    <div class="alert-header">
        <span class="alert-icon">
            <i class="fas fa-info-circle"></i>
        </span>
        <span class="alert-text">
            Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Dolormaiores ipsa cumque
            magnam.
        </span>
        <span class="close-btn">&times;</span>
    </div>
</div>
        `,
            },

            {
                id: uuid(),
                subTitle: "Alert small success",
                codeOutput: (
                    <>
                        <div className="alert alert-sm success">
                            <div className="alert-header">
                                <span className="alert-icon">
                                    <i className="fas fa-check-circle"></i>
                                </span>
                                <span className="text">
                                    Lorem ipsum dolor, sit amet consectetur
                                    adipisicing elit. Dolormaiores ipsa cumque
                                    magnam.
                                </span>
                                <span className="close-btn">&times;</span>
                            </div>
                        </div>
                    </>
                ),
                cardText:
                    "Copy this snippet and paste it in your html page's body tag:",
                codeSnippet: `
<div class="alert alert-sm success">
    <div class="alert-header">
        <span class="alert-icon">
            <i class="fas fa-check-circle"></i>
        </span>
        <span class="alert-text">
            Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Dolormaiores ipsa cumque
            magnam.
        </span>
        <span class="close-btn">&times;</span>
    </div>
</div>
        `,
            },
            {
                id: uuid(),
                subTitle: "Alert small warning",
                codeOutput: (
                    <>
                        <div className="alert alert-sm warning">
                            <div className="alert-header">
                                <span className="alert-icon">
                                    <i className="fas fa-exclamation-circle"></i>
                                </span>
                                <span className="text">
                                    Lorem ipsum dolor, sit amet consectetur
                                    adipisicing elit. Dolormaiores ipsa cumque
                                    magnam.
                                </span>
                                <span className="close-btn">&times;</span>
                            </div>
                        </div>
                    </>
                ),
                cardText:
                    "Copy this snippet and paste it in your html page's body tag:",
                codeSnippet: `
<div class="alert alert-sm warning">
    <div class="alert-header">
        <span class="alert-icon">
            <i class="fas fa-exclamation-circle"></i>
        </span>
        <span class="alert-text">
            Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Dolormaiores ipsa cumque
            magnam.
        </span>
        <span class="close-btn">&times;</span>
    </div>
</div>
        `,
            },
            {
                id: uuid(),
                subTitle: "Alert small danger",
                codeOutput: (
                    <>
                        <div className="alert alert-sm danger">
                            <div className="alert-header">
                                <span className="alert-icon">
                                    <i className="fas fa-times-circle"></i>
                                </span>
                                <span className="text">
                                    Lorem ipsum dolor, sit amet consectetur
                                    adipisicing elit. Dolormaiores ipsa cumque
                                    magnam.
                                </span>
                                <span className="close-btn">&times;</span>
                            </div>
                        </div>
                    </>
                ),
                cardText:
                    "Copy this snippet and paste it in your html page's body tag:",
                codeSnippet: `
<div class="alert alert-sm danger">
    <div class="alert-header">
        <span class="alert-icon">
            <i class="fas fa-times-circle"></i>
        </span>
        <span class="alert-text">
            Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Dolormaiores ipsa cumque
            magnam.
        </span>
        <span class="close-btn">&times;</span>
    </div>
</div>
        `,
            },
        ],
        fields: [
            {
                id: uuid(),
                subTitle: "Radio v0.0.1",
                codeOutput: (
                    <>
                        <div className="form-field success-bg bg-inherit">
                            <label className="radio-label">
                                <input
                                    type="radio"
                                    name="radio-check"
                                    className="input-radio"
                                    checked="checked"
                                />
                                <span className="radio-outer-circle">
                                    <p className="radio-inner-circle"></p>
                                </span>
                                <small>I'm the label from a checkbox</small>
                            </label>
                        </div>
                    </>
                ),
                cardText:
                    "Copy this snippet and paste it in your html page's body tag:",
                codeSnippet: `
<div class="form-field success-bg bg-inherit">
    <label class="radio-label">
        <input
            type="radio"
            name="radio-check"
            class="input-radio"
            checked="checked"
        />
        <span class="radio-outer-circle">
            <p class="radio-inner-circle"></p>
        </span>
        <small>I'm the label from a checkbox</small>
    </label>
</div>
        `,
            },
            {
                id: uuid(),
                subTitle: "Radio v0.0.2",
                codeOutput: (
                    <>
                        <div className="form-field primary-bg type-i bg-inherit radio-colored">
                            <label className="radio-label">
                                <input
                                    type="radio"
                                    name="radio-check"
                                    className="input-radio"
                                    checked="checked"
                                />
                                <span className="radio-outer-circle">
                                    <p className="radio-inner-circle"></p>
                                </span>
                                <small>I'm the label from a checkbox</small>
                            </label>
                        </div>
                    </>
                ),
                cardText:
                    "Copy this snippet and paste it in your html page's body tag:",
                codeSnippet: `
                <div class="form-field primary-bg type-i bg-inherit radio-colored">
                <label class="radio-label">
                    <input
                        type="radio"
                        name="radio-check"
                        class="input-radio"
                        checked="checked"
                    />
                    <span class="radio-outer-circle">
                        <p class="radio-inner-circle"></p>
                    </span>
                    <small>I'm the label from a checkbox</small>
                </label>
            </div>
        `,
            },
            {
                id: uuid(),
                subTitle: "Radio v0.0.3",
                codeOutput: (
                    <>
                        <div class="form-field danger-bg type-ii bg-inherit">
                            <label class="radio-label">
                                <input
                                    type="radio"
                                    name="radio-check"
                                    class="input-radio"
                                    checked="checked"
                                />
                                <span class="radio-outer-circle">
                                    <p class="radio-inner-circle"></p>
                                </span>
                                <small>I'm the label from a checkbox</small>
                            </label>
                        </div>
                    </>
                ),
                cardText:
                    "Copy this snippet and paste it in your html page's body tag:",
                codeSnippet: `
<div class="form-field danger-bg type-ii bg-inherit">
    <label class="radio-label">
        <input
            type="radio"
            name="radio-check"
            class="input-radio"
            checked="checked"
        />
        <span class="radio-outer-circle">
            <p class="radio-inner-circle"></p>
        </span>
        <small>I'm the label from a checkbox</small>
    </label>
</div>
        `,
            },
            {
                id: uuid(),
                subTitle: "Radio v0.0.4",
                codeOutput: (
                    <>
                        <div className="form-field warning-bg type-iii bg-inherit">
                            <label className="radio-label">
                                <input
                                    type="radio"
                                    name="radio-check"
                                    className="input-radio"
                                    checked="checked"
                                />
                                <span className="radio-outer-circle">
                                    <p className="radio-inner-circle"></p>
                                </span>
                                <small>I'm the label from a checkbox</small>
                            </label>
                        </div>
                    </>
                ),
                cardText:
                    "Copy this snippet and paste it in your html page's body tag:",
                codeSnippet: `
<div class="form-field warning-bg type-iii bg-inherit">
    <label class="radio-label">
        <input
            type="radio"
            name="radio-check"
            class="input-radio"
            checked="checked"
        />
        <span class="radio-outer-circle">
            <p class="radio-inner-circle"></p>
        </span>
        <small>I'm the label from a checkbox</small>
    </label>
</div>
        `,
            },
            {
                id: uuid(),
                subTitle: "Dropdown",
                codeOutput: (
                    <>
                        <div className="dropdown m-8">
                            <button className="btn btn-md success br-3" href="">
                                Dropdown link
                                <span className="fas fa-caret-down ml-9"></span>
                            </button>

                            <div className="dropdown-menu hide">
                                <a className="dropdown-item" href="#">
                                    Action
                                </a>
                                <a className="dropdown-item" href="#">
                                    Another action
                                </a>
                                <span className="hr-line"></span>
                                <a className="dropdown-item" href="#">
                                    Something else here
                                </a>
                            </div>
                        </div>
                    </>
                ),
                cardText:
                    "Copy this snippet and paste it in your html page's body tag:",
                codeSnippet: `
<div class="dropdown m-8">
    <button class="btn btn-md success br-3" href="">
        Dropdown link
        <span class="fas fa-caret-down ml-9"></span>
    </button>

    <div class="dropdown-menu hide">
        <a class="dropdown-item" href="#">
            Action
        </a>
        <a class="dropdown-item" href="#">
            Another action
        </a>
        <span class="hr-line"></span>
        <a class="dropdown-item" href="#">
            Something else here
        </a>
    </div>
</div>
        `,
            },
            {
                id: uuid(),
                subTitle: "Input Field Primary",
                codeOutput: (
                    <>
                        <div className="form-field primary-bg bg-transparent">
                            <input
                                className="input-field"
                                type="text"
                                required
                            />
                            <span
                                title="No Issues Found"
                                className="fas fa-check success-bg bg-inherit icon"
                            ></span>
                            <label for="input" className="form-label">
                                First Name
                            </label>
                            <p className="form-help success-bg">no errors</p>
                            <hr />
                            <hr />
                        </div>
                    </>
                ),
                cardText:
                    "Copy this snippet and paste it in your html page's body tag:",
                codeSnippet: `
<div class="form-field primary-bg bg-transparent">
    <input class="input-field" type="text" required />
    <span
        title="No Issues Found"
        class="fas fa-check success-bg bg-inherit icon"
    ></span>
    <label for="input" class="form-label">
        First Name
    </label>
    <p class="form-help success-bg">no errors</p>
    <hr />
    <hr />
</div>
        `,
            },
            {
                id: uuid(),
                subTitle: "Input Field With warning",
                codeOutput: (
                    <>
                        <div className="form-field warning-bg bg-transparent">
                            <input
                                className="input-field"
                                type="text"
                                required
                            />
                            <span
                                title="No Issues Found"
                                className="fas fa-times danger-bg bg-inherit icon"
                            ></span>

                            <label for="input" className="form-label">
                                First Name
                            </label>
                            <p className="form-help danger-bg">field empty</p>
                            <hr />
                            <hr />
                        </div>
                    </>
                ),
                cardText:
                    "Copy this snippet and paste it in your html page's body tag:",
                codeSnippet: `
<div class="form-field warning-bg bg-transparent">
    <input class="input-field" type="text" required />
    <span
        title="1-3 words at max"
        class="fas fa-info info-bg bg-inherit icon"
    ></span>
    <label for="input" class="form-label">
        First Name
    </label>
    <p class="form-help danger-bg">field empty</p>
    <hr />
    <hr />
</div>
        `,
            },
            {
                id: uuid(),
                subTitle: "Textarea",
                codeOutput: (
                    <>
                        <div className="form-field danger-bg bg-transparent">
                            <textarea
                                className="input-field"
                                required
                            ></textarea>
                            <label for="input" className="form-label">
                                Last Name
                            </label>
                            <hr />
                            <hr />
                        </div>
                    </>
                ),
                cardText:
                    "Copy this snippet and paste it in your html page's body tag:",
                codeSnippet: `
<div class="form-field danger-bg bg-transparent">
    <textarea class="input-field" required></textarea>
    <label for="input" class="form-label">
        Last Name
    </label>
    <hr />
    <hr />
</div>
        `,
            },
            {
                id: uuid(),
                subTitle: "CheckBox",
                codeOutput: (
                    <>
                        <div className="form-field primary-bg bg-inherit">
                            <label className="checkbox-label">
                                <input
                                    type="checkbox"
                                    className="input-checkbox"
                                />
                                <p className="tick-icon"></p>
                                <small>I'm the label from this checkbox</small>
                            </label>
                        </div>
                    </>
                ),
                cardText:
                    "Copy this snippet and paste it in your html page's body tag:",
                codeSnippet: `
<div class="form-field primary-bg bg-inherit">
    <label class="checkbox-label">
        <input
            type="checkbox"
            class="input-checkbox"
            checked="checked"
        />
        <p class="tick-icon"></p>
        <small>I'm the label from this checkbox</small>
    </label>
</div>
        `,
            },
        ],
        badges: [
            {
                id: uuid(),
                subTitle: "Badges small",
                codeOutput: (
                    <>
                        <span className="badge badge-sm light br-3 mr-8">
                            4
                        </span>
                        <span className="badge badge-sm dark br-4 mr-8">
                            40
                        </span>
                        <span className="badge badge-sm primary br-5 mr-8">
                            400
                        </span>
                        <span className="badge badge-sm secondary br-6 mr-8">
                            400
                        </span>
                        <span className="badge badge-sm info br-7 mr-8">
                            400
                        </span>
                        <span className="badge badge-sm warning br-8 mr-8">
                            400
                        </span>
                        <span className="badge badge-sm danger br-9 mr-8">
                            400
                        </span>
                        <span className="badge badge-sm success br-10 mr-8">
                            400
                        </span>
                    </>
                ),
                cardText:
                    "Copy this snippet and paste it in your html page's body tag:",
                codeSnippet: `
<span class="badge badge-sm light br-3">4</span>
<span class="badge badge-sm dark br-4">40</span>
<span class="badge badge-sm primary br-5">400</span>
<span class="badge badge-sm secondary br-6">400</span>
<span class="badge badge-sm info br-7">400</span>
<span class="badge badge-sm warning br-8">400</span>
<span class="badge badge-sm danger br-9">400</span>
<span class="badge badge-sm success br-10">400</span>
        `,
            },

            {
                id: uuid(),
                subTitle: "Badges medium",
                codeOutput: (
                    <>
                        <span className="badge badge-md light br-3 mr-8">
                            4
                        </span>
                        <span className="badge badge-md dark br-4 mr-8">
                            40
                        </span>
                        <span className="badge badge-md primary br-5 mr-8">
                            400
                        </span>
                        <span className="badge badge-md secondary br-6 mr-8">
                            400
                        </span>
                        <span className="badge badge-md info br-7 mr-8">
                            400
                        </span>
                        <span className="badge badge-md warning br-8 mr-8">
                            400
                        </span>
                        <span className="badge badge-md danger br-9 mr-8">
                            400
                        </span>
                        <span className="badge badge-md success br-10 mr-8">
                            400
                        </span>
                    </>
                ),
                cardText:
                    "Copy this snippet and paste it in your html page's body tag:",
                codeSnippet: `
<span class="badge badge-md light br-3">4</span>
<span class="badge badge-md dark br-4">40</span>
<span class="badge badge-md primary br-5">400</span>
<span class="badge badge-md secondary br-6">400</span>
<span class="badge badge-md info br-7">400</span>
<span class="badge badge-md warning br-8">400</span>
<span class="badge badge-md danger br-9">400</span>
<span class="badge badge-md success br-10">400</span>
            `,
            },

            {
                id: uuid(),
                subTitle: "Badges large",
                codeOutput: (
                    <>
                        <span className="badge badge-lg light br-3 mr-8">
                            4
                        </span>
                        <span className="badge badge-lg dark br-4 mr-8">
                            40
                        </span>
                        <span className="badge badge-lg primary br-5 mr-8">
                            400
                        </span>
                        <span className="badge badge-lg secondary br-6 mr-8">
                            400
                        </span>
                        <span className="badge badge-lg info br-7 mr-8">
                            400
                        </span>
                        <span className="badge badge-lg warning br-8 mr-8">
                            400
                        </span>
                        <span className="badge badge-lg danger br-9 mr-8">
                            400
                        </span>
                        <span className="badge badge-lg success br-10 mr-8">
                            400
                        </span>
                    </>
                ),
                cardText:
                    "Copy this snippet and paste it in your html page's body tag:",
                codeSnippet: `
<span class="badge badge-lg light br-3">4</span>
<span class="badge badge-lg dark br-4">40</span>
<span class="badge badge-lg primary br-5">400</span>
<span class="badge badge-lg secondary br-6">400</span>
<span class="badge badge-lg info br-7">400</span>
<span class="badge badge-lg warning br-8">400</span>
<span class="badge badge-lg danger br-9">400</span>
<span class="badge badge-lg success br-10">400</span>
            `,
            },
        ],

        avatars: [
            {
                id: uuid(),
                subTitle: "Avatar with badge",
                codeOutput: (
                    <>
                        <div
                            className="avatar"
                            style={{
                                backgroundImage:
                                    "url(https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)",
                                width: "100px",
                                height: "100px",
                            }}
                        >
                            <span className="badge badge-sm primary top left">
                                12
                            </span>
                        </div>
                    </>
                ),
                cardText:
                    "Copy this snippet and paste it in your html page's body tag:",
                codeSnippet: `
<div
    class="avatar"
    style="
        background-image: url(https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260);
        width: 100px;
        height: 100px;
    "
>
    <span class="badge badge-sm primary top left">
        12
    </span>
</div>
            `,
            },
            {
                id: uuid(),
                subTitle: "Avatar without badge",
                codeOutput: (
                    <>
                        <div
                            className="avatar"
                            style={{
                                backgroundImage:
                                    "url(https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)",
                                width: "100px",
                                height: "100px",
                            }}
                        ></div>
                    </>
                ),
                cardText:
                    "Copy this snippet and paste it in your html page's body tag:",
                codeSnippet: `
<div
    class="avatar"
    style="
        background-image: url(https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260);
        width: 100px;
        height: 100px;
    "
>
</div>
            `,
            },

            {
                id: uuid(),
                subTitle: "Avatar small",
                codeOutput: (
                    <>
                        <div
                            className="avatar"
                            style={{
                                backgroundImage:
                                    "url(https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)",
                                width: "40px",
                                height: "40px",
                            }}
                        ></div>
                    </>
                ),
                cardText:
                    "Copy this snippet and paste it in your html page's body tag:",
                codeSnippet: `
<div
    class="avatar"
    style="
        background-image: url(https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260);
        width: 40px;
        height: 40px;
    "
>
</div>
            `,
            },

            {
                id: uuid(),
                subTitle: "Avatar large",
                codeOutput: (
                    <>
                        <div
                            className="avatar"
                            style={{
                                backgroundImage:
                                    "url(https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)",
                                width: "150px",
                                height: "150px",
                            }}
                        ></div>
                    </>
                ),
                cardText:
                    "Copy this snippet and paste it in your html page's body tag:",
                codeSnippet: `
<div
    class="avatar"
    style="
        background-image: url(https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260);
        width: 150px;
        height: 150px;
    "
>
</div>
            `,
            },
        ],

        Icon: [
            {
                id: uuid(),
                subTitle: "Icon with badge",
                codeOutput: (
                    <>
                        <i className="fab fa-instagram-square icon icon-lg bg-inherit danger-bg mr-10">
                            <span className="badge badge-sm bg-inherit p-0 p-2 br-round top right">
                                <i className="fas fa-laugh-beam icon warning-bg bg-light br-round p-2"></i>
                            </span>
                        </i>
                        <i className="fab fa-facebook-square icon icon-lg bg-inherit primary-bg mr-7 ml-10">
                            <span className="badge badge-sm bg-inherit p-0 p-2 br-round top right">
                                <i className="fas fa-laugh-beam icon warning-bg bg-light br-round p-2"></i>
                            </span>
                        </i>
                        <i className="fab fa-linkedin icon icon-lg bg-inherit info-bg ml-10 mr-10 ml-10">
                            <span className="badge badge-sm primary br-round top right">
                                2
                            </span>
                        </i>
                        <i className="fab fa-instagram-square icon icon-lg bg-inherit warning-bg mr-10 ml-10">
                            <span className="badge badge-sm bg-inherit p-0 p-2 br-round top right">
                                <i className="fas fa-laugh-beam icon warning-bg bg-light br-round p-2"></i>
                            </span>
                        </i>
                        <i className="fab fa-facebook-square icon icon-lg bg-inherit success-bg mr-7 ml-10">
                            <span className="badge badge-sm bg-inherit p-0 p-2 br-round top right">
                                <i className="fas fa-laugh-beam icon warning-bg bg-light br-round p-2"></i>
                            </span>
                        </i>
                        <i className="fab fa-linkedin icon icon-lg bg-inherit secondary-bg ml-10">
                            <span className="badge badge-sm primary br-round top right">
                                2
                            </span>
                        </i>
                    </>
                ),
                cardText:
                    "Copy this snippet and paste it in your html page's body tag:",
                codeSnippet: `
<i class="fab fa-instagram-square icon icon-lg bg-inherit danger-bg mr-10">
    <span class="badge badge-sm bg-inherit p-0 p-2 br-round top right">
        <i class="fas fa-laugh-beam icon warning-bg bg-light br-round p-2"></i>
    </span>
</i>

<i class="fab fa-facebook-square icon icon-lg bg-inherit primary-bg mr-7 ml-10">
    <span class="badge badge-sm bg-inherit p-0 p-2 br-round top right">
        <i class="fas fa-laugh-beam icon warning-bg bg-light br-round p-2"></i>
    </span>
</i>

<i class="fab fa-linkedin icon icon-lg bg-inherit info-bg ml-10 mr-10 ml-10">
    <span class="badge badge-sm primary br-round top right">
        2
    </span>
</i>

<i class="fab fa-instagram-square icon icon-lg bg-inherit warning-bg mr-10 ml-10">
    <span class="badge badge-sm bg-inherit p-0 p-2 br-round top right">
        <i class="fas fa-laugh-beam icon warning-bg bg-light br-round p-2"></i>
    </span>
</i>

<i class="fab fa-facebook-square icon icon-lg bg-inherit success-bg mr-7 ml-10">
    <span class="badge badge-sm bg-inherit p-0 p-2 br-round top right">
        <i class="fas fa-laugh-beam icon warning-bg bg-light br-round p-2"></i>
    </span>
</i>

<i class="fab fa-linkedin icon icon-lg bg-inherit secondary-bg ml-10">
    <span class="badge badge-sm primary br-round top right">
        2
    </span>
</i>
            `,
            },
        ],

        buttons: [
            {
                id: uuid(),
                subTitle: "Buttons small",
                codeOutput: (
                    <>
                        <button className="btn btn-sm danger btn-bounce br-50">
                            Button
                        </button>
                        <button className="btn btn-sm success btn-vibrate br-50 ml-9">
                            Button
                        </button>
                        <button className="btn btn-sm primary btn-stretch br-50 ml-9">
                            Button
                        </button>
                    </>
                ),
                cardText:
                    "Copy this snippet and paste it in your html page's body tag:",
                codeSnippet: `
<button class="btn btn-sm danger btn-bounce br-50">Button</button>

<button class="btn btn-sm success btn-vibrate br-50">Button</button>

<button class="btn btn-sm primary btn-stretch br-50">Button</button>
            `,
            },
            {
                id: uuid(),
                subTitle: "Buttons medium",
                codeOutput: (
                    <>
                        <button className="btn btn-md danger btn-bounce br-50">
                            Button
                        </button>
                        <button className="btn btn-md success btn-vibrate br-50 ml-9">
                            Button
                        </button>
                        <button className="btn btn-md primary btn-stretch br-50 ml-9">
                            Button
                        </button>
                    </>
                ),
                cardText:
                    "Copy this snippet and paste it in your html page's body tag:",
                codeSnippet: `
<button class="btn btn-md danger btn-bounce br-50">Button</button>

<button class="btn btn-md success btn-vibrate br-50">Button</button>

<button class="btn btn-md primary btn-stretch br-50">Button</button>
            `,
            },
            {
                id: uuid(),
                subTitle: "Buttons large",
                codeOutput: (
                    <>
                        <button className="btn btn-lg danger btn-bounce br-50">
                            Button
                        </button>
                        <button className="btn btn-lg success btn-vibrate br-10 ml-9">
                            Button
                        </button>
                        <button className="btn btn-lg primary btn-stretch br-8 ml-9">
                            Button
                        </button>
                        <button className="btn btn-lg dark btn-stretch br-5 ml-9">
                            Button
                        </button>
                        <button className="btn btn-lg secondary btn-stretch br-2 ml-9">
                            Button
                        </button>
                    </>
                ),
                cardText:
                    "Copy this snippet and paste it in your html page's body tag:",
                codeSnippet: `
<button class="btn btn-lg danger btn-bounce br-50">Button</button>

<button class="btn btn-lg success btn-vibrate br-10">Button</button>

<button class="btn btn-lg primary btn-stretch br-8">Button</button>

<button class="btn btn-lg dark btn-stretch br-5">Button</button>

<button class="btn btn-lg secondary btn-stretch br-2">Button</button>
            `,
            },

            {
                id: uuid(),
                subTitle: "Buttons block",
                codeOutput: (
                    <>
                        <button className="btn btn-block success pt-10 pb-10 br-50 fs-2 btn-stretch">
                            Button
                        </button>
                    </>
                ),
                cardText:
                    "Copy this snippet and paste it in your html page's body tag:",
                codeSnippet: `
<button class="btn btn-block success pt-10 pb-10 br-50 fs-2 btn-stretch">Button</button>
            `,
            },
            {
                id: uuid(),
                subTitle: "Floating buttons",
                codeOutput: (
                    <>
                        <button className="btn-float gradient-animate bottom right icon-btn light br-round b-solid btn-bounce fix-floating-btn">
                            <i className="fas fa-laugh-beam icon p-8 warning-bg br-50 fs-2 m-4"></i>
                        </button>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <button className="btn-float bottom left icon-btn light br-round b-solid btn-bounce fix-floating-btn">
                            <i className="fas fa-laugh-beam icon warning-bg p-8 br-50 fs-2 m-1"></i>
                        </button>
                    </>
                ),
                cardText:
                    "Copy this snippet and paste it in your html page's body tag:",
                codeSnippet: `
<button class="btn-float gradient-animate bottom right icon-btn light br-round b-solid btn-bounce">
    <i class="fas fa-laugh-beam icon p-8 warning-bg br-50 fs-2 m-4"></i>
</button>
<button class="btn-float bottom left icon-btn light br-round b-solid btn-bounce">
    <i class="fas fa-laugh-beam icon warning-bg p-8 br-50 fs-2 m-1"></i>
</button>
            `,
            },
        ],

        links: [
            {
                id: uuid(),
                subTitle: "Links",
                codeOutput: (
                    <>
                        <a class="danger-bg bg-inherit fs-05">click here</a>
                        &nbsp;&nbsp;
                        <a class="primary-bg bg-inherit fs-1">click here</a>
                        &nbsp;&nbsp;
                        <a class="success-bg bg-inherit fs-15">click here</a>
                        &nbsp;&nbsp;
                        <a class="secondary-bg bg-inherit fs-2">click here</a>
                    </>
                ),
                cardText:
                    "Copy this snippet and paste it in your html page's body tag:",
                codeSnippet: `
<a class="danger-bg bg-inherit fs-05">click here</a>
<a class="primary-bg bg-inherit fs-1">click here</a>
<a class="success-bg bg-inherit fs-15">click here</a>
<a class="secondary-bg bg-inherit fs-2">click here</a>
            `,
            },

            {
                id: uuid(),
                subTitle: "Links v0.0.2",
                codeOutput: (
                    <>
                        <a class="danger-bg bg-inherit fs-08">click here</a>
                        &nbsp;&nbsp;
                        <a class="primary-bg bg-inherit fs-12">click here</a>
                        &nbsp;&nbsp;
                        <a class="success-bg bg-inherit fs-16">click here</a>
                        &nbsp;&nbsp;
                        <a class="secondary-bg bg-inherit fs-2">click here</a>
                    </>
                ),
                cardText:
                    "Copy this snippet and paste it in your html page's body tag:",
                codeSnippet: `
<a class="danger-bg bg-inherit fs-08">click here</a>
<a class="primary-bg bg-inherit fs-12">click here</a>
<a class="success-bg bg-inherit fs-16">click here</a>
<a class="secondary-bg bg-inherit fs-2">click here</a>
            `,
            },
        ],
    };

    // returning

    return data;
}
