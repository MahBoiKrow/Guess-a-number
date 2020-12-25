var numb = Math.floor(Math.random() * 101);
alert("Guess the number!");
var input;
var win = false;
guessnumber();

function verifynumber(input) {
    if (input == numb) {
        alert("You Win!");
    }
    else if (input < numb) {
        alert("Higher");
        guessnumber();
    }
    else if (input > numb) {
        alert("Lower");
        guessnumber();
    }
}
function guessnumber() {
    input = prompt("Choose a number : ");
    verifynumber(input);
}