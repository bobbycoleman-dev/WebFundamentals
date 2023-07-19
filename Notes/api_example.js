async function getCoder() {
    var response = await fetch("https://api.github.com/users/bobbycoleman-dev");
    var coderData = await response.json();
    var avatar = coderData.avatar_url;
    console.log(coderData);
}

getCoder();
