var count = 3;

function addLike() {
    var likes = document.querySelector(".likes");
    count++;
    likes.innerText = count + " like(s)";
}
