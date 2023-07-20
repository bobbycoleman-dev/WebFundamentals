async function getCoder() {
    var response = await fetch("https://api.github.com/users/bobbycoleman-dev");

    if (!response.ok) {
        console.log("PROBLEM FETCHING DATA");
    } else {
        var coderData = await response.json();
        console.log(coderData);
    }
}

getCoder();
