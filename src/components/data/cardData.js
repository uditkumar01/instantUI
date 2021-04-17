import { v4 as uuid } from "uuid";
export const cardData = [
    {
        id: uuid(),
        title: "How to Use",
        content: [
            {
                subTitle: "",
                cardText:
                    "Copy this snippet and paste it in you html page's head tag :",
                codeSnippet: `<link rel="stylesheet" href="https://instantui.netlify.app/assets/main.css"/>`,
            },
            {
                subTitle: "",
                cardText:
                    "Copy this snippet and paste it in your css file directly :",
                codeSnippet: `@import("https://instantui.netlify.app/assets/main.css")`,
            },
            {
                subTitle: "",
                cardText: "For using js copy snippet link :",
                codeSnippet: `<link rel="stylesheet" href="https://instantui.netlify.app/assets/main.js"/>`,
            },
        ],
        iconClass1: "fas fa-question-circle",
        iconClass2: "fas fa-question",
        footerText: "Read Docs for further info.",
    },
    {
        id: uuid(),
        title: "Need an example",
        content: [
            {
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
        <p class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, vero ipsam minus eius perspiciatis magni inventore optio minima modi magnam fugit quia eaque sint similique placeat vel! Commodi, voluptas debitis!</p>
    </div>
    <div class="card-footer">
        <p class="text text-muted fs-09">Last updated 3 mins ago</p>
    </div>
</div>
</div>
`,
            },
        ],
        iconClass1: "fas fa-lightbulb",
        iconClass2: "fas fa-question",
        footerText: "For further info read docs.",
    },
];
