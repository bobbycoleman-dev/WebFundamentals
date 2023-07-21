/*
1. Have JS display the world of brick/coin/etc
2. Have Pacman move up and down
*/

var world = [
    [
        2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
        2, 2, 2, 2,
    ],
    [
        2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 2,
    ],
    [
        2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2,
        2, 2, 1, 2,
    ],
    [
        2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2,
        2, 2, 1, 2,
    ],
    [
        2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2,
        2, 2, 1, 2,
    ],
    [
        2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 2,
    ],
    [
        2, 1, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2,
        2, 2, 1, 2,
    ],
    [
        2, 1, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2,
        2, 2, 1, 2,
    ],
    [
        2, 1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 2, 2, 1, 1, 1,
        1, 1, 1, 2,
    ],
    [
        2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 0, 2, 2, 0, 2, 2, 2, 2, 2, 1, 2, 2,
        2, 2, 2, 2,
    ],
    [
        0, 0, 0, 0, 0, 2, 1, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 1, 2, 2,
        0, 0, 0, 0,
    ],
    [
        0, 0, 0, 0, 0, 2, 1, 2, 2, 0, 2, 2, 2, 0, 0, 2, 2, 2, 0, 2, 2, 1, 2, 2,
        0, 0, 0, 0,
    ],
    [
        2, 2, 2, 2, 2, 2, 1, 2, 2, 0, 2, 0, 0, 0, 0, 0, 0, 2, 0, 2, 2, 1, 2, 2,
        2, 2, 2, 2,
    ],
    [
        0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 1, 0, 0,
        0, 0, 0, 0,
    ],
    [
        2, 2, 2, 2, 2, 2, 1, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 1, 2, 2,
        2, 2, 2, 2,
    ],
    [
        0, 0, 0, 0, 0, 2, 1, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 1, 2, 2,
        0, 0, 0, 0,
    ],
    [
        0, 0, 0, 0, 0, 2, 1, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 1, 2, 2,
        0, 0, 0, 0,
    ],
    [
        2, 2, 2, 2, 2, 2, 1, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 1, 2, 2,
        2, 2, 2, 2,
    ],
    [
        2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 2,
    ],
    [
        2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2,
        2, 2, 1, 2,
    ],
    [
        2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2,
        2, 2, 1, 2,
    ],
    [
        2, 1, 1, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2,
        1, 1, 1, 2,
    ],
    [
        2, 2, 2, 1, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2,
        1, 2, 2, 2,
    ],
    [
        2, 2, 2, 1, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2,
        1, 2, 2, 2,
    ],
    [
        2, 1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 2, 2, 1, 1, 1,
        1, 1, 1, 2,
    ],
    [
        2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2,
        2, 2, 1, 2,
    ],
    [
        2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2,
        2, 2, 1, 2,
    ],
    [
        2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 2,
    ],
    [
        2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
        2, 2, 2, 2,
    ],
];

var score = 0;

var pacman = {
    x: 1,
    y: 13,
};

function displayWorld() {
    var output = "";

    for (var i = 0; i < world.length; i++) {
        output += "<div class='row'>";
        for (var j = 0; j < world[i].length; j++) {
            if (world[i][j] == 2) {
                output += "<div class='brick'></div>";
            } else if (world[i][j] == 1) {
                output += "<div class='coin'></div>";
            } else if (world[i][j] == 0) {
                output += "<div class='empty'></div>";
            } else if (world[i][j] == 3) {
                output += "<div id='cherry'></div>";
            }
        }
        output += "</div>";
    }
    // console.log(output);
    document.getElementById("world").innerHTML = output;
}

function displayPacman() {
    document.getElementById("pacman").style.top = pacman.y * 20 + "px";
    document.getElementById("pacman").style.left = pacman.x * 20 + "px";
}

function displayCherry() {
    var pos1 = false;
    var pos2 = false;
    var pos3 = false;

    while (pos3 == false) {
        var positionY = Math.floor(Math.random() * world.length);
        var positionX = Math.floor(Math.random() * world[positionY].length);
        if (world[positionY][positionX] == 1) {
            pos1 = true;
            world[positionY][positionX] = 3;
            while (pos2 == false) {
                var positionY = Math.floor(Math.random() * world.length);
                var positionX = Math.floor(
                    Math.random() * world[positionY].length
                );
                if (world[positionY][positionX] == 1) {
                    pos2 = true;
                    world[positionY][positionX] = 3;
                    while (pos3 == false) {
                        var positionY = Math.floor(
                            Math.random() * world.length
                        );
                        var positionX = Math.floor(
                            Math.random() * world[positionY].length
                        );
                        if (world[positionY][positionX] == 1) {
                            pos3 = true;
                            world[positionY][positionX] = 3;
                        }
                    }
                }
            }
        }
    }

    if ((pos1, pos2, pos3 == true)) {
        displayWorld();
        pos1 = false;
        pos2 = false;
        pos3 = false;
    }
}

function displayScore() {
    document.getElementById("score").innerHTML = score;
}

displayCherry();
displayWorld();
displayPacman();
displayScore();

var cherryCount = 0;

document.onkeydown = function (e) {
    var output = "";

    if (e.key == "ArrowRight" && world[pacman.y][pacman.x + 1] != 2) {
        pacman.x++;
    } else if (e.key == "ArrowLeft" && world[pacman.y][pacman.x - 1] != 2) {
        pacman.x--;
    } else if (e.key == "ArrowUp" && world[pacman.y - 1][pacman.x] != 2) {
        pacman.y--;
    } else if (e.key == "ArrowDown" && world[pacman.y + 1][pacman.x] != 2) {
        pacman.y++;
    }

    if (world[pacman.y][pacman.x] == 1) {
        world[pacman.y][pacman.x] = 0;
        score += 10;
        displayScore();
        displayWorld();
    }

    if (world[pacman.y][pacman.x] == 3) {
        world[pacman.y][pacman.x] = 0;
        score += 50;
        cherryCount++;
        if (cherryCount == 3) {
            output +=
                "<div id='cherry'></div><div id='cherry'></div><div id='cherry'></div>";
        } else if (cherryCount == 2) {
            output += "<div id='cherry'></div><div id='cherry'></div>";
        } else {
            output += "<div id='cherry'></div>";
        }

        document.getElementById("cherry-count").innerHTML = output;
        displayScore();
        displayWorld();
    }

    // console.log(e.key);
    displayPacman();
};
