// TODO: Change the text to say "Logout" when clicking the "Login" button
function login(element) {
    var login = false;
    if (element.innerText == "Login") {
        login = true;
        element.innerText = "Log Out";
    } else {
        login = false;
        element.innerText = "Login";
    }
}

// TODO: Remove the Add Definition button when it is clicked
function removeButton(element) {
    element.remove();
}

// TODO: Alert "Ninja was liked" when clicking a like button. Done in HTML
var likes1 = document.querySelector(".likes1");
var likes2 = document.querySelector(".likes2");
var count1 = 13;
var count2 = 37;

function increaseLikes1() {
    count1++;
    likes1.innerText = count1 + " likes";
}
function increaseLikes2() {
    count2++;
    likes2.innerText = count2 + " likes";
}
