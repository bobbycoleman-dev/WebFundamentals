
// RIOT WALK
// R: read/restate
// I: input
// O: output
// T: talk
// WALK: walk through the solution

var numbers = [3, 4, -2, 7, 16, -8, 0];

function countPositivesInArray (arrParam) {
    var countPositives = 0;
    for(i=0; i<numbers.length; i++) {
        if (arrParam[i] > 0) {
            countPositives++
        }
    }
    console.log("there are " + countPositives + " positive values");
}

countPositivesInArray(numbers)   
