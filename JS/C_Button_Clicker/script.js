// TODO: Change the text to say "Logout" when clicking the "Login" button
function login(element) {
    var login = false
    if (element.innerText == "Login") {
        login = true
        element.innerText = "Log Out"
    } else {
        login = false
        element.innerText = "Login"
    }
}

// TODO: Remove the Add Definition button when it is clicked
function removeButton(element) {
    element.remove()
}

// TODO: Alert "Ninja was liked" when clicking a like button. Done in HTML
