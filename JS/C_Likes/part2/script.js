var neilCount = 9;
var nicholeCount = 12;
var jimCount = 9;

function addNeilLike() {
    var neilLikes = document.querySelector(".neilLikes");
    neilCount++;
    neilLikes.innerText = neilCount + " like(s)";
}
function addNicholeLike() {
    var nicholeLikes = document.querySelector(".nicholeLikes");
    nicholeCount++;
    nicholeLikes.innerText = nicholeCount + " like(s)";
}
function addJimLike() {
    var jimLikes = document.querySelector(".jimLikes");
    jimCount++;
    jimLikes.innerText = jimCount + " like(s)";
}
