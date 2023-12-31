var theDojo = [
    [1, 0, 1, 1, 1, 0, 4, 0, 8, 0],
    [3, 1, 0, 7, 0, 0, 6, 0, 8, 8],
    [5, 0, 7, 0, 3, 6, 6, 6, 0, 0],
    [2, 3, 0, 9, 0, 0, 6, 0, 8, 0],
    [6, 0, 3, 3, 0, 2, 0, 3, 0, 4],
    [0, 0, 3, 3, 0, 0, 2, 2, 3, 0],
    [0, 0, 0, 0, 5, 0, 1, 2, 0, 6],
    [2, 2, 2, 2, 0, 7, 1, 1, 1, 0],
    [5, 2, 0, 2, 0, 0, 0, 1, 1, 2],
    [9, 2, 2, 2, 0, 7, 0, 1, 1, 0]
];
var dojoDiv = document.querySelector("#the-dojo");

// Creates the rows of buttons for this game
function render(theDojo) {
    var result = "";
    for (var i = 0; i < theDojo.length; i++) {
        for (var j = 0; j < theDojo[i].length; j++) {
            result += `<button class="tatami" onclick="howMany(${i}, ${j}, this)"></button>`;
        }
    }
    return result;
}

// TODO - Make this function tell us how many ninjas are hiding
//        under the adjacent (all sides and corners) squares.
//        Use i and j as the indexes to check theDojo.
function howMany(i, j, element) {
    console.log(i, j);

    var sum = 0;
    for (var k = i - 1; k <= i + 1; k++) {
        for (var l = j - 1; l <= j + 1; l++) {
            sum += theDojo[k][l];
        }
    }
    sum -= theDojo[i][j];
    console.log(sum);

    // var sum = 0;
    // var ul = theDojo[i - 1][j - 1];
    // var um = theDojo[i - 1][j];
    // var ur = theDojo[i - 1][j + 1];
    // var rm = theDojo[i][j + 1];
    // var br = theDojo[i + 1][j + 1];
    // var bm = theDojo[i + 1][j];
    // var bl = theDojo[i + 1][j - 1];
    // var lm = theDojo[i][j - 1];

    // if (i == 0 && j == 0) {
    //     sum = rm + br + bm;
    // } else if (i == 9 && j == 9) {
    //     sum = um + ur + rm;
    // } else if (i == 0) {
    //     sum = um + ur + rm + br + bm;
    // } else if (j == 0) {
    //     sum = rm + br + bm + bl + lm;
    // } else if (i == 9) {
    //     sum = lm + ul + um + ur + rm;
    // } else if (j == 9) {
    //     sum = bm + bl + lm + ul + um;
    // } else {
    //     sum = ul + um + ur + rm + br + bm + bl + lm;
    // }
    // console.log(sum);
    // alert("TODO - determine how many ninjas are hiding in adjacent squares");
}

// BONUS CHALLENGES
// 1. draw the number onto the button instead of alerting it
// 2. at the start randomly place 10 ninjas into theDojo with at most 1 on each spot
// 3. if you click on a ninja you must restart the game
//    dojoDiv.innerHTML = `<button onclick="location.reload()">restart</button>`;

// start the game
// message to greet a user of the game
var style = "color:cyan;font-size:1.5rem;font-weight:bold;";
// console.log("%c" + "IF YOU ARE A DOJO STUDENT...", style);
// console.log("%c" + "GOOD LUCK THIS IS A CHALLENGE!", style);
// shows the dojo for debugging purposes
// console.table(theDojo);
// adds the rows of buttons into <div id="the-dojo"></div>
dojoDiv.innerHTML = render(theDojo);
