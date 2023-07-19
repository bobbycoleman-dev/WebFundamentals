// TODO: Change profile name when clicking "edit profile"

function changeUserName() {
    var userName = document.querySelector(".user-name");
    userName.innerText = "The Bearded Coder";
}

async function getCoder() {
    var response = await fetch("https://api.github.com/users/bobbycoleman-dev");
    var coderData = await response.json();
    var avatar = coderData.avatar_url;
    var gitName = coderData.login;

    var profilePic = document.querySelector("#profile-pic");
    var userName = document.querySelector(".user-name");
    profilePic.src = avatar;
    userName.innerText = gitName;
}

// TODO: Accept/Reject the user request

var connectionRequestCount = 2;
var connectionRequests = document.querySelector(".connection-requests");

var connectionCount = 498;
var connectionTotal = document.querySelector(".connections-total");

var toddE = document.querySelector(".todd-e");
var philK = document.querySelector(".phil-k");

var connectionList = document.getElementById("connection-list");

function acceptConnectionTodd() {
    toddE.remove();
    createNewTodd(); // Personal Bonus

    connectionRequestCount--;
    connectionRequests.innerText = connectionRequestCount;

    connectionCount++;
    connectionTotal.innerText = connectionCount;
}

function rejectConnectionTodd() {
    toddE.remove();

    connectionRequestCount--;
    connectionRequests.innerText = connectionRequestCount;
}

function acceptConnectionPhil() {
    philK.remove();
    createNewPhil(); // Personal Bonus

    connectionRequestCount--;
    connectionRequests.innerText = connectionRequestCount;

    connectionCount++;
    connectionTotal.innerText = connectionCount;
}

function rejectConnectionPhil() {
    philK.remove();

    connectionRequestCount--;
    connectionRequests.innerText = connectionRequestCount;
}

// TODO: Personal Bonus
// Add users to connections list if request is accepted

function createNewTodd() {
    var tag = document.createElement("a");
    tag.classList.add("img-name");

    var img = document.createElement("img");
    img.src = "./images/todd-s.jpg";
    img.alt = "";

    var ptag = document.createElement("p");
    var textnode = document.createTextNode("Todd E (NEW)");
    ptag.appendChild(textnode);

    tag.appendChild(img);
    tag.appendChild(ptag);

    connectionList.appendChild(tag);
}

function createNewPhil() {
    var tag = document.createElement("a");
    tag.classList.add("img-name");

    var img = document.createElement("img");
    img.src = "./images/phil-s.jpg";
    img.alt = "";

    var ptag = document.createElement("p");
    var textnode = document.createTextNode("Phil K (NEW)");
    ptag.appendChild(textnode);

    tag.appendChild(img);
    tag.appendChild(ptag);

    connectionList.appendChild(tag);
}
