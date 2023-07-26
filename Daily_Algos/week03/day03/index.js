const arr1 = ["a", "b", "c", "d"];
const idx1 = 1;
const expected1 = "d";

const arr2 = ["a", "b", "c", "d"];
const idx2 = 2;
const expected2 = "c";

const arr3 = ["a", "b", "c", "d"];
const idx3 = 0;
const expected3 = null;

const arr4 = ["a", "b", "c", "d"];
const idx4 = -1;
const expected4 = null;

const arr5 = [];
const idx5 = 2;
const expected5 = null;

function nthLast(items, nthToLast) {
	var output = "";
	if (items.length > 0) {
		for (i = items.length - 1; i >= 0; i--) {
			if (items[items.length - nthToLast] === undefined) {
				output = null;
			} else {
				output = items[items.length - nthToLast];
			}
		}
	} else {
		output = null;
	}
	console.log(output);
}

function nthLastNoLoop(items, nthToLast) {
	var output = "";
	if (items.length > 0) {
		if (items[items.length - nthToLast] === undefined) {
			output = null;
		} else {
			output = items[items.length - nthToLast];
		}
	} else {
		output = null;
	}
	console.log(output);
}

nthLastNoLoop(arr1, idx1);
nthLastNoLoop(arr2, idx2);
nthLastNoLoop(arr3, idx3);
nthLastNoLoop(arr4, idx4);
nthLastNoLoop(arr5, idx5);
