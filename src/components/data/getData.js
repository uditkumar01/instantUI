import uuid from "react-uuid";
export function getData() {
    const data = {
        navbars: [
            {
                id: uuid(),
                subTitle: "NavBar v1",
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
                    "Copy this snippet and paste it in you html page's body tag :",
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
                subTitle: "NavBar v2",
                codeOutput: (
                    <>
                        <nav className="navbar nav-iv primary mid-animation">
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
                    "Copy this snippet and paste it in you html page's body tag :",
                codeSnippet: `
<nav class="navbar nav-iv primary mid-animation">
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
                subTitle: "NavBar v3",
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
                    "Copy this snippet and paste it in you html page's body tag :",
                codeSnippet: `
<nav class="navbar nav-iv primary mid-animation">
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
                subTitle: "NavBar v4",
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
                                        <i className="fas fa-search icon"></i>
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
                    "Copy this snippet and paste it in you html page's body tag :",
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
                <i class="fas fa-search icon"></i>
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
        ],
        cards: [
            {
                id: uuid(),
                subTitle: "Card v1",
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
                    "Copy this snippet and paste it in you html page's body tag :",
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
                subTitle: "Card v2",
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
                    "Copy this snippet and paste it in you html page's body tag :",
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
                subTitle: "Card v3",
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
                    "Copy this snippet and paste it in you html page's body tag :",
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
                subTitle: "Card v4",
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
                    "Copy this snippet and paste it in you html page's body tag :",
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
                subTitle: "Card v5",
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
                    "Copy this snippet and paste it in you html page's body tag :",
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
                subTitle: "Card v6",
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
                    "Copy this snippet and paste it in you html page's body tag :",
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
                subTitle: "Card v7",
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
                    "Copy this snippet and paste it in you html page's body tag :",
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
                subTitle: "Card v8",
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
                    "Copy this snippet and paste it in you html page's body tag :",
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
                subTitle: "Alert v1",
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
                    "Copy this snippet and paste it in you html page's body tag :",
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
                subTitle: "Alert v2",
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
                    "Copy this snippet and paste it in you html page's body tag :",
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
                subTitle: "Alert v3",
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
                    "Copy this snippet and paste it in you html page's body tag :",
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
                subTitle: "Alert v4",
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
                    "Copy this snippet and paste it in you html page's body tag :",
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
                subTitle: "Alert v5",
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
                    "Copy this snippet and paste it in you html page's body tag :",
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
                subTitle: "Alert v6",
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
                    "Copy this snippet and paste it in you html page's body tag :",
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
                subTitle: "Alert v7",
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
                    "Copy this snippet and paste it in you html page's body tag :",
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
                subTitle: "Alert v8",
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
                    "Copy this snippet and paste it in you html page's body tag :",
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
                subTitle: "Field v1",
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
                    "Copy this snippet and paste it in you html page's body tag :",
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
                subTitle: "Field v2",
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
                    "Copy this snippet and paste it in you html page's body tag :",
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
                subTitle: "Field v3",
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
                    "Copy this snippet and paste it in you html page's body tag :",
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
                subTitle: "Field v4",
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
                    "Copy this snippet and paste it in you html page's body tag :",
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
                subTitle: "Field v5",
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
                    "Copy this snippet and paste it in you html page's body tag :",
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
                subTitle: "Field v6",
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
                            <span
                                title="1-3 words at max"
                                className="fas fa-info info-bg bg-inherit icon"
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
                    "Copy this snippet and paste it in you html page's body tag :",
                codeSnippet: `
<div class="form-field primary-bg bg-transparent">
    <input class="input-field" type="text" required />
    <span
        title="No Issues Found"
        class="fas fa-check success-bg bg-inherit icon"
    ></span>
    <span
        title="1-3 words at max"
        class="fas fa-info info-bg bg-inherit icon"
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
                subTitle: "Field v7",
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
                            <span
                                title="1-3 words at max"
                                className="fas fa-info info-bg bg-inherit icon"
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
                    "Copy this snippet and paste it in you html page's body tag :",
                codeSnippet: `
<div class="form-field warning-bg bg-transparent">
    <input class="input-field" type="text" required />
    <span
        title="No Issues Found"
        class="fas fa-times danger-bg bg-inherit icon"
    ></span>
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
                subTitle: "Field v8",
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
                    "Copy this snippet and paste it in you html page's body tag :",
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
                subTitle: "Field v9",
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
                    "Copy this snippet and paste it in you html page's body tag :",
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
                subTitle: "Field v9",
                codeOutput: <></>,
                cardText:
                    "Copy this snippet and paste it in you html page's body tag :",
                codeSnippet: `
        `,
            },
        ],
    };

    // returning

    return data;
}
