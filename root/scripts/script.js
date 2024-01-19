let button = document.getElementById("button");
let output = document.getElementById("output");

document.addEventListener("DOMContentLoaded", function() {
    button.addEventListener("click", function() {
        output.value = "Hello World";
    })
})