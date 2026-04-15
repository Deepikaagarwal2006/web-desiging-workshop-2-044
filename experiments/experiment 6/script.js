// selecting elements 
let heading = document.getElementById("heading");
let para = document.getElementById("para");
let input = document.getElementById("inputText");


// change heading 
document.getElementaryById("chaneTextBtn").onclick = function() {
    heading.innerText = input.value;
    // innerText is used to change the text content of an element
};

// change event 

input.onchange = function() {
    console.log("Input changed to: " , input.value);
};

// Change Background Color
document.getElementById("bgColorBtn").addEventListener= ("click", function() {
    document.body.style.backgroundColor = "lightblue";
});


// Change Font Size
document.getElementById("fontSizeBtn").addEventListener= ("click", function() {
    document.body.style.fontSize = "50px";
});         

// Show/Hide Paragraph 

let isVisible = true;
document.getElementById("toggleParaBtn").onclick = function() {
    if (isVisible) {
        para.style.display = "none" ;
        isVisible = false;
    } else {
        para.style.display = "block" ;
        isVisible = true;
    } 
};

// Reset Page 

document.getElementaryById("resetBtn").onclick = function() {
    location.reload();
};


// Mouse Over Event 
heading.onmouseover = function() {
    heading.style.color = "blue";
};


