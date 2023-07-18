function acceptCookie() {
    var cookie = document.querySelector(".cookie");
    cookie.remove();
}

function convertToFer(cel) {
    var fer = Math.round(cel * (9 / 5) + 32);
    return fer;
}

function convertToCel(fer) {
    var cel = Math.round((fer - 32) * (5 / 9));
    return cel;
}

function changeToFer(element) {
    if (element.value == "fer") {
        // Today
        var max = document.getElementById("today-max");
        max.innerText = convertToFer(max.innerText);

        var min = document.getElementById("today-min");
        min.innerText = convertToFer(min.innerText);

        // Tomorrow
        var max = document.getElementById("tom-max");
        max.innerText = convertToFer(max.innerText);

        var min = document.getElementById("tom-min");
        min.innerText = convertToFer(min.innerText);

        // Friday
        var max = document.getElementById("fri-max");
        max.innerText = convertToFer(max.innerText);

        var min = document.getElementById("fri-min");
        min.innerText = convertToFer(min.innerText);

        // Saturday
        var max = document.getElementById("sat-max");
        max.innerText = convertToFer(max.innerText);

        var min = document.getElementById("sat-min");
        min.innerText = convertToFer(min.innerText);
    }

    if (element.value == "cel") {
        // Today
        var max = document.getElementById("today-max");
        max.innerText = convertToCel(max.innerText);

        var min = document.getElementById("today-min");
        min.innerText = convertToCel(min.innerText);

        // Tomorrow
        var max = document.getElementById("tom-max");
        max.innerText = convertToCel(max.innerText);

        var min = document.getElementById("tom-min");
        min.innerText = convertToCel(min.innerText);

        // Friday
        var max = document.getElementById("fri-max");
        max.innerText = convertToCel(max.innerText);

        var min = document.getElementById("fri-min");
        min.innerText = convertToCel(min.innerText);

        // Saturday
        var max = document.getElementById("sat-max");
        max.innerText = convertToCel(max.innerText);

        var min = document.getElementById("sat-min");
        min.innerText = convertToCel(min.innerText);
    }
}
