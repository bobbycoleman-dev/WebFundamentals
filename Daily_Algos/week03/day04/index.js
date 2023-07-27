const string1 = "hello";
const expected1 = "Hello";

const string2 = "";
const expected2 = "";

function capitalize(string) {
	var newString = "";
	newString += string[0].toUpperCase();
	for (var i = 1; i < string.length; i++) {
		newString += string[i];
	}
	return newString;
}

let strings1 = ["hello", "world"];

function capitalization(strings) {
	var newStrings = [];
	for (var i = 0; i < strings.length; i++) {
		newStrings.push(capitalize(strings[i]));
	}
	console.log(newStrings);
}

capitalization(strings1);
