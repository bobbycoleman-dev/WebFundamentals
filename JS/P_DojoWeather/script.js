// TODO: Remove cookie element from the page when clicking accept button
function acceptCookie() {
    var cookie = document.querySelector(".cookie");
    cookie.remove();
}

// TODO: Convert °F to °C when changing the select element
// convert celsius to fahrenheit
function convertToFer(cel) {
    var fer = Math.round(cel * (9 / 5) + 32);
    return fer;
}

// convert fahrenheit to celsius
function convertToCel(fer) {
    var cel = Math.round((fer - 32) * (5 / 9));
    return cel;
}

// Take in each day's max and min temp and either convert to celsius or fahrenheit based on selected element value
function changeDegreeType(element) {
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
