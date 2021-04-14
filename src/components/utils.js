export function highLightKeywords(codeSnippet) {
    // console.log("\n\n\n\n\n\n\n\n\n\n");
    codeSnippet = codeSnippet.replace(/</g, "&lt;");
    codeSnippet = codeSnippet.replace(/>/g, "&gt;");
    codeSnippet = codeSnippet.replace(/'/g, '"');
    // class-tag-highlight
    codeSnippet = codeSnippet.replace(
        / class="/g,
        " <output class='class-tag-color'>class</output>=\""
    );

    // style-tag-highlight
    codeSnippet = codeSnippet.replace(
        / style="/g,
        " <output class='style-tag-color'>style</output>=\""
    );
    // type-tag-highlight
    codeSnippet = codeSnippet.replace(
        / type="/g,
        " <output class='div-tag-color'>type</output>=\""
    );
    // name-tag-highlight
    codeSnippet = codeSnippet.replace(
        / name="/g,
        " <output class='div-tag-color'>name</output>=\""
    );
    // checked-tag-highlight
    codeSnippet = codeSnippet.replace(
        / checked="/g,
        " <output class='div-tag-color'>checked</output>=\""
    );
    // onclick-tag-highlight
    codeSnippet = codeSnippet.replace(
        / onclick="/g,
        " <output class='event-attr-color'>onclick</output>=\""
    );
    let str_list = codeSnippet.match(/(?:"[^"]*"|^[^"]*$)/g);
    let startIndex = 0;
    str_list.map((s) => {
        const getIndex = codeSnippet.indexOf(s, startIndex),
            LEN = s.length;
        // console.log("check", codeSnippet.substring(10, 10));
        // console.log(getIndex, getIndex + LEN);
        codeSnippet =
            codeSnippet.substring(0, getIndex) +
            '<output class="string-color">' +
            codeSnippet.substring(getIndex, getIndex + LEN) +
            "</output> " +
            codeSnippet.substring(getIndex + LEN);
        // // codeSnippet = codeSnippet.replace(s, " <output className='string-color'>"+s+"</output>");

        startIndex = getIndex + 35 + LEN;
        //   console.log("here",codeSnippet);

        //   console.log("---------------------------------------");
        return -1;
    });
    // link-tag-highlight
    codeSnippet = codeSnippet.replace(
        /&lt;link/g,
        "&lt;<output class='link-tag-color'>link</output>"
    );
    // span tag highlight
    codeSnippet = codeSnippet.replace(
        /&lt;span/g,
        "&lt;<output class='span-tag-color'>span</output>"
    );
    codeSnippet = codeSnippet.replace(
        /\/span/g,
        "/<output class='span-tag-color'>span</output>"
    );
    // p tag highlight
    codeSnippet = codeSnippet.replace(
        /&lt;p/g,
        "&lt;<output class='p-tag-color'>p</output>"
    );
    codeSnippet = codeSnippet.replace(
        /\/p&gt;/g,
        "/<output class='p-tag-color'>p</output>&gt;"
    );
    // rel-tag-highlight
    codeSnippet = codeSnippet.replace(
        / rel/g,
        " <output class='rel-tag-color'>rel</output>"
    );
    // div-tag-highlight
    codeSnippet = codeSnippet.replace(
        /&lt;div/g,
        " &lt;<output class='div-tag-color'>div</output>"
    );
    // div-tag-highlight
    codeSnippet = codeSnippet.replace(
        /\/div/g,
        " /<output class='div-tag-color'>div</output>"
    );


    // nav-tag-highlight
    codeSnippet = codeSnippet.replace(
        /&lt;nav/g,
        " &lt;<output class='nav-tag-color'>nav</output>"
    );
    // nav-tag-highlight
    codeSnippet = codeSnippet.replace(
        /\/nav/g,
        " /<output class='nav-tag-color'>nav</output>"
    );
    // input-tag-highlight
    codeSnippet = codeSnippet.replace(
        /&lt;input/g,
        " &lt;<output class='p-tag-color'>input</output>"
    );
    // i-tag-highlight
    codeSnippet = codeSnippet.replace(
        /&lt;i/g,
        " &lt;<output class='i-tag-color'>i</output>"
    );
    // i-tag-highlight
    codeSnippet = codeSnippet.replace(
        /\/i&gt;/g,
        " /<output class='i-tag-color'>i</output>&gt;"
    );
    // small-tag-highlight
    codeSnippet = codeSnippet.replace(
        /&lt;small/g,
        " &lt;<output class='i-tag-color'>small</output>"
    );
    // small-tag-highlight
    codeSnippet = codeSnippet.replace(
        /\/small&gt;/g,
        " /<output class='i-tag-color'>small</output>&gt;"
    );

    // label-tag-highlight
    codeSnippet = codeSnippet.replace(
        /&lt;label/g,
        " &lt;<output class='ul-tag-color'>label</output>"
    );
    // label-tag-highlight
    codeSnippet = codeSnippet.replace(
        /\/label&gt;/g,
        " /<output class='ul-tag-color'>label</output>&gt;"
    );

    // ul-tag-highlight
    codeSnippet = codeSnippet.replace(
        /&lt;ul/g,
        " &lt;<output class='ul-tag-color'>ul</output>"
    );
    // ul-tag-highlight
    codeSnippet = codeSnippet.replace(
        /\/ul/g,
        " /<output class='ul-tag-color'>ul</output>"
    );
    // li-tag-highlight
    codeSnippet = codeSnippet.replace(
        /&lt;li/g,
        " &lt;<output class='li-tag-color'>li</output>"
    );
    // li-tag-highlight
    codeSnippet = codeSnippet.replace(
        /\/li/g,
        " /<output class='li-tag-color'>li</output>"
    );

    // br-tag-highlight
    codeSnippet = codeSnippet.replace(
        /&lt;br/g,
        " &lt;<output class='br-tag-color'>br</output>"
    );

    // hr-tag-highlight
    codeSnippet = codeSnippet.replace(
        /&lt;hr/g,
        " &lt;<output class='hr-tag-color'>hr</output>"
    );

     // button-tag-highlight
     codeSnippet = codeSnippet.replace(
        /&lt;button/g,
        " &lt;<output class='button-tag-color'>button</output>"
    );
    // button-tag-highlight
    codeSnippet = codeSnippet.replace(
        /\/button/g,
        " /<output class='button-tag-color'>button</output>"
    );

    // a-tag-highlight
    codeSnippet = codeSnippet.replace(
        /&lt;a/g,
        " &lt;<output class='button-tag-color'>a</output>"
    );
    // a-tag-highlight
    codeSnippet = codeSnippet.replace(
        /\/a&gt;/g,
        " /<output class='a-tag-color'>a</output>&gt;"
    );


    // href tag color
    codeSnippet = codeSnippet.replace(
        / href/g,
        " <output class='href-tag-color'>href</output>"
    );
    return codeSnippet;
}


export function capitalize(stringPiece){
    return stringPiece.charAt(0).toUpperCase()+stringPiece.substring(1);
}